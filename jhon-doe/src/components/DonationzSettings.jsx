import React from "react";
import Toggle from "./Toggle";

const DonationzSettings = () => {
  return (
    <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-2xl mt-10 shadow-payments">
      <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
        Donation Setting
      </p>
      <p className="lg:text-[12px] sm:text-[9px] text-[12px]  text-secondary-text  font-[400]       dark:text-gray-10/70">
        Customize the donation panel on your page
      </p>
      <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10 mt-3">
        Chose a donation mood
      </p>

      <div className="w-full flex  justify-start border items-center border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-2xl gap-3 mt-2">
        <input type="radio" className=" border accent-red" />
        <div>
          <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
            Ko-fi donation
          </p>
          <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70">
            Use the ko-fi metaphore (or) change coffee to anyothing you like
          </p>
        </div>
      </div>
      <div className="w-full flex  justify-start border items-center border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-2xl gap-3 mt-2">
        <input type="radio" className=" border accent-red" />
        <div>
          <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
            Simple Donation
          </p>
          <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70">
            Use the ko-fi metaphore (or) change coffee to anyothing you like Use
            the ko-fi metaphore (or) change coffee to anyothing you likeUse the
            ko-fi metaphore (or) change coffee to anyothing you like
          </p>
        </div>
      </div>
      <div className="w-full lg:h-[339px] h-[241px]  bg-[#333333e6] relative rounded-2xl mt-10">
        <div className=" sm:w-1/3 w-2/4 h-5/6 bg-gray-10 sm:left-1/3 left-1/4  absolute  lg:bottom-[30px] bottom-[20px] rounded-lg z-[999] lg:p-4 p-2  ">
          <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
            Support Chai
          </p>
          <input
            type="text"
            className=" w-full border p-2 rounded-lg lg:mt-4 mt-2 lg:text-[12px] sm:text-[8px] text-[6px] font-[400]   text-primary-text dark:text-gray-10"
            placeholder="$5"
          />
          <textarea
            type="text"
            className=" w-full border p-2 lg:mt-4 mt-2 lg:h-24 h-16  lg:text-[12px] sm:text-[8px] text-[6px] font-[400]   text-primary-text dark:text-gray-10 rounded-lg"
            placeholder="Your message"
          />
          <button className=" lg:mt-4 mt-2 w-full bg-black/80 py-1 rounded-lg text-gray-10 dark:bg-red lg:text-[12px] sm:text-[8px] text-[6px] font-[400]  ">
            Donate
          </button>
        </div>
      </div>
      <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10 mt-10">
        Enable suggested mood
      </p>

      <p className="lg:text-[12px] sm:text-[9px] text-[12px]  text-secondary-text  font-[400]       dark:text-gray-10/70">
        You can set up to 3 suggested amounts
      </p>
      <div className="w-full mt-2">
        <label className=" text-primary-text  text-[16px] font-[400] dark:text-gray-10">
          Minimum Price
        </label>
        <input
          type="text"
          className=" w-full border border-black/10 rounded-[4px] px-5 py-2  text-secondary-text text-[13px] focus:outline-none font-[400] dark:bg-gloss-dark dark:border-gray-10/70 mt-1"
          placeholder="5"
        />
      </div>
      <div className="w-full mt-7">
        <label className=" text-primary-text  text-[16px] font-[400] dark:text-gray-10">
          Donate or tip wording
        </label>
        <input
          type="text"
          className=" w-full border border-black/10 rounded-[4px] px-5 py-2  text-secondary-text text-[13px] focus:outline-none font-[400] dark:bg-gloss-dark dark:border-gray-10/70 mt-1"
          placeholder="Donate"
        />
      </div>
      <div className="w-full mt-7">
        <label className=" text-primary-text  text-[16px] font-[400] dark:text-gray-10">
          Auto thank you message
        </label>
        <p className="lg:text-[12px] sm:text-[9px] text-[12px]  text-secondary-text  font-[400]       dark:text-gray-10/70">
          Choose the currency you want your Supports to pay.
        </p>
        <textarea
          type="text"
          className=" w-full border h-24 border-black/10 rounded-[4px] px-5 py-2  text-secondary-text text-[13px] focus:outline-none font-[400] dark:bg-gloss-dark dark:border-gray-10/70 mt-1 dark:text-gray-10/70"
          placeholder="Choose the currency you want your Supports to pay."
        />
      </div>

      <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10 mt-5">
        Membership and monthly Donation
      </p>
      <p className="lg:text-[12px] sm:text-[9px] text-[12px]  text-primary-text  font-[400] my-1       dark:text-gray-10/70">
        Monty donation activity
      </p>
      <p className="lg:text-[12px] sm:text-[9px] text-[12px]  text-secondary-text  font-[400]       dark:text-gray-10/70">
        Choose the currency you want your Supports to pay.{" "}
        <span className=" text-[#4C8DEE]">Membership page</span>
      </p>
      <div className="w-full flex justify-between mt-5">
        <span className="lg:text-[16px] text-primary-text sm:text-[11px] text-[14px] font-[400] dark:text-gray-10 flex flex-col">
          <span>Default to monthly Donation</span>
          <span className="lg:text-[12px] sm:text-[9px] text-[12px]  text-secondary-text  font-[400] my-1       dark:text-gray-10/70">
            You can set up to 3 suggested amounts
          </span>
        </span>
        <Toggle />
      </div>
    </div>
  );
};

export default DonationzSettings;
