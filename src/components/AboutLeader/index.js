"use client";
import React from "react";
import Container from "../helpers/Container/Container";
import LeaderImg from "../../../public/assets/about/leader.jpeg";
import Image from "next/image";
import Flex from "../helpers/Flex/Flex";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { LeaderData } from "./data";

const AboutLeader = () => {
  return (
    <div className="bg-[#DAEBEE] py-[100px] rounded-[20px]">
      <Container>
        <div className="mb-[70px] text-center">
          <h2 className="text-[30px] lg:text-[45px] font-bold text-[#212529] leading-[1.4] mb-5 z-50">
            Our
            <span className="text-[#157EFB] ml-2  relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-[100%] after:h-[40%] after:bg-[#157EFB] after:opacity-[.1]">
              Leaders
            </span>
          </h2>
          <p className="text-[15px] text-[#666666] leading-[1.7]  text-center">
            Profressional & Friendly is our slogan. Meet our leaders
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 lg:gap-5 xl:gap-x-10 justify-between px-0 sm:px-4 xl:px-0">
          {LeaderData.map((item, i) => (
            <div
              key={i}
              className="bg-white p-[15px] rounded-[15px] text-center "
            >
              <div className="h-[350px] relative overflow-hidden group">
                <Image
                  height={350}
                  src={item.images}
                  alt="Leader-img"
                  className="h-full w-full rounded-[15px] group bg-center bg-cover object-cover  "
                />
                <Flex className="items-center justify-center gap-x-6 absolute bottom-[-12%] group-hover:bottom-5 right-0 w-0 group-hover:w-full left-0 z-50 duration-500">
                  <div className="bg-white  hover:bg-[#4a00e1] w-[30px] h-[30px] rounded-full flex justify-center items-center  ease-in transition-all duration-300">
                    <FaTwitter className="text-[#666] hover:text-white" />
                  </div>
                  <div className="bg-white  hover:bg-[#4a00e1] w-[30px] h-[30px] rounded-full flex justify-center items-center  ease-in transition-all duration-300">
                    <FaFacebookF className="text-[#666] hover:text-white" />
                  </div>
                  <div className="bg-white  hover:bg-[#4a00e1] w-[30px] h-[30px] rounded-full flex justify-center items-center  ease-in transition-all duration-300">
                    <FaLinkedinIn className="text-[#666] hover:text-white" />
                  </div>
                  <div className="bg-white  hover:bg-[#4a00e1] w-[30px] h-[30px] rounded-full flex justify-center items-center  ease-in transition-all duration-300">
                    <FaGithub className="text-[#666] hover:text-white" />
                  </div>
                </Flex>
              </div>

              <div className="pt-7 pb-2.5">
                <h6 className="text-[15px] text-[#000] font-semibold leading-[1.4]">
                  {item.name}
                </h6>
                <p className="text-[13px] text-[#777] font-normal leading-[1.7]">
                  {item.position}
                </p>
              </div>
            </div>
          ))}
          {/* <div>two</div>
          <div>one</div>
          <div>three</div> */}
        </div>
      </Container>
    </div>
  );
};

export default AboutLeader;
