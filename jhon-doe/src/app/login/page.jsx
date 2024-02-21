import Button from "@/components/Button";
import FacebookIcon from "@/components/FacebookIcon";
import Footer from "@/components/Footer";
import GoogleIcon from "@/components/GoogleIcon";
import Header from "@/components/Header";
import Login from "@/components/Login";
import TwitterIcon from "@/components/TwitterIcon";
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
