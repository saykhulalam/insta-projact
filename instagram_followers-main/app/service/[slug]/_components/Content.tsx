"use client";
import FCButton from "@/src/components/FCButton";
import { useProducts } from "@/src/context/ProductContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  service:
    | {
        image: string;
        price: string;
        slug: string;
        description: string;
        views: {
          id: number;
          title: string;
          price: number;
        }[];
        advantages: string[];
      }
    | undefined;
};

const Content: React.FC<Props> = ({ service }) => {
  const { addStoreDetails } = useProducts();
  const [selectedView, setSelectedView] = useState<{
    id: number;
    title: string;
    price: number;
  } | null>(null);

  const handleSelect = (view: { id: number; title: string; price: number }) => {
    setSelectedView(view);
  };

  useEffect(() => {
    // 1st one set in selectedview is selected
    if (service) {
      setSelectedView(service?.views[0]);
    }
  }, [service]);

  useEffect(() => {
    if (selectedView) {
      addStoreDetails(selectedView);
    }
  }, [selectedView]);

  return (
    <div className="">
      <div className="bg-white md:p-10 p-5 rounded-2xl max-w-[600px] mx-auto">
        <h1 className="text-center text-lg md:text-xl font-semibold text-black">
          Vyberte množství:
        </h1>

        <div className="grid grid-cols-4 gap-3 mt-10 ">
          {service?.views?.map((el) => (
            <div
              key={el.id}
              className={`md:col-span-1 col-span-2 cursor-pointer border border-secondary rounded-xl overflow-hidden ${
                selectedView?.id === el.id
                  ? "bg-secondary text-white  "
                  : "bg-white text-black "
              }`}
              onClick={() => handleSelect(el)}
            >
              <div className=" p-5 rounded-xl">
                <h1 className="text-center text-lg font-semibold ">
                  {el.title}
                </h1>
                <h1 className="text-center text-lg font-semibold ">
                  {el.price} Kč
                </h1>
              </div>
            </div>
          ))}
        </div>

        {/* Selected price */}

        <div className="mt-10 text-center">
          <h1 className="text-4xl font-bold text-gray-700">
            {selectedView?.price} Kč
          </h1>

          <div className="flex justify-center">
            <Link href="/instagram-followers-vyber-profilu">
              <FCButton text="Pokračovat" />
            </Link>
          </div>

          <p className="mt-2 text-base font-medium">
            Ušetříte {selectedView && selectedView?.price * 0.1} Kč
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
