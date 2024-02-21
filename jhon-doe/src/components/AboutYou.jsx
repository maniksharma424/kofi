import React from "react";
import Button from "./Button";

const AboutYou = () => {
  return (
    <div className="w-full bg-gray-10 dark:bg-gloss-dark px-5 pt-5 lg:px-[30px] lg:pt-[30px] mt-10 flex flex-col justify-start items-start pb-10 rounded-[10px] shadow-confirm-email">
      <p className=" text-primary-text lg:text-[22px] font-[700] dark:text-white">
        About you
      </p>
      <p className=" text-secondary-text lg:text-[16px] text-[12px] font-[500] leading-[20px]  dark:text-[#ffffff99] lg:mt-5 mt-3">
        Display name
      </p>
      <input
        className="lg:px-[18px] lg:py-[12px] border border-[#D1D1D1] lg:rounded-[8px] w-full lg:text-[16px] lg:font-[400] text-[#9DBCC9] sm:px-[13px] sm:py-[9px] sm:rounded-[6px] px-[14px] py-[9px] rounded-[7px] dark:bg-gloss-dark dark:border-[#3B3B3B] mt-3 text-[12px] dark:text-[#9DBCCC]"
        typeof="text"
        placeholder="Password"
      />
      <p className=" text-secondary-text lg:text-[16px] text-[12px] font-[500] leading-[20px]  dark:text-[#ffffff99] lg:mt-7 mt-5">
        Bio
      </p>
      <textarea
        className="lg:px-[18px] lg:py-[12px] border border-[#D1D1D1] lg:rounded-[8px] w-full  lg:text-[16px] text-[12px] lg:font-[400] text-[#9DBCC9] sm:px-[13px] sm:py-[9px] sm:rounded-[6px] px-[14px] py-[9px] rounded-[7px] dark:bg-gloss-dark dark:border-[#3B3B3B] mt-3 lg:h-[114px] h-[100px] dark:text-[#9DBCCC]"
        typeof="text"
        placeholder="Introduction yourself and what you're creating....."
      />
      <Button className="w-full flex justify-center py-[10px] rounded-[20px]  mt-5">
        Next
      </Button>
    </div>
  );
};

export default AboutYou;
