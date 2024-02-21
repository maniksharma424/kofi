import Burger from "@/icons/Burger";
import HeaderLogo from "@/icons/HeaderLogo";
import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <div className="w-full lg:h-[63px] sm:h-[55px] h-[56px] justify-between flex items-center  lg:px-16 sm:px-10 px-6  lg:text-[16px] text-[12px] font-[700] lg:leading-[22px] leading-[16px] sm:shadow-none shadow-header text-[#000] dark:text-gray-10">
      <HeaderLogo />
      <ul className="sm:flex hidden items-center  gap-5">
        <li>Explore</li>
        <li>About</li>
        <li>Blog</li>
        <li>Log in</li>
        <Button className="ml-5 px-3 py-2 rounded-[72px] lg:rounded-[100px]">Sign up free</Button>
      </ul>
      <ul className="sm:hidden flex items-center gap-3">
        <li>Login</li>
        <Button className=" px-3 py-2 rounded-[72px]">Sign up free</Button>
        <Burger />
      </ul>
    </div>
  );
};

export default Header;
