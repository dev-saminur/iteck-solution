"use client";
import React, { useEffect, useState } from "react";
import Container from "../helpers/Container/Container";
import Flex from "../helpers/Flex/Flex";
import Logo from "../../../public/assets/logo_ll.png";
import Image from "next/image";
import Menubar from "./Menubar";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { RiNumber2 } from "react-icons/ri";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";

import "../../app/globals.css";

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
      <div className="bg-[#157297]  relative">
        <div className={showNav ? "navbar stickynav" : "navbar"}>
          <Container>
            <Flex className="   items-center z-50">
              <div className="w-1/5 z-50">
                <Image src={Logo} alt="Logo" />
              </div>

              <FaBarsStaggered className="lg:hidden block" />

              <Menubar />
              <div className="w-1/5 z-50">
                <Flex className="justify-end items-center gap-x-9">
                  <div>
                    <Flex className="gap-x-3 ">
                      <IoSearchOutline className="text-xl text-white" />
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
      </div>
    </>
  );
};

export default Navbar;
