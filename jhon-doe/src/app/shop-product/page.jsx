import BioCover from "@/components/BioCover";
import HomeHeader from "@/components/HomeHeader";
import Pannel from "@/components/Pannel";
import ProductPage from "@/components/ProductPage";
import SearchPannel from "@/components/SearchPannel";
import TailoredProduct from "@/components/TailoredProduct";
import BackArrow from "@/icons/BackArrow";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <HomeHeader />
      <div className="flex-1 w-full  lg:px-[107px] sm:px-[73px] px-[30px] py-[19px]">
        <div classNamew="flex  justify-start items-center ">
          <BackArrow />
        </div>
        <SearchPannel />
        <ProductPage />
        <TailoredProduct />
      </div>
    </div>
  );
};

export default page;
