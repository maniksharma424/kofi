import BioCover from "@/components/BioCover";
import Button from "@/components/Button";
import HomeHeader from "@/components/HomeHeader";
import MembershipCard from "@/components/MembershipCard";
import Pannel from "@/components/Pannel";
import SearchPannel from "@/components/SearchPannel";
import Tick from "@/components/Tick";
import React from "react";

const page = () => {
  const plans = [
    {
      name: "Starter",
      tag: "Free access for 2 members",
      price: "199",
      features: ["Complete documentation", "Working materials in Sketch"],
    },
    {
      name: "Pro",
      tag: "Free access for 30 members",
      price: "299",
      features: [
        "Complete documentation",
        "Working materials in Sketch",
        "2GB cloud storage",
      ],
    },
    {
      name: "Premium",
      tag: "Free access for 200 members",
      price: "499",
      features: [
        "Complete documentation",
        "Working materials in Sketch",
        "20GB cloud storage",
        "100 team members",
      ],
    },
    {
      name: "Starter",
      tag: "Free access for all members",
      price: "899",
      features: [
        "Complete documentation",
        "Working materials in Sketch",
        "20GB cloud storage",
        "500 team members",
      ],
    },
  ];
  return (
    <div className="w-full h-screen flex flex-col">
      <HomeHeader />
      <div className="flex-1 w-full  lg:px-[107px] sm:px-[73px] px-[30px] py-[19px]">
        <BioCover />
        <Pannel />
        <SearchPannel />
        <div className=" flex flex-col justify-start items-center">
          <div className="text-center lg:py-24 sm:py-20 py-16">
            <p className=" text-primary-text lg:text-[32px] font-[700] lg:leading-[38px] text-[23px] leading-[27px] dark:text-gray-10">
              Pick the best plan for you
            </p>
            <p className=" text-secondary-text dark:text-gray-10/70 mt-2 lg:text-[14px] lg:leading-[25px] text-[10px] leading-[18px]">
              You have Free Unlimited Updates and Premium Support on each
              package.
            </p>
          </div>
          <div className="flex w-full sm:flex-row flex-col gap-4   ">
            {plans.map((plan) => {
              return <MembershipCard key={plan.name} plan={plan} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
