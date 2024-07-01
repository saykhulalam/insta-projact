import React from "react";
import { RxCross2 } from "react-icons/rx";

const LikeCount = ({ countName, count, className }) => {
  return (
    <div className="flex justify-between items-center mt-[15px]">
      <h3 className="text-[14px] text-[#292929] font-medium ">{countName}</h3>
      <div className="xl:w-[150px] md:w-[250px] sm:w-[200px] w-[130px] h-[1px] border-dashed border-darkGray border-[1px]"></div>
      <div className="flex gap-[12px] items-center ">
        <h2
          className={`text-[#292929] text-[16px] font-extrabold ${className}`}
        >
          {count}
        </h2>
        <div className="w-[16px] h-[16px] icon-box rounded-[4px]">
          <RxCross2 className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default LikeCount;
