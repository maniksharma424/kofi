import Button from "@/components/Button";
import CompleteModal from "@/components/CompleteModal";
import GreenTick from "@/icons/GreenTick";
import React from "react";

const page = () => {
  return (
    <div className="absolute left-0 top-0 z-[500] flex h-screen w-full items-center justify-center shadow-modal  backdrop-blur ">
      <div className="absolute h-screen w-full bg-[#363b47] dark:bg-[#9fa0a2] opacity-[0.7] bg-blend-overlay "></div>
      <CompleteModal />
    </div>
  );
};

export default page;
