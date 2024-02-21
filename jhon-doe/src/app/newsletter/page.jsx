import BioCover from "@/components/BioCover";
import HomeHeader from "@/components/HomeHeader";
import Newsletter from "@/components/Newsletter";
import Pannel from "@/components/Pannel";
import SearchPannel from "@/components/SearchPannel";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <HomeHeader />
      <div className="flex-1 w-full  lg:px-[107px] sm:px-[73px] px-[30px] py-[19px]">
        <BioCover />
        <Pannel />
        <SearchPannel />
        <Newsletter />
      </div>
    </div>
  );
};

export default page;
