import React from "react";

import Pages from "./Pages";
import Homepages from "./Homepages";

import Link from "next/link";
import List from "@/components/helpers/List/List";
import Flex from "@/components/helpers/Flex/Flex";
import Listitem from "@/components/helpers/Listitem/Listitem";
const Menubar = () => {
  return (
    <>
      <div className="hidden relative lg:block w-3/5 z-50 ">
        <List className="relative z-50">
          <Flex className="items-center justify-center">
            <Listitem className=" group flex   relative text-white   text-xs">
              <Link
                href="#"
                className="relative bg-[#348CB2] uppercase font-medium  p-8 border-b border-[#14E9F7] transition-all ease-in after:duration-300"
              >
                Homes
              </Link>
              <svg
                className=" h-5 w-5 text-white absolute top-[50%] translate-y-[-50%] right-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
              <Homepages />
            </Listitem>
            <Listitem className=" relative group text-white   text-xs">
              <Link
                className="relative  hover:bg-[#348CB2] uppercase font-medium  p-8 hover:border-b hover:border-[#14E9F7] transition-all ease-in after:duration-300"
                href="#"
              >
                Pages
              </Link>
              <svg
                className=" h-5 w-5 text-white absolute top-[50%] translate-y-[-50%] right-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
              <Pages />
            </Listitem>
            <Listitem className=" relative text-white   text-xs">
              <Link
                className="relative hover:bg-[#348CB2] uppercase font-medium  p-8 hover:border-b hover:border-[#14E9F7] transition-all ease-in after:duration-300"
                href="#"
              >
                Portfolio
              </Link>
            </Listitem>
            <Listitem className=" relative text-white   text-xs">
              <Link
                className="relative hover:bg-[#348CB2] uppercase font-medium  p-8 hover:border-b hover:border-[#14E9F7] transition-all ease-in after:duration-300"
                href="#"
              >
                Blog
              </Link>
            </Listitem>
            <Listitem className=" relative text-white    text-xs">
              <Link
                className="relative hover:bg-[#348CB2] uppercase font-medium p-8 hover:border-b hover:border-[#14E9F7] transition-all ease-in after:duration-300"
                href="/pages/contactus"
              >
                Contact Us
              </Link>
            </Listitem>
          </Flex>
        </List>
      </div>
    </>
  );
};

export default Menubar;
