import { useProducts } from "@/src/context/ProductContext";
import Image from "next/image";
import React from "react";

type Props = {
  // Define your props here (if any)
  product: any;
};

const SingleProduct: React.FC<Props> = ({ product }) => {
  const { deleteProduct } = useProducts();
  return (
    <div className="flex items-center w-full relative">
      <div className="p-4 flex justify-between items-center  rounded-xl flex-1 relative bg-gradient-to-r from-[#404040]/50 to-[#1e293b]/50">
        {/* <div className="absolute top-0   left-0 h-full w-1/3 rounded-l-xl z-0 opacity-80 bg-black"></div> */}
        <div className="flex justify-start items-center z-10 ">
          <div className="flex-shrink-0">
            <Image
              src={"/profile.jpg"}
              alt=""
              width={50}
              height={50}
              className="object-contain rounded-xl"
            />
          </div>
          <div className="ml-2">
            <div className="text-[14px] text-white font-medium leading-none mb-2">
              {product?.title}
            </div>
            <div className="text-xs text-foreground/80 flex items-center mt-[3px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user-round h-3 w-3 mr-0.5 text-white "
              >
                <circle cx="12" cy="8" r="5"></circle>
                <path d="M20 21a8 8 0 0 0-16 0"></path>
              </svg>
              <span className="truncate max-w-[100px] sm:max-w-[180px] text-white">
                {product?.selectUser?.full_name}
              </span>
              <div
                data-orientation="vertical"
                role="none"
                className="shrink-0 w-[1px] mx-1 h-3 bg-foreground/30 last:hidden"
              ></div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="font-medium text-base md:pr-3 md:text-lg text-white">
            {product?.price}&nbsp;Kč
          </div>
        </div>
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-auto w-auto p-1 ml-1 absolute top-0.5 right-0.5 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x w-4 h-4 text-white hover:text-[red]"
            onClick={() => deleteProduct(product?.id)}
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
