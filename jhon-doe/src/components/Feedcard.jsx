import Comment from "@/icons/Comment";
import Heart from "@/icons/Heart";
import HeartBloack from "@/icons/HeartBloack";
import ThreeDots from "@/icons/ThreeDots";
import Image from "next/image";
import React from "react";

const Feedcard = () => {
  return (
    <div className="w-full">
      <div className=" flex justify-start items-center mt-3">
        <Image
          src={
            "https://s3-alpha-sig.figma.com/img/de58/3eb9/d0bbbe80605b4e1df557f03132d46ffd?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZRjg~zrdL-2Q3ZVQ1bZTWSNSYnXuaftLrZGhrzRHbQxhVDkiAV0LndbBDfoeDOKuusVbSucEs45o2qOfTCGLhNISJak5h345TDSP~Ht0siHs3U9lHBkpQbWnbbHS5PrXjNWVgPoarQXvuJIQCYLYNbzgWfv-mqMytHrqBPvjzH6xbIpVXd3TKcOuWd90XivRCq6CDVOwNoQm-2iCsv0hen7hbuNswW3aQXJmoK~NSkycskUeDtP~haHexYibXB0o03Ed9mRQshN9StxfHIuJV46REgQF4cDb4vgZjfF~M7M5bxm2H~gsgsja1q7jXJDgblrxirtf0JFXeMb28aM-hQ__"
          }
          className="lg:h-[27px] lg:w-[27px] sm:w-[19px] sm:h-[19px] w-[32px] h-[32px] rounded-full"
          width={127}
          height={27}
          alt="image"
        />
        <div className="ml-2">
          <p className="text-primary-text lg:text-[10px] font-[700] lg:leading-[10px] sm:text-[7px] sm:leading-[7px] text-[12px] leading-[12px] dark:text-gray-10/80">
            Ryan Samuel
          </p>
          <p className="text-secondary-text lg:text-[9px] font-[600] lg:leading-[9px] sm:text-[6px] sm:leading-[6px] text-[10px] leading-[10px] dark:text-gray-10/60 mt-1">
            10 September 2022
          </p>
        </div>
      </div>
      <div className="w-full border border-[#F0F0F0] dark:border-gray-10/60 lg:rounded-[14px] rounded-[7px] mt-4">
        <p className="text-primary-text lg:text-[16px] font-[700] lg:leading-[22px] sm:text-[12px] sm:leading-[16px] text-[9px] leading-[14px] dark:text-gray-10 w-full px-4 py-2">
          MAGNUM, P.I. - PAGE TWO LINE ART PREVIEW  {" "}
        </p>
        <div className="relative w-full">
          <Image
            src={
              "https://s3-alpha-sig.figma.com/img/bb06/6e58/045338b6807db0820ea0132f784930b7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZVWd81oGlcrQ2oP4NLIMsCj6Prjkp4QYUJasFKqAuovpPfOZ04rYiehpRNSYYZOs~EZEKFSFBPj1FK~UAgZADyy14sGgd7tZKYCzE~FMGdlfIlq1zLfBacxEinx295NlwlmIQp7uNY~GZmkKwoQAjwCkPduW1n0XHRnpypYYXTkwXuk5M0TSJHkdxYxoxx3sKU2tBxcnBAXiq~jmhGZAUnbpZ0UYnfMARz3d5awSuGND0vAr8cmzbGkM2LtG1AxHqqSb2j8Qx6GH0k7r2vHH7r5gGlgSrggv5JP7PSqQR2yefgLxIhmjRA8BcmZNU6xLoHwxz2Qu0kv24MMFMhHX3A__"
            }
            className="lg:h-[250px] lg:w-[564px] sm:w-[388px] sm:h-[177px] w-full h-[152px] object-cover"
            width={564}
            height={250}
            alt="image"
          />
          <div className="lg:h-[250px] w-full sm:h-[177px] h-[152px] absolute bottom-0 bg-[#00000066]/40 backdrop-blur"></div>
          <div className=" bottom-1/3 absolute w-full   text-gray-10 flex flex-col justify-start items-center">
            <span className=" lg:text-[16px] font-[700] lg:leading-[22px] sm:text-[12px] sm:leading-[16px] text-[9px] leading-[14px]  ">
              Support monthly to unlock
            </span>
            <button className=" px-8 py-1 mt-2 rounded-[30px] bg-[#FFFFFF99]/60">
              Support
            </button>
          </div>
        </div>
        <p className="text-secondary-text lg:text-[16px] font-[400] lg:leading-[22px] sm:text-[11px] sm:leading-[16px] text-[9px] leading-[13px] dark:text-gray-10/70 px-4 py-2">
          This post is for Marc makes comicss monthly subscribers.
        </p>
        <div className="flex justify-start items-center px-4 mt-1 pb-2">
          <div className="flex justify-start items-center  text-primary-text dark:text-gray-10/60">
            <HeartBloack />
            <span className="text-secondary-text lg:text-[16px] font-[400] lg:leading-[22px] sm:text-[11px] sm:leading-[16px] text-[9px] leading-[13px] dark:text-gray-10/70 ml-1">
              2
            </span>
          </div>
          <div className="sm:mx-8 mx-4 text-primary-text dark:text-gray-10/60">
            <Comment />
          </div>
          <div className="sm:mx-8 mx-4 text-primary-text dark:text-gray-10/60">
            <ThreeDots />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedcard;
