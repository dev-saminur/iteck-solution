"use client";
import React, { Children, useState } from "react";
import Heading from "../helpers/Heading/Heading";
import Container from "../helpers/Container/Container";
import Headings from "../helpers/Headings/Headings";
import Image from "next/image";
import Peragraph from "../helpers/Peragraph/Peragraph";
import Flex from "../helpers/Flex/Flex";
import Link from "next/link";
import Slider from "react-slick";
import { GoDotFill } from "react-icons/go";
import { ServiceData, ServiceLink } from "../data/data";
import ServiceWork from "../../../public/assets/services_work.png";
import Works from "../Works/Works";

const Service = ({ children }) => {
  const [dotActive, setDotActive] = useState(true);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoSpeed: 2000,
    autoplay: true,
    beforeChange: (prev, next) => {
      setDotActive(next);
      setDotActive(prev);
    },

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "-2",

          transform: "translateY(-50%)",
        }}
      >
        <ul
          style={{
            marginTop: "0px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "20px",
                height: "20px",
                color: "white",
                borderRadius: "50%",
                border: "1px solid red ",
              }
            : {
                width: "15px",
                height: "15px",
                color: "white",
                borderRadius: "50%",
                border: "1px solid #262626 ",
                background: "white",
              }
        }
      >
        <GoDotFill />
      </div>
    ),
  };
  return (
    <>
      <div className="relative overflow-hidden py-[80px] bg-secondary">
        <Container>
          <div className="relative  z-50">
            <Heading title="SERVICES" className="text-center mb-[70px] z-10" />

            <div className="slider-container ">
              <Slider {...settings} className="border-r border-[#020047]">
                {ServiceData.map((item, i) => (
                  <div
                    key={i}
                    className=" px-6 py-2 text-center border-r border-solid border-[#dee2e6] mb-[110px]"
                  >
                    <div className="flex justify-center mb-8">
                      <Image src={item.images} alt="ServiceImg" />
                    </div>
                    <Headings title={item.title} />
                    <Peragraph peratitle={item.peragraph} />
                    <Flex className="w-[312px] justify-center flex-wrap mx-auto">
                      {ServiceLink.map((data, i) => (
                        <Link
                          key={i}
                          href="#"
                          className="text-[11px] m-[3px] text-white bg-secondary font-normal px-[7px] py-[3px] rounded"
                        >
                          {data.links}
                        </Link>
                      ))}
                    </Flex>
                  </div>
                ))}
              </Slider>
            </div>
            <Works />
          </div>
        </Container>
        <div className=" overflow-hidden h-full w-full absolute top-0 left-0 bg-fixed	bg-center bg-cover">
          <Image
            src={ServiceWork}
            alt="ServiceImg"
            className="w-full h-full bg-fixed	bg-center bg-cover	"
          />
        </div>
      </div>
    </>
  );
};

export default Service;
