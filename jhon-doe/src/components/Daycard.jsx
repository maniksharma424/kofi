import React from "react";

const Daycard = () => {
  const timeArray = Array.from({ length: 24 }, (_, index) => {
    const hour = index % 12 || 12;
    const period = index < 12 ? "AM" : "PM";
    return `${hour} ${period}`;
  });
  return (
    <div className="w-full border-[#EFEFEF] border shadow-Calendar lg:rounded-[12px] lg:h-[562px] h-[400px] rounded-[8px] flex flex-col justify-start items-start ">
      <span className="w-full lg:px-[74px] lg:py-[17px] py-[12px] sm:px-[56px] px-[42px] text-primary-text lg:text-[22px] font-[500] sm:text-[15px] text-[22px] dark:text-gray-10">
        SUNDAY
      </span>
      <ul className=" w-full   overflow-auto">
        {timeArray.map((time) => {
          return (
            <li
              key={time}
              className=" p-4  dark:text-[#639CF0] text-red   lg:text-[12px] font-[400] text-[8px]  border-t border-[#DCDCDC] dark:border-gray-10/70"
            >
              {time}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Daycard;
