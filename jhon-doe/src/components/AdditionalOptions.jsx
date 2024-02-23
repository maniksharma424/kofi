import React from "react";

const AdditionalOptions = () => {
  return (
    <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-md mt-10 shadow-sm">
      <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
        Additional options
      </p>

      <div className=" flex justify-start w-full items-center my-2">
        <input type="checkbox" className=" accent-red" />
        <p className="lg:text-[15px] sm:text-[10px] text-[8px] font-[400]   text-secondary-text dark:text-gray-10 ml-2">
          Leave a message or instructions for buyers
        </p>
      </div>
      <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70 my-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, a.
      </p>
      <textarea
        type="text"
        className=" w-full border h-24 border-black/10 rounded-[4px] px-5 py-2  text-secondary-text text-[13px] focus:outline-none font-[400] dark:bg-gloss-dark dark:border-gray-10/70 mt-1"
        placeholder="Jhon Doe"
      />
      <div className=" flex justify-start w-full items-center my-2">
        <input type="checkbox" className=" accent-red" />
        <p className="lg:text-[15px] sm:text-[10px] text-[8px] font-[400]   text-secondary-text dark:text-gray-10 ml-2">
          Limit the quantity available
        </p>
      </div>
      <input
        type="text"
        className="w-full border h-10 mt-3 rounded-md lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:bg-gloss-dark dark:text-gray-10/70 px-4 focus:outline-none"
        placeholder="Set maximum numbers of purchases"
      />
      <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10 mt-5">
        Who can request this item
      </p>
      <div className=" flex justify-start w-full items-center my-1">
        <input type="radio" className=" accent-red" />
        <p className="lg:text-[15px] sm:text-[10px] text-[8px] font-[400]   text-secondary-text dark:text-gray-10 ml-2">
          Everyone
        </p>
      </div>
      <div className=" flex justify-start w-full items-center my-1">
        <input type="radio" className=" accent-red" />
        <p className="lg:text-[15px] sm:text-[10px] text-[8px] font-[400]   text-secondary-text dark:text-gray-10 ml-2">
          Monthly supporters
        </p>
      </div>
      <div className=" flex justify-start w-full items-center my-1">
        <input type="radio" className=" accent-red" />
        <p className="lg:text-[15px] sm:text-[10px] text-[8px] font-[400]   text-secondary-text dark:text-gray-10 ml-2">
          Specific frends
        </p>
      </div>
      <div className=" flex justify-start w-full items-center my-1">
        <input type="radio" className=" accent-red" />
        <p className="lg:text-[15px] sm:text-[10px] text-[8px] font-[400]   text-secondary-text dark:text-gray-10 ml-2">
          Lolas Friends
        </p>
      </div>
    </div>
  );
};

export default AdditionalOptions;
