"use client";
import React, { useState } from "react";
import Image from "next/image";
import lockImg from "../../../public/lock.png";
import tikkImg from "../../../public/tikk.png";
import { FaChevronDown } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LeftSide = ({ promptClassname }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={`xl:w-[700px ${promptClassname}`}>
      <h2 className="text-[24px] font-extrabold text-[#292929] leading-[38px] mb-[16px]">
        Pokladna
      </h2>
      <div className="">
        <h4 className="text-[18px] font-semibold text-[#292929]">
          Zadejte fakturační údaje
        </h4>
        <input
          className="xl:w-[700px] sm:w-[600px] w-[334px] md:w-[700px] h-[41px] rounded-[24px] bg-[#F3F3F3] border-gray border-[1px] pl-[16px] text-[16px] mt-[16px]"
          placeholder="Váš email"
          type="email"
        />
        <form className="max-w-sm mt-[24px] relative">
          <select
            id="countries"
            className="bg-[#F3F3F3] text-[#292929] border-gray border-[1px] border-gray-300 text-[16px] focus:ring-blue-500 focus:border-blue-500 block xl:w-[700px] md:w-[700px] sm:w-[600px] w-[334px] h-[41px] rounded-[24px] pl-[16px] appearance-none"
          >
            <option selected="">Česká republika</option>
            <option value="US">Česká republika</option>
            <option value="CA">Česká republika</option>
            <option value="FR">Česká republika</option>
            <option value="DE">Česká republika</option>
          </select>
          <div className="w-[18px] h-[18px] rounded-full absolute xl:right-[-300px] md:right-[-300px] right-[30px] sm:right-[-200px] top-1/2 transform -translate-y-1/2 flex justify-center  items-center shadow-lg">
            <FaChevronDown className=" text-[11px] pointer-events-none text-[#525252]" />
          </div>
        </form>
        <div className="flex items-center mt-[12px]">
          <input
            id="default-checkbox"
            type="checkbox"
            defaultValue=""
            className="w-4 h-4 border-gray-300"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-[16px] text-gray-900 dark:text-gray-300 text-[#292929] font-normal pl-[10px]"
          >
            Chci nakoupit na firmu
          </label>
        </div>
      </div>
      <div className="xl:w-[700px] w-[325px] h-[2px] bg-[#EDEDED] mt-[24px] mb-[24px]"></div>
      <div className="">
        <h4 className="text-[18px] font-semibold text-[#292929]">
          Vyberte platební metodu
        </h4>
        <div
          className={`xl:w-[700px] sm:w-[600px] md:w-[700px] w-[334px] h-[44px] shadow rounded-[16px] mt-[16px] flex items-center justify-between px-[15px] hover:border-[#FFC0CB] hover:border-[2px] select-none ${
            selectedOption === "applePay" ? "border-[#FFC0CB] border-[2px]" : ""
          }`}
          onClick={() => handleOptionClick("applePay")}
        >
          <div className="flex items-center gap-[8px]">
            <div className="w-[45px] h-[20px] rounded-[6px] border-gray border-[1px] flex items-center justify-center gap-[2px]">
              <FaApple className="text-[16px]" />
              <h5 className="text-[11px] font-semibold">Pay</h5>
            </div>
            <h5 className="text-[16px] font-normal text-[#292929]">
              Apple Pay
            </h5>
          </div>
          <div>
            <input
              className=" w-[14px] h-[14px] appearance-none border-[1px] border-black rounded-full  checked:border-[2px] checked:bg-[#D60FF2] checked:border-white checked:outline checked:outline-[#F45937] checked:outline-2"
              type="radio"
              checked={selectedOption === "applePay"}
              readOnly
            />
          </div>
        </div>
        <div
          className={`xl:w-[700px] sm:w-[600px] md:w-[700px] w-[334px] h-[44px] shadow rounded-[16px] mt-[16px] flex items-center justify-between px-[15px] hover:border-[#FFC0CB] hover:border-[2px] select-none ${
            selectedOption === "googlePay"
              ? "border-[#FFC0CB] border-[2px]"
              : ""
          }`}
          onClick={() => handleOptionClick("googlePay")}
        >
          <div className="flex items-center gap-[8px]">
            <div className="w-[45px] h-[20px] rounded-[6px] border-gray border-[1px] flex items-center justify-center gap-[2px]">
              <FcGoogle className="text-[16px]" />
              <h5 className="text-[11px] font-semibold">Pay</h5>
            </div>
            <h5 className="text-[16px] font-normal text-[#292929]">
              Google Pay
            </h5>
          </div>
          <div>
            <input
              className=" w-[14px] h-[14px] appearance-none border-[1px] border-black rounded-full  checked:border-[2px] checked:bg-[#D60FF2] checked:border-white checked:outline checked:outline-[#F45937] checked:outline-2"
              type="radio"
              checked={selectedOption === "googlePay"}
              readOnly
            />
          </div>
        </div>
        <div
          className={`xl:w-[700px] sm:w-[600px] md:w-[700px] w-[334px] h-[44px] shadow rounded-[16px] mt-[16px] flex items-center justify-between px-[15px] hover:border-[#FFC0CB] hover:border-[2px] select-none ${
            selectedOption === "card" ? "border-[#FFC0CB] border-[2px]" : ""
          }`}
          onClick={() => handleOptionClick("card")}
        >
          <div className="flex items-center gap-[8px]">
            <div className="w-[45px] h-[20px] rounded-[6px] border-gray border-[1px] flex items-center justify-center text-[12px] font-bold">
              stripe
            </div>
            <h5 className="text-[16px] font-normal text-[#292929]">
              Platba kartou
            </h5>
          </div>
          <div>
            <input
              className=" w-[14px] h-[14px] appearance-none border-[1px] border-black rounded-full  checked:border-[2px] checked:bg-[#D60FF2] checked:border-white checked:outline checked:outline-[#F45937] checked:outline-2"
              type="radio"
              checked={selectedOption === "card"}
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="mt-[29px]">
        <p className="text-[14px] font-normal text-[#292929]mb-[12px]">
          Platba je jednorázová. Další poplatky nebudou účtovány.
        </p>
        <button className="zap-button text-[18px] xl:w-[700px] md:w-[700px] w-[325px] sm:w-[600px] h-[44px] text-white flex items-center justify-center gap-[10px] rounded-[24px] mt-[12px]">
          Zaplatit <Image alt="lock" src={lockImg} />
        </button>
        <p className="text-[14px] font-normal text-[#292929]mb-[12px] mt-[12px]">
          <span className=" text-darkGray">
            Zaplacením objednávky souhlasíte s{" "}
          </span>{" "}
          obchodními podmínkami a podmínkami soukromí.
        </p>
      </div>
      <div className=" flex items-center gap-[8px] mt-[29px]">
        <Image src={tikkImg} alt="chackedImg" />
        <h2 className="text-[14px] font-semibold text-[#292929]">
          Zabezpečenou platbu zabezpečuje Stripe, Inc.
        </h2>
      </div>
    </div>
  );
};

export default LeftSide;
