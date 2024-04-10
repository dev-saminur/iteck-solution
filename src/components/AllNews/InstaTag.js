import React from "react";
import Flex from "../helpers/Flex/Flex";
import Link from "next/link";
import Image from "next/image";
import { IoLogoInstagram } from "react-icons/io";
import { InstaData } from "./data";

const InstaTag = () => {
  return (
    <>
      <div>
        <div>
          <h3 className="text-base text-[#212529] mb-2 leading-[2] font-semibold uppercase ">
            OUR INSTAGRAM
          </h3>

          <Flex className="justify-between flex-wrap">
            {InstaData.map((item, i) => (
              <div
                key={i}
                className="relative w-[120px] h-[120px] lg:w-[100px] lg:h-[100px] xxl:w-[120px] xxl:h-[100px] group rounded-[10px] overflow-hidden bg-gray-700 mb-3"
              >
                <Image
                  width={120}
                  height={100}
                  src={item.imgages}
                  alt="our-instagram"
                  className="w-full h-full bg-cover object-cover bg-center rounded-[10px]"
                />
                <div className="bg-black w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-50 duration-200"></div>
                <IoLogoInstagram className="text-white absolute top-[45%] left-[42%] z-10 translate-[-50%] duration-200 opacity-0 group-hover:opacity-100" />
              </div>
            ))}
          </Flex>
        </div>
        <div className="mt-[50px]">
          <h3 className="text-base text-[#212529] mb-2 leading-[2] font-semibold uppercase ">
            POPULAR TAGS
          </h3>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link
              href="#"
              className="text-[11px] bg-[#eef4f8] text-[#212529] px-2 py-1 rounded-[4px] mb-1 hover:text-[#0d6efd] duration-150"
            >
              WordPress
            </Link>
            <Link
              href="#"
              className="text-[11px] bg-[#eef4f8] text-[#212529] px-2 py-1 rounded-[4px] mb-1 hover:text-[#0d6efd] duration-150"
            >
              PHP
            </Link>
            <Link
              href="#"
              className="text-[11px] bg-[#eef4f8] text-[#212529] px-2 py-1 rounded-[4px] mb-1 hover:text-[#0d6efd] duration-150"
            >
              HTML/CSS
            </Link>
            <Link
              href="#"
              className="text-[11px] bg-[#eef4f8] text-[#212529] px-2 py-1 rounded-[4px] mb-1 hover:text-[#0d6efd] duration-150"
            >
              Figma
            </Link>
            <Link
              href="#"
              className="text-[11px] bg-[#eef4f8] text-[#212529] px-2 py-1 rounded-[4px] mb-1 hover:text-[#0d6efd] duration-150"
            >
              Techonology
            </Link>
            <Link
              href="#"
              className="text-[11px] bg-[#eef4f8] text-[#212529] px-2 py-1 rounded-[4px] mb-1 hover:text-[#0d6efd] duration-150"
            >
              Marketing
            </Link>
            <Link
              href="#"
              className="text-[11px] bg-[#eef4f8] text-[#212529] px-2 py-1 rounded-[4px] mb-1 hover:text-[#0d6efd] duration-150"
            >
              Consultation
            </Link>
            <Link
              href="#"
              className="text-[11px] bg-[#eef4f8] text-[#212529] px-2 py-1 rounded-[4px] mb-1 hover:text-[#0d6efd] duration-150"
            >
              SEO
            </Link>
            <Link
              href="#"
              className="text-[11px] bg-[#eef4f8] text-[#212529] px-2 py-1 rounded-[4px] mb-1 hover:text-[#0d6efd] duration-150"
            >
              Enveto
            </Link>
            <Link
              href="#"
              className="text-[11px] bg-[#eef4f8] text-[#212529] px-2 py-1 rounded-[4px] mb-1 hover:text-[#0d6efd] duration-150"
            >
              Psd
            </Link>
            <Link
              href="#"
              className="text-[11px] bg-[#eef4f8] text-[#212529] px-2 py-1 rounded-[4px] mb-1 hover:text-[#0d6efd] duration-150"
            >
              Node Js
            </Link>
            <Link
              href="#"
              className="text-[11px] bg-[#eef4f8] text-[#212529] px-2 py-1 rounded-[4px] mb-1 hover:text-[#0d6efd] duration-150"
            >
              Mongodb
            </Link>
            <Link
              href="#"
              className="text-[11px] bg-[#eef4f8] text-[#212529] px-2 py-1 rounded-[4px] mb-1 hover:text-[#0d6efd] duration-150"
            >
              React Js
            </Link>
            <Link
              href="#"
              className="text-[11px] bg-[#eef4f8] text-[#212529] px-2 py-1 rounded-[4px] mb-1 hover:text-[#0d6efd] duration-150"
            >
              Next.Js
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstaTag;
