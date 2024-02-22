import React from "react";
import Button from "./Button";
import PlusIcon from "@/icons/PlusIcon";

const ScheduleSession = () => {
  return (
    <div className="flex w-full sm:flex-row flex-col justify-between items-center sm:gap- mt-10">
      <div className=" sm:w-2/4 w-full">
        <div className="  border border-[#E6E6E6] bg-white dark:bg-gloss-dark w-full dark:border-gray-10/70  lg:rounded-[14px] sm:rounded-[10px] rounded-[7px] shadow-md text-[#C1C1C1] dark:text-gray-10/70 lg:p-4 p-3">
          <p>Lorem ipsum</p>
        </div>
        <div className="  border border-[#E6E6E6] bg-white dark:bg-gloss-dark w-full dark:border-gray-10/70  lg:rounded-[14px] sm:rounded-[10px] rounded-[7px] shadow-md text-[#C1C1C1] dark:text-gray-10/70 lg:p-4 p-3 mt-4">
          <p>Lorem ipsum dolor</p>
        </div>
        <p className="mt-3 text-blue-600 lg:text-[13px] font-[400] sm:text-[13px] text-[9px]">
          Terms and Conditions(hyperlink)
        </p>
      </div>
      <Button
        className={
          "flex justify-center items-center px-3 py-2 sm:w-2/5 w-full lg:rounded-[48px] sm:rounded-[34px] rounded-[50px] sm:mt-0 mt-5"
        }
      >
        <PlusIcon />
        <span className=" lg:text-[17px] sm:text-[11px] font-[500] ml-2 text-[14px]">
          Schedule a session
        </span>
      </Button>
    </div>
  );
};

export default ScheduleSession;
