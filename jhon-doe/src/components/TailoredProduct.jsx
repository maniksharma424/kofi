import ChevronDown from "@/icons/ChevronDown";
import ChevronUo from "@/icons/ChevronUo";
import Refresh from "@/icons/Refresh";
import RefreshMobile from "@/icons/RefreshMobile";
import React from "react";
import Button from "./Button";
import Heart from "@/icons/Heart";
import RatedStar from "@/icons/RatedStar";
import UnratedStar from "@/icons/UnratedStar";
import Image from "next/image";
import TailoredProductcard from "./TailoredProductcard";

const TailoredProduct = () => {
  return (
    <div className="w-full mt-8 sm:flex sm:justify-center ">
      <div className=" sm:w-5/6 w-full">
        <div className="w-full text-center">
          <p className="text-primary-text lg:text-[16px] font-[700] lg:leading-[18px] text-[10px] leading-[16px]  dark:text-gray-10">
            Tailored Product Search
          </p>
          <p className="my-4 text-primary-text lg:text-[31px] font-[700] lg:leading-[37px] text-[17px] leading-[21px]  dark:text-gray-10 ">
            Find What You Need
          </p>
          <p className="my-4 text-secoondary-text lg:text-[14px] font-[400] lg:leading-[24px] text-[9px] leading-[17px]  dark:text-gray-10 ">
            Simplify your shopping experience with our intuitive filter system.
            Whether youre looking for specific features, price ranges, or
            brands, our filters help you quickly narrow down options, so you can
            find exactly what you need with ease.
          </p>
        </div>
        <div className="w-full lg:p-5 sm:p-3 p-2 border-[#CFD8DC] border rounded-[10px]">
          <div className="flex justify-between items-center">
            <p className="text-primary-text lg:text-[19px] font-[700] lg:leading-[32px] sm:text-[13px] sm:leading-[22px] text-[10px] leading-[12px] dark:text-gray-10 ">
              Refine
            </p>

            <Refresh />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-primary-text lg:text-[19px] font-[700] lg:leading-[32px] sm:text-[13px] sm:leading-[22px] text-[10px] leading-[12px] dark:text-gray-10 ">
              Clothing
            </p>
            <div className=" flex justify-start items-center lg:gap-10 sm:gap-1 gap-3">
              {Array(4)
                .fill(1)
                .map((item) => {
                  return (
                    <button
                      key={item}
                      className=" flex justify-start items-center sm:p-2 p-1 text-[#607D8B] lg:text-[14px] font-[600] lg:leading-[21px] sm:text-[10px] sm:leading-[16px] text-[8px] leading-[12px] dark:text-gray-10"
                    >
                      <span className=" sm:block hidden">
                        <ChevronDown />
                      </span>
                      <span className="sm:hidden block">
                        <ChevronUo />
                      </span>
                      <span>Designer</span>
                    </button>
                  );
                })}
            </div>
          </div>
          <div className=" flex justify-start items-center lg:gap-10 sm:gap-4 gap-3">
            {Array(4)
              .fill(1)
              .map((item, index) => {
                return (
                  <button
                    key={item}
                    className={`flex justify-start items-center text-[#607D8B] lg:text-[14px] font-[600] lg:leading-[21px] sm:text-[10px] sm:leading-[16px] text-[8px] leading-[12px] dark:text-gray-10 ${
                      index === 0 ? "p-0" : "sm:p-2 p-1"
                    } `}
                  >
                    <input type="checkbox" className="sm:h-3 sm:w-3 h-2 w-2 " />
                    <span className="ml-2">Designer</span>
                  </button>
                );
              })}
          </div>
        </div>

        <div className="w-full flex justify-between items-start gap-6 mt-8">
          {Array(3)
            .fill(1)
            .map((item) => {
              return <TailoredProductcard key={item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default TailoredProduct;
