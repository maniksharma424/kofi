import React from "react";
import Button from "./Button";

const Planning = () => {
  return (
    <div className="w-full bg-gray-10 dark:bg-gloss-dark px-5 pt-5 lg:px-[30px] lg:pt-[30px] mt-10 flex flex-col justify-start items-center pb-10 rounded-[10px] shadow-confirm-email">
      <p className=" text-primary-text lg:text-[21px] font-[700] lg:leading-[20px] text-[14px] leading-[14px] dark:text-gray-10">
        How are you planning to earn on Ko-fi?
      </p>
      <div className="flex flex-col w-full justify-start items-start gap-4 my-5 dark:text-gray-10">
        <div className="flex justify-start items-center lg:py-[22px] lg:px-4  dark:border-[#2D2E2D] py-[15px] px-2 w-full border border-[#DEDFDE] lg:rounded-[10px]  rounded-[7px]">
          <input
            type="checkbox"
            // className="dark:accent-dark dark:border-gray-10 lg:h-4 lg:w-4 h-3 accent-[#42D5A9] w-3"
          />
          <label htmlFor=""></label>

          <p className="flex-1  px-4 lg:text-[20px] font-[700] lg:leading-[20px] text-[14px] leading-[14px]">
            Receive donations or tips
          </p>
        </div>
        <div className="flex justify-start items-center lg:py-[22px] lg:px-4  dark:border-[#2D2E2D] py-[15px] px-2 w-full border border-[#DEDFDE] lg:rounded-[10px] rounded-[7px]">
          <input
            type="checkbox"
            // className="dark:accent-dark dark:border-gray-10 lg:h-4 lg:w-4 h-3 accent-[#42D5A9] w-3"
          />
          <label htmlFor=""></label>
          <p className="flex-1  px-4 lg:text-[20px] font-[700] lg:leading-[20px] text-[14px] leading-[14px]">
            Build monthly membership income
          </p>
        </div>
        <div className="flex justify-start items-center lg:py-[22px] lg:px-4  dark:border-[#2D2E2D] py-[15px] px-2 w-full border border-[#DEDFDE] lg:rounded-[10px] rounded-[7px]">
          <input
            type="checkbox"
            // className="dark:accent-dark dark:border-gray-10 lg:h-4 lg:w-4 h-3 accent-[#42D5A9] w-3"
          />
          <label htmlFor=""></label>
          <p className="flex-1  px-4 lg:text-[20px] font-[700] lg:leading-[20px] text-[14px] leading-[14px]">
            Sell products physical or digital
          </p>
        </div>
        <div className="flex justify-start items-center lg:py-[22px] lg:px-4  dark:border-[#2D2E2D] py-[15px] px-2 w-full border border-[#DEDFDE] lg:rounded-[10px] rounded-[7px]">
          <input
            type="checkbox"
            // className="dark:accent-dark dark:border-gray-10 lg:h-4 lg:w-4 h-3 accent-[#42D5A9] w-3"
          />
          <label htmlFor=""></label>
          <p className="flex-1  px-4 lg:text-[20px] font-[700] lg:leading-[20px] text-[14px] leading-[14px]">
            Offer commissions or services
          </p>
        </div>
      </div>
      <Button
        className={
          "w-full py-[12px] lg:rounded-[50px] flex justify-center items-center rounded-[35px] lg:text-[16px] font-[700] lg:leading-[20px] text-[12px] leading-[14px]"
        }
      >
        Continue
      </Button>
    </div>
  );
};

export default Planning;
