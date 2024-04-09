"use client";
import React from "react";
import { BusinessData } from "./data";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

const BusinessBottom = () => {
  var settings = {
    dots: false,
    arrows: false,
    rtl: true,
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
        breakpoint: 1920,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="mt-4">
        <Slider {...settings}>
          {BusinessData.map((item, i) => (
            <div key={i} className="mx-auto px-4">
              <Link
                href="/"
                className="h-[145px] py-[30px]  px-[50px] flex justify-center items-center  border border-solid border-[#788593] rounded-[20px] "
              >
                <Image src={item.images} alt="business" />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BusinessBottom;
