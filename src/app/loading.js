"use client";
import React from "react";
import FooterLogo from "../../public/assets/footerlogo.png";
import Image from "next/image";
const loading = () => {
  return (
    <>
      <div className="relative bg-gradient-to-b from-[#92dc9a87] to-[#80cdf1] w-full h-screen flex justify-center items-center">
        <div className=" w-[250px] h-[250px] p-10 border-8 border-black border-solid  text-blue-400 text-4xl animate-spin animate-duration-[1000ms]  border-t-blue-400 rounded-full"></div>
        <Image
          src={FooterLogo}
          width={200}
          height={100}
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-45%] animate-[smalltobig]"
        />
      </div>
    </>
  );
};

export default loading;
