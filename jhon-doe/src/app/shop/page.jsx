import BioCover from "@/components/BioCover";
import HomeHeader from "@/components/HomeHeader";
import Pannel from "@/components/Pannel";
import ProductCard from "@/components/ProductCard";
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
        <div className="w-full grid  sm:grid-cols-3 grid-cols-1  gap-2 lg:p-10 sm:p-6 p-4 ">
          {Array(10)
            .fill(1)
            .map((product, index) => {
              return (
                <div key={index} className="">
                  <ProductCard />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default page;
