import Image from "next/image";
import React from "react";
import Button from "./Button";

const NewsletterCardFirst = () => {
  return (
    <div className="w-full p-[20px] shadow-newsletter lg:rounded-[17px] rounded-[12px]">
      <Image
        width={960}
        height={242}
        className="sm:rounded-[13px] rounded-[9px] w-full sm:h-[242px] object-cover  h-[148px]"
        alt="newsletter image"
        src={
          "https://s3-alpha-sig.figma.com/img/ca55/4d45/b600ef38eb63e8b30b3f900e3a833833?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MhG1jZNll2oMvdgf9i750IeZfwqDIQUC529xLOGL6Bxk2WMJR37zx0m~C19HgQW2KE9tx1CUyC~ivt3IljZKvnb79gImrtwuKIMDuRPW0j8fP9WRRvmjGuqT7hULPpPYDcyJbCL0-H5m7bA5SvhCdZyEU4Jcjzs~PfHq2i~gy3WSzMUYtDTwrYIevjaDp5TNNj3rVNV2TfDjkLN1IU0UiiZiaAykShE4lYZ9-l4GtjTpKgJrUwSbVpOxq7Np4Aq~JMBOpTrfjNxt9VO1oDuawopY1nWr-RVtpEEjtXHOGvLKr3VEvMrQT4uqVtHb-5KWG-NLYGnP7Xi1ap1TRTc9cA__"
        }
      />
      <div className=" w-full flex sm:flex-row flex-col justify-start items-start sm:mt-5 mt-3 sm:gap-10">
        <div className="sm:w-2/5 w-full">
          <p className="lg:text-[32px] sm:text-[25px] font-[700] lg::leading-[48px] sm:leading-[36px] text-[20px] leading-[31px] dark:text-gray-10">
            Be the first who see the news
          </p>
          <p className=" text-[#607D8B] dark:text-gray-10 lg::text-[17px] sm:text-[12px] font-[400] sm:leading-[30px] text-[11px] leading-[19px]">
            Your company may not be in the software business, but eventually, a
            software company will be in your business.
          </p>
        </div>
        <div className="sm:flex-1 w-full h-full  ">
          <div className="w-full flex sm:flex-row flex-col  sm:gap-4">
            <input
              type="text"
              placeholder="Email"
              className="sm:px-[17px] w-1/2 sm:py-[12px] px-[10px] py-[6px] text-[#90A4AE] border-[#CFD8DC] border sm:rounded-[9px] rounded-[5px] sm:mt-0 mt-4"
            />
            <div className=" sm:hidden flex mt-3 items-center justify-start">
              <input type="checkbox" />
              <p className="sm:text-[14px] font-[500] sm:leading-[22px] text-[#78909C] dark:text-gray-10 ml-2">
                I agree the
                <span className=" underline ml-1 text-primary-text dark:text-gray-10 ">
                  Terms and Conditions
                </span>
              </p>
            </div>
            <Button
              className={
                " sm:flex-1 w-2/3 p-[4px] sm:p-[6px] flex justify-center items-center  sm:rounded-[9px] rounded-[5px] sm:my-0 mt-4"
              }
            >
              SUBSCRIBE
            </Button>
          </div>
          <div className=" sm:flex hidden mt-3 items-center justify-start">
            <input type="checkbox" />
            <p className="sm:text-[14px] font-[500] sm:leading-[22px] text-[#78909C] dark:text-gray-10 ml-2">
              I agree the
              <span className=" underline ml-1 text-primary-text dark:text-gray-10 ">
                Terms and Conditions
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCardFirst;
