import React from "react";
import { Footer, Navbar } from "../Components";

const ProductPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
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
