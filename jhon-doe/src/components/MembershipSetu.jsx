import React from "react";
import MembershipSettingPannel from "./MembershipSettingPannel";
import ChevronDown from "@/icons/ChevronDown";
import Button from "./Button";
import Toggle from "./Toggle";
import MemberPlayIcon from "@/icons/MemberPlayIcon";
import MembershipPauseIcon from "@/icons/MembershipPauseIcon";

const MembershipSetup = () => {
  return (
    <div className="flex flex-col w-full">
      <MembershipSettingPannel />
      <p className=" w-full flex justify-between items-center mt-10">
        <span className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]    text-secondary-text dark:text-gray-10">
          Include ended subscriptions{" "}
        </span>
        <Toggle />
      </p>

      <div className=" w-full mt-10">
        <label className=" text-primary-text  text-[16px] font-[400] dark:text-gray-10">
          Search by name or email
        </label>
        <input
          type="text"
          className=" w-full border border-black/10 rounded-[4px] px-5 py-2  text-secondary-text text-[13px] focus:outline-none font-[400] dark:bg-gloss-dark dark:border-gray-10/70 mt-1  dark:text-gray-10/70"
        />
      </div>
      <div className=" w-full mt-10">
        <label className=" text-primary-text  text-[16px] font-[400] dark:text-gray-10">
          Filter by membership tier
        </label>
        <input
          type="text"
          className=" w-full border border-black/10 rounded-[4px] px-5 py-2  text-secondary-text text-[13px] focus:outline-none font-[400] dark:bg-gloss-dark dark:border-gray-10/70 mt-1 dark:text-gray-10/70"
        />
      </div>
      <div className=" w-full flex justify-between items-center mt-10">
        <span className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
          Include ended subscriptions{" "}
        </span>
        <Button
          className={
            "px-3 py-1 sm:rounded-2xl lg:text-[18px] sm:text-[12px] text-[14px] font-[400]  rounded-xl"
          }
        >
          CSV
        </Button>
      </div>
      <div className=" w-full flex justify-around items-center mt-10 border p-4 rounded-xl">
        <span className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]    text-secondary-text dark:text-gray-10">
          Subscriber
        </span>
        <span className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]    text-secondary-text dark:text-gray-10">
          Status
        </span>
        <span className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]    text-secondary-text dark:text-gray-10">
          Since
        </span>
        <span className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]    text-secondary-text dark:text-gray-10">
          Total
        </span>
      </div>
      <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]    text-secondary-text dark:text-gray-10 w-full text-center my-4">
        No data Aavalibale{" "}
      </p>
      <div className=" w-full flex justify-center gap- items-center border p-4 rounded-xl">
        <span className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]    text-secondary-text dark:text-gray-10">
          <MemberPlayIcon />
        </span>
        <span className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]    text-secondary-text dark:text-gray-10 lg:mx-16 sm:mx-10 mx-8">
          -
        </span>
        <span className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]    text-secondary-text dark:text-gray-10">
          <MembershipPauseIcon />
        </span>
      </div>
    </div>
  );
};

export default MembershipSetup;
