import React from "react";
import UserBord from "../components/UserBord";
import FooterShepImage from "../../../public/footer-shep.png";
import { CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import userImage from "../../../public/userFrofile.png";
import Item from "../components/Item";
import itemImage from "../../../public/itemImage.png";
import Image from "next/image";
import { prompt } from "@/app/layout";

const RightSide = ({ promptClassname }) => {
  return (
    <div
      className={`xl:w-[407px] xl:h-[850px] h-[880px] px-[16px] shadow-lg rounded-[10px] relative bg-[#F5F5F5] pt-[16px] ${promptClassname}`}
    >
      <h2 className="text-[24px] font-extrabold text-[#292929] mb-[24px] ">
        Shrnutí objednávky
      </h2>
      <UserBord
        userName="@jey_username"
        imageUrl={userImage}
        appicon={<CiInstagram />}
      />
      <UserBord
        userName="@jey_username"
        imageUrl={userImage}
        appicon={<FaTiktok />}
        className="bg-black"
      />
      <div className="maindiv"></div>
      <div className="mt-[24px]">
        <h2 className="text-[24px] font-extrabold text-[#292929] mb-[8px] ">
          Speciální nabídka 🔥
        </h2>
        <h4 className="text-[14px] text-[3292929] font-bold">
          <span className="font-normal">Vyprší za</span> 3 min a 5 sek.
        </h4>
      </div>
      <div>
        <Item
          imageUrl={itemImage}
          prize="250 lajků"
          offerprize="79 Kč"
          crossprize="119 Kč"
        />
        <Item
          imageUrl={itemImage}
          prize="250 lajků"
          offerprize="79 Kč"
          crossprize="119 Kč"
        />
      </div>
      <div className="xl:w-[375px] h-[39px] shadow rounded-[24px] px-[16px] flex items-center justify-between mt-[24px]">
        <h5 className="text-[14px] font-normal text-darkGray">Slevový kód</h5>
        <h2 className="text-[14px] font-extrabold text-[#292929]">Použít</h2>
      </div>
      <div className="flex items-center justify-between mt-[24px]">
        <h5 className="text-[16px] font-normal text-[#292929] ">Slevový kód</h5>
        <h2 className="text-[24px] font-extrabold text-[#292929]">1.667 Kč</h2>
      </div>
      <Image
        className=" absolute bottom-[-10px] left-0"
        src={FooterShepImage}
        alt="footershepImage"
      />
    </div>
  );
};

export default RightSide;
