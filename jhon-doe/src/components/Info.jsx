import React from "react";
import Button from "./Button";
import Claim from "./Claim";

const Info = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center lg:text-[47px] sm:px-0 px-10 text-center lg:leading-[52px] text-[38px] font-[900] leading-[30px] mt-10  ">
      <div className="h-fit">
        <p className="text-transparent  bg-clip-text  bg-info-text-primary">
          All you need to make money
        </p>
        <p className="text-transparent  bg-clip-text bg-info-text-secondary">
          doing what you love
        </p>
      </div>
      <div className="w-full flex justify-center ">
        <p className="text-[24px] sm:w-3/5 w-5/6  font-[400] leading-[35px]  dark:text-gray-10 text-[#434B57]/50 lg:my-12 sm:my-8 my-6">
          Join 1M+ creators getting donations, memberships and sales from fans!
        </p>
      </div>
      <Claim />
      <p className="text-[17px] font-[400] leading-[24px] text-[#434B57]/80 mt-4 dark:text-gray-10/80">
        $8 million earned last month!
      </p>
    </div>
  );
};

export default Info;
