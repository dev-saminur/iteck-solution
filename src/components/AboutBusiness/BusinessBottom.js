"use client";
import React from "react";
import { BusinessData } from "./data";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

const BusinessBottom = () => {
  var settings = {
    dots: false,
    infinite: true,
    rtl: true,
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
          slidesToShow: 3,
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
      <div className="mt-4">
        <Slider {...settings}>
          {BusinessData.map((item, i) => (
            <div key={i}>
              <Link
                href="/"
                className="h-[145px] w-[300px]   flex justify-center items-center  border border-solid border-[#788593] rounded-[20px] "
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
