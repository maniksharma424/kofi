import ChevronDown from "@/icons/ChevronDown";
import React from "react";
import ScheduleDaycard from "./ScheduleDaycard";

const MeetingTimeSelector = () => {
  return (
    <div className=" sm:flex-1 border rounded-lg  shadow-Calendar border-[#EFEFEF] lg:p-6 sm:p-4 p-5 flex flex-col ">
      <div className=" flex lg:gap-3 sm:gap-2 gap-4 justify-start items-center">
        <span className=" text-red lg:text-[22px] font-[700] sm:text-[13px] w-1/6 text-[18px]">
          Start:
        </span>
        <div className="flex-1 border border-[#EFEFEF] lg:py-3 sm:py-1 py-2 px-2 justify-end flex items-center dark:text-gray-10 rounded-lg">
          <ChevronDown />
        </div>
      </div>
      <div className=" flex lg:gap-3 sm:gap-2 gap-4 justify-start items-center mt-2">
        <span className="w-1/6 text-red lg:text-[22px] font-[700] sm:text-[13px] text-[18px]">
          End:
        </span>
        <div className="flex-1 border border-[#EFEFEF] lg:py-3 sm:py-1 py-2 px-2 justify-end flex items-center dark:text-gray-10 rounded-lg">
          <ChevronDown />
        </div>
      </div>
      <ScheduleDaycard />
    </div>
  );
};

export default MeetingTimeSelector;
