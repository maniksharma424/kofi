import AboutYou from "@/components/AboutYou";
import Footer from "@/components/Footer";
import HeaderLogo from "@/icons/HeaderLogo";
import React from "react";

const page = () => {
    return (
      <div className="w-full h-screen flex justify-center items-center sm:bg-[#FEFAF9] bg-gray-10 dark:bg-dark px-4">
        <div className="lg:w-[560px]  flex flex-col w-[398px]  justify-start items-center">
          <HeaderLogo />
          <AboutYou />
          <Footer />
        </div>
      </div>
    );
  };

export default page;
