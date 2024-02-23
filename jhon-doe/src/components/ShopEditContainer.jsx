import AlignText from "@/icons/AlignText";
import BoldIcon from "@/icons/BoldIcon";
import ItalicIcon from "@/icons/ItalicIcon";
import LinkText from "@/icons/LinkText";
import Underline from "@/icons/Underline";
import React from "react";

const ShopEditContainer = () => {
  return (
    <div className="sm:w-2/5 w-full lg:p-4 sm:p-2 p-2 border rounded-md mt-10 shadow-payments">
      <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
        URL
      </p>
      <input
        type="text"
        className="w-full border h-10 mt-3 rounded-md lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:bg-gloss-dark dark:text-gray-10/70 px-4 focus:outline-none"
        placeholder="https://www.figma.com/file/pTwL6A4JUY6ah1SVq6FIN9"
      />
      <input
        type="text"
        className="w-full border h-10 mt-3 rounded-md lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:bg-gloss-dark dark:text-gray-10/70 px-4 focus:outline-none"
        placeholder="Its nont,nt,never gonna give you up"
      />

      <div className=" w-full flex flex-col px-4 py-2 border mt-5 lg:h-[350px]  rounded-md">
        <div className="w-full flex justify-between px-3 items-center py-2 border-b text-primary-text dark:text-gray-10/70">
          <span>
            <BoldIcon />
          </span>
          <span>
            <ItalicIcon />
          </span>
          <span>
            <AlignText />
          </span>
          <span>
            <Underline />
          </span>
          <span>
            <LinkText />
          </span>
        </div>
        <textarea
          placeholder="You cloud be rick rolled or not"
          className=" w-full flex-1 resize-none focus:outline-none lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70 sm:p-3 p-2 dark:bg-gloss-dark"
        ></textarea>
      </div>
    </div>
  );
};

export default ShopEditContainer;
