import React from "react";
import Button from "./Button";
import Calendar from "./Calendar";
import ChevronDown from "@/icons/ChevronDown";
import CreateSession from "./CreateSession";
import ScheduleDaycard from "./ScheduleDaycard";

const CalendarDashboardSetup = () => {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  return (
    <div className="w-full">
      <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
        Sheadule
      </p>
      <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-2xl mt-10 shadow-md flex justify-between items-center">
        <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70">
          Available hours
        </p>
        <ChevronDown />
      </div>
      <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-2xl mt-10 shadow-md flex justify-between items-center">
        <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70">
          Days of Week
        </p>
        <ChevronDown />
      </div>
      <div className=" flex  justify-around items-center sm:py-2 my-4 px-2 py-1  sm:px-4">
        {days.map((day) => {
          return (
            <div
              key={day}
              className="sm:w-[48px] sm:h-[62px] w-[27px] h-[36px] lg:text-[13px] sm:text-[9px] text-[7px]  font-[500] text-[#7A7A7A]  shadow-day-block flex justify-center items-center border border-[#EFEFEF] dark:border-gray-10/70 rounded-lg dark:bg-gloss-dark dark:text-gray-10"
            >
              {day}
            </div>
          );
        })}
      </div>
      <CreateSession />
      <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10 mt-10">
        Add Leaves/Holidays
      </p>
      <div className=" flex gap-4 lg:flex-row flex-col-reverse mt-6">
        <div className="lg:w-1/2 w-full dark:border dark:border-gray-10/70 dark:rounded-lg">
          <ScheduleDaycard />
        </div>
        <div className="lg:w-1/2 w-full mt-6">
          <div className="flex w-full justify-center items-center">
            <Button
              className={
                "sm:w-4/5 w-full flex justify-center items-center py-2 sm:rounded-2xl rounded-xl px-2 mb-5"
              }
            >
              Add{" "}
            </Button>
          </div>
          <Calendar />
        </div>
      </div>
    </div>
  );
};
export default CalendarDashboardSetup;
