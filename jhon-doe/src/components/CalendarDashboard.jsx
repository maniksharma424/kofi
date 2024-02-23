import React from "react";
import Button from "./Button";
import Calendar from "./Calendar";
import Done from "@/icons/Done";
import CalendarScheduleIcon from "@/icons/CalendarScheduleIcon";

const CalendarDashboard = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col gap-5">
      <div className="lg:w-2/5 w-full">
        <div className=" w-full flex justify-between gap-3">
          <Button
            className={
              "px-2 sm:py-2 py-1 w-1/2 lg:text-[14px] sm:text-[10px] text-[12px] font-[400] text-gray-10  sm:rounded-3xl rounded-xl  flex justify-center items-center  "
            }
          >
            Setup
          </Button>
          <Button
            className={
              "px-2 sm:py-2 py-1 w-1/2 lg:text-[14px] sm:text-[10px] text-[10px] font-[400] text-gray-10  sm:rounded-3xl rounded-xl  flex justify-center items-center "
            }
          >
            Book a session
          </Button>
        </div>
        <div className=" w-full sm:mt-8 mt-5">
          <Calendar />
        </div>
      </div>
      <div className="lg:flex-1 w-full">
        <div className=" w-full flex justify-end">
          <div className="flex ">
            <CalendarScheduleIcon />
          </div>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default CalendarDashboard;
