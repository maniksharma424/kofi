import React from "react";

const Footer = () => {
  return (
    <div className="w-full absolute bottom-0 left-0 flex justify-between items-center lg:px-[100px] px-[45px] pt-[23px] py-[21px] ">
      <span className="text-[#32384299] lg:text-[14px] text-[10px] font-[400] leading-[20px] ">
        © Ko-fi Labs
      </span>
      <div className="flex justify-start items-center text-[#192025] font-[400] lg:text-[14px] text-[10px] leading-[20px] gap-[17px]">
        <span>Terms</span>
        <span>Privacy</span>
        <span>Help</span>
      </div>
    </div>
  );
};

export default Footer;
