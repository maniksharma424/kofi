import { ChevronDown } from "lucide-react";
import React from "react";
import CalendarChevron from "./CalendarChevron";

const TablePageSelector = () => {
  return (
    <div className="w-full flex justify-between text-primary-text dark:text-gray-10/70 sm:text-[15px] text-[12px] relative bottom-12 px-4">
      <div className="flex justify-start items-center ">
        <span className="flex justify-start items-center dark:bg-gloss-dark bg-[#DEDEDE] rounded-md px-2 py-[2px]">
          10{" "}
          <button>
            <ChevronDown />
          </button>
        </span>
        <span className="ml-2">per page</span>
      </div>
      <div className="flex items-center">
        <span className=" flex justify-start items-center">
          <span>1 of</span>
          <span className="ml-2">1 page</span>
          <span className="flex justify-start items-center gap-3 ">
            <button className="rotate-180">
              <CalendarChevron />
            </button>
            <button>
              <CalendarChevron />
            </button>
          </span>
        </span>
      </div>
    </div>
  );
};

export default TablePageSelector;
