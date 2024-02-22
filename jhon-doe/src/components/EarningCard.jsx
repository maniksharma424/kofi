import React from "react";

const EarningCard = () => {
  return (
    <div className="w-full p-5 rounded-[6px] dark:border dark:border-gray-10 dark:bg-gloss-dark bg-[#DCFAED]">
      <p className=" text-primary-text dark:text-gray-10 lg:text-[21px] font-[400] sm:text-[18px] text-[15px]">
        Total Earnings
      </p>
      <p className="text-[#0EAD69] lg:text-[29px] font-[500] sm:text-[23px] text-[20px] my-2 flex">
        ₹430.00
      </p>
      <p className=" text-secondary-text dark:text-gray-10 lg:text-[13px] font-[400] sm:text-[10px] text-[8px] ">
        as of 01-December 2022
      </p>
    </div>
  );
};

export default EarningCard;
