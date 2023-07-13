import { ClockIcon } from "@heroicons/react/24/outline";
import Products from "../components/Products";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Filters from "../components/Filters";

const FastFood = () => {
  const { products } = useContext(ProductContext);
  const [filters, SetFilters] = useState({
    category: "All",
  });

  const filterProducts = (products) => {
    return products.filter((product) => {      
      return filters.category == product.category || filters.category === "All";
    });
  };

  const filterdProducts = filterProducts(products);

  return (
    <>
      <div className="w-full">
        <div className="container mx-auto my-10 flex rounded-2xl bg-[#FFF9F6] py-12">
          <div className="flex-1">
            <div className="pl-24">
              <h2 className="mb-3 text-2xl font-bold">Food ordening menu</h2>
              <p className="text-sm">order now and it will be sent wint...</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-5 flex items-center gap-x-8">
              <div className="flex h-[55px] w-[230px] items-center justify-center gap-x-6 rounded-xl bg-white">
                <ClockIcon className="h-6 w-6" />
                <h3 className="text-sm">Ready to order</h3>
              </div>
              <div className="flex h-[55px] w-[230px] items-center justify-center gap-x-6 rounded-xl bg-white">
                <div>
                  <h3 className="text-sm">30 minutes</h3>
                  <span className="text-xs">avegare shipping time</span>
                </div>
                <ClockIcon className="h-6 w-6" />
              </div>
            </div>
            <p className="text-xs">
              <span className="font-semibold">Shipping cost</span> The courier
              fee depends on the range address
            </p>
          </div>
        </div>
        <div className="container mx-auto">
          <Filters changeFilters={SetFilters} />
          <Products products={filterdProducts} />
        </div>
      </div>
    </>
  );
};

export default FastFood;
