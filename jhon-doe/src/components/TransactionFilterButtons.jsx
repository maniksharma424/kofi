import React from "react";

const TransactionFilterButtons = () => {
  return (
    <div className=" mt-5">
      <p className=" text-primary-text lg:text-[29px] sm:text-[20px] text-[18px] font-[500] dark:text-gray-10">
        Payment History
      </p>
      <div className=" flex w-full justify-start gap-4 mt-5 text-primary-text text-center sm:text-[16px] font-[500] text-[10px] dark:text-gray-10/70 ">
        <button className=" border border-[#413B89] sm:py-2 px-2 py-1 w-[100px] sm:w-[125px]    rounded-[30px]">
          Add
        </button>
        <button className=" border border-[#EBEBEE] sm:py-2 py-1 px-2 w-[100px] sm:w-[125px]    rounded-[30px]">
          Completed
        </button>
        <button className=" border border-[#EBEBEE] sm:py-2 py-1 px-2 w-[100px] sm:w-[125px]    rounded-[30px]">
          Pending
        </button>
        <button className=" border border-[#EBEBEE] sm:py-2 py-1 px-2 w-[100px] sm:w-[125px]    rounded-[30px]">
          Rejected
        </button>
      </div>
    </div>
  );
};

export default TransactionFilterButtons;
