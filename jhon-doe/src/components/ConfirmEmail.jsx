import React from "react";

const ConfirmEmail = () => {
  return (
    <div className="w-full bg-gray-10 dark:bg-gloss-dark px-5 pt-5 lg:px-[30px] lg:pt-[30px] mt-10 flex flex-col justify-start items-start pb-10 rounded-[10px] shadow-confirm-email">
      <p className="text-[21px] font-[700] leading-[20px] text-[#333] dark:text-white">
        Confirm your email
      </p>
      <p className="text-[#333333cc] lg:text-[18px] font-[500] sm:leading-[20px] mt-5 text-[13px] leading-[14px] dark:text-gray-10">
        We sent a verification code to girichaitanya11”gmail.com
      </p>
      <p className="lg:text-[18px] text-[15px] font-[700] lg:leading-[20px] leading-[17px] text-red mt-2">
        Check your Gmail inbox.
      </p>
      <p className="text-[#333333cc] lg:text-[16px] font-[500] lg:leading-[20px] mt-5 text-[13px] leading-[14px] dark:text-gray-10">
        Follow the link in the email or enter the code below:
      </p>
      <div className="flex w-full justify-center items-center dark:bg-[#151515] bg-[#F7F7F7]  py-[15px] gap-3 mt-5 rounded-[10px]">
        <input
          type="text"
          className="h-16 border-gray-200 dark:bg-gloss-dark border w-12 rounded-[10px] dark:border-[#6194DD]"
        />
        <input
          type="text"
          className="h-16 border-gray-200 dark:bg-gloss-dark border w-12 rounded-[10px] dark:border-[#6194DD]"
        />
        <input
          type="text"
          className="h-16 border-gray-200 dark:bg-gloss-dark border w-12 rounded-[10px] dark:border-[#6194DD]"
        />
        <input
          type="text"
          className="h-16 border-gray-200 dark:bg-gloss-dark border w-12 rounded-[10px] dark:border-[#6194DD]"
        />
      </div>
      <div className="flex flex-col items-start p-[20px] dark:border-[#202020] border-[#ECECEC] border mt-5 rounded-[10px] shadow-confirm-email">
        <p className="lg:text-[16px] font-[500] lg:leading-[23px] text-[11px]  leading-[16px] text-[#333] dark:text-gray-10">
          If you donts get the email after a few minutes, tap below to resend
        </p>
        <button className="text-[16px] font-[500] leading-[23px] text-red mt-5">
          Resend
        </button>
      </div>
      <p className="w-full text-center text-[#808080] text-[16px] font-[600] leading-[23px] mt-4">
        Wrong email? click hear to start over
      </p>
    </div>
  );
};

export default ConfirmEmail;
