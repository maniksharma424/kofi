import React from "react";
import Button from "./Button";

const Claim = () => {
  return (
    <div className="bg-gray-10 dark:bg-gloss-dark  rounded-[48px] sm:px-5 sm:py-4 px-3 py-3  lg:w-[475px] lg:h-[83px] flex justify-between items-center sm:text-[19px] sm:font-[700] text-[14px] font-[400] shadow-claim mt-5">
      <div className=" flex items-center leading-[28px] text-[#495057] dark:text-gray-10">
        <span>ko-fi.com/</span>
        <input
          type="text"
          className=" border-none focus:outline-none font-[400] bg-inherit text-[#757575] dark:text-gray-10 ml-1 flex-1 min-w-0"
          placeholder="yourname"
        />
      </div>
      <Button
        className={
          "sm:px-[23px]  sm:py-1 sm:rounded-[96px] rounded-[68px] px-4"
        }
      >
        Claim
      </Button>
    </div>
  );
};

export default Claim;
