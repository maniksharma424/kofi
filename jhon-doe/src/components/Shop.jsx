import React from "react";
import UserSettingPannel from "./UserSettingPannel";

import PaymentMethods from "./PaymentMethods";
import DonationzSettings from "./DonationzSettings";
import AdvancedSettings from "./AdvancedSettings";
import MembershipSettingPannel from "./MembershipSettingPannel";
import ShopSettongPannel from "./ShopsettingPannel";
import Button from "./Button";

const Shop = () => {
  return (
    <div className="flex flex-col w-full">
      <ShopSettongPannel />

      <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-2xl mt-10 shadow-payments">
        <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
          Status
        </p>
        <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70">
          Show or hide your shop tap on your page
        </p>
        <input
          type="text"
          className="w-full border h-10 mt-3 rounded-xl lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:bg-gloss-dark dark:text-gray-10/70 px-4 focus:outline-none "
          placeholder="US$"
        />
      </div>
      <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-2xl mt-10 shadow-payments">
        <div className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10 w-full flex justify-between items-center ">
          <span>Products</span>
          <Button
            className={
              "px-4 sm:py-2 py-1 lg:text-[15px] sm:text-[10px] text-[10px] font-[400] text-gray-10 sm:rounded-3xl rounded-2xl "
            }
          >
            Add product
          </Button>
        </div>
        <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70">
          Add your first product to get starts!
        </p>
      </div>
      <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-2xl mt-10 shadow-payments">
        <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
          Contact Details
        </p>
        <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70">
          Provide an email adress so that your buyers can contact you after they
          place an order
        </p>
        <input
          type="text"
          className="w-full border h-10 mt-3 rounded-xl lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:bg-gloss-dark dark:text-gray-10/70 px-4 focus:outline-none"
          placeholder="Junaidabbas@gmail.com"
        />
      </div>
      <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-2xl mt-10 shadow-payments">
        <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
          Categories
        </p>
        <Button
          className={
            "px-4 sm:py-2 py-1 lg:text-[15px] sm:text-[10px] text-[10px] font-[400] text-gray-10 sm:rounded-3xl rounded-2xl flex justify-center items-center sm:w-1/6 w-5/6 mt-5 "
          }
        >
          Add Categories
        </Button>
      </div>
      <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-2xl mt-10 shadow-payments">
        <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
          Sharing
        </p>
        <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70">
          Preview img
        </p>
        <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70 mt-3">
          Upload a img thatrepresents your shop for sharing on social media
        </p>

        <div className="w-full border h-12 mt-3 rounded-xl lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:bg-gloss-dark dark:text-gray-10/70 px-4 focus:outline-none flex justify-start items-center">
          <Button
            className={
              "px-4  py-1 lg:text-[15px] sm:text-[10px] text-[10px] font-[400] text-gray-10 sm:rounded-3xl rounded-2xl flex justify-center items-center  "
            }
          >
            Browse
          </Button>
          <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70 ml-2">
            Optional
          </p>
        </div>
      </div>
      <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-2xl mt-10 shadow-payments">
        <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
          Additional Setting
        </p>
        <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70">
          Preview img
        </p>
        <div className="lg:text-[14px] sm:text-[11px] text-[14px]  font-[400] text-secondary-text dark:text-gray-10/70 mt-3f flex justify-start items-center mt-3">
          <input
            type="checkbox"
            className=" accent-red mr-3 dark:bg-gloss-dark"
          />
          <span>Require Supporter telephone number for physical shipping</span>
        </div>
        <div className="lg:text-[14px] sm:text-[11px] text-[14px]  font-[400] text-secondary-text dark:text-gray-10/70 mt-3f flex justify-start items-center mt-1 ">
          <input
            type="checkbox"
            className=" accent-red mr-3 dark:bg-gloss-dark"
          />
          <span>Require Supporter telephone number for physical shipping</span>
        </div>
      </div>
      <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-2xl mt-10 shadow-payments">
        <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
          Discounts:
          <span className="lg:text-[15px] sm:text-[12px] text-[14px]  font-[400] text-secondary-text dark:text-gray-10/70 ml-1">
            Promote your shop with shareable.
            <span className="text-[#4C8DEE] ml-1">Discounts</span>
          </span>
        </p>
      </div>
      <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-2xl mt-10 shadow-payments">
        <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
          Sale tax:
          <span className="lg:text-[15px] sm:text-[12px] text-[14px]  font-[400] text-secondary-text dark:text-gray-10/70 ml-1">
            If you can change sale tex, you can manage that.
            <span className="text-[#4C8DEE] ml-1">Here</span>
          </span>
        </p>
      </div>
      <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-2xl mt-10 shadow-payments">
        <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
          Feedback!
        </p>
        <p className="lg:text-[15px] sm:text-[10px] text-[8px] font-[400]   text-secondary-text dark:text-gray-10">
          Please leave feedback!
          <span className="lg:text-[15px] sm:text-[12px] text-[8px]  font-[400] text-secondary-text dark:text-gray-10/70 ml-1">
            <span className="text-[#4C8DEE] ml-1">Here</span>
          </span>
        </p>
        <p className="lg:text-[15px] sm:text-[10px] text-[8px] font-[400]   text-secondary-text dark:text-gray-10">
          You can read our FAQs
          <span className="lg:text-[15px] sm:text-[12px] text-[8px]  font-[400] text-secondary-text dark:text-gray-10/70 ml-1">
            <span className="text-[#4C8DEE] ml-1">Here</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Shop;
