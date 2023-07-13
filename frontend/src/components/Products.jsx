import { ShoppingCartIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useCard } from "../hooks/useCard";
import { Toaster, toast } from "sonner";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  const { addToCard, cart, removeFromCart } = useCard();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLogged(true);
    }
  }, []);

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const checkLoginMiddleware = (
    isLoggedIn,
    addToCard,
    removeFromCart,
    product,
    isProductInCart
  ) => {
    if (isLoggedIn) {
      if (isProductInCart) {
        removeFromCart(product);
      } else {
        addToCard(product);
      }
    } else {
      toast.error("Usuario no logueado. Redireccionando al route de login.");
    }
  };

  console.log(products);

  return (
    <>
      <Toaster richColors />
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.category_name}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  $ {product.price}
                </p>
              </div>
              <button
                className={`mt-4 flex w-full justify-center gap-x-2 rounded-md py-2 ${
                  isProductInCart
                    ? "bg-red-600 text-white"
                    : "bg-indigo-600 text-white"
                }`}
                onClick={() =>
                  checkLoginMiddleware(
                    isLogged,
                    addToCard,
                    removeFromCart,
                    product,
                    isProductInCart
                  )
                }
              >
                {isProductInCart ? (
                  <>
                    <TrashIcon className="h-5 w-5" />
                    remove
                  </>
                ) : (
                  <>
                    <ShoppingCartIcon className="h-5 w-5" />
                    add
                  </>
                )}
              </button>
              <Link
                to={"/food/pruduct/" + product.id}
                className="m-4 flex items-center justify-center rounded-md bg-green-500 p-4 px-4 py-2 text-sm font-medium text-white"
              >
                Details
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
