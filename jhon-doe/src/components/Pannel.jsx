import Image from "next/image";
import React from "react";

const Pannel = () => {
  const buttons = [
    "Feed",
    "Blog",
    "Podcast",
    "Newsletter",
    "Membership",
    "Shop",
    "Calendar",
  ];
  return (
    <div className="w-full flex  justify-center lg:gap-12 sm:gap-8 gap-2 items-center lg:mt-[170px] sm:mt-[125px] mt-[105px] border-b border-[#DDDDDE] relative pb-5 dark:border-[#252930]">
      {buttons.map((button, index) => {
        return (
          <button
            key={button}
            className={` lg:text-[22px] sm:text-[16px] text-[10px] ${
              index === 0 ? "text-red" : "text-primary-text dark:text-white font-[700]"
            }`}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

export default Pannel;
