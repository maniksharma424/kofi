import Image from "next/image";
import React from "react";
import ControlPannel from "./ControlPannel";

const PodcastPageBannercard = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <div className="lg:h-[400px] w-full sm:h-[300px] h-auto">
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
      <ControlPannel />

      <p className="lg:text-[30px] font-[700] lg:leading-[35px] text-primary-text dark:text-gary-10 sm:text-[21px] sm:leading-[32px] text-[17px] leading-6 sm:my-5 my-4">
        So what does the new record for the lowest level of winter ice actually
        mean
      </p>
      <p className="lg:text-[16px] font-[400] lg:leading-[26px] text-secondary-text dark:text-gary-10 sm:text-[11px] sm:leading-[18px] text-[7px] leading-3">
        The Arctic Ocean freezes every winter and much of the sea-ice then thaws
        every summer, and that process will continue whatever happens with
        climate change. Even if the Arctic continues to be one of the
        fastest-warming regions of the world, it will always be plunged into
        bitterly cold polar dark every winter. And year-by-year, for all kinds
        of natural reasons, there’s huge variety of the state of the ice. For a
        start, it does not automatically follow that a record amount of ice will
        melt this summer. More important for determining the size of the annual
        thaw is the state of the weather as the midnight sun approaches and
        temperatures rise. But over the more than 30 years of satellite records,
        scientists have observed a clear pattern of decline, decade-by-decade.
        The Arctic Ocean freezes every winter and much of the sea-ice then thaws
        every summer, and that process will continue whatever happens with
        climate change. Even if the Arctic continues to be one of the
        fastest-warming regions of the world, it will always be plunged into
        bitterly cold polar dark every winter. And year-by-year, for all kinds
        of natural reasons, there’s huge variety of the state of the ice.
      </p>
    </div>
  );
};

export default PodcastPageBannercard;
