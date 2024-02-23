"use client";
import CalendarDashboard from "@/components/CalendarDashboard";
import CalendarDashboardSetup from "@/components/CalendarDashboardSetup";
import HomeHeader from "@/components/HomeHeader";
import Menu from "@/components/Menu";

import React from "react";

const page = () => {
  return (
    <div>
      <HomeHeader />
      <div className=" w-full flex">
        <div className="w-[340px] sm:block hidden">
          <Menu isUserProfile></Menu>
        </div>
        <div className=" sm:w-[calc(100%-340px)] sm:left-[340px] left-0 w-full h-[calc(100%-80px)] sm:px-12 p-6 sm:mt-0  overflow-auto  fixed">
          <CalendarDashboardSetup />
        </div>
      </div>
    </div>
  );
};

export default page;
