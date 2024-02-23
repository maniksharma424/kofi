import React from "react";

const AddShippingInfo = () => {
  return (
    <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-md mt-10 shadow-sm">
      <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
        Shipping
      </p>

      <div className=" flex justify-start w-full items-center my-2">
        <input type="checkbox" className=" accent-red" />
        <p className="lg:text-[15px] sm:text-[10px] text-[8px] font-[400]   text-secondary-text dark:text-gray-10 ml-2">
          Requires shipping
        </p>
      </div>
      <div className=" flex justify-start w-full items-center my-2">
        <input type="checkbox" className=" accent-red" />
        <p className="lg:text-[15px] sm:text-[10px] text-[8px] font-[400]   text-secondary-text dark:text-gray-10 ml-2">
          Enable worldwide shipping
        </p>
      </div>
      <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
        Shipping price
      </p>
      <input
        type="text"
        className="w-full border h-10 mt-3 rounded-md lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:bg-gloss-dark dark:text-gray-10/70 px-4 focus:outline-none"
        placeholder="$20"
      />
    </div>
  );
};

export default AddShippingInfo;
