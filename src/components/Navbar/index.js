"use client";
import React, { useEffect, useState } from "react";
import Container from "../helpers/Container/Container";
import Flex from "../helpers/Flex/Flex";
import Logo from "../../../public/assets/logo_ll.png";
import Image from "next/image";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { RiNumber2 } from "react-icons/ri";
import { FaBarsStaggered } from "react-icons/fa6";
import List from "../helpers/List/List";
import Listitem from "../helpers/Listitem/Listitem";
import Pages from "./Pages";
import Homepages from "./Homepages";
import Link from "next/link";
import "../../app/globals.css";
import Menubar from "./Menubar";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-gradient-to-l from-[#04A1FD]  to-[#0C46F5] lg:bg-gradient-to-l lg:from-transparent lg:to-trans lg:bg-[#157297]  lg:px-0 px-4  relative py-10 lg:py-0">
        <div className={showNav ? "lg:navbar stickynav" : "navbar"}>
          <Container>
            <Flex className=" lg:px-4 xl:px-0  relative items-center z-50">
              <div className="w-2/5 lg:w-1/5 z-50">
                <Image width={155} src={Logo} alt="Logo" />
              </div>
              <FaBarsStaggered
                size={30}
                onClick={() => setShow(!show)}
                className="absolute top-0 right-0 lg:hidden block  text-white "
              />
              <Menubar />

              <div className=" hidden lg:block text-right z-50">
                <Flex className=" justify-end items-center gap-x-9">
                  <div>
                    <Flex className="gap-x-3 ">
                      <IoSearchOutline className="text-xl text-white " />
                      <div className="relative">
                        <IoCartOutline className="  text-xl text-white" />
                        <RiNumber2 className="text-lg absolute top-0 left-6 bg-[#14E9F7] text-black p-1 rounded-full" />
                      </div>
                    </Flex>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="text-xs text-white py-3 px-6 border rounded-full hover:border-[#010049] hover:bg-[#010049] transition-all ease-in after:duration-300"
                    >
                      Free Quote
                    </Link>
                  </div>
                </Flex>
              </div>
            </Flex>
          </Container>
        </div>
        {show && (
          <>
            <List className=" w-full relative z-50 mt-[70px] block lg:hidden">
              <Listitem className=" group    relative text-white  text-xs">
                <Link
                  href="#"
                  className="relative block bg-gradient-to-l from-[#25B8FF]  to-[#2C5CF6] uppercase font-medium  p-8 border-b border-[#14E9F7] transition-all ease-in after:duration-300"
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
                  className="relative block bg-gradient-to-l from-[#25B8FF]  to-[#2C5CF6] uppercase font-medium  p-8 hover:border-b border-[#14E9F7] transition-all ease-in after:duration-300"
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
                  className="relative block bg-gradient-to-l from-[#25B8FF]  to-[#2C5CF6] uppercase font-medium  p-8 hover:border-b border-[#14E9F7] transition-all ease-in after:duration-300"
                  href="#"
                >
                  Portfolio
                </Link>
              </Listitem>
              <Listitem className=" relative text-white   text-xs">
                <Link
                  className="relative block bg-gradient-to-l from-[#25B8FF]  to-[#2C5CF6] uppercase font-medium  p-8 hover:border-b border-[#14E9F7] transition-all ease-in after:duration-300"
                  href="#"
                >
                  Blog
                </Link>
              </Listitem>
              <Listitem className=" relative text-white    text-xs">
                <Link
                  className="relative block bg-gradient-to-l from-[#25B8FF]  to-[#2C5CF6] uppercase font-medium  p-8 hover:border-b border-[#14E9F7] transition-all ease-in after:duration-300"
                  href="#"
                >
                  Contact
                </Link>
              </Listitem>
            </List>
            <div className="w-[90%] mx-auto block lg:hidden text-right z-50 mt-10">
              <Flex className=" justify-between items-center gap-x-9">
                <Flex className="gap-x-3 ">
                  <IoSearchOutline className="text-xl text-white " />
                  <div className="relative">
                    <IoCartOutline className="  text-xl text-white" />
                    <RiNumber2 className="text-lg absolute top-0 left-6 bg-[#14E9F7] text-black p-1 rounded-full" />
                  </div>
                </Flex>

                <Link
                  href="#"
                  className="text-xs text-white py-3 px-6 border rounded-full hover:border-[#010049] hover:bg-[#010049] transition-all ease-in after:duration-300"
                >
                  Free Quote
                </Link>
              </Flex>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
