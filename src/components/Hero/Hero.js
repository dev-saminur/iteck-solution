import Image from "next/image";
import React from "react";
import Container from "../helpers/Container/Container";
import { FaCirclePlay } from "react-icons/fa6";
import HeroImg from "../../../public/assets/header_2.png";
import Flex from "../helpers/Flex/Flex";
import serImg1 from "../../../public/assets/s1.png";
import serImg2 from "../../../public/assets/s2.png";
import serImg3 from "../../../public/assets/s3.png";
import serImg4 from "../../../public/assets/s4.png";
import serImg5 from "../../../public/assets/s5.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div className="relative  overflow-hidden py-[185px] bg-[#01004C] lg:bg-gradient-to-b from-[#147AA5]  to-[#020045] ">
        <Container>
          <div className="relative overflow-hidden z-50">
            <h1 className="text-[123px]  tracking-[75px] uppercase font-bold text-white text-center">
              Iteck
            </h1>
            <p className="text-xl font-light text-white uppercase text-center leading-10">
              Best Solutions for
              <span className=" block px-1 ">
                <strong className="font-bold ">BIG DATA & TECHNOLOGY</strong>
                SERVICES
              </span>
            </p>
            <div className="mt-[100px] flex justify-center ">
              <FaCirclePlay className="text-6xl text-[#15F1FF]" />
            </div>
            <div className="pt-[200px] pb-[70px] ">
              <div className="grid grid-cols-12 items-center	justify-items-center	">
                <div className="col-start-2 col-end-4">
                  <Image src={serImg1} alt="service " />
                </div>
                <div className="col-start-4 col-end-6">
                  <Image src={serImg2} alt="service " />
                </div>
                <div className="col-start-6 col-end-8">
                  <Image src={serImg3} alt="service " />
                </div>
                <div className="col-start-8 col-end-10">
                  <Image src={serImg4} alt="service " />
                </div>
                <div className="col-start-10 col-end-[-1]">
                  <Image src={serImg5} alt="service " />
                </div>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-[22px] lg:text-2xl md:px-4  font-semibold leading-[1.4] text-center text-white  pb-10">
                We Can Help To Maintain And Modernize{" "}
                <span className=" lg:block">
                  Your IT Infrastructure & Solve Various Infrastructure-Specific
                </span>
                Issues A Business May Face.
              </h4>
              <p className="text-base lg:text-lg  text-center font-light leading-[1.7]  text-white px-3 mb-[60px]">
                Iteck Co Is The Partner Of Choice For Many Of The Worlds Leading{" "}
                <span className="block">
                  Enterprises, SMEs And Technology Challengers. We Help
                  Businesses Elevate Their Value Through
                </span>
                Custom Software Development, Product Design, QA And Consultancy
                Services.
              </p>
              <Link
                href="#"
                className="text-base  inline-block text-white py-3 px-6 border rounded-full hover:border-[#010049] hover:bg-[#010049] transition-all ease-in after:duration-300"
              >
                More About us
              </Link>
            </div>
          </div>
        </Container>

        <div className="w-[110%] h-[115%]  py-[100px] absolute  bottom-[-5%] left-[-5%] ">
          <Image
            src={HeroImg}
            alt="hero-img"
            loading="lazy"
            width="1478"
            height="1486"
            className=" w-[110%] h-screen lg:h-full 
            bg-center bg-cover bg-no-repeat wave ] animate-wiggle animate-infinite animate-duration-[8000ms] animate-delay-300 animate-ease-in-out animate-alternate animate-fill-both"
          />
        </div>

        {/* <div className="bg-[#020045] py-[190px]"></div> */}
      </div>
    </div>
  );
};

export default Hero;
