import React from "react";
import Button from "./Button";

const Info = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center lg:text-[47px] sm:px-0 px-10 text-center lg:leading-[52px] text-[38px] font-[900] leading-[30px] mt-10  ">
      <div className="h-fit">
        <p className="text-transparent  bg-clip-text  bg-info-text-primary">
          All you need to make money
        </p>
        <p className="text-transparent  bg-clip-text bg-info-text-secondary">
          doing what you love
        </p>
      </div>
      <div className="w-full flex justify-center ">
        <p className="text-[24px] sm:w-3/5 w-5/6  font-[400] leading-[35px]  dark:text-gray-10 text-[#434B57]/50 lg:my-12 sm:my-8 my-6">
          Join 1M+ creators getting donations, memberships and sales from fans!
        </p>
      </div>
      <div className="bg-gray-10 dark:bg-dark  dark:shadow-dark-claim rounded-[48px] sm:px-5 sm:py-4 px-3 py-3  lg:w-[475px] lg:h-[83px] flex justify-between items-center sm:text-[19px] sm:font-[700] text-[14px] font-[400] shadow-claim mt-5">
        <p className=" flex items-center leading-[28px] text-[#495057] dark:text-gray-10">
          <span>ko-fi.com/</span>
          <input
            type="text"
            className=" border-none focus:outline-none font-[400] bg-inherit text-[#757575] dark:text-gray-10 ml-1"
            placeholder="yourname"
          />
        </p>
        <Button
          className={
            "sm:px-[23px]  sm:py-1 sm:rounded-[96px] rounded-[68px] px-4"
          }
        >
          Claim
        </Button>
      </div>
      <p className="text-[17px] font-[400] leading-[24px] text-[#434B57]/80 mt-4 dark:text-gray-10/80">
        $8 million earned last month!
      </p>
    </div>
  );
};

export default Info;
