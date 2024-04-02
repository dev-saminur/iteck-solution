"use client";
import React from "react";
import Container from "../helpers/Container/Container";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { BusinessData } from "./data";
import BusinessBottom from "./BusinessBottom";
import Experience from "./Experience";

const AboutBusiness = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-[#ECF5FF] py-[100px] px-7">
        <Container>
          <div className=" grid col-start-4 col-end-9">
            <div className="mb-[50px] text-center">
              <h2 className="text-[45px] font-bold text-[#212529] leading-[1.4] mb-5 z-50">
                Our
                <span className="text-[#157EFB] ml-2  relative after:absolute after:content-[''] after:bottom-0 after:left-2 after:w-[100%] after:h-[40%] after:bg-[#157EFB] after:opacity-[.1]">
                  Services
                </span>
              </h2>
              <p className="text-xs text-[#666666] leading-[1.7] ">
                More than 15,000 companies trust and choose Iteck
              </p>
            </div>
          </div>
        </Container>

        <Slider {...settings}>
          {BusinessData.map((item, i) => (
            <div key={i} className="mx-auto">
              <Link
                href="/"
                className="h-[145px] w-[300px]   flex justify-center items-center  border border-solid border-[#788593] rounded-[20px] "
              >
                <Image src={item.images} alt="business" />
              </Link>
            </div>
          ))}
        </Slider>
        <BusinessBottom />
        <Experience />
      </div>
    </>
  );
};

export default AboutBusiness;
