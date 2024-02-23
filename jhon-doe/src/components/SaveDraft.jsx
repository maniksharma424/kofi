import React from "react";
import Button from "./Button";

const SaveDraft = () => {
  return (
    <div className="sm:w-2/5 w-full">
      <div className="w-full flex justify-end items-center">
        <button
          className={
            "px-4 sm:py-2 py-1 lg:text-[15px] sm:text-[10px] text-[10px] font-[400] bg-gray-10 border-red border sm:rounded-3xl rounded-2xl  text-red  dark:bg-gloss-dark"
          }
        >
          See 2 Draft & Schedule
        </button>
      </div>

      <div className="w-full lg:p-6 border sm:p-4 p-2 rounded-md mt-10 shadow-payments">
        <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
          Add album art
        </p>
        <Button
          className={
            "px-4 sm:py-2 py-1 lg:text-[15px] sm:text-[10px] text-[10px] font-[400] text-gray-10 sm:rounded-3xl rounded-2xl flex justify-center items-center my-5 "
          }
        >
          Browse
        </Button>
        <div className=" w-full">
          <label className=" text-primary-text  text-[16px] font-[400] dark:text-gray-10">
            Tag
          </label>

          <input
            type="text"
            className=" w-full border border-black/10 rounded-[4px] px-5 py-2  text-secondary-text text-[13px] focus:outline-none font-[400] dark:bg-gloss-dark dark:border-gray-10/70 mt-1"
            placeholder="Story"
          />
        </div>
        <div className=" w-full my-5">
          <label className=" text-primary-text  text-[16px] font-[400] dark:text-gray-10">
            Audience
          </label>

          <input
            type="text"
            className=" w-full border border-black/10 rounded-[4px] px-5 py-2  text-secondary-text text-[13px] focus:outline-none font-[400] dark:bg-gloss-dark dark:border-gray-10/70 mt-1"
            placeholder="Every one ( public )"
          />
        </div>

        <Button
          className={
            "px-4 sm:py-2 py-1 lg:text-[15px] sm:text-[10px] text-[10px] font-[400] text-gray-10 sm:rounded-3xl rounded-2xl flex justify-center items-center "
          }
        >
          Publish
        </Button>
        <p className="w-full text-center underline lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70 mt-5">
          Save Draft
        </p>
      </div>
    </div>
  );
};

export default SaveDraft;
