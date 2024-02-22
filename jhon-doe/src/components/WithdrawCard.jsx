import AddCard from "@/icons/AddCard";
import CardDeleteIcon from "@/icons/CardDeleteIcon";
import CardNumberIcon from "@/icons/CardNumberIcon";
import CardSaveIcon from "@/icons/CardSaveIcon";
import React from "react";

const WithdrawCard = () => {
  return (
    <div className="w-full p-5 rounded-[6px]  border border-[#F3F4F6] flex flex-col justify-between items-start">
      <div className=" text-primary-text dark:text-gray-10 lg:text-[21px] font-[400] sm:text-[18px] text-[15px] w-full flex justify-between">
        <span>Withdrawal Method</span>
        <button>
          <AddCard />
        </button>
      </div>
      <div className=" text-primary-text dark:text-gray-10 lg:text-[18px] font-[400] sm:text-[6px] text-[15px] flex justify-between w-full">
        <span className="flex items-center justify-start gap-2">
          <CardNumberIcon />
          <span>1502********4832</span>
        </span>
        <span className="flex justify-end gap-1">
          <CardSaveIcon />
          <CardDeleteIcon />
        </span>
      </div>
    </div>
  );
};

export default WithdrawCard;
