import React from "react";
import Image from "next/image";
import LikeCount from "../components/LikeCount";

const UserBord = ({ appicon, imageUrl, userName }) => {
  return (
    <div>
      <div className="flex items-center justify-between mt-[24px]">
        <div className=" flex items-center gap-[8px]">
          <Image className="w-[32px]" src={imageUrl} alt="userProfillImage" />
          <h5 className="text-[12px] text-[#292929] font-normal">{userName}</h5>
        </div>
        <div className="icon-box w-[32px] h-[32px] rounded-full flex items-center justify-center ">
          <div className="text-[17px] text-white">{appicon}</div>
        </div>
      </div>
      <LikeCount countName="250 Likes" count="99 Kč" />
      <LikeCount countName="500 Followers" count="99 Kč" />
      <LikeCount
        className=" text-[#44D12D]"
        countName="🔥 50 Likes"
        count="25 Kč"
      />
      <div className="w-full h-[1px] bg-gray mt-[24px]"></div>
    </div>
  );
};

export default UserBord;
