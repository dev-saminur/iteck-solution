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
          <div className="col-start-1 col-end-3 ">
            <Image src={Logo} alt="FooterLogo" />
          </div>
          <div className="col-start-3 col-end-11 ">
            <FooterMenu />
          </div>
          <div className="col-start-11 col-end-[-1] text-end">
            <FooterRight />
          </div>
        </div>
        <CopyRight />
      </Container>
    </div>
  );
};

export default Footer;
