import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Flex from "../helpers/Flex/Flex";

const FooterRight = () => {
  return (
    <Flex className="items-center gap-x-6  mt-0 lg:mt-5 xl:mt-0">
      <div className="hover:bg-[#15f1ff] w-[40px] h-[40px] rounded-full flex justify-center items-center border border-solid border-[#15f1ff] ease-in transition-all duration-300">
        <FaTwitter color="#FFFFFF" />
      </div>
      <div className="hover:bg-[#15f1ff] w-[40px] h-[40px] rounded-full flex justify-center items-center border border-solid border-[#15f1ff] ease-in transition-all duration-300">
        <FaFacebookF color="#FFFFFF" />
      </div>
      <div className="hover:bg-[#15f1ff] w-[40px] h-[40px] rounded-full flex justify-center items-center border border-solid border-[#15f1ff] ease-in transition-all duration-300">
        <FaLinkedinIn color="#FFFFFF" />
      </div>
      <div className="hover:bg-[#15f1ff] w-[40px] h-[40px] rounded-full flex justify-center items-center border border-solid border-[#15f1ff] ease-in transition-all duration-300">
        <FaGithub color="#FFFFFF" />
      </div>
    </Flex>
  );
};

export default FooterRight;
