import HomeHeader from "@/components/HomeHeader";
import TransactionHistory from "@/components/TransactionHistory";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <HomeHeader />
      <div className="flex-1 w-full  lg:px-[107px] sm:px-[73px] px-[30px] py-[19px]">
        <TransactionHistory />
      </div>
    </div>
  );
};

export default page;
