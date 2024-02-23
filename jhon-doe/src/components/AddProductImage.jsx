import AddImage from "@/icons/AddImage";
import React from "react";

const AddProductImage = () => {
  return (
    <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-md mt-10 shadow-sm">
      <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
        Preview image
      </p>
      <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70 my-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem
      </p>
      <div
        type="text"
        className=" w-full border lg:h-48 sm:h-40 h-32 border-black/10 rounded-[4px] px-5 py-2  text-secondary-text dark:text-gray-10/70 dark:bg-gloss-dark dark:border-gray-10/70 mt-1 flex flex-col justify-center items-center"
      >
        <AddImage />
        <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70 my-2">
          Click here to add img
        </p>
      </div>
    </div>
  );
};

export default AddProductImage;
