"use client";
import { useProducts } from "@/src/context/ProductContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  // Define your props here (if any)
  services: {
    image: string;
    name: string;
    price: string;
    slug: string;
    description: string;
    views: {
      id: number;
      title: string;
      price: number;
    }[];
    advantages: string[];
  }[];
};

const Services: React.FC<Props> = ({ services }) => {
  const { addStoreDetails } = useProducts();
  return (
    <div className="grid grid-cols-12 gap-5">
      {services.map((service, idx) => (
        <div
          className="md:col-span-3 col-span-12"
          key={idx}
          onClick={() => addStoreDetails(service)}
        >
          <Link href={`/service/${service?.slug}`}>
            <div className="flex flex-col justify-center items-center md:p-8 p-5 w-full h-full border-secondary rounded-lg border">
              <Image
                src={service.image}
                alt={service?.price}
                width={200}
                height={200}
                className=" object-contain"
              />
              <h2 className="text-2xl font-bold">{service.price}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Services;
