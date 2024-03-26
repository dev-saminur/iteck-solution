"use client";
import React, { useState } from "react";
import Container from "../helpers/Container/Container";
import Heading from "../helpers/Heading/Heading";
import Slider from "react-slick";
import Image from "next/image";
import Flex from "../helpers/Flex/Flex";
import { GoDotFill } from "react-icons/go";
import { ReviewData } from "../data/data";
import { IoIosStar } from "react-icons/io";
import ReviewShape from "../../../public/assets/rev_l.png";
import ReviewShaper from "../../../public/assets/rev_r.png";
const Review = () => {
  const [dotActive, setDotActive] = useState(true);

  const settings = {
    dots: true,
    fade: true,
    arrows: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2500,
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
            marginTop: "-17px",
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
    <div className="bg-secondary py-[140px] border-y border-solid border-[#45447A]">
      <Container>
        <div className="relative">
          <div className="text-center mb-[70px]">
            <Heading title="Reviews" />
          </div>
          <div className="slider-container w-[660px] mx-auto ">
            <Slider {...settings}>
              {ReviewData.map((item, i) => (
                <div className="w-[660px] text-center">
                  <h5 className="text-xl text-white text-center animate-jump-in animate-duration-5000 animate-ease-linear">
                    {item.title}
                  </h5>
                  <div className="text-center flex justify-center mt-10 mb-7">
                    <Image
                      src={item.image}
                      alt="Review"
                      className=" w-[80px] text-center h-[80px] rounded-full overflow-hidden bg-center bg-cover object-cover border border-solid border-[#15f1ff] p-1"
                    />
                  </div>
                  <Flex className="justify-center gap-x-2 mb-3">
                    <IoIosStar className="text-[#ADFF2F]" />
                    <IoIosStar className="text-[#ADFF2F]" />
                    <IoIosStar className="text-[#ADFF2F]" />
                    <IoIosStar className="text-[#ADFF2F]" />
                    <IoIosStar className="text-[#ADFF2F]" />
                  </Flex>
                  <p className="text-[13px] text-[#11CEE5] font-normal uppercase mb-10">
                    {item.buyer}
                    <span className="text-white capitalize text-xs">
                      {item.position}
                    </span>
                  </p>
                </div>
              ))}
            </Slider>
          </div>
          <div className="absolute top-0 lg:left-[-11%]  animate-bounce animate-infinite animate-duration-[8000ms] animate-delay-400 animate-ease-in-out animate-alternate animate-fill-both">
            <Image
              src={ReviewShape}
              alt="Review"
              className="animate-new-animation	2s linear infinite"
            />
          </div>
          <div className="absolute top-0 lg:right-[-11%] animate-bounce animate-infinite animate-duration-[8000ms] animate-delay-500 animate-ease-in-out animate-alternate animate-fill-both">
            <Image src={ReviewShaper} alt="Review" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Review;
