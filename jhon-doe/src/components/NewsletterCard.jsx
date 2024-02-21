import Image from "next/image";
import React from "react";

const NewsletterCard = () => {
  return (
    <div className=" sm:w-1/3 w-full flex flex-col justify-start items-start sm:p-[20px] rounded-[12px] dark:border shadow-newsLetter-card border-[#EEE] dark:border-[#1E1E1E] dark:shadow-dark-newsLetter-card p-[10px] ">
      <Image
        alt="logo"
        width={300}
        height={180}
        src={
          "https://s3-alpha-sig.figma.com/img/3baf/2690/c035885adcbc9d6e830e0a6339a814ab?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ATL58~9b84z1sMCeijAlsrrQQDYaRaO48EndAy4gXRxqFXgGJR1aE-4hph5mX0nrZ5EgKU~NdxUuL4NPOWKJ9Kujccl2vBK10I1O9D4kP5-txqIQ2kmdbwlQUg38IGUHCAKmQ4lg4tHwTeVthGWXR9LiF53Eqna5Kp2gOrBXbVOHDQhR6ZbzvyJlQRQcLqnpG0T4ICFGU2-a-1dOruJQ8J5VPg8IdaBaPO70swRVGtgY4fTxP99cbbAn2dty6czbsIP0t0W9nq4pBJcEqYuo~bh1k3qurBZ7~1ArqXPnNcnkHer0p5vOAbgAY2QfTOYYS0oMoTQ6acUSS9aH-BJFSg__"
        }
        className="w-full  object-cover sm:rounded-[13px] rounded-[9px]"
      />

      <p className="  dark:text-gray-10  mt-2 text-[12px] font-[500] leading-[17px] text-[#212121]">
        Enterprise
      </p>
      <p className="mt-2   text-primary-text dark:text-gray-10  lg:text-[17px] font-[700] sm:text-[12px] sm:leading-[17px] lg:leading-[25px]">
        Autodesk looks to future of 3D printing with Project Escher
      </p>
      <p className="mt-2 text-[#607D8B]  lg:text-[14px] font-[400] lg:leading-[22px] sm:text-[9px] sm:leading-[16px]">
        I will be the leader of a company that ends up being worth billions of
        dollars, because I got the answers. I understand culture. I am the
        nucleus.
      </p>
      <button className=" mt-4 border-[#90A4AE] border lg:px-[14px] lg::py-[9px] sm:px-[10px] sm:py-[5px] px-[10px] py-[6px]  text-primary-text dark:text-gray-10 rounded-[7px] text-[11px] font-[700] leading-[15px]">
        Subscribe Now
      </button>
    </div>
  );
};

export default NewsletterCard;
