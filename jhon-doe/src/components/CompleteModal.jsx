import GreenTick from "@/icons/GreenTick";
import React from "react";
import Button from "./Button";

const CompleteModal = () => {
  return (
    <div className="sm:w-[500px]  sm:h-[300px] w-[300px] h-[250px] bg-gray-10 dark:bg-gloss-dark z-[600] sm:rounded-[10px] rounded-[14px] flex flex-col justify-start items-center py-10 relative">
      <GreenTick />
      <p className=" text-primary-text sm:text-[20px] font-[700] dark:text-white leading-[20px] mt-3">
        Here’s Your KO-fi page!
      </p>
      <p className=" text-primary-text sm:text-[20px] font-[700] dark:text-white">
        chai847307
      </p>
      <p className=" text-secondary-text text-[16px] font-[500] leading-[20px]  dark:text-[#ffffff99] my-2">
        Personalize and share it.
      </p>
      <Button
        className={
          " sm:py-[10px] sm:px-[26px] py-[8px] px-[16px] rounded-[20px] sm:rounded-[50px]"
        }
      >
        OK
      </Button>
    </div>
  );
};

export default CompleteModal;
