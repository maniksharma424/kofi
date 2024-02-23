import React from "react";
import Button from "./Button";

const PublishProduct = () => {
  return (
    <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-md mt-10 shadow-sm">
      <div className=" flex justify-start w-full items-center my-1">
        <input type="checkbox" className=" accent-red" />
        <p className="lg:text-[15px] sm:text-[10px] text-[8px] font-[400]   text-secondary-text dark:text-gray-10 ml-2">
          Leave a message or instructions for buyers
        </p>
      </div>
      <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70 my-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, a.
      </p>
      <Button
        className={
          "px-4 sm:py-2 py-1 w-full lg:text-[14px] sm:text-[12px] text-[10px] font-[400] text-gray-10   flex justify-center items-center my-5 "
        }
      >
        SAVE AND PUBLISH
      </Button>
      <div className=" flex items-center gap-3">
        <button
          className={
            "px-4 sm:py-2 py-1 w-1/2 lg:text-[14px] sm:text-[12px] text-[10px] font-[400] dark:text-gray-10 dark:bg-gloss-dark border-blue-500 text-blue-500 border-[0.5px]   flex justify-center items-center sm:my-2 "
          }
        >
          Cancel
        </button>
        <Button
          className={
            "px-4 sm:py-2 py-1 w-1/2 lg:text-[14px] sm:text-[12px] text-[10px] font-[400] text-gray-10   flex justify-center items-center sm:my-2 "
          }
        >
          Save as draft
        </Button>
      </div>
    </div>
  );
};

export default PublishProduct;
