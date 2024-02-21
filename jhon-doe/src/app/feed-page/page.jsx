import BioCover from "@/components/BioCover";
import Feedcard from "@/components/Feedcard";
import HomeHeader from "@/components/HomeHeader";
import LatestPosts from "@/components/LatestPosts";
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
        <div className="w-full grid  sm:grid-cols-2 grid-cols-1  gap-4 lg:p-10 sm:p-6 p-4 ">
          <div className="flex flex-col sm:gap-10">
            {Array(4)
              .fill(3)
              .map((item) => {
                return <Feedcard key={item} />;
              })}
          </div>
          <div className="w-full sm:flex hidden justify-center ">
            <LatestPosts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
