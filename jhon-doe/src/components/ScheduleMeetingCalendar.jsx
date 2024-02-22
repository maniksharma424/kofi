import React from "react";
import Calendar from "./Calendar";
import TimeChevron from "@/icons/TimeChevron";

const ScheduleMeetingCalendar = () => {
  return (
    <div className="sm:w-2/4 w-full">
      <Calendar />
      <div className="border border-[#E6E6E6] lg:rounded-[14px] sm:rounded-[10px] rounded-[12px] shadow-md px-5 py-8 flex justify-between items-center mt-7">
        <TimeChevron />
        <span className="lg:mx-2 mx-1 lg:text-[13px] font-[400] text-[13px] dark:text-gray-10">
          6:45 pm To 7:30 am
        </span>
        <span className=" rotate-180">
          <TimeChevron />
        </span>
      </div>

      <button className="w-full flex justify-center items-center shadow-schedule-meeting py-3 px-2 rounded-[50px] mt-7 lg:text-[17px] font-[500] sm:text-[12px] text-[15px] text-red dark:border-gray-10 dark:border">
        Pay to Sheadule a metting
        <span className="rotate-180 lg:ml-3 sm:ml-2 ml-3">
          <TimeChevron />
        </span>
      </button>
    </div>
  );
};

export default ScheduleMeetingCalendar;
