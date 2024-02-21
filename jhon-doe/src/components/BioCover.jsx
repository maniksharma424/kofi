import ThreeDots from "@/icons/ThreeDots";
import React from "react";
import BioImage from "./BioImage";
import Image from "next/image";

const BioCover = () => {
  return (
    <>
      <div className="w-full bg-[#F5F5F5] dark:bg-[#5D5D5D] flex justify-end items-start lg:h-[280px] sm:h-[200px] h-[120px] p-5  text-primary-text dark:text-gray-10">
        <ThreeDots />
      </div>
      <div className="absolute left-0 w-full flex flex-col justify-center items-center lg:top-[300px] sm:top-[230px] top-[170px] rounded-[30px] ">
        <Image
          src={
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
          }
          className="rounded-[100px] lg:h-[150px] lg:w-[150px] sm:w-[100px] sm:h-[100px] w-[80px] h-[80px]"
          width={150}
          height={150}
          alt="image"
        />
        <p className=" text-primary-text lg:text-[30px] font-[700] sm:text-[21px]  text-[18px] dark:text-gray-10 ">
          Ali
        </p>
        <p className=" text-secondary-text sm:text-[22px] text-[18px] font-[600]  mt-1 dark:text-[#ffffffcc]">
          ko-fi.com/chai847307
        </p>
      </div>
    </>
  );
};

export default BioCover;
