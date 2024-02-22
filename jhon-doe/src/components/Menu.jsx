import { genralLinks, moreLinks, paymentLinks } from "@/constants/constants";
import Cross from "@/icons/Cross";
import Moon from "@/icons/Moon";
import React from "react";

const Menu = ({ setShowMenu, isUserProfile }) => {
  return (
    <div
      className={`w-[340px]  bg-gray-10 dark:bg-dark dark:text-gray-10   z-[100]  p-[30px] flex flex-col justify-start items-start fixed h-screen overflow-auto  ${
        isUserProfile ? "left-0 top-[80px]" : "right-0 top-0"
      } shadow-md`}
    >
      {!isUserProfile && (
        <div className=" w-full flex justify-end items-center ">
          <span onClick={() => setShowMenu(false)}>
            <Cross />
          </span>
        </div>
      )}
      <ul className="mt-5 w-full flex flex-col justify-start items-start gap-1 pb-4 border-b border-[#E7E7E7]">
        {genralLinks.map((link) => {
          return (
            <li
              key={link.name}
              className="flex w-full justify-start items-center py-[6px] px-[10px] hover:border-[#CDD1FF] border-gray-10 border hover:bg-[#F1EFFF] rounded-[18px] dark:hover:border-[#00064B] dark:hover:bg-[#151515] dark:border-gloss-dark dark:text-gray-10 text-primary-text"
            >
              {link.icon}
              <span className="  text-[18px] font-[400]  ml-5">
                {link.name}
              </span>
            </li>
          );
        })}
      </ul>
      <ul className="mt-5 w-full flex flex-col justify-start items-start gap-4 pb-4 border-b border-[#E7E7E7]">
        {paymentLinks.map((link) => {
          return (
            <li
              key={link.name}
              className="flex w-full justify-start items-center py-[6px] px-[10px] hover:border-[#CDD1FF] border-gray-10 border hover:bg-[#F1EFFF] rounded-[18px] dark:hover:border-[#00064B] dark:hover:bg-[#151515] dark:border-gloss-dark dark:text-gray-10 text-primary-text"
            >
              {link.icon}
              <span className="  text-[18px] font-[400]  ml-5">
                {link.name}
              </span>
            </li>
          );
        })}
      </ul>
      <ul className="mt-5 w-full flex flex-col justify-start items-start gap-4 pb-4 ">
        {moreLinks.map((link) => {
          return (
            <li
              key={link.name}
              className="flex w-full justify-start items-center py-[6px] px-[10px] hover:border-[#CDD1FF] border-gray-10 border hover:bg-[#F1EFFF] rounded-[18px] dark:hover:border-[#00064B] dark:hover:bg-[#151515] dark:border-gloss-dark dark:text-gray-10 text-primary-text"
            >
              {link.icon}
              <span className="  text-[18px] font-[400]  ml-5">
                {link.name}
              </span>
            </li>
          );
        })}
        <li className="flex w-full justify-center items-center py-[6px] px-[10px] hover:border-[#CDD1FF] border-gray-10 border hover:bg-[#F1EFFF] rounded-[18px] dark:hover:border-[#00064B] dark:hover:bg-[#151515] dark:border-gloss-dark dark:text-gray-10 text-primary-text">
          <span className="  text-[18px] font-[400]  ml-5">Share</span>
        </li>
        <li className="flex w-full justify-start items-center py-[6px] px-[10px] hover:border-[#CDD1FF] border-gray-10 border hover:bg-[#F1EFFF] rounded-[18px] dark:hover:border-[#00064B] dark:hover:bg-[#151515] dark:border-gloss-dark dark:text-gray-10 text-primary-text">
          <span className="  text-[18px] font-[400]  ml-5">
            <Moon />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
