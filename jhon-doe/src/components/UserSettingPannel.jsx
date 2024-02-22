import React from "react";

const UserSettingPannel = () => {
  return (
    <div className="w-full">
      <p className=" text-primary-text text-[30px] font-[400] dark:text-gray-10 w-full sm:text-start text-center">
        Setting
      </p>
      <div className=" flex sm:gap-8 gap-4 sm:justify-start justify-center w-full border-b border-[#DDDDDE] dark:border-gray-10/70 mt-5 text-primary-text font-[700] dark:text-gray-10 lg:text-[16px] sm:text-[12px] text-[14px] ">
        <span className="text-red dark:text-red border-b-[2px] border-b-red top-[1px] relative ">
          Profile
        </span>
        <span className="top-[1px] relative">Payments</span>
        <span className="top-[1px] relative">Page</span>
        <span className="top-[1px] relative">Transaction histroy</span>
      </div>
    </div>
  );
};

export default UserSettingPannel;
