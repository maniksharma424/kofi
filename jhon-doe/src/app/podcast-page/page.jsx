import BioCover from "@/components/BioCover";
import ControlPannel from "@/components/ControlPannel";
import HomeHeader from "@/components/HomeHeader";
import Pannel from "@/components/Pannel";
import PodcastPageBannercard from "@/components/PodcastPageBannercard";
import PodcastPagecard from "@/components/PodcastPagecard";
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
        <div className="w-full lg:p-10 sm:p-6 p-4 ">
          <PodcastPageBannercard />
    
          <PodcastPagecard />
          <PodcastPagecard />
          <PodcastPagecard />
        </div>
      </div>
    </div>
  );
};

export default page;
