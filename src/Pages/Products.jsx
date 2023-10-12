import React from "react";
import { Navbar, Footer, ProductCard } from "../Components/index";
import { productData } from "../Constants";

const Products = () => {
  return (
    <>
      <div className="relative dark:bg-gray-900 dark:text-gray-50">
        <div className="">
          <Navbar />
        </div>
        <div className="flex flex-col flex-grow justify-center items-center p-4 padding-t">
          <div className="container flex flex-col justify-center p-4 mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 sm:grid-cols-2">
              {productData.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Products;
