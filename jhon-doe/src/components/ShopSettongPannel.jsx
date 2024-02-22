import React from "react";

const ShopSettongPannel = () => {
  return (
    <div className="w-full">
      <p className=" text-primary-text text-[30px] font-[400] dark:text-gray-10 w-full sm:text-start text-center">
        Membership Setup
      </p>
      <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70">
        Generate a monthly income and offer reward and exclusive posts.
      </p>
      <div className=" flex sm:gap-8 gap-4 sm:justify-start justify-center w-full border-b border-[#DDDDDE] dark:border-gray-10/70 mt-5 text-primary-text font-[700] dark:text-gray-10 lg:text-[16px] sm:text-[12px] text-[14px] ">
        <span className="text-red dark:text-red border-b-[2px] border-b-red top-[1px] relative ">
          Setup
        </span>
        <span className="top-[1px] relative">Order</span>
      </div>
    </div>
  );
};

export default ShopSettongPannel;
