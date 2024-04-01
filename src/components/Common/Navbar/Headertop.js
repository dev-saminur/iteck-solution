import React from "react";
import { FaFaceGrinHearts } from "react-icons/fa6";
import Link from "next/link";
import Flex from "@/components/helpers/Flex/Flex";

const Headertop = () => {
  return (
    <>
      <div className="bg-[#157EFB] py-3 text-center">
        <Flex className="justify-center items-center">
          <button className="text-[#212529] inline-block  mr-2 bg-white text-[10px] py-1 px-2 rounded">
            Special
          </button>
          <Flex className="justify-center items-center">
            <FaFaceGrinHearts className="inline-block text-yellow-500 mr-1" />
            <span className="text-white text-[10px] font-normal">
              <span className="mr-1">Get</span>
              <strong className="mr-1"> Get for New Account</strong>
              20% Discount
              <Link href="#" className="underline ml-2">
                Register Now
              </Link>
            </span>
          </Flex>
        </Flex>
      </div>
    </>
  );
};

export default Headertop;
