import Button from "@/components/Button";
import FacebookIcon from "@/icons/FacebookIcon";
import Footer from "@/components/Footer";
import GoogleIcon from "@/icons/GoogleIcon";
import Header from "@/components/Header";
import Login from "@/components/Login";
import TwitterIcon from "@/icons/TwitterIcon";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <Login />
      <Footer />
    </div>
  );
};

export default page;
