import React from "react";
import Container from "../helpers/Container/Container";
import Image from "next/image";
import Logo from "../../../public/assets/logo_ll.png";
import Link from "next/link";
import FooterMenu from "./FooterMenu";
import CopyRight from "./CopyRight";
import FooterRight from "./FooterRight";
const Footer = () => {
  return (
    <div className="py-[80px] bg-secondary border-t border-solid border-[#45447A]">
      <Container>
        <div className="grid grid-cols-12 items-center">
          <div className="xs:col-start-1 sm:col-start-2 col-end-12 lg:col-start-1 lg:col-end-3 ">
            <Image width={193} src={Logo} alt="FooterLogo" />
          </div>
          <div className="xs:col-start-1 xs:col-end-13 sm:col-start-2 sm:col-end-11 lg:col-start-3 lg:col-end-11 ">
            <FooterMenu />
          </div>
          <div className="xs:col-start-1 sm:col-start-2 col-end-12 xl:col-start-11 xl:col-end-[-1] lg:text-end">
            <FooterRight />
          </div>
        </div>
        <CopyRight />
      </Container>
    </div>
  );
};

export default Footer;
