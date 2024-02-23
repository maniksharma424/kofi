import Image from "next/image";
import React from "react";

const FeatureButton = ({ info }) => {
  const { url, name } = info;
  return (
    <button className=" border-r-[2.8px] border-b-[3.5px] rounded-[12px] border-[#FFF] pl-[6.84px] pr-[8.92px] pt-[3.42px] pb-[6.27px] bg-[#F7EEDF] flex justify-start items-center dark:border-[#0D0D0D] dark:bg-[#34260D]">
      <Image src={url} height={15} width={15} alt="logo" />
      <span className=" ml-[5px] text-primary-text text-[12px] font-[700] leading-[15px] dark:text-[#d186ffcc]">
        {name}
      </span>
    </button>
  );
};

export default FeatureButton;
