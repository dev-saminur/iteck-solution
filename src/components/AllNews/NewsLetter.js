import React from "react";
import Flex from "../helpers/Flex/Flex";
import { FaGoodreadsG, FaRegEnvelope } from "react-icons/fa";

import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";

const NewsLetter = () => {
  return (
    <>
      <div>
        <div className="p-[50px] bg-[#EAEEF2] rounded-[20px]">
          <h3 className="text-base text-[#212529] mb-2 leading-[2] font-semibold uppercase ">
            NEWSLETTER
          </h3>
          <p className="text-[11px] text-[#666666] leading-[1.5] mb-3">
            Register now to get latest updates on promotions & coupons.
          </p>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Type and hit enter"
              className=" w-full  text-xs text-[#212529]  rounded-[12px] outline-none border border-solid border-[#C2C2C2]  py-3  px-10"
            />
            <FaRegEnvelope className="absolute top-[13px] left-3 text-[#212529] pointer" />
          </div>
        </div>
        <div className="mt-12 mb-[50px]">
          <Flex className="items-center gap-x-6 ">
            <div className="bg-[#f3f7fe] hover:bg-[#15f1ff] w-[35px] h-[35px] rounded-full flex justify-center items-center ease-in transition-all duration-300">
              <FaTwitter className="hover:text-white text-[#666] duration-200" />
            </div>
            <div className="bg-[#f3f7fe] hover:bg-[#15f1ff] w-[35px] h-[35px] rounded-full flex justify-center items-center ease-in transition-all duration-300">
              <FaFacebookF className="hover:text-white text-[#666] duration-200" />
            </div>
            <div className="bg-[#f3f7fe] hover:bg-[#15f1ff] w-[35px] h-[35px] rounded-full flex justify-center items-center ease-in transition-all duration-300">
              <FaLinkedinIn className="hover:text-white text-[#666] duration-200" />
            </div>
            <div className="bg-[#f3f7fe] hover:bg-[#15f1ff] w-[35px] h-[35px] rounded-full flex justify-center items-center ease-in transition-all duration-300">
              <FaPinterest className="hover:text-white text-[#666] duration-200" />
            </div>
            <div className="bg-[#f3f7fe] hover:bg-[#15f1ff] w-[35px] h-[35px] rounded-full flex justify-center items-center ease-in transition-all duration-300">
              <FaGoodreadsG className="hover:text-white text-[#666] duration-200" />
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
