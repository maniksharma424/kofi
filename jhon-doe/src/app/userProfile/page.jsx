"use client";
import BioCover from "@/components/BioCover";
import HomeHeader from "@/components/HomeHeader";
import Menu from "@/components/Menu";
import UserProfile from "@/components/UserProfile";
import React from "react";

const page = () => {
  return (
    <div>
      <HomeHeader />
      <div className="sm:hidden block  p-6 ">
        <BioCover />
      </div>
      <div className=" w-full flex">
        <div className="w-[340px] sm:block hidden">
          <Menu isUserProfile />
        </div>
        <div className=" sm:flex-1 w-full sm:px-12 p-6 sm:mt-0 mt-24">
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default page;
