import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import CopyRight from "./CopyRight";
import Container from "@/components/helpers/Container/Container";
import Flex from "@/components/helpers/Flex/Flex";
import UsefulLinks from "./UsefulLinks";
import Recorces from "./Recorces";
const Footer = () => {
  return (
    <div className="py-[80px] bg-[#010049] border- border-solid border-[#45447A] px-4   ">
      <Container>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 xl:gap-16">
          <div className="w-full lg:w-[126%] xl:w-full">
            <div className="mb-8">
              <h3 className="text-sm text-white font-bold leading-[1] mb-10  ">
                Iteck - 1st eCommerce Dashboard
              </h3>
              <p className="text-xs text-[#d4dae0] font-normal leading-[2] pr-7 md:pr-[75px] lg:pr-5 ">
                Over 25 years working in IT services developing software
                applications and mobile apps for clients all over the world. For
                your very specific industry, we have highly-tailored IT
                solutions.
              </p>
            </div>
            <Flex className="items-center gap-x-6 ">
              <div className="hover:bg-[#15f1ff] w-[40px] h-[40px] rounded-full flex justify-center items-center border border-solid border-[#15f1ff] ease-in transition-all duration-300">
                <FaTwitter color="#FFFFFF" />
              </div>
              <div className="hover:bg-[#15f1ff] w-[40px] h-[40px] rounded-full flex justify-center items-center border border-solid border-[#15f1ff] ease-in transition-all duration-300">
                <FaFacebookF color="#FFFFFF" />
              </div>
              <div className="hover:bg-[#15f1ff] w-[40px] h-[40px] rounded-full flex justify-center items-center border border-solid border-[#15f1ff] ease-in transition-all duration-300">
                <FaLinkedinIn color="#FFFFFF" />
              </div>
            </Flex>
          </div>
          <div className="ml-0 lg:ml-6 xl:ml-0">
            <div className="mb-8">
              <h3 className="text-sm text-white font-bold leading-[1] mb-10">
                Information
              </h3>
              <p className="text-xs text-[#d4dae0] font-normal leading-[2]">
                223 Thatcher Road St, Brookly,
                <span className="inline-block md:block lg:inline-block">
                  Manhattan, NY 10463, US
                </span>
              </p>
              <p className="text-xs text-[#d4dae0] font-normal leading-[2]">
                +031 5689 89 98
              </p>
              <p className="text-xs text-[#d4dae0] font-normal leading-[2]">
                contact@Itecksolution.co
              </p>
            </div>
          </div>
          <div className="mt-7 lg:mt-0 ">
            <UsefulLinks />
          </div>

          <div className="mt-7 lg:mt-0">
            <Recorces />
          </div>
        </div>
      </Container>
      <CopyRight />
    </div>
  );
};

export default Footer;
