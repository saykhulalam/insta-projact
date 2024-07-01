import React from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";

const Item = ({ prize, offerprize, crossprize, imageUrl }) => {
  return (
    <div className="xl:w-[375px] h-[61px] shadow mt-[24px] mb-[12px] flex justify-between items-center pr-2 rounded-lg">
      <div className="flex gap-[11px] items-center">
        <Image alt="itemImage" src={imageUrl} />
        <h3 className="text-[14px] text-[#292929] font-medium w-[160px]">
          Přidejte <span className="font-extrabold">{prize} </span> jen za{" "}
          <span className=" font-extrabold">{offerprize}</span>{" "}
          <s className="text-darkGray">{crossprize}</s>
        </h3>
      </div>
      <button className=" text-[14px] font-extrabold flex gap-[4px] items-center bg-[#3BB25B] text-white w-[84px] h-[28px] rounded-[24px] justify-center">
        <FaPlus />
        Přidat
      </button>
    </div>
  );
};

export default Item;
