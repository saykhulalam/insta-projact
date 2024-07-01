import React from "react";
import SingleProduct from "./SingleProduct";
import { productType } from "@/src/type";

type Props = {
  // Define your props here (if any)
  products: productType[];
};

const Products: React.FC<Props> = ({ products }) => {
  return (
    <div className="p-6 flex flex-col space-y-4 w-full overflow-y-auto flex-grow text-gray-900 bg-[#f9f9fa]">
      {products.map((product, idx) => (
        <SingleProduct key={idx} product={product} />
      ))}
    </div>
  );
};

export default Products;
