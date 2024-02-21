import ChevronDown from "@/icons/ChevronDown";
import Search from "@/icons/Search";
import React from "react";

const SearchPannel = () => {
  return (
    <div className="w-full flex justify-between items-center  sm:pt-[50px] pt-[25px] sm:pb-[25px] pb-[15px] border-b   border-[#DDDDDE] dark:border-[#252930]">
      <div className="flex justify-start items-center sm:py-[12px] py-[6px]  shadow-searchBox sm:rounded-[13px] rounded-[5px] text-[12px] font-[600]  text-primary-text dark:text-gray-10 sm:px-[35px] px-[20px]  border-[2px] border-[#E6E6E6] dark:border-[#252930]">
        <Search />
        <input
          type="text"
          placeholder="Search..."
          className=" flex-1 ml-2  text-[#333333cc] dark:bg-dark sm:text-[22px] text-[12px] font-[600]"
        />
      </div>
      <div className=" sm:py-[12px] sm:px-[24px] py-[6px] px-[12px] flex justify-start items-center  sm:rounded-[13px] rounded-[5px]  dark:border-[#252930] text-primary-text dark:text-gray-10  border-[2px] border-[#E6E6E6]">
        <span className="text-[12px] sm:text-[22px] font-[600] text-[#333333cc] mr-2 dark:text-gray-10/70">
          Latest
        </span>
        <ChevronDown />
      </div>
    </div>
  );
};

export default SearchPannel;
