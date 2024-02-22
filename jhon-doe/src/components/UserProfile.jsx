import Link from "@/icons/Link";
import TwitterIcon from "@/icons/TwitterIcon";

import Youtube from "@/icons/Youtube";
import Image from "next/image";
import React from "react";
import TwitterBird from "./TwitterBird";

const UserProfile = () => {
  const Info = ["Title", "Username", "About you", "Intrest", "Email"];
  return (
    <div className="w-full">
      <p className="sm:block hidden text-primary-text text-[30px] font-[400] dark:text-gray-10">
        Setting
      </p>
      <div className=" flex sm:gap-8 gap-4 sm:justify-start justify-center w-full border-b border-[#DDDDDE] dark:border-gray-10/70 sm:mt-5 text-primary-text font-[700] dark:text-gray-10 text-[16px]">
        <span className="text-red dark:text-red border-b-[2px] border-b-red top-[1px] relative ">
          Profile
        </span>
        <span className="top-[1px] relative">Payments</span>
        <span className="top-[1px] relative">Page</span>
      </div>
      <div className="w-full sm:flex hidden justify-start py-12">
        <Image
          src={
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
          }
          className="rounded-[100px] sm:h-[100px] sm:w-[100px]  w-[80px] h-[80px] ml-28"
          width={100}
          height={100}
          alt="image"
        />
      </div>
      <div className="lg:w-4/6 sm:w-5/6 w-full sm:mt-0 mt-5">
        <ul className="w-full flex flex-col justify-start items-start gap-4">
          {Info.map((item, index) => {
            return (
              <div key={item} className=" w-full">
                <label className=" text-primary-text  text-[16px] font-[400] dark:text-gray-10">
                  {item}
                </label>
                {item === "About you" ? (
                  <textarea
                    type="text"
                    className=" w-full border h-24 border-black/10 rounded-[4px] px-5 py-2  text-secondary-text text-[13px] focus:outline-none font-[400] dark:bg-gloss-dark dark:border-gray-10/70 mt-1"
                    placeholder="Jhon Doe"
                  />
                ) : (
                  <input
                    type="text"
                    className=" w-full border border-black/10 rounded-[4px] px-5 py-2  text-secondary-text text-[13px] focus:outline-none font-[400] dark:bg-gloss-dark dark:border-gray-10/70 mt-1"
                    placeholder="Jhon Doe"
                  />
                )}
              </div>
            );
          })}
        </ul>

        <div className=" lg:w-2/5 sm:w-4/5 w-full  mt-8">
          <button className=" w-full sm:py-2 py-1 px-2 flex justify-center items-center bg-[#F1F1F1]  dark:bg-gloss-dark dark:text-gray-10 dark:border-gray-10/70 dark:border rounded-[50px] text-primary-text">
            <span>
              <Link />
            </span>
            <span className=" text-primary-text text-[10px] font-[400] ml-3 dark:text-gray-10">
              Link your social profiles
            </span>
          </button>
          <div className="w-full mt-8">
            <p className="text-primary-text dark:text-gray-10/70 lg:text-[16px] sm:text-[13px] text-[10px] font-[500]">
              Twitter
            </p>
            <button className="w-full sm:py-2 py-1 px-2 flex justify-center items-center border border-[#AFAFAF] rounded-[50px] mt-3">
              <span>
                <TwitterBird />
              </span>
              <span className=" text-primary-text lg:text-[16px] sm:text-[13px] text-[10px] font-[300] ml-2 dark:text-gray-10/70">
                Twitter
              </span>
            </button>
          </div>
          <div className="w-full mt-8">
            <p className="text-primary-text dark:text-gray-10/70 lg:text-[16px] sm:text-[13px] text-[10px] font-[500">
              Youtube
            </p>
            <button className=" w-full sm:py-2 py-1 px-2 flex justify-center items-center border border-[#AFAFAF] rounded-[50px] mt-3">
              <span>
                <Youtube />
              </span>
              <span className="text-primary-text lg:text-[16px] sm:text-[13px] text-[10px] font-[300] ml-2 dark:text-gray-10/70">
                Youtube
              </span>
            </button>
          </div>
        </div>
        <p className="text-primary-text lg:text-[16px] sm:text-[13px] text-[10px] font-[400] mt-5 dark:text-gray-10/70">
          See what our students have to say about the course
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
