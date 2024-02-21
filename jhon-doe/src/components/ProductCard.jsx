import RatedStar from "@/icons/RatedStar";
import UnratedStar from "@/icons/UnratedStar";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import Heart from "@/icons/Heart";

const ProductCard = () => {
  return (
    <div className="w-full lg:p-5 sm:p-4 p-3 border-[#DDE0E5] dark:border-[#252930] border shadow-product-card  lg:rounded-[11px] sm:rounded-[8px] rounded-[11px]  flex flex-col justify-start items-start">
      <Image
        src={
          "https://s3-alpha-sig.figma.com/img/2a11/4986/5e026bf36ddd0e5b0613dc254210c9e1?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ImOsJwnYcWE5AC2QMMLtoC6VG7DYyw3rsFMAIwY-aGWAoiKvYb928ZUoYagYQnvHc5bWcGFlUH6uDPXonjE26WERZuvKIoNYVGdLPXS0~LgcC3MkamFMxHEYQAZsO8IKHbqFyVpdSH~sI2E888Joh0vZd79J9RSZrxvIdRTBYtsHxOkz~Ym2Z9BjWGRokynCtFUWONgrLjPBF-oghkOuaYB0kRYUjD6Xgt3T~emK~a5Nz~VF~nOtTM7vB-e7Kha0SN8NVHfuCwMRB1AwqsovNOFQERKwCDuwYSuShsJsoRA-nqJeX2ju-q1w7Z7~FJdpMDF3a0tCMjZgKWZNiX-oZA__"
        }
        height={275}
        width={265}
        alt="product"
        className="w-full h-auto object-contain"
      />
      <p className=" text-secondary-text lg:text-[17px] font-[700] lg:leading-[25px] sm:text-[12px] sm:leading-[18px] text-[18px] leading-[27px] dark:text-gray-10/70 mt-10 ">
        $2,500
      </p>
      <p className="text-red lg:text-[20px] font-[600] lg:leading-[30px] sm:text-[14px] sm:leading-[21px] text-[21px] leading-[32px] my-2 ">
        Linen Suit
      </p>
      <div className="flex justify-start items-center  text-secondary-text lg:text-[12px] font-[500] lg:leading-[17px] sm:text-[8px] sm:leading-[12px] text-[12px] leading-[19px] dark:text-gray-10/70 ">
        <RatedStar />
        <RatedStar />
        <RatedStar />
        <UnratedStar />
        <p className=" ml-2">4.7 (134 Reviews)</p>
      </div>
      <p className=" mt-2 mb-4 text-secondary-text lg:text-[14px] font-[400] lg:leading-[23px] sm:text-[10px] sm:leading-[16px] text-[14px] leading-[24px] dark:text-gray-10/70">
        The structured shoulders and sleek detailing.
      </p>
      <p className="text-secondary-text lg:text-[14px] font-[600] lg:leading-[22px] sm:text-[10px] sm:leading-[15px] text-[14px] leading-[23px] dark:text-gray-10/70  mb-2">
        Size
      </p>
      <div className=" flex justify-start items-center gap-2  text-secondary-text lg:text-[12px] lg:font-[600] lg:leading-[17px] sm:text-[8px] font-[500] sm:leading-[12px] text-[12px] leading-[19px] dark:text-gray-10/70">
        <button className="lg:px-[14px] sm:px-[7px] px-[15px]  py-[5px] rounded-[4px]  border  dark:border-[#607D8B] border-[#DDE0E5] bg-[#ECEFF1] text-[#CFD8DC] dark:bg-[#2E3A3F]">
          XS
        </button>
        <button className="lg:px-[14px] sm:px-[7px] px-[15px]  py-[5px] rounded-[4px]  border  border-[#1E293B] text-red dark:border-[#607D8B]">
          S
        </button>
        <button className="lg:px-[14px] sm:px-[7px] px-[15px]  py-[5px] rounded-[4px]  border border-[#DDE0E5] dark:border-[#607D8B]">
          M
        </button>
        <button className="lg:px-[14px] sm:px-[7px] px-[15px]  py-[5px] rounded-[4px]  border border-[#DDE0E5] dark:border-[#607D8B]">
          L
        </button>
      </div>
      <div className="w-full flex justify-start items-center sm:mt-8 mt-5 ">
        <Button
          className={
            "py-2 flex-1 flex justify-center items-center  rounded-[6px]  lg:text-[11px] lg:font-[700] lg:leading-[15px] sm:text-[8px] font-[700] sm:leading-[10px] text-[10px] leading-[16px] dark:text-gray-10/70"
          }
        >
          ADD TO CART
        </Button>
        <span className=" ml-2">
          <Heart />
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
