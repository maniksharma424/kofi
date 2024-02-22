import ChevronDown from "@/icons/ChevronDown";
import React from "react";
import CalendarChevron from "./CalendarChevron";

const Calendar = () => {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const numbersArray = Array.from({ length: 30 }, (_, index) => index + 1);
  return (
    <div className="w-full lg:p-6 p-4  border-[#EFEFEF] border shadow-Calendar lg:rounded-[14px] sm:rounded-[10px] rounded-[17px]">
      <div className=" w-full flex justify-between items-center">
        <span className="  text-primary-text lg:text-[14px] font-[400]  sm:text-[7px]  text-[11px]  dark:text-gray-10">
          January 2022
        </span>
        <div className="flex justify-start items-center gap-[16px]">
          <button className=" rotate-180">
            <CalendarChevron />
          </button>
          <button>
            <CalendarChevron />
          </button>
        </div>
      </div>
      <div className=" mt-3 grid grid-cols-7 lg:gap-4 sm:gap-3 gap-2 text-[#7E7E7E] lg:text-[7px] font-[500] sm:text-[5px] text-[8px] dark:text-gray-10/70 py-1 px-[5px]">
        {days.map((day, index) => {
          return <span key={day}>{day}</span>;
        })}
      </div>
      <div
        className={` mt-3 grid grid-cols-7 lg:gap-4 sm:gap-3 gap-2  text-primary-text rounded-full  lg:text-[9px] font-[400] sm:text-[7px] text-[12px] dark:text-gray-10`}
      >
        {numbersArray.map((day, index) => {
          return (
            <span
              key={day}
              className={`${
                index === 14 && "bg-[#4C8DEE] text-gray-10  rounded-[10px] "
              } py-1 px-[5px] w-fit`}
            >
              {day}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
