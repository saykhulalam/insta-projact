"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import Empty from "./Cart/Empty";
import Products from "./Cart/Products";
import FCButton from "./FCButton";
import { useProducts } from "../context/ProductContext";

type Props = {
  // Define your props here (if any)
  isOpen: boolean;
  setIsOpen: any;
};

const FCCardDrawer: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const [total, setTotal] = useState<number>(0);
  const toggleDrawer = () => {
    setIsOpen((prevState: any) => !prevState);
  };

  const { products } = useProducts();

  useEffect(() => {
    const total = products.reduce(
      // @ts-ignore
      (acc, item) => Number(acc) + Number(item?.price || 0),
      0
    );
    setTotal(total);
  }, [products]);

  return (
    <>
  
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="relative"
        size={400}
      >
        <div className="flex flex-col justify-between h-dvh">
          <div className="py-4 pl-6 pr-4 w-full z-50 text-left inset-x-0 transition backdrop-blur-lg flex flex-row items-center shadow-navbar justify-between space-y-0">
            <div className="text-xl font-semibold text-gray-800">Váš košík</div>
            <label
              //   for="drawer-cart"
              className="w-auto h-auto p-1.5 mt-0 cursor-pointer"
            >
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
                className="lucide lucide-x w-4 h-4"
                onClick={toggleDrawer}
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </label>
          </div>
          {/* mid */}
          {products.length === 0 && <Empty />}
          {products.length !== 0 && <Products products={products} />}

          {/* <Empty /> */}

          {/* last */}
          <div className="flex flex-col sm:flex-col sm:justify-start items-center shadow-navbar px-6 h-fit bottom-0 bg-white w-full pt-4 pb-6">
            {products?.length !== 0 && (
              <>
                <div className="flex justify-between items-center w-full p-5 rounded-xl bg-[#F7F7F7]">
                  <div className="font-medium text-base text-gray-900">
                    Celkem:
                    <div className="text-muted-foreground text-xs font-normal hidden">
                      Cena je včetně DPH
                    </div>
                  </div>
                  <div className="font-bold text-lg text-gray-900">
                    {total}&nbsp;Kč
                  </div>
                </div>

                <FCButton text="Přejít do pokladny" />
              </>
            )}

            <button
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 mt-2 w-fit rounded-xl px-6 py-4 bg-blackSecondary/10"
              onClick={toggleDrawer}
            >
              Zpět do obchodu
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default FCCardDrawer;
