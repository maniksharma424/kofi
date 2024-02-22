import Paypal from "@/icons/Paypal";
import Stripe from "@/icons/Stripe";
import React from "react";

const PaymentMethods = () => {
  return (
    <div className="w-full border border-black/10 dark:border-gray-10 lg:p-4 sm:p-2 p-2 rounded-2xl mt-10 shadow-payments">
      <p className="lg:text-[18px] sm:text-[12px] text-[14px] font-[400]   text-primary-text dark:text-gray-10">
        Payment methods
      </p>
      <div className="w-full flex justify-between">
        <span className="flex justify-start items-center">
          <span>
            <Paypal />
          </span>
          <span className="lg:text-[14px] text-[9px]  font-[400] text-secondary-text dark:text-gray-10/70 ml-2">
            Paypal
          </span>
        </span>
        <button className=" border lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] bg-red text-gray-10  rounded-2xl px-4 lg:py-2 py-1  ">
          Connected
        </button>
      </div>
      <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the standard dummy text ever
      </p>
      <div className="w-full flex justify-between mt-3">
        <span className="flex justify-start items-center">
          <span>
            <Stripe />
          </span>
          <span className="lg:text-[14px] text-[9px]  font-[400] text-secondary-text dark:text-gray-10/70 ml-2">
            Stripe
          </span>
        </span>
        <button className=" border  border-[#4C8DEE]  lg:py-2 py-1 lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] rounded-2xl px-4 dark:text-gray-10  ">
          Connect
        </button>
      </div>
      <p className="lg:text-[12px] sm:text-[9px] text-[12px]  font-[400] text-secondary-text dark:text-gray-10/70 ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the standard dummy text ever
      </p>
    </div>
  );
};

export default PaymentMethods;
