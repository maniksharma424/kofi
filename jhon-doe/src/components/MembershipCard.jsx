import React from "react";
import Tick from "./Tick";

const MembershipCard = ({ plan }) => {
  return (
    <div
      className={`flex flex-col justify-start items-start lg:py-[28px] lg:px-[20px] sm:py-[19px] sm:px-[15px] py-[37px] px-[30px] shadow-membership-card sm:w-1/4 w-full rounded-[7px] dark:border dark:border-gray-10/70 ${
        plan.name === "Premium" && "bg-red "
      }`}
    >
      <p
        className={` lg:text-[20px] font-[700] lg:leading-[19px] text-[14px] leading-[16px] dark:text-gray-10 ${
          plan.name === "Premium" ? " text-gray-10" : "text-primary-text"
        }`}
      >
        {plan.name}
      </p>
      <p
        className={`  ${
          plan.name === "Premium" ? " text-gray-10" : "text-secondary-text"
        } dark:text-gray-10/70 mt-2 lg:text-[14px] lg:leading-[25px] text-[9px] leading-[13px]`}
      >
        {plan.tag}
      </p>
      <p
        className={`${
          plan.name === "Premium" ? " text-gray-10" : "text-primary-text"
        } lg:text-[29px] font-[700] lg:leading-[43px] text-[19px] leading-[31px] dark:text-gray-10 mt-4`}
      >
        ${plan.price}/<span className=" text-[20px]">year</span>
      </p>
      <button
        className={`w-full py-[7px] flex justify-center items-center rounded-[5px] font-[700] shadow-buy-now sm:my-8 my-4  ${
          plan.name === "Premium"
            ? " text-red bg-gray-10"
            : "bg-red text-gray-10"
        }`}
      >
        BUY NOW
      </button>
      {plan.features.map((feature) => {
        return (
          <p
            key={feature}
            className={`flex justify-start items-center ${
              plan.name === "Premium" ? " text-gray-10" : "text-secondary-text"
            } dark:text-gray-10/70 mt-2 lg:text-[14px] lg:leading-[25px] text-[9px] leading-[13px]`}
          >
            <Tick />
            <span className="ml-2">{feature}</span>
          </p>
        );
      })}
    </div>
  );
};

export default MembershipCard;
