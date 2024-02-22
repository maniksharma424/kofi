import React from "react";

const Pendingcard = () => {
  return (
    <div className="w-full p-5 bg-[#F5F6F8] dark:bg-gloss-dark dark:border dark:border-gray-10 rounded-[6px]">
      <p className=" text-primary-text dark:text-gray-10 lg:text-[21px] font-[400] sm:text-[18px] text-[15px]">
        Pending Payments
      </p>
      <p className="text-transparent  bg-clip-text bg-pending-earning lg:text-[29px] font-[500] sm:text-[23px] text-[20px] my-2">
        ₹100.00
      </p>
      <p className=" text-secondary-text dark:text-gray-10 lg:text-[13px] font-[400] sm:text-[10px] text-[8px] ">
        as of 01-December 2022
      </p>
    </div>
  );
};

export default Pendingcard;
