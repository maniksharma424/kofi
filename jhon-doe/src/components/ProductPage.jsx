import Heart from "@/icons/Heart";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import RatedStar from "@/icons/RatedStar";
import UnratedStar from "@/icons/UnratedStar";

const ProductPage = () => {
  return (
    <div className=" w-full mt-5 lg:px-[93px] lg:py-[20px] sm:px-[66px] sm:py-[14px]  sm:shadow-product-page-card">
      <p className=" lg:text-[20px] font-[500] lg:leading-[16px] sm:text-[14px] sm:leading-[15px] text-[10px] leading-4 sm:mt-8 mt-5  text-[#607D8B]">
        Store/ Designers/{" "}
        <span className=" text-primary-text dark:text-gray-10">
          Pink blouse
        </span>
      </p>
      <div className="w-full grid sm:grid-cols-2 sm:gap-4 grid-cols-1 ">
        <div className="w-full my-6">
          <Image
            src={
              "https://s3-alpha-sig.figma.com/img/6394/b5ce/5e271c57a098cacf3b830c08b6c29581?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UezaWH-iAxJIDTk0MnRpUk~MJw4DbadPVOuUc1O3y4KrsGcWACROvPvuiObsJsTqllnvF9ivXpzbOmFBDQfOgMLeogQywfvRc4BWdRH4HU78mFsU8HKs-uy0-mY-rTXflBtcBJ1f6gWTZrQmiANSg-YE1Xw3140yMqNGX9yD0BTxaIXGtM8782uiXFNfmzGJIo099a2v2UO1xG-lXhqQs1yWz0UrPvEfpoK60byLw7Wp7~p6erkXJMvTiIIH~cigu1FoLQhkqUbXmsDRJ1u0~zjazz4iYZovZblQsJzgqb55qlrwF95Ua9yGVbPALDBgTV5nOeNI2AaUhdUpLiUTUQ__"
            }
            width={251}
            height={392}
            alt="product"
            className="w-full h-[392px] object-contain sm:rounded-[7px] rounded-[5px] "
          />
          <div className=" grid grid-cols-4 mt-2 gap-3">
            <Image
              src={
                "https://s3-alpha-sig.figma.com/img/2cf0/770b/c49f7fa2d433396b3ca7579cbb07db77?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OEuyG85LZjV4EzvuhfpfqaCtdd2s8Q0RhM0JSwwFnvloEw-gTzc6mGd07TYApY3I3tVW3WxFY0yZq7sb5ouRF10Gu~RmcDLfjOEjPQsCoYraLyJBQOWgPsB1IdqXq70ufKzmt1vDi3HTZ-iRZUqzN873E9Th2sNZKBXrXyj-MYxL9vB-teeHyFRxFF2T9g4lPx6ZaQS49OXy89ddAtthebLiIY7iB3OvpOfOt~01sl6kPdfPsBSqCZbAE9lNPV1txPiBWa2bzT-Dk9sWPvkjgKZoCzteV653cp7NslcP9BIXM1zbN0bg0NW-vi5ckH1mpgfxEXPrAbtJeFnRn0fcMw__"
              }
              width={116}
              height={182}
              alt="product"
              className="w-full h-auto object-contain sm:rounded-[10px] rounded-[8px]"
            />
            <Image
              src={
                "https://s3-alpha-sig.figma.com/img/e164/f000/d9630c553390020cb3d90ca1430b09e7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dMBR-2N12FOn3khPsl3hP~tBOhoGBHY63pnXzirUtNJ7Bqh83tszkJg5CiIcvk1b4QEuXATuITvsBaKYdPDXEj0VMQei~SIlHWEEmgdMs83GnFSC-Y~DF~201OKCa3JLh6Ci5BgfkeMxio23Y~L~FVC589qosW60d5boZKV3NCtqimb7L5AKUveDqlzT9VbFNvUxAdc3YplA8vWr5x4nahNj7dsYn5AJrqqgLJb8Ru3oSS64OLVUMjXVc7B5gLt7kPrLszU1Q-gUnphnzU5vu4mDqJxQiuxAWX4Z~AdJAs2CDY26huWedlpOK99UfLnZOqfArVGxTd1TlheXJJVU0g__"
              }
              width={116}
              height={182}
              alt="product"
              className="w-full h-auto object-contain sm:rounded-[10px] rounded-[8px]"
            />
            <Image
              src={
                "https://s3-alpha-sig.figma.com/img/7068/b30c/d8b7fa7c3ac1f5138fdf6371c7eafdef?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=InYV9T3SvXcWufyp0hw23S0mITA3tI5LP6rg0M3VliFiZjw62hg0xVOY0vdxPIF~3kAG9hiCWhuNfM1TMZWCXzTIRP1qUMTskkMnyplLWof2gci1apAahxg7Hj6Dpt1Phnk1nQ-qDSRWZ~UUhI3tJcpRaPK0LskjKElu5FWkeEJxkKQXh4GTUyLH0aEeWg7wHk-40xB4sORu6dEdwxiJD6m9KBhpfZB8s9HD-N93mpOBwEsC15L9T9TJOEloaCET496KSsPapHmhWTel-WRs7AUxBk-6hdVd-3tFBVIk0NoKh-k7YcbO-sq2pYhO4sklFcg6rmaHOfIihOMh-exaEw__"
              }
              width={116}
              height={182}
              alt="product"
              className="w-full h-auto object-contain sm:rounded-[10px] rounded-[8px]"
            />
            <Image
              src={
                "https://s3-alpha-sig.figma.com/img/6394/b5ce/5e271c57a098cacf3b830c08b6c29581?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UezaWH-iAxJIDTk0MnRpUk~MJw4DbadPVOuUc1O3y4KrsGcWACROvPvuiObsJsTqllnvF9ivXpzbOmFBDQfOgMLeogQywfvRc4BWdRH4HU78mFsU8HKs-uy0-mY-rTXflBtcBJ1f6gWTZrQmiANSg-YE1Xw3140yMqNGX9yD0BTxaIXGtM8782uiXFNfmzGJIo099a2v2UO1xG-lXhqQs1yWz0UrPvEfpoK60byLw7Wp7~p6erkXJMvTiIIH~cigu1FoLQhkqUbXmsDRJ1u0~zjazz4iYZovZblQsJzgqb55qlrwF95Ua9yGVbPALDBgTV5nOeNI2AaUhdUpLiUTUQ__"
              }
              width={116}
              height={182}
              alt="product"
              className="w-full h-auto object-contain sm:rounded-[10px] rounded-[8px]"
            />
          </div>
          <div className="w-full sm:hidden flex flex-col justify-start items-start">
            <p className="text-primary-text lg:text-[26px] font-[700] lg:leading-[40px] text-[19px] leading-[28px]  dark:text-gray-10 mt-10">
              Pink Blouse
            </p>
            <p className="text-secondary-text lg:text-[14px] font-[400] lg:leading-[24px] text-[10px] leading-[17px] dark:text-gray-10/70">
              There’s nothing I really wanted to do in life that I wasn’t able
              to get good at. That’s my skill. I’m not really specifically
              talented at anything except for the ability to learn.
            </p>
            <p className=" text-primary-text lg:text-[26px] font-[700] lg:leading-[40px] text-[19px] leading-[28px]  dark:text-gray-10 mt-5 ">
              $2,500
            </p>

            <div className="flex justify-start items-center  text-secondary-text lg:text-[12px] font-[500] lg:leading-[17px] sm:text-[8px] sm:leading-[12px] text-[12px] leading-[19px] dark:text-gray-10/70 ">
              <RatedStar />
              <RatedStar />
              <RatedStar />
              <UnratedStar />
              <p className=" ml-2">4.7 (134 Reviews)</p>
            </div>

            <p className="text-secondary-text lg:text-[14px] font-[600] lg:leading-[22px] sm:text-[10px] sm:leading-[15px] text-[14px] leading-[23px] dark:text-gray-10/70  mb-2">
              Size
            </p>
            <div className=" flex justify-start items-center gap-2  text-secondary-text lg:text-[12px] lg:font-[600] lg:leading-[17px] sm:text-[8px] font-[500] sm:leading-[12px] text-[12px] leading-[19px] dark:text-gray-10/70">
              <button className="lg:px-[14px] sm:px-[7px] px-[15px]  py-[5px] rounded-[4px]  border  dark:border-[#607D8B] border-[#DDE0E5] bg-[#ECEFF1] text-[#CFD8DC] dark:bg-[#2E3A3F]">
                XS
              </button>
              <button className="lg:px-[14px] sm:px-[7px] px-[15px]  py-[5px] rounded-[4px]  border  border-[#1E293B] text-red dark:border-[#607D8B]">
                S
              </button>
              <button className="lg:px-[14px] sm:px-[7px] px-[15px]  py-[5px] rounded-[4px]  border border-[#DDE0E5] dark:border-[#607D8B]">
                M
              </button>
              <button className="lg:px-[14px] sm:px-[7px] px-[15px]  py-[5px] rounded-[4px]  border border-[#DDE0E5] dark:border-[#607D8B]">
                L
              </button>
            </div>
            <div className="w-full flex justify-start items-center sm:mt-8 mt-5 ">
              <Button
                className={
                  "py-2 flex-1 flex justify-center w-1/2 items-center  rounded-[6px]  lg:text-[11px] lg:font-[700] lg:leading-[15px] sm:text-[8px] font-[700] sm:leading-[10px] text-[10px] leading-[16px] dark:text-gray-10/70"
                }
              >
                ADD TO CART
              </Button>
              <span className=" ml-2">
                <Heart />
              </span>
            </div>
          </div>
          <p className="text-primary-text lg:text-[21px] font-[700] lg:leading-[32px] sm:text-[15px] sm:leading-[22px] text-[20px] leading-[28px] dark:text-gray-10 sm:mt-8 mt-6">
            Product Description
          </p>
          <p className="text-secondary-text lg:text-[14px] font-[400] lg:leading-[24px] text-[10px] leading-[17px] dark:text-gray-10/70">
            There’s nothing I really wanted to do in life that I wasn’t able to
            get good at. That’s my skill. I’m not really specifically talented
            at anything except for the ability to learn. That’s what I do.
            That’s what I’m here for. Don’t be afraid to be wrong because you
            can’t learn anything from a compliment.
          </p>
          <ul className="text-primary-text lg:text-[19px] font-[700] lg:leading-[32px] sm:text-[13px] sm:leading-[22px] text-[18px] leading-[28px] dark:text-gray-10 sm:mt-7 mt-4">
            Benifits
          </ul>
          <p className="text-secondary-text lg:text-[14px] font-[400] lg:leading-[24px] text-[10px] leading-[17px] dark:text-gray-10/70   list-none">
            <li>
              - The jacket could be made from a weather-resistant or waterproof
              fabric, such as Gore-Tex or a similar technology, to keep the
              wearer dry and comfortable in rainy or windy conditions.
            </li>
            <li>
              -Including multiple pockets with different sizes and
              functionalities, such as zippered pockets for secure storage,
              interior pockets for valuables.
            </li>
            <li>
              -The jacket could feature adjustable cuffs and a drawstring hem,
              allowing the wearer to customize the fit and seal out cold drafts,
              making it suitable for various weather conditions.
            </li>
          </p>
          <p className="text-primary-text lg:text-[19px] font-[700] lg:leading-[32px] sm:text-[13px] sm:leading-[22px] text-[18px] leading-[28px] dark:text-gray-10 sm:mt-7 mt-4">
            More about product
          </p>
          <p className="text-secondary-text lg:text-[14px] font-[400] lg:leading-[24px] text-[10px] leading-[17px] dark:text-gray-10/70">
            There’s nothing I really wanted to do in life that I wasn’t able to
            get good at. That’s my skill. I’m not really specifically talented
            at anything except for the ability to learn.
          </p>
        </div>
        <div className="w-full sm:flex hidden flex-col justify-start items-start">
          <p className="text-primary-text lg:text-[26px] font-[700] lg:leading-[40px] text-[19px] leading-[28px]  dark:text-gray-10/70 mt-106">
            Pink Blouse
          </p>
          <p className="text-secondary-text lg:text-[14px] font-[400] lg:leading-[24px] text-[10px] leading-[17px] dark:text-gray-10/70">
            There’s nothing I really wanted to do in life that I wasn’t able to
            get good at. That’s my skill. I’m not really specifically talented
            at anything except for the ability to learn.
          </p>
          <p className=" text-primary-text lg:text-[26px] font-[700] lg:leading-[40px] text-[19px] leading-[28px]  dark:text-gray-10/70 mt-5 ">
            $2,500
          </p>

          <div className="flex justify-start items-center  text-secondary-text lg:text-[12px] font-[500] lg:leading-[17px] sm:text-[8px] sm:leading-[12px] text-[12px] leading-[19px] dark:text-gray-10/70 ">
            <RatedStar />
            <RatedStar />
            <RatedStar />
            <UnratedStar />
            <p className=" ml-2">4.7 (134 Reviews)</p>
          </div>

          <p className="text-secondary-text lg:text-[14px] font-[600] lg:leading-[22px] sm:text-[10px] sm:leading-[15px] text-[14px] leading-[23px] dark:text-gray-10/70  mb-2">
            Size
          </p>
          <div className=" flex justify-start items-center gap-2  text-secondary-text lg:text-[12px] lg:font-[600] lg:leading-[17px] sm:text-[8px] font-[500] sm:leading-[12px] text-[12px] leading-[19px] dark:text-gray-10/70">
            <button className="lg:px-[14px] sm:px-[7px] px-[15px]  py-[5px] rounded-[4px]  border  dark:border-[#607D8B] border-[#DDE0E5] bg-[#ECEFF1] text-[#CFD8DC] dark:bg-[#2E3A3F]">
              XS
            </button>
            <button className="lg:px-[14px] sm:px-[7px] px-[15px]  py-[5px] rounded-[4px]  border  border-[#1E293B] text-red dark:border-[#607D8B]">
              S
            </button>
            <button className="lg:px-[14px] sm:px-[7px] px-[15px]  py-[5px] rounded-[4px]  border border-[#DDE0E5] dark:border-[#607D8B]">
              M
            </button>
            <button className="lg:px-[14px] sm:px-[7px] px-[15px]  py-[5px] rounded-[4px]  border border-[#DDE0E5] dark:border-[#607D8B]">
              L
            </button>
          </div>
          <div className="w-full flex justify-start items-center sm:mt-8 mt-5 ">
            <Button
              className={
                "py-2 flex-1 flex justify-center w-1/2 items-center  rounded-[6px]  lg:text-[11px] lg:font-[700] lg:leading-[15px] sm:text-[8px] font-[700] sm:leading-[10px] text-[10px] leading-[16px] dark:text-gray-10/70"
              }
            >
              ADD TO CART
            </Button>
            <span className=" ml-2">
              <Heart />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
