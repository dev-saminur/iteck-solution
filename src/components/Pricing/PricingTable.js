"use client";
import React, { useState } from "react";
import Flex from "../helpers/Flex/Flex";
import priceOne from "../../../public/assets/pr1.png";
import priceTwo from "../../../public/assets/pr2.png";
import priceThree from "../../../public/assets/pr3.png";
import Image from "next/image";
import Headings from "../helpers/Headings/Headings";
import Peragraph from "../helpers/Peragraph/Peragraph";
import Link from "next/link";

const PricingTable = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="max-w-[945px] mx-auto">
        <div className="text-center flex items-center justify-center mb-5">
          <p className="text-sm text-white">Billed monthly</p>
          <div onClick={() => setShow(!show)} className="mx-2">
            {/* <div className="dark:bg-black/10">
              <label className="text-white">
                <input
                  className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-10 h-10"
                  type="checkbox"
                />
              </label>
            </div> */}

            {show ? (
              <div className="w-[40px] h-[19px] relative bg-[#4096FF] border border-solid rounded-3xl  border-[#15F1FF] after:content-[' ']  after:absolute after:top-[50%] after:translate-y-[-50%] after:right-0 after:w-[16px] after:h-[16px] after:rounded-full after:bg-white  "></div>
            ) : (
              <div className="w-[40px] h-[19px] relative bg-white border border-solid rounded-3xl  border-[#15F1FF] after:content-[' ']  after:absolute after:top-[50%] after:translate-y-[-50%] after:left-0 after:w-[16px] after:h-[16px] after:rounded-full after:bg-gray-500  "></div>
            )}
          </div>
          <p className="text-sm text-white">Billed annually</p>
        </div>
        {show ? (
          <Flex className="justify-between ">
            <div className="w-[315px] border border-solid border-[#3D9DD1]  py-[85px] px-[50px] text-center">
              <div className="flex justify-center">
                <Image src={priceOne} alt="pricing" />
              </div>
              <p className="text-base text-white mt-[30px] mb-4 font-bold">
                Personal
              </p>
              <h4 className="text-[32px] text-white mb-2">
                <span className="text-[13px] ">
                  <sup className="top-[-16px]">$</sup>
                </span>
                40.9
                <span className="text-[13px]"> / Year</span>
              </h4>
              <p className="text-base text-[#A7BCD0] py-4  uppercase mb-4 font-normal border-y border-solid border-[#A7BCD0]">
                3 PROJECTS
              </p>
              <p className="text-base text-[#A7BCD0]   uppercase mb-4 font-normal ">
                6 MONTHS SUPPORT
              </p>
              <Link
                href="#"
                className="text-xs mt-[50px] text-white block  font-semibold  hover:text-[#05437B] py-[10px] px-6 border rounded-full border-[#15F1FF] hover:border-[#15F1FF] hover:bg-[#15F1FF] transition-all ease-in after:duration-300"
              >
                Ger Started Now
              </Link>
            </div>
            <div className="w-[315px] border-x-0 box-border border-t-[12px] border-t-[#15F1FF] border-b border-solid border-[#3D9DD1]  pt-[15px] pb-[85px] px-[50px] text-center">
              <button className="bg-[#1f3f85] py-[5px] px-2 text-white mb-9 text-xs">
                Recommended
              </button>
              <div className="flex justify-center">
                <Image src={priceOne} alt="pricing" />
              </div>
              <p className="text-base text-white mt-[30px] mb-4 font-bold">
                Small Team
              </p>
              <h4 className="text-[32px] text-white mb-2">
                <span className="text-[13px] ">
                  <sup className="top-[-16px]">$</sup>
                </span>
                50.9
                <span className="text-[13px]"> / Year</span>
              </h4>
              <p className="text-base text-[#A7BCD0] py-4  uppercase mb-4 font-normal border-y border-solid border-[#A7BCD0]">
                3 PROJECTS
              </p>
              <p className="text-base text-[#A7BCD0]   uppercase mb-4 font-normal ">
                6 MONTHS SUPPORT
              </p>
              <Link
                href="#"
                className="text-xs mt-[50px] text-white block  font-semibold  hover:text-[#05437B] py-[10px] px-6 border rounded-full border-[#15F1FF] hover:border-[#15F1FF] hover:bg-[#15F1FF] transition-all ease-in after:duration-300"
              >
                Ger Started Now
              </Link>
            </div>
            <div className="w-[315px] border border-solid border-[#3D9DD1]  py-[85px] px-[50px] text-center">
              <div className="flex justify-center">
                <Image src={priceOne} alt="pricing" />
              </div>
              <p className="text-base text-white mt-[30px] mb-4 font-bold">
                Enterprize
              </p>
              <h4 className="text-[32px] text-white mb-2">
                <span className="text-[13px] ">
                  <sup className="top-[-16px]">$</sup>
                </span>
                60.9
                <span className="text-[13px]"> / Year</span>
              </h4>
              <p className="text-base text-[#A7BCD0] py-4  uppercase mb-4 font-normal border-y border-solid border-[#A7BCD0]">
                3 PROJECTS
              </p>
              <p className="text-base text-[#A7BCD0]   uppercase mb-4 font-normal ">
                6 MONTHS SUPPORT
              </p>
              <Link
                href="#"
                className="text-xs mt-[50px] text-white block  font-semibold  hover:text-[#05437B] py-[10px] px-6 border rounded-full border-[#15F1FF] hover:border-[#15F1FF] hover:bg-[#15F1FF] transition-all ease-in after:duration-300"
              >
                Ger Started Now
              </Link>
            </div>
          </Flex>
        ) : (
          <Flex className="justify-between ">
            <div className="w-[315px] border border-solid border-[#3D9DD1]  py-[85px] px-[50px] text-center">
              <div className="flex justify-center">
                <Image src={priceOne} alt="pricing" />
              </div>
              <p className="text-base text-white mt-[30px] mb-4 font-bold">
                Personal
              </p>
              <h4 className="text-[32px] text-white mb-2">
                <span className="text-[13px] ">
                  <sup className="top-[-16px]">$</sup>
                </span>
                20.9
                <span className="text-[13px]"> / month</span>
              </h4>
              <p className="text-base text-[#A7BCD0] py-4  uppercase mb-4 font-normal border-y border-solid border-[#A7BCD0]">
                3 PROJECTS
              </p>
              <p className="text-base text-[#A7BCD0]   uppercase mb-4 font-normal ">
                6 MONTHS SUPPORT
              </p>
              <Link
                href="#"
                className="text-xs mt-[50px] text-white block  font-semibold  hover:text-[#05437B] py-[10px] px-6 border rounded-full border-[#15F1FF] hover:border-[#15F1FF] hover:bg-[#15F1FF] transition-all ease-in after:duration-300"
              >
                Ger Started Now
              </Link>
            </div>
            <div className="w-[315px] border-x-0 box-border border-t-[12px] border-t-[#15F1FF] border-b border-solid border-[#3D9DD1]  pt-[15px] pb-[85px] px-[50px] text-center">
              <button className="bg-[#1f3f85] py-[5px] px-2 text-white mb-9 text-xs">
                Recommended
              </button>
              <div className="flex justify-center">
                <Image src={priceOne} alt="pricing" />
              </div>
              <p className="text-base text-white mt-[30px] mb-4 font-bold">
                Personal
              </p>
              <h4 className="text-[32px] text-white mb-2">
                <span className="text-[13px] ">
                  <sup className="top-[-16px]">$</sup>
                </span>
                20.9
                <span className="text-[13px]"> / month</span>
              </h4>
              <p className="text-base text-[#A7BCD0] py-4  uppercase mb-4 font-normal border-y border-solid border-[#A7BCD0]">
                3 PROJECTS
              </p>
              <p className="text-base text-[#A7BCD0]   uppercase mb-4 font-normal ">
                6 MONTHS SUPPORT
              </p>
              <Link
                href="#"
                className="text-xs mt-[50px] text-white block  font-semibold  hover:text-[#05437B] py-[10px] px-6 border rounded-full border-[#15F1FF] hover:border-[#15F1FF] hover:bg-[#15F1FF] transition-all ease-in after:duration-300"
              >
                Ger Started Now
              </Link>
            </div>
            <div className="w-[315px] border border-solid border-[#3D9DD1]  py-[85px] px-[50px] text-center">
              <div className="flex justify-center">
                <Image src={priceOne} alt="pricing" />
              </div>
              <p className="text-base text-white mt-[30px] mb-4 font-bold">
                Personal
              </p>
              <h4 className="text-[32px] text-white mb-2">
                <span className="text-[13px] ">
                  <sup className="top-[-16px]">$</sup>
                </span>
                20.9
                <span className="text-[13px]"> / month</span>
              </h4>
              <p className="text-base text-[#A7BCD0] py-4  uppercase mb-4 font-normal border-y border-solid border-[#A7BCD0]">
                3 PROJECTS
              </p>
              <p className="text-base text-[#A7BCD0]   uppercase mb-4 font-normal ">
                6 MONTHS SUPPORT
              </p>
              <Link
                href="#"
                className="text-xs mt-[50px] text-white block  font-semibold  hover:text-[#05437B] py-[10px] px-6 border rounded-full border-[#15F1FF] hover:border-[#15F1FF] hover:bg-[#15F1FF] transition-all ease-in after:duration-300"
              >
                Ger Started Now
              </Link>
            </div>
          </Flex>
        )}
        {/* <Flex className="justify-between ">
          <div className="w-[315px] border border-solid border-[#3D9DD1]  py-[85px] px-[50px] text-center">
            <div className="flex justify-center">
              <Image src={priceOne} alt="pricing" />
            </div>
            <p className="text-base text-white mt-[30px] mb-4 font-bold">
              Personal
            </p>
            <h4 className="text-[32px] text-white mb-2">
              <span className="text-[13px] ">
                <sup className="top-[-16px]">$</sup>
              </span>
              20.9
              <span className="text-[13px]"> / month</span>
            </h4>
            <p className="text-base text-[#A7BCD0] py-4  uppercase mb-4 font-normal border-y border-solid border-[#A7BCD0]">
              3 PROJECTS
            </p>
            <p className="text-base text-[#A7BCD0]   uppercase mb-4 font-normal ">
              6 MONTHS SUPPORT
            </p>
            <Link
              href="#"
              className="text-xs mt-[50px] text-white block  font-semibold  hover:text-[#05437B] py-[10px] px-6 border rounded-full border-[#15F1FF] hover:border-[#15F1FF] hover:bg-[#15F1FF] transition-all ease-in after:duration-300"
            >
              Ger Started Now
            </Link>
          </div>
          <div className="w-[315px] border-x-0 box-border border-t-[12px] border-t-[#15F1FF] border-b border-solid border-[#3D9DD1]  pt-[15px] pb-[85px] px-[50px] text-center">
            <button className="bg-[#1f3f85] py-[5px] px-2 text-white mb-9 text-xs">
              Recommended
            </button>
            <div className="flex justify-center">
              <Image src={priceOne} alt="pricing" />
            </div>
            <p className="text-base text-white mt-[30px] mb-4 font-bold">
              Personal
            </p>
            <h4 className="text-[32px] text-white mb-2">
              <span className="text-[13px] ">
                <sup className="top-[-16px]">$</sup>
              </span>
              20.9
              <span className="text-[13px]"> / month</span>
            </h4>
            <p className="text-base text-[#A7BCD0] py-4  uppercase mb-4 font-normal border-y border-solid border-[#A7BCD0]">
              3 PROJECTS
            </p>
            <p className="text-base text-[#A7BCD0]   uppercase mb-4 font-normal ">
              6 MONTHS SUPPORT
            </p>
            <Link
              href="#"
              className="text-xs mt-[50px] text-white block  font-semibold  hover:text-[#05437B] py-[10px] px-6 border rounded-full border-[#15F1FF] hover:border-[#15F1FF] hover:bg-[#15F1FF] transition-all ease-in after:duration-300"
            >
              Ger Started Now
            </Link>
          </div>
          <div className="w-[315px] border border-solid border-[#3D9DD1]  py-[85px] px-[50px] text-center">
            <div className="flex justify-center">
              <Image src={priceOne} alt="pricing" />
            </div>
            <p className="text-base text-white mt-[30px] mb-4 font-bold">
              Personal
            </p>
            <h4 className="text-[32px] text-white mb-2">
              <span className="text-[13px] ">
                <sup className="top-[-16px]">$</sup>
              </span>
              20.9
              <span className="text-[13px]"> / month</span>
            </h4>
            <p className="text-base text-[#A7BCD0] py-4  uppercase mb-4 font-normal border-y border-solid border-[#A7BCD0]">
              3 PROJECTS
            </p>
            <p className="text-base text-[#A7BCD0]   uppercase mb-4 font-normal ">
              6 MONTHS SUPPORT
            </p>
            <Link
              href="#"
              className="text-xs mt-[50px] text-white block  font-semibold  hover:text-[#05437B] py-[10px] px-6 border rounded-full border-[#15F1FF] hover:border-[#15F1FF] hover:bg-[#15F1FF] transition-all ease-in after:duration-300"
            >
              Ger Started Now
            </Link>
          </div>
        </Flex> */}
      </div>
    </div>
  );
};

export default PricingTable;
