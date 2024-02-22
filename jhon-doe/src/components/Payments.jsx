import React from "react";
import UserSettingPannel from "./UserSettingPannel";
import Toggle from "./Toggle";
import ChevronDown from "@/icons/ChevronDown";

const Payments = () => {
  const colors = [
    "bg-[#4C8DEE]",
    "bg-[#FF5E5B]",
    "bg-[#CC00FF]",
    "bg-[#FF9900]",
    "bg-[#FF0000]",
    "bg-[#24FF00]",
    "bg-[#EEC14C]",
    "bg-[#4C8DEE]",
    "bg-[#182B47]",
    "bg-[#182B47]",
    "bg-[#EEC14C]",
  ];
  return (
    <div className="flex flex-col">
      <UserSettingPannel />
      <div className=" w-full mt-8">
        <p className="lg:text-[18px] text-primary-text sm:text-[13px] text-[14px] font-[400] dark:text-gray-10">
          Public Status visibality
        </p>
        <p className=" text-secondary-text lg:text-[12px] sm:text-[8px] text-[12px] font-[400] dark:text-gray-10/70  mt-1">
          Stay the visible of the supports you receive
        </p>

        <div className="w-full flex justify-between mt-4">
          <span className="lg:text-[16px] text-primary-text sm:text-[11px] text-[14px] font-[400] dark:text-gray-10">
            Show the coffee counter
          </span>
          <Toggle />
        </div>
        <div className="w-full flex justify-between my-2">
          <span className="lg:text-[16px] text-primary-text sm:text-[11px] text-[14px] font-[400] dark:text-gray-10">
            Show my top supporters and leaderboard
          </span>
          <Toggle />
        </div>
        <div className="w-full flex justify-between">
          <span className="lg:text-[16px] text-primary-text sm:text-[11px] text-[14px] font-[400] dark:text-gray-10">
            Show the number of shop and commission sales
          </span>
          <Toggle />
        </div>
        <p className="lg:text-[18px] text-primary-text sm:text-[13px] text-[14px] font-[400] dark:text-gray-10 mt-5">
          Show your preview image and text
        </p>
        <p className="text-secondary-text lg:text-[12px] sm:text-[8px] text-[12px] font-[400] dark:text-gray-10/70">
          Change the preview image when your page is shared on social media.
          <span className="text-[#4C8DEE] ml-2">custom preview</span>
        </p>
        <div className=" w-full mt-8">
          <p className="lg:text-[18px] text-primary-text sm:text-[13px] text-[14px] font-[400] dark:text-gray-10">
            Choose a team color
          </p>
          <p className="text-secondary-text lg:text-[12px] sm:text-[8px] text-[12px] font-[400] dark:text-gray-10/70">
            Set the theme color of your page
          </p>
          <div className=" flex justify-start lg:gap-5 sm:gap-2 gap-1 mt-4">
            {colors.map((color) => {
              return (
                <div
                  className={`lg:h-10 lg:w-10 sm:w-6 sm:h-6 w-4 h-4 rounded-full ${color}`}
                  key={color}
                ></div>
              );
            })}
          </div>
          <button className="w-full bg-red sm:bg-[#E6E6E6] flex justify-center items-center sm:py-2 py-1 mt-5 rounded-lg  lg:text-[18px] sm:text-primary-text text-gray-10 sm:text-[13px] text-[14px] font-[400] dark:text-gray-10 dark:bg-red">
            Choose custom color
          </button>
        </div>
        <div className=" w-full mt-10">
          <p className="lg:text-[18px] text-primary-text sm:text-[13px] text-[14px] font-[400] dark:text-gray-10">
            Comments
          </p>
          <div className=" flex justify-between items-center lg:py-4 py-2 px-3 border border-[#67A9C5] dark:border-gray-10 mt-2">
            <input
              placeholder="Any one can comments "
              className="text-secondary-text lg:text-[12px] sm:text-[8px] text-[12px] font-[400] dark:text-gray-10 dark:bg-gloss-dark"
            ></input>
            <span className="text-[#67A9C5] dark:text-gray-10">
              <ChevronDown />
            </span>
          </div>
          <p className="lg:text-[18px] text-primary-text sm:text-[13px] text-[14px] font-[400] dark:text-gray-10 mt-8">
            Google analytics ID
          </p>
          <div className=" flex justify-between items-center lg:py-4 py-2 px-3 border border-[#67A9C5] dark:border-gray-10 mt-2">
            <input
              placeholder="UA-00000000000000"
              className="text-secondary-text lg:text-[12px] sm:text-[8px] text-[12px] font-[400] dark:text-gray-10 dark:bg-gloss-dark"
            ></input>
            <span className="text-[#67A9C5] dark:text-gray-10">
              <ChevronDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
