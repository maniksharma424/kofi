import React from "react";
import SearchPannel from "./SearchPannel";
import NewsletterCardFirst from "./NewsletterCardFirst";
import NewsletterCard from "./NewsletterCard";

const Newsletter = () => {
  return (
    <div className="w-full bordr-t border-[#DDDDDE] pt-[30px]">
      <NewsletterCardFirst />
      <div className=" w-full flex sm:flex-row flex-col sm:mt-16 mt-10 gap-5">
        <NewsletterCard />
        <NewsletterCard />
        <NewsletterCard />
      </div>
    </div>
  );
};

export default Newsletter;
