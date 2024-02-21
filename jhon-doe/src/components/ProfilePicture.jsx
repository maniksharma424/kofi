import React from "react";
import Button from "./Button";
import UploadPicture from "@/icons/UploadPicture";
import DefaultProfilePicture from "@/icons/DefaultProfilePicture";
import LightBulb from "./LightBulb";
import DefaultProfilePicturedDark from "@/icons/DefaultProfilePicturedDark";

const ProfilePicture = () => {
  return (
    <div className="w-full bg-gray-10 dark:bg-gloss-dark px-5 pt-5 lg:px-[30px] lg:pt-[30px] mt-10 flex flex-col justify-start items-start pb-5 rounded-[10px] shadow-confirm-email">
      <p className="lg:text-[19px] font-[700] text-[13px] leading-[14px] lg:leading-[20px] text-[#333] dark:text-gray-10">
        Choose your profile picture
      </p>
      <div className="w-full rounded-[40px] bg-[#F7F7F7] flex justify-center items-center my-5 lg:py-[15px] py-[8px] dark:bg-[#151515] dark:text-gray-10">
        <UploadPicture />
        <span className=" text-primary-text dark:text-gray-10 font-[600] leading-[20px]  ml-2 ">
          Choose image....
        </span>
      </div>
      <div className="w-full flex justify-center items-center  dark:hidden">
        <DefaultProfilePicture />
      </div>
      <div className="w-full dark:flex justify-center items-center hidden ">
        <DefaultProfilePicturedDark />
      </div>
      <div className="w-full lg:px-[25px] px-3 lg:py-[20px] py-[10px] bg-[#F7F7F7] rounded-[18px]   flex justify-start items-center my-5 dark:bg-[#151515]">
        <LightBulb />
        <span className=" text-secondary-text flex-1 lg:text-[16px] text-[14px] font-[400] leading-[20px] flex justify-center pl-4 border-l border-gray-200 ml-5 dark:text-[#ffffff99]">
          you can change this at any time!
        </span>
      </div>
      <Button
        className={
          "w-full flex justify-center items-center lg:py-[10px] py-2 rounded-[20px]"
        }
      >
        Next
      </Button>
    </div>
  );
};

export default ProfilePicture;
