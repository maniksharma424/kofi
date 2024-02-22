import React from "react";
import Toggle from "./Toggle";

const AdvancedSettings = () => {
  return (
    <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-2xl mt-10 shadow-payments">
      <div className="w-full flex justify-between mt-5">
        <span className="lg:text-[16px] text-primary-text sm:text-[11px] text-[14px] font-[400] dark:text-gray-10 flex flex-col w-3/5">
          <span>Advancde</span>
          <span className="lg:text-[12px] sm:text-[9px] text-[12px]  text-secondary-text  font-[400] my-1       dark:text-gray-10/70">
            Become a contributor to unlock more futures
          </span>
          <span className="lg:text-[12px] sm:text-[9px] text-[12px]  text-secondary-text  font-[400] my-1       dark:text-gray-10/70">
            and scrambled it to make a type specimen book.  Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.#
          </span>
        </span>
        <Toggle />
      </div>
    </div>
  );
};

export default AdvancedSettings;
