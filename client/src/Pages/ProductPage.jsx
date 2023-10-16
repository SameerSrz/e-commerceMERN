import React from "react";
import { Footer, Navbar, ProductDetail } from "../Components";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const id = useParams();
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900 dark:text-gray-50">
      <Navbar />
      <div className="flex-1">
        <ProductDetail />
      </div>
      <div className="mt-auto">
        {/* <RelatedProducts data={data} /> */}
        <Footer />
      </div>
    </div>
  );
};

export default ProductPage;
