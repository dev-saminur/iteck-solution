import Flex from "@/components/helpers/Flex/Flex";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterLogo from "../../../../public/assets/footerlogo.png";
import Container from "@/components/helpers/Container/Container";
const CopyRight = () => {
  return (
    <>
      <div className="mt-10">
        <div className="pt-[30px] text-start  lg:text-center border-t border-solid border-[#45447A]">
          <Container>
            <Flex className="flex-wrap lg:flex items-center">
              <Image
                src={FooterLogo}
                width={100}
                height={100}
                alt="footer-logo"
              />
              <span className="text-[13px] text-[#8D8DAE] font-normal ml-0 mt-8 lg:mt-0  lg:ml-[170px] ">
                © 2023 Copyrights by
                <Link
                  href="#"
                  className="text-white hover:text-[#053495] ease-in-out duration-100 mx-1"
                >
                  Iteck Co.
                </Link>
                All Rights Reserved. Designed by
                <Link
                  href="#"
                  className="text-white hover:text-[#053495] ease-in-out duration-100 mx-1"
                >
                  ThemesCamp
                </Link>
              </span>
            </Flex>
          </Container>
        </div>
      </div>
    </>
  );
};

export default CopyRight;
