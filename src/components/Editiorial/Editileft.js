import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbCircleLetterA } from "react-icons/tb";
import { RiMessage2Line } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import BlogImg from "../../../public/assets/blog.png";
import Flex from "../helpers/Flex/Flex";

const Editileft = () => {
  return (
    <>
      <div className=" w-full p-4    lg:p-0 lg:w-[450px]  z-50 mb-10 lg:mb-0 lg:border-0 border border-solid  border-white">
        <Image
          width={1400}
          src={BlogImg}
          alt="BlogImg"
          className="w-full h-full "
        />
        <Flex className="mt-4 items-center">
          <Link
            href="#"
            className="text-white text-xs hover:text-[#0d6efd] font-normal ease-in-out duration-75   pr-3 border-r border-solid border-white"
          >
            News
          </Link>

          <div className="ml-2 flex items-center ">
            <MdOutlineWatchLater className="text-white text-xs mr-2" />
            <Link
              href="#"
              className="text-white text-xs font-light hover:text-[#0d6efd] ease-in-out duration-75  uppercase"
            >
              Posted On 3 days ago
            </Link>
          </div>
        </Flex>
        <div className="mt-4 ">
          <Link
            href="#"
            className="text-white text-base lg:text-2xl font-normal hover:text-[#0d6efd] ease-in-out duration-75  uppercase"
          >
            NFT Game! New Oppoturnity
          </Link>
          <p className="text-white text-[13px] mt-2">
            If theres one way that wireless technology has changed the way we
            work, its that will everyone is now connected [...]
          </p>
        </div>
        <div className="mt-[30px]">
          <Flex className="justify-between">
            <div className="flex items-center gap-x-2">
              <TbCircleLetterA className=" text-[#0d6efd] text-lg" />
              <Link
                href="#"
                className="text-[13px] ml-1 text-white hover:text-[#0d6efd] ease-in-out duration-75"
              >
                By Admin
              </Link>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="flex items-center">
                <RiMessage2Line className="text-white" />{" "}
                <Link
                  href="#"
                  className="text-[13px] ml-2 text-white hover:text-[#0d6efd] ease-in-out duration-75"
                >
                  24
                </Link>
              </div>
              <div className="flex items-center">
                <FaRegEye className="text-white" />{" "}
                <Link
                  href="#"
                  className="text-[13px] ml-2 text-white hover:text-[#0d6efd] ease-in-out duration-75"
                >
                  774k
                </Link>
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Editileft;
