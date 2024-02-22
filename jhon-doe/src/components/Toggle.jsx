import React, { useState } from "react";

const Toggle = () => {
  const [on, setOn] = useState(true);
  const handleOn = () => {
    setOn((n) => !n);
  };
  return (
    <div
      onClick={() => {
        handleOn();
      }}
      className={`w-8 h-4 rounded-lg px-[2px] flex cursor-pointer ${
        on ? "justify-end bg-red" : "justify-start bg-gray-10 border border-black/10"
      }  items-center  `}
    >
      <div className=" w-2/5 h-3/4 rounded-full bg-white border border-black/10"></div>
    </div>
  );
};

export default Toggle;
