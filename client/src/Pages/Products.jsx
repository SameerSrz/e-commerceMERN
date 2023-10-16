import React from "react";
import { Navbar, Footer, ProductCard } from "../Components/index";
import { products } from "../Constants";
import PopularProductCard from "../Components/PopularProductCard";

const Products = () => {
  return (
    <>
      {/* <div className="relative dark:bg-gray-900 dark:text-gray-50">
        <div className="">
          <Navbar />
        </div>
        <div className="flex flex-col flex-grow justify-center items-center p-4 padding-t">
          <div className="container flex flex-col justify-center p-4 mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 sm:grid-cols-2">
              {products.map((product) => (
                <PopularProductCard
                  key={product.imgURL}
                  name={product.name}
                  imgURL={product.imgURL}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <Footer />
        </div>
      </div> */}
      <div className="w-screen h-screen flex flex-col items-center justify-between dark:bg-gray-900 dark:text-gray-50">
        <Navbar />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 sm:grid-cols-2 padding ">
          {products.map((product) => (
            <PopularProductCard
              product={product}
              key={product.imgURL}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Products;
