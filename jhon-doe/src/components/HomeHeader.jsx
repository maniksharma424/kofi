"use client";
import Avatar from "@/icons/Avatar";
import Burger from "@/icons/Burger";
import HeaderLogo from "@/icons/HeaderLogo";
import HomeBurger from "@/icons/HomeBurger";
import React, { useState } from "react";
import Menu from "./Menu";

const HomeHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full lg:px-[107px] sm:px-[73px] px-[30px] py-[19px] sm:py-[15px] lg:py-[20px] flex justify-between items-center shadow-home-header">
      <HeaderLogo />
      <div className="flex justify-start items-center">
        <span className="sm:block hidden">
          <Avatar />
        </span>
        <span
          onClick={() => {
            setShowMenu(true);
          }}
          className="ml-[22px] text-primary-text dark:text-gray-10"
        >
          <HomeBurger />
        </span>
      </div>
      {showMenu && <Menu setShowMenu={setShowMenu}/>}
    </div>
  );
};

export default HomeHeader;
