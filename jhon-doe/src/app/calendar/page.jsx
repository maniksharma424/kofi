import BioCover from "@/components/BioCover";

import Calendar from "@/components/Calendar";
import Daycard from "@/components/Daycard";

import HomeHeader from "@/components/HomeHeader";
import MeetingTimeSelector from "@/components/MeetingTimeSelector";
import Pannel from "@/components/Pannel";

import ScheduleMeetingCalendar from "@/components/ScheduleMeetingCalendar";
import ScheduleSession from "@/components/ScheduleSession";

import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <HomeHeader />
      <div className="flex-1 w-full  lg:px-[107px] sm:px-[73px] px-[30px] py-[19px]">
        <BioCover />
        <Pannel />
        <div className="w-full flex sm:flex-row flex-col gap-4 mt-10 ">
          <div className=" sm:w-1/4 w-full">
            <Calendar />
          </div>
          <div className="flex-1 flex-col ">
            <div className="flex sm:flex-row flex-col gap-4">
              <Daycard />
              <Daycard />
            </div>

            <ScheduleSession />
            <div className=" w-full flex sm:flex-row flex-col gap-4 mt-8">
              <ScheduleMeetingCalendar />

              <MeetingTimeSelector />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
