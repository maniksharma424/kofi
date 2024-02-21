import Image from "next/image";
import React from "react";

const TailoredProductcard = () => {
  return (
    <div className="lg:p-5 w-2/6 sm:p-4 p-3 border-[#DDE0E5] dark:border-[#252930] border shadow-product-card  lg:rounded-[11px] sm:rounded-[8px] rounded-[11px]  flex flex-col justify-start items-start">
      <Image
        src={
          "https://s3-alpha-sig.figma.com/img/2a11/4986/5e026bf36ddd0e5b0613dc254210c9e1?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ImOsJwnYcWE5AC2QMMLtoC6VG7DYyw3rsFMAIwY-aGWAoiKvYb928ZUoYagYQnvHc5bWcGFlUH6uDPXonjE26WERZuvKIoNYVGdLPXS0~LgcC3MkamFMxHEYQAZsO8IKHbqFyVpdSH~sI2E888Joh0vZd79J9RSZrxvIdRTBYtsHxOkz~Ym2Z9BjWGRokynCtFUWONgrLjPBF-oghkOuaYB0kRYUjD6Xgt3T~emK~a5Nz~VF~nOtTM7vB-e7Kha0SN8NVHfuCwMRB1AwqsovNOFQERKwCDuwYSuShsJsoRA-nqJeX2ju-q1w7Z7~FJdpMDF3a0tCMjZgKWZNiX-oZA__"
        }
        height={275}
        width={265}
        alt="product"
        className="w-full h-auto object-contain"
      />

      <p className="text-primary-text lg:text-[13px] font-[600] lg:leading-[18px] sm:text-[8px] sm:leading-[13px] text-[5px] leading-[8px] sm:my-2 my-1 dark:text-gray-10/60 ">
        New
      </p>
      <p className="text-primary-text lg:text-[20px] font-[700] lg:leading-[30px] sm:text-[14px] sm:leading-[21px] dark:text-gray-10 text-[10px] leading-[12px] sm:my-2 ">
        Linen Suit
      </p>

      <p className=" sm:mt-2 sm:mb-4 mb-1 text-secondary-text lg:text-[14px] font-[400] lg:leading-[23px] sm:text-[10px] sm:leading-[16px] text-[5px] leading-[8px] dark:text-gray-10/70">
        The structured shoulders and sleek detailing.
      </p>

      <div className=" flex justify-start items-center gap-2">
        {Array(3)
          .fill(1)
          .map((item) => {
            return (
              <input
                key={item}
                type="text"
                className="sm:w-3 sm:h-3 h-2 w-2 bg-orange-950/60  border rounded-[2px] border-orange-950"
              />
            );
          })}
      </div>
      <p className=" text-primary-text lg:text-[19px] font-[700] lg:leading-[25px] sm:text-[12px] sm:leading-[18px] text-[12px] leading-[16px] dark:text-gray-10/70 sm:mt-3 mt-2 ">
        $2,500
      </p>
    </div>
  );
};

export default TailoredProductcard;
