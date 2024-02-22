import React from "react";
import UserSettingPannel from "./UserSettingPannel";

import PaymentMethods from "./PaymentMethods";
import DonationzSettings from "./DonationzSettings";
import AdvancedSettings from "./AdvancedSettings";

const PageSetting = () => {
  return (
    <div className="flex flex-col w-full">
      <UserSettingPannel />

      <PaymentMethods />

      <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-2xl mt-10 shadow-payments">
        <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
          Currency
        </p>
        <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70">
          Choose the currency you want your Supports to pay.
        </p>
        <input
          type="text"
          className="w-full border h-10 mt-3 rounded-xl lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:bg-gloss-dark dark:text-gray-10/70 px-4 focus:outline-none"
          placeholder="US$"
        />
      </div>

      <DonationzSettings />

      <AdvancedSettings />
    </div>
  );
};

export default PageSetting;
