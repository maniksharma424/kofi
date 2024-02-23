import React from "react";
import AddProductImage from "./AddProductImage";
import Button from "./Button";
import AddShippingInfo from "./AddShippingInfo";
import AdditionalOptions from "./AdditionalOptions";
import PublishProduct from "./PublishProduct";

const CreateListing = () => {
  return (
    <div className="w-full">
      <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-md mt-10 shadow-sm">
        <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
          Name
        </p>
        {/* <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70">
        Choose the currency you want your Supports to pay.
      </p> */}
        <input
          type="text"
          className="w-full border h-10 mt-3 rounded-md lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:bg-gloss-dark dark:text-gray-10/70 px-4 focus:outline-none"
          placeholder="Ali raj"
        />
      </div>
      <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-md mt-10 shadow-sm">
        <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
          Description
        </p>
        <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70 my-2">
          Give a clear sescription of what the buyer can expact.
        </p>
        <textarea
          type="text"
          className=" w-full border h-24 border-black/10 rounded-[4px] px-5 py-2  text-secondary-text text-[13px] focus:outline-none font-[400] dark:bg-gloss-dark dark:border-gray-10/70 mt-1"
          placeholder="Jhon Doe"
        />
      </div>
      <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-md mt-10 shadow-sm">
        <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
          Instructions to buyer
        </p>
        <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70 my-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem
        </p>
        <textarea
          type="text"
          className=" w-full border h-24 border-black/10 rounded-[4px] px-5 py-2  text-secondary-text text-[13px] focus:outline-none font-[400] dark:bg-gloss-dark dark:border-gray-10/70 mt-1"
          placeholder="Jhon Doe"
        />
      </div>
      <AddProductImage />
      <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-md mt-10 shadow-sm">
        <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
          Price
        </p>
        <input
          type="text"
          className="w-full border h-10 mt-3 rounded-md lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:bg-gloss-dark dark:text-gray-10/70 px-4 focus:outline-none"
          placeholder="$20"
        />
        <div className=" flex justify-start w-full items-center my-2">
          <input type="checkbox" className=" accent-red" />
          <p className="lg:text-[15px] sm:text-[10px] text-[8px] font-[400]   text-secondary-text dark:text-gray-10 ml-2">
            Enable ‘pay what you want’
          </p>
        </div>
        <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70 my-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem
        </p>
      </div>
      <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-md mt-10 shadow-sm">
        <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
          Add-ons
        </p>
        <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem
        </p>
        <Button
          className={
            "px-4 sm:py-2 py-1 sm:w-2/5 w-full lg:text-[12px] sm:text-[9px] text-[7px] font-[400] text-gray-10 sm:rounded-3xl rounded-2xl flex justify-center items-center my-5 "
          }
        >
          Add an Add-on
        </Button>
      </div>
      <AddShippingInfo />
      <Button
        className={
          "px-4 sm:py-2 py-1 sm:w-2/5 w-full lg:text-[12px] sm:text-[9px] text-[7px] font-[400] text-gray-10 sm:rounded-3xl rounded-2xl flex justify-center items-center my-5 "
        }
      >
        Add a Destination
      </Button>
      <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-md mt-10 shadow-sm">
        <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
          Shipping information
        </p>
        <input
          type="text"
          className="w-full border h-10 mt-3 rounded-md lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:bg-gloss-dark dark:text-gray-10/70 px-4 focus:outline-none"
          placeholder="Provide additional shipping information to your buyers  ( devilry time  etc )"
        />
      </div>
      <AdditionalOptions />

      <PublishProduct />
    </div>
  );
};

export default CreateListing;
