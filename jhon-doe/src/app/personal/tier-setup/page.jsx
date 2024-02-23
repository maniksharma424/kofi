import CreateListing from "@/components/CreateListing";
import CreateProduct from "@/components/CreateProduct";
import HomeHeader from "@/components/HomeHeader";
import TierSetup from "@/components/TierSetup";
import UserSettings from "@/components/UserSettings";
import BackArrorRed from "@/icons/BackArrorRed";
import HeaderLogo from "@/icons/HeaderLogo";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <HomeHeader />
      <div className="w-full lg:px-[110px] sm:px-[75px] px-[30px] mt-10">
        <BackArrorRed />
      </div>
      <div className="flex-1 w-full  lg:px-[250px] py-10 sm:px-[180px] px-[30px]">
        <p className="lg:text-[30px] text-primary-text sm:text-[25px] text-[22px] font-[400] dark:text-gray-10 text-center">
          Tier Setup
        </p>
        <TierSetup />
      </div>
    </div>
  );
};

export default page;
