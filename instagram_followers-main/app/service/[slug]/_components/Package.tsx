"use client";
import { useProducts } from "@/src/context/ProductContext";
import React, { useEffect, useState } from "react";

type PackageData = {
  name: string;
  imgSrc: string;
  description: string;
  features: string[];
  bgColor: string;
  textColor: string;
};

type Props = {
  packages: PackageData[];
};

const Package: React.FC<Props> = ({ packages }) => {
  const [selectedPackage, setSelectedPackage] = useState<string>("Premium");

  const handleSelect = (packageName: string) => {
    setSelectedPackage(packageName);
  };

  const { addStoreDetails } = useProducts();

  useEffect(() => {
    const selectedPackageData = packages.find(
      (pkg) => pkg.name === selectedPackage
    );
    addStoreDetails(selectedPackageData);
  }, [selectedPackage]);

  return (
    <div className="flex justify-center max-w-[600px] mx-auto">
      <div className="grid md:grid-cols-2 w-full md:gap-x-2 gap-y-2">
        {packages.map((pkg) => (
          <label
            key={pkg.name}
            className={`rounded-2xl border p-1 cursor-pointer relative transition ease-in-out duration-100 ${
              selectedPackage !== pkg.name
                ? `bg-[${pkg.bgColor}]/70 border-[${pkg.bgColor}]`
                : "bg-white/50 border-secondary"
            }`}
            onClick={() => handleSelect(pkg.name)}
          >
            <div
              className={`w-full rounded-xl px-3 py-2 sm:py-3 bg-[${pkg.bgColor}] font-medium flex sm:items-center text-left ${pkg.textColor}`}
            >
              <img
                src={pkg.imgSrc}
                className="rounded-full w-5 h-5 mr-2.5 mt-[3px] sm:mt-0"
                alt=""
              />
              <span>
                {pkg.name} <br className="sm:hidden" />
                {pkg.description}
              </span>
            </div>
            <div className="pl-2 pr-4 pt-2 pb-4 sm:pb-6 text-sm sm:text-[15px] text-foreground/90 space-y-1.5 font-medium text-left">
              {pkg.features.map((feature, index) => (
                <div className="flex sm:items-center" key={index}>
                  <div>
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
                      className="lucide lucide-check w-4 h-4 mr-1.5 mt-0.5 sm:mt-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div>{feature}</div>
                </div>
              ))}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Package;
