import BioCover from "@/components/BioCover";
import HomeHeader from "@/components/HomeHeader";
import Pannel from "@/components/Pannel";
import Podcastcard from "@/components/Podcastcard";
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
        <div className="w-full grid  sm:grid-cols-3 grid-cols-1  gap-4 lg:p-10 sm:p-6 p-4 ">
          <Podcastcard />
          <Podcastcard />
          <Podcastcard />
          <Podcastcard />
          <Podcastcard />

        </div>
      </div>
    </div>
  );
};

export default page;
