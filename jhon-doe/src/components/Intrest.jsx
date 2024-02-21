import React from "react";
import Button from "./Button";

const Intrest = () => {
  const categories = [
    "Advice",
    "Animation",
    "Art",
    "Blogging",
    "Comedy",
    "Commissions",
    "Community",
    "Cosplay",
    "Crafts",
    "Dance & Theatre",
    "Design",
    "Drawing & Painting",
    "Education",
    "Food & Drink",
    "Fundraising",
    "Game Development",
    "Gaming",
    "Health & Fitness",
    "Lifestyle",
    "Money",
    "Music",
    "News",
    "NSFW",
    "Other",
    "Photography",
    "Podcast",
    "Science & Tech",
    "Social",
    "Software",
    "Spirituality",
    "Streaming",
    "Video and Film",
    "Writing",
    "Comics",
  ];
  return (
    <div className="w-full bg-gray-10 dark:bg-gloss-dark px-5 pt-5 lg:px-[30px] lg:pt-[30px] mt-10 flex flex-col justify-start items-start pb-5 rounded-[10px] shadow-confirm-email">
      <p className="lg:text-[19px] font-[700] text-[13px] leading-[14px] lg:leading-[20px] text-[#333] dark:text-gray-10">
        Choose interests
      </p>
      <p className="text-[#333333cc] lg:text-[16px] font-[500] sm:leading-[20px] mt-5 text-[11px] leading-[14px] dark:text-gray-10 ">
        Choose from the following catagories. This helps people find your
        profile. You can change these at any time
      </p>
      <div className="w-full flex flex-wrap lg:gap-3 gap-1  lg:my-6 my-4">
        {categories.map((category) => (
          <button
            key={category}
            className="lg:rounded-[50px] border-red border text-red lg:px-[10px] px-[7px] lg:py-[6px] py-2 lg:text-[16px] text-[11px] leading-[14px] font-[600] lg:leading-[20px] rounded-[35px] dark:bg-gloss-dark"
          >
            {category}
          </button>
        ))}
      </div>
      <Button
        className={
          "w-full flex justify-center items-center py-[10px] rounded-[20px]"
        }
      >
        Next
      </Button>
    </div>
  );
};

export default Intrest;
