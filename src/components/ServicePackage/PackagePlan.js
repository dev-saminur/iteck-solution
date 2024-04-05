"use client";
import React, { useState } from "react";
import Image from "next/image";
import PlanePacImg from "../../../public/assets/service/price_s5.png";
import Container from "../helpers/Container/Container";
import Flex from "../helpers/Flex/Flex";
import { IoCheckmarkOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const PackagePlan = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <div className="text-center w-[320px] rounded-[50px]  mx-auto flex items-center justify-center mb-5 border border-solid border-[#21252953]">
          <p className="text-sm text-black">Billed monthly</p>
          <div onClick={() => setShow(!show)} className="mx-2 p-4 pointer">
            {show ? (
              <div className="w-[40px] h-[19px] relative bg-[#4096FF] border border-solid rounded-3xl  border-[#15F1FF] after:content-[' ']  after:absolute after:top-[50%] after:translate-y-[-50%] after:right-0 after:w-[16px] after:h-[16px] after:rounded-full after:bg-white  "></div>
            ) : (
              <div className="w-[40px] h-[19px] relative bg-white border border-solid rounded-3xl  border-[#15F1FF] after:content-[' ']  after:absolute after:top-[50%] after:translate-y-[-50%] after:left-0 after:w-[16px] after:h-[16px] after:rounded-full after:bg-gray-500  "></div>
            )}
          </div>
          <p className="text-sm text-black">Billed annually</p>
        </div>
        <Container>
          <div>
            {show ? (
              <Flex>
                <div className="w-[34%]">
                  <div className=" border-b-2 border-solid border-[#21252953]">
                    <Image
                      src={PlanePacImg}
                      width={255}
                      height={177}
                      alt="pricing-plane"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-[#212529] py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      Unlimited Projects
                    </p>
                    <p className="text-sm text-[#212529] py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      Lifetime Support & SEO Experts Consult
                    </p>
                    <p className="text-sm text-[#212529] py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      Advance Dashboard
                    </p>
                    <p className="text-sm text-[#212529] py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      Data Security & Backup
                    </p>
                    <p className="text-sm text-[#212529] py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      Cloud Hosting & Domain
                    </p>
                    <p className="text-sm text-[#212529] py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      Free Google Analysis
                    </p>
                    <p className="text-sm text-[#212529] py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      Seller App
                    </p>
                    <p className="text-sm text-[#212529] py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      Auto Lifetime Upgrade
                    </p>
                    <p className="text-sm text-[#212529] py-4  border-[#f2f2f2] leading-[1.5]">
                      Free SSL Certificate
                    </p>
                  </div>
                </div>
                <div className="w-[22%]">
                  <div className="py-[30px] text-center border-b-2 border-solid border-[#21252953]">
                    <p className="text-xs text-[#212529] font-bold uppercase m-2 leading-[1.5]">
                      Basic
                    </p>
                    <h4 className="text-[45px] text-[#212529] font-bold leading-[1.4] m-2">
                      {" "}
                      Free
                      <span className="text-xs text-[#666]">/yr</span>
                    </h4>
                    <p className="text-xs text-[#666] font-normal capitalize leading-[1.5]">
                      Free forever.!
                    </p>
                    <p className="text-xs text-[#666] font-normal capitalize  leading-[1.5]">
                      No credit card required.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-[17px] border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-sm text-[#212529] py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      200 GB
                    </p>
                    <p className="text-sm  py-[17px] border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      <RxCross2 className="text-xl w-full mx-auto text-[#fb153bc6]" />
                    </p>
                    <p className="text-sm text-[#212529] py-[16px] border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      $5/Year
                    </p>
                    <p className="text-sm  py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      <RxCross2 className="text-xl w-full mx-auto text-[#fb153bc6]" />
                    </p>
                    <p className="text-sm  py-[17px] border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      <RxCross2 className="text-xl w-full mx-auto text-[#fb153bc6]" />
                    </p>
                    <p className="text-sm  py-4 leading-[1.5]">
                      <RxCross2 className="text-xl w-full mx-auto text-[#fb153bc6] mb-[30px]" />
                    </p>
                    <Link
                      href="/"
                      className="text-xs text-white font-normal py-2.5 px-6 rounded-[50px] bg-[#157efb] hover:bg-[#4A00E1] border-b-4 border-solid border-[#5842BC] duration-150"
                    >
                      Get Started Now
                    </Link>
                  </div>
                </div>
                <div className="w-[22%] bg-[#F3F7FE] rounded-3xl pb-16">
                  <div className="py-[30px] text-center border-b-2 border-solid border-[#21252953]">
                    <p className="text-xs text-[#212529] font-bold uppercase m-2 leading-[1.5]">
                      PREMIUM
                    </p>
                    <h4 className="text-[45px] text-[#157efb] font-bold leading-[1.4] m-2">
                      {" "}
                      $49
                      <span className="text-xs text-[#666]">/yr</span>
                    </h4>
                    <p className="text-xs text-[#666] font-normal capitalize leading-[1.5]">
                      Free forever.!
                    </p>
                    <p className="text-xs text-[#666] font-normal capitalize  leading-[1.5]">
                      No credit card required.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-[17px] border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-sm text-[#212529] py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      1 TB
                    </p>
                    <p className="text-sm  py-[17px] border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      <RxCross2 className="text-xl w-full mx-auto text-[#fb153bc6]" />
                    </p>
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-sm  py-[17px]  leading-[1.5]">
                      <RxCross2 className="text-xl w-full mx-auto text-[#fb153bc6] mb-[30px]" />
                    </p>
                    <Link
                      href="/"
                      className="text-xs text-white font-normal py-2.5 px-6 rounded-[50px] bg-[#157efb] hover:bg-[#4A00E1] border-b-4 border-solid border-[#5842BC] duration-150"
                    >
                      Get Started Now
                    </Link>
                  </div>
                </div>
                <div className="w-[22%] ">
                  <div className="py-[30px] text-center border-b-2 border-solid border-[#21252953]">
                    <p className="text-xs text-[#212529] font-bold uppercase m-2 leading-[1.5]">
                      ULTIMATE
                    </p>
                    <h4 className="text-[45px] text-[#157efb] font-bold leading-[1.4] m-2">
                      {" "}
                      $99
                      <span className="text-xs text-[#666]">/yr</span>
                    </h4>
                    <p className="text-xs text-[#666] font-normal capitalize leading-[1.5]">
                      Free forever.!
                    </p>
                    <p className="text-xs text-[#666] font-normal capitalize  leading-[1.5]">
                      No credit card required.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-[17px] border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-sm text-[#212529] py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      1 TB
                    </p>
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-4 ">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb] mb-[30px]" />
                    </p>
                    <Link
                      href="/"
                      className="text-xs text-white font-normal py-2.5 px-6 rounded-[50px] bg-[#157efb] hover:bg-[#4A00E1] border-b-4 border-solid border-[#5842BC] duration-150"
                    >
                      Get Started Now
                    </Link>
                  </div>
                </div>
              </Flex>
            ) : (
              <Flex>
                <div className="w-[34%]">
                  <div className=" border-b-2 border-solid border-[#21252953]">
                    <Image
                      src={PlanePacImg}
                      width={255}
                      height={177}
                      alt="pricing-plane"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-[#212529] py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      Unlimited Projects
                    </p>
                    <p className="text-sm text-[#212529] py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      Lifetime Support & SEO Experts Consult
                    </p>
                    <p className="text-sm text-[#212529] py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      Advance Dashboard
                    </p>
                    <p className="text-sm text-[#212529] py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      Data Security & Backup
                    </p>
                    <p className="text-sm text-[#212529] py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      Cloud Hosting & Domain
                    </p>
                    <p className="text-sm text-[#212529] py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      Free Google Analysis
                    </p>
                    <p className="text-sm text-[#212529] py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      Seller App
                    </p>
                    <p className="text-sm text-[#212529] py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      Auto Lifetime Upgrade
                    </p>
                    <p className="text-sm text-[#212529] py-4  border-[#f2f2f2] leading-[1.5]">
                      Free SSL Certificate
                    </p>
                  </div>
                </div>
                <div className="w-[22%]">
                  <div className="py-[30px] text-center border-b-2 border-solid border-[#21252953]">
                    <p className="text-xs text-[#212529] font-bold uppercase m-2 leading-[1.5]">
                      Basic
                    </p>
                    <h4 className="text-[45px] text-[#212529] font-bold leading-[1.4] m-2">
                      {" "}
                      Free
                      <span className="text-xs text-[#666]">/mon</span>
                    </h4>
                    <p className="text-xs text-[#666] font-normal capitalize leading-[1.5]">
                      Free forever.!
                    </p>
                    <p className="text-xs text-[#666] font-normal capitalize  leading-[1.5]">
                      No credit card required.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-[17px] border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-sm text-[#212529] py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      200 GB
                    </p>
                    <p className="text-sm  py-[17px] border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      <RxCross2 className="text-xl w-full mx-auto text-[#fb153bc6]" />
                    </p>
                    <p className="text-sm text-[#212529] py-[16px] border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      $5/Year
                    </p>
                    <p className="text-sm  py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      <RxCross2 className="text-xl w-full mx-auto text-[#fb153bc6]" />
                    </p>
                    <p className="text-sm  py-[17px] border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      <RxCross2 className="text-xl w-full mx-auto text-[#fb153bc6]" />
                    </p>
                    <p className="text-sm  py-4 leading-[1.5]">
                      <RxCross2 className="text-xl w-full mx-auto text-[#fb153bc6] mb-[30px]" />
                    </p>
                    <Link
                      href="/"
                      className="text-xs text-white font-normal py-2.5 px-6 rounded-[50px] bg-[#157efb] hover:bg-[#4A00E1] border-b-4 border-solid border-[#5842BC] duration-150"
                    >
                      Get Started Now
                    </Link>
                  </div>
                </div>
                <div className="w-[22%] bg-[#F3F7FE] rounded-3xl pb-16">
                  <div className="py-[30px] text-center border-b-2 border-solid border-[#21252953]">
                    <p className="text-xs text-[#212529] font-bold uppercase m-2 leading-[1.5]">
                      PREMIUM
                    </p>
                    <h4 className="text-[45px] text-[#157efb] font-bold leading-[1.4] m-2">
                      {" "}
                      $49
                      <span className="text-xs text-[#666]">/mon</span>
                    </h4>
                    <p className="text-xs text-[#666] font-normal capitalize leading-[1.5]">
                      Free forever.!
                    </p>
                    <p className="text-xs text-[#666] font-normal capitalize  leading-[1.5]">
                      No credit card required.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-[17px] border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-sm text-[#212529] py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      1 TB
                    </p>
                    <p className="text-sm  py-[17px] border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      <RxCross2 className="text-xl w-full mx-auto text-[#fb153bc6]" />
                    </p>
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-sm  py-[17px]  leading-[1.5]">
                      <RxCross2 className="text-xl w-full mx-auto text-[#fb153bc6] mb-[30px]" />
                    </p>
                    <Link
                      href="/"
                      className="text-xs text-white font-normal py-2.5 px-6 rounded-[50px] bg-[#157efb] hover:bg-[#4A00E1] border-b-4 border-solid border-[#5842BC] duration-150"
                    >
                      Get Started Now
                    </Link>
                  </div>
                </div>
                <div className="w-[22%] ">
                  <div className="py-[30px] text-center border-b-2 border-solid border-[#21252953]">
                    <p className="text-xs text-[#212529] font-bold uppercase m-2 leading-[1.5]">
                      ULTIMATE
                    </p>
                    <h4 className="text-[45px] text-[#157efb] font-bold leading-[1.4] m-2">
                      {" "}
                      $99
                      <span className="text-xs text-[#666]">/mon</span>
                    </h4>
                    <p className="text-xs text-[#666] font-normal capitalize leading-[1.5]">
                      Free forever.!
                    </p>
                    <p className="text-xs text-[#666] font-normal capitalize  leading-[1.5]">
                      No credit card required.
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-[17px] border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-sm text-[#212529] py-4 border-b border-solid border-[#f2f2f2] leading-[1.5]">
                      1 TB
                    </p>
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-4 border-b border-solid border-[#f2f2f2]">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb]" />
                    </p>
                    <p className="text-center  py-4 ">
                      <IoCheckmarkOutline className="text-xl w-full mx-auto text-[#157efb] mb-[30px]" />
                    </p>
                    <Link
                      href="/"
                      className="text-xs text-white font-normal py-2.5 px-6 rounded-[50px] bg-[#157efb] hover:bg-[#4A00E1] border-b-4 border-solid border-[#5842BC] duration-150"
                    >
                      Get Started Now
                    </Link>
                  </div>
                </div>
              </Flex>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default PackagePlan;
