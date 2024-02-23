import React from "react";
import Button from "./Button";
import { ideas } from "@/constants/constants";
const CreatedNew = () => {
  return (
    <div className="w-full">
      <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-md mt-10 shadow-sm">
        <input
          type="text"
          className="w-full border h-10 mt-3 rounded-md lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:bg-gloss-dark dark:text-gray-10/70 px-4 focus:outline-none"
          placeholder="Set your minimum price per month. Supporters can choose "
        />
        <Button
          className={
            "px-4 sm:py-2 py-1 w-full lg:text-[14px] sm:text-[12px] text-[10px] font-[400] text-gray-10   flex justify-center items-center my-5 "
          }
        >
          Add benefit
        </Button>
        <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70 my-2">
          Here are some ideas to offers to your fans
        </p>

        {ideas.map((idea) => {
          return (
            <div
              className="w-full border shadow-sm py-3 flex justify-between items-center px-4 my-5"
              key={idea.name}
            >
              <div className="flex justify-start items-center text-primary-text dark:text-gray-10">
                {idea.icon}
                <span className="lg:text-[15px] sm:text-[12px] text-[10px]  font-[400] text-primary-text dark:text-gray-10/70  ml-2">
                  {idea.name}
                </span>
              </div>
              <Button className={"lg:px-4 px-2 py-1 rounded-2xl lg:text-[14px] sm:text-[12px] text-[10px] font-[400] text-gray-10 "}>Add</Button>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default CreatedNew;
