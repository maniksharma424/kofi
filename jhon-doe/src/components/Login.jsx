import React from "react";
import GoogleIcon from "./GoogleIcon";
import TwitterIcon from "./TwitterIcon";
import FacebookIcon from "./FacebookIcon";
import Button from "./Button";
import Header from "./Header";

const Login = () => {
  return (
    <div className="flex-1 w-full flex flex-col justify-start items-center">
      <p className="text-[#192025] sm:text-[20px] font-[800] sm:leading-[22px] text-[24px] leading-[18px] dark:text-gray-10 my-[58px]">
        Login
      </p>
      <div className="lg:w-[500px] sm:w-[355px] w-fit lg:px-[37px] lg:py-[22px] flex flex-col justify-start items-center gap-4">
        <input
          className="lg:px-[18px] lg:py-[12px] border border-[#818181] lg:rounded-[8px] w-full lg:text-[16px] lg:font-[400] text-[#9DBCC9]sm:px-[13px] sm:py-[9px] sm:rounded-[6px] px-[14px] py-[9px] rounded-[7px] dark:bg-gloss-dark"
          typeof="text"
          placeholder="Email"
        />
        <input
          className="lg:px-[18px] lg:py-[12px] border-[2px] border-[#D1D1D1] lg:rounded-[8px] w-full lg:text-[16px] lg:font-[400] text-[#9DBCC9] sm:px-[13px] sm:py-[9px] sm:rounded-[6px] px-[14px] py-[9px] rounded-[7px] dark:bg-gloss-dark dark:border-[#3B3B3B]"
          typeof="text"
          placeholder="Password"
        />
        <Button
          className={
            "lg:rounded-[100px] lg:py-[11px] w-full text-center lg:text-[16px] lg:font-[700] lg:leading-[22px] sm:px-[13px] sm:py-[9px] sm:rounded-[71px] rounded-[77px] px-[14px] py-[9px]"
          }
        >
          Log in
        </Button>
        <p className="lg:text-[16px] font-[700] lg:leading-[22px] text-[#727476] text-end w-full dark:text-gray-10">
          Forgot password?
        </p>
        <p className="lg:text-[16px] font-[400] lg:leading-[23px] text-[#818181] text-center w-full ">
          or log in with
        </p>
        <button
          className={
            "w-full bg-gray-10 lg:px-5 lg:py-3 flex justify-center items-center shadow-O-auth-buttons lg:rounded-[7px] rounded-[5px] px-[15px] py-[10px] dark:border dark:border-gray-10 dark:bg-gloss-dark"
          }
        >
          <GoogleIcon />
          <span className="lg:text-[14px] font-[700] leading-[21px] text-[#263238] ml-2">
            GOOGLE
          </span>
        </button>
        <button
          className={
            "w-full bg-gray-10 lg:px-5 lg:py-3 flex justify-center items-center shadow-O-auth-buttons lg:rounded-[7px] rounded-[5px] px-[15px] py-[10px] dark:border dark:border-gray-10 dark:bg-gloss-dark"
          }
        >
          <TwitterIcon />
          <span className="lg:text-[14px] font-[700] leading-[21px] text-[#263238] ml-2">
            TWITTER
          </span>
        </button>
        <button
          className={
            "w-full bg-gray-10 lg:px-5 lg:py-3 flex justify-center items-center shadow-O-auth-buttons lg:rounded-[7px] rounded-[5px] px-[15px] py-[10px] dark:border dark:border-gray-10 dark:bg-gloss-dark"
          }
        >
          <FacebookIcon />
          <span className="lg:text-[14px] font-[700] leading-[21px] text-[#263238] ml-2">
            FACEBOOK
          </span>
        </button>
        <p className="lg:text-[16px] font-[700] lg:leading-[22px] text-[#727476] mt-6 dark:text-gray-10 ">
          New to Ko-fi? Sign up here
        </p>
      </div>
    </div>
  );
};

export default Login;
