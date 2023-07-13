import { toast } from "sonner";
import { useContext } from "react";
import FormClient from "../components/FormClient";
import ListProductByClient from "../components/ListProductByClient";
import { ProductContext } from "../context/ProductContext";

const CreateProduct = () => {
  const { products, setProducts } = useContext(ProductContext);
  const user_id = localStorage.getItem("user_id");

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = async (productId) => {
    const promise = () =>
      new Promise((resolve, reject) => {
        fetch(`http://127.0.0.1:8000/api/product/${productId}/`, {
          method: "DELETE",
        })
          .then((response) => {
            if (response.ok) {
              resolve("product deleted");
            } else {
              reject(response.statusText);
            }
          })
          .catch((error) => {
            console.log(error);
            reject("Connection Failed");
          });
      });

    toast.promise(promise, {
      loading: "Loading...",
      success: (data) => {
        const updatedProducts = products.filter(
          (product) => product.id !== productId
        );
        setProducts(updatedProducts);
        return data;
      },
      error: (error) => {
        return error;
      },
    });
  };

  return (
    <div className="w-full">
      <div className="container mx-auto flex">
        <div className="flex-1">
          <ListProductByClient
            products={products}
            userId={user_id}
            onDeleteProduct={handleDeleteProduct}
          />
        </div>
        <div className="flex-1">
          <FormClient userId={user_id} onAddProduct={handleAddProduct} />
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
