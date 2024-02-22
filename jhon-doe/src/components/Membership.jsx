import React from "react";
import MembershipSettingPannel from "./MembershipSettingPannel";
import ChevronDown from "@/icons/ChevronDown";
import Button from "./Button";

const Membership = () => {
  return (
    <div className="flex flex-col w-full">
      <MembershipSettingPannel />

      <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-2xl mt-10 shadow-payments">
        <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
          Membership Mode
        </p>
        <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown
        </p>
        <div className="w-full flex justify-between items-center mt-3 border rounded-2xl px-2">
          <input
            type="text"
            className="w-1/2  h-10  rounded-xl lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:bg-gloss-dark dark:text-gray-10/70 px-4 focus:outline-none"
            placeholder="US$"
          />
          <ChevronDown />
        </div>
      </div>
      <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-2xl mt-10 shadow-payments">
        <div className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10 w-full flex justify-between items-center ">
          <span>Tiers</span>
          <Button
            className={
              "px-4 sm:py-2 py-1 lg:text-[15px] sm:text-[10px] text-[10px] font-[400] text-gray-10 sm:rounded-3xl rounded-2xl "
            }
          >
            Add tiers
          </Button>
        </div>
        <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70 ">
          You donts have any membership tiers yet
        </p>
      </div>
      <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-2xl mt-10 shadow-payments">
        <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
          Feedback
        </p>
        <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70">
          You love your feedback let us how what you thing you can red FAQs
        </p>
      </div>
    </div>
  );
};

export default Membership;
