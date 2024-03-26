import React from "react";
import BlogImg from "../../../public/assets/6.png";
import Image from "next/image";
import Flex from "../helpers/Flex/Flex";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbCircleLetterA } from "react-icons/tb";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa6";
import { RiMessage2Line } from "react-icons/ri";
const Editiright = () => {
  return (
    <div>
      <div className=" w-[515px]  pl-5 border-l border-solid border-white border-box">
        <Flex className="border-b border-solid border-white pb-5">
          <div className="w-[169px] h-[138px] rounded-md overflow-hidden mr-7">
            <Image
              src={BlogImg}
              alt="BlogImg"
              className="w-full h-full object-cover bg-cover"
            />
          </div>
          <div>
            <div className="flex">
              <Link
                href="#"
                className="text-white text-xs hover:text-[#0d6efd] font-normal ease-in-out duration-75   pr-3 border-r border-solid border-white"
              >
                News
              </Link>
              <div className="ml-2 flex  ">
                <MdOutlineWatchLater className="text-white text-xs mr-2" />
                <Link
                  href="#"
                  className="text-white text-xs font-light hover:text-[#0d6efd] ease-in-out duration-75  uppercase"
                >
                  Posted On 3 days ago
                </Link>
              </div>
            </div>
            <div className="mt-3 w-[70%]">
              <Link
                href="#"
                className="text-white text-base hover:text-[#0d6efd]  font-normal ease-in-out duration-75  "
              >
                How To Become A Python Developr Expert
              </Link>
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
        </Flex>
        <Flex className="border-b border-solid border-white p-5">
          <div className="w-[169px] h-[138px] rounded-md overflow-hidden mr-7">
            <Image
              src={BlogImg}
              alt="BlogImg"
              className="w-full h-full object-cover bg-cover"
            />
          </div>
          <div>
            <div className="flex">
              <Link
                href="#"
                className="text-white text-xs hover:text-[#0d6efd] font-normal ease-in-out duration-75   pr-3 border-r border-solid border-white"
              >
                News
              </Link>
              <div className="ml-2 flex  ">
                <MdOutlineWatchLater className="text-white text-xs mr-2" />
                <Link
                  href="#"
                  className="text-white text-xs font-light hover:text-[#0d6efd] ease-in-out duration-75  uppercase"
                >
                  Posted On 3 days ago
                </Link>
              </div>
            </div>
            <div className="mt-3 w-[70%]">
              <Link
                href="#"
                className="text-white text-base hover:text-[#0d6efd]  font-normal ease-in-out duration-75  "
              >
                How To Become A Python Developr Expert
              </Link>
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
        </Flex>
        <Flex className=" pt-5">
          <div className="w-[169px] h-[138px] rounded-md overflow-hidden mr-7">
            <Image
              src={BlogImg}
              alt="BlogImg"
              className="w-full h-full object-cover bg-cover"
            />
          </div>
          <div>
            <div className="flex">
              <Link
                href="#"
                className="text-white text-xs hover:text-[#0d6efd] font-normal ease-in-out duration-75   pr-3 border-r border-solid border-white"
              >
                News
              </Link>
              <div className="ml-2 flex  ">
                <MdOutlineWatchLater className="text-white text-xs mr-2" />
                <Link
                  href="#"
                  className="text-white text-xs font-light hover:text-[#0d6efd] ease-in-out duration-75  uppercase"
                >
                  Posted On 3 days ago
                </Link>
              </div>
            </div>
            <div className="mt-3 w-[70%]">
              <Link
                href="#"
                className="text-white text-base hover:text-[#0d6efd]  font-normal ease-in-out duration-75  "
              >
                How To Become A Python Developr Expert
              </Link>
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
        </Flex>
      </div>
    </div>
  );
};

export default Editiright;
