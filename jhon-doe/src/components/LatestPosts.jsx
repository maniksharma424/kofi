import Image from "next/image";
import React from "react";

const LatestPosts = () => {
  return (
    <div className=" w-3/4 h-fit lg:py-6 sm:py-4 py-3 lg:px-4 sm:px-3 p-2 rounded-[14px] flex flex-col shadow-latest-modal dark:border dark:border-gray-10/60">
      <p className="lg:text-[16px] font-[700] lg:leading-[22px] sm:text-[12px] sm:leading-[16px] text-[9px] leading-[14px] text-primary-text dark:text-gray-10">
        Latest Posts
      </p>

      <div className="flex flex-col w-full gap-4 mt-4">
        {Array(3)
          .fill(1)
          .map((item, index) => {
            return (
              <div key={item} className=" flex justify-start items-center">
                <Image
                  src={
                    index === 1
                      ? "https://s3-alpha-sig.figma.com/img/7630/9951/38bfd1eae5056c120888aadc28296b13?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FMS9x6kjOOclYwF4qtsgQuNNShERMJz18n-2IbuwjYs~IiYc2OPA5hWl46~ulP3NM6WxREwe6J~lEwbcltctkcGiPxTKUROMyfveTIF28copfY8LCxqjOhuQoeNcwT3BES0zXY2RT-FKWJAczNgX1GsUzThj7gnGJVapWgau0YwK37urK5~ukGlbR1j4RJO7phAZxFrK1EYM7yaTvtUCWx1ZcUOaZ8ZuWedfk~qdoPwM4fRrBC-4siKo7w3rp5U076hDb2uPpMjaB1zY9zv8YoADZGLTX3VfEZnLTVQpxBE~D53u6FRcrcHPBSQLWDYzfoCxf87-5NvFnZJdso8Vlg__"
                      : "https://s3-alpha-sig.figma.com/img/d880/09a9/eaa5273e675a89a7f4310d442a505b6a?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XwCG0~Kbvn-5h0tfNcen5PUNN9SCCvuuz1wbYn-120VSiWjO-0bmp1DGWfroWTUKeDuIRJJEC7rGxhElnsNau29hxEl7SRKXbb0zkomXcobT9FWrE0Qbzcl4BuQGZy-SaPLrOBeqvDciGTrpDwtoUGjaOQF-wMQ8mldK5MgGpzAnGpqN0aWaR8ZuaWygyiRXGfSOgamlmBM5t8eeb1c~Qbu6NYKxWmYXQXeKU955CpH1xIdDoKe2B4z8p4gGLTIA1FgqVH7ItQbyf8Ne78XOh86kqXIiFHHIlor5w2iPno8HBlVdXj4Nub0gnFMJlUBI7nwgY38j6QWBJdAt4rd6aQ__"
                  }
                  className="lg:h-[38px] lg:w-[64px] sm:w-[45px] sm:h-[27px] w-[30px] h-[20px] rounded-full object-cover"
                  width={64}
                  height={38}
                  alt="image"
                />
                <div className="ml-2">
                  <p className="text-primary-text lg:text-[16px] font-[400] lg:leading-[20px] text-[12px] leading-[14px] dark:text-gray-10/80">
                    SPOOKIDS - exclusive preview
                  </p>
                  <p className="text-secondary-text lg:text-[9px] font-[600] lg:leading-[9px] sm:text-[6px] sm:leading-[6px] text-[10px] leading-[10px] dark:text-gray-10/60 mt-1">
                    2 Oct 2019
                  </p>
                </div>
              </div>
            );
          })}
        <button className=" w-full flex justify-center items-center px-4 py-1 underline lg:text-[16px] font-[700] lg:leading-[22px] sm:text-[12px] sm:leading-[16px] text-[9px] leading-[14px] text-primary-text dark:text-gray-10">
          See all
        </button>
      </div>
    </div>
  );
};

export default LatestPosts;
