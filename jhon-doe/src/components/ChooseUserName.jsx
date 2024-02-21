import React from "react";
import Button from "./Button";
import LightBulb from "./LightBulb";

const ChooseUserName = () => {
  return (
    <div className="w-full bg-gray-10 dark:bg-gloss-dark px-5 pt-5 lg:px-[30px] lg:pt-[30px] mt-10 flex flex-col justify-start items-start pb-10 rounded-[10px] shadow-confirm-email">
      <p className=" text-primary-text lg:text-[22px] font-[700] dark:text-white">
        Choose a username
      </p>
      <p className=" text-secondary-text text-[16px] font-[500] leading-[20px]  dark:text-[#ffffff99] my-7">
        What do you want your link to be?{" "}
      </p>
      <div
        className="lg:px-[18px] lg:py-[12px] border border-[#D1D1D1] lg:rounded-[8px] w-full lg:text-[16px] lg:font-[400] text-[#9DBCC9]sm:px-[13px] sm:py-[9px] sm:rounded-[6px] px-[14px] py-[9px] rounded-[7px] dark:bg-gloss-dark dark:border-[#3B3B3B] flex justify-start items-center"
        typeof="text"
        placeholder="Email"
      >
        <span className=" text-primary-text text-[16px] font-[600] leading-[20px] dark:text-white">
          Ko-fi.com/
        </span>
        <span className=" text-secondary-text dark:text-[#ffffff99]">alyraj</span>
      </div>
      <div className="w-full px-[25px] py-[20px] bg-[#F7F7F7] rounded-[18px]   flex justify-start items-center my-5 dark:bg-[#151515]">
        <LightBulb />
        <span className=" text-secondary-text flex-1 text-[16px] font-[400] leading-[20px] flex justify-center pl-4 border-l border-gray-200 ml-5 dark:text-[#ffffff99]">
          you can change this at any time!
        </span>
      </div>
      <Button className="w-full flex justify-center py-[10px] rounded-[20px] ">
        Next
      </Button>
    </div>
  );
};

export default ChooseUserName;
