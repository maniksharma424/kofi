import React from "react";

const Feed = () => {
  return (
    <div>
      <div className="w-full h-fit lg:py-16 sm:py-10 py-7 flex sm:flex-row flex-col flex-wrap  gap-10">
        <div className="sm:w-1/3 w-full h-[231px] border-[2px] shadow-feed lg:p-5 sm:p-4 p-3  rounded-[13px]">
          <p className="text-[21px] font-[700] leading-[20px] text-[#333] dark:text-white">
            Bio
          </p>
        </div>
        <div className="sm:flex-1 h-[231px]  border-[2px] shadow-feed lg:p-5 sm:p-4 p-3 rounded-[13px]  flex flex-col justify-between items-start">
          <div className="h-full">
            <p className="text-[21px] font-[700] leading-[20px] text-[#333] dark:text-white">
              Hi, I am Chaitanya.
            </p>
            <p className="text-[#333333cc] lg:text-[18px] font-[500] sm:leading-[20px] mt-5 text-[13px] leading-[14px] dark:text-gray-10">
              Have something interesting to share? I would love to hear from
              you.
            </p>
          </div>
          <button className="py-1 px-5 text-[12px] font-[500] leading-[20px] text-[#333] dark:text-white rounded-[6px] shadow-md dark:border-gray-10 dark:border">
            Subscribe
          </button>
        </div>
      </div>
      <div className="w-full sm:h-[469px] h-[300px] border-[2px] shadow-feed lg:p-5 sm:p-4 p-3 rounded-[13px] ">
        <p className="text-[21px] font-[700] leading-[20px] text-[#333] dark:text-white">
          Feed
        </p>
      </div>
    </div>
  );
};

export default Feed;
