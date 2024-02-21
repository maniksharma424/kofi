import Image from "next/image";
import React from "react";

const Podcastcard = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start sm:p-[20px] rounded-[12px] dark:border shadow-newsLetter-card border-[#EEE] dark:border-[#1E1E1E] dark:shadow-dark-newsLetter-card p-[10px] ">
      <Image
        alt="logo"
        width={300}
        height={180}
        src={
          "https://s3-alpha-sig.figma.com/img/fdd4/5fb4/82ac268b032152408e0f8401d29d9a19?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VI-yS32vkqutBnGen5KifJ7WA8oKwPz1wgU5JGzyNNy81MaQYsbbv5l1Fq~4ufr8dOtDlzqQ3wkB1eN0QageNmEJGGQ-4pU6ahxrYWPpMG1WmUlUsZ0h9lIMCzjW2m3np9~5UGxxFPdybJoxiJadv0jwRR8diwP69ZUn93CMRlLGbqimnElEgAACyIKIx6LbRsnwE8ELWp34jR8y-U-3-fwI38B8uWejrGcxz9XkCMRJmOR1qucJ6S8MgJE8jYePinU4wL0X-HGyFhA54H0PDajAyl8KkbyXgUazrkeRx0dDZx0b1NULM74I0-wu3Py5x~d9jkCcLY81hIYgj~ochQ__"
        }
        className="w-full  object-cover sm:rounded-[13px] rounded-[9px]"
      />

      <p className="  dark:text-gray-10  mt-2 text-[12px] font-[500] leading-[17px] text-[#1E88E5]">
        Enterprise
      </p>
      <p className="mt-2   text-primary-text dark:text-gray-10/90  lg:text-[17px] font-[700] sm:text-[12px] sm:leading-[17px] lg:leading-[25px]">
        Autodesk looks to future of 3D printing with Project Escher
      </p>
      <p className="mt-2 text-[#607D8B]  lg:text-[14px] font-[400] lg:leading-[22px] sm:text-[9px] sm:leading-[16px]">
        Dont be scared of the truth because we need to restart the human
        foundation in truth And I love you like Kanye loves Kanye I love Rick
        Owens’ bed design but the back is too high for the beams and angle of
        the ceiling I also wanted to point out.
      </p>
      <div className=" flex justify-start items-center mt-3">
        <Image
          src={
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
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
    </div>
  );
};

export default Podcastcard;
