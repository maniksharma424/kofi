import Image from "next/image";
import React from "react";
import ControlPannel from "./ControlPannel";

const PodcastPagecard = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center my-10">
      <div className="lg:h-[400px] w-5/6 sm:h-[300px] h-auto">
        <Image
          src={
            "https://s3-alpha-sig.figma.com/img/7ab5/76bd/b4a64bb0ee2a15363ceaa7e4760c8780?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QamazoW9lrPVVe3yLHo9P84JW-dY4Ykm-LPn6tQX04ir3V-ybuy8vLj7ntMYxk91Rj4ohYe-1zE0NJVbV02EJNU08IBG-7xb6PQ5lG6OOtraV2KHSeIpo6EPQ36BbYqvGUG7IFs3QgC3ZnlyD1QApzO89JO1V3ME-pEF6dYXhX-dkrfO~iLZebOB70gDz4poTkv0X4s1OiE56aDZ5As6k42wR0WXUzxQPCZB0PlkFuGYinHv6HDVhjytyX1C2ZE06sr2IqFN2aoxbO9eTZCAyAqBRyTce4Iij54Efdw07fYa-hdV90HU7xyfclLbR0sUCcec7oBYbZDkvYau0KBHJw__"
          }
          height={1000}
          width={300}
          alt="product"
          className="w-full max-h-full object-cover rounded-[10px]"
        />
      </div>
      <div className=" w-5/6">
        <ControlPannel />
      </div>
      <div className="w-5/6 sm:my-5 my-4">
        <p className="lg:text-[30px] font-[700] lg:leading-[35px] text-primary-text dark:text-gary-10 sm:text-[21px] sm:leading-[32px] text-[17px] leading-6">
          Siri brings hands-free TV to more devices
        </p>
        <p className="lg:text-[16px] font-[400] lg:leading-[26px] text-secondary-text dark:text-gary-10 sm:text-[11px] sm:leading-[18px] text-[7px] leading-3">
          Sirs latest trick is offering a hands-free TV viewing experience, that
          will allow consumers to turn on or off their television, change
          inputs, fast forward, rewind and more, without having to first invoke
          a specific skill, or even press a button on their remote.
        </p>
      </div>
    </div>
  );
};

export default PodcastPagecard;
