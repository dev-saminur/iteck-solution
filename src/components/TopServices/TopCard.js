"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopCardImg from "../../../public/assets/service/topcard.png";
import TopCardImg1 from "../../../public/assets/service/topcard6.png";
import { TopCardData } from "./data";
// Import Swiper React components
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TopCard = () => {
  return (
    <>
      <Swiper
        autoHeight={true}
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={6}
        navigation={false}
        pagination={{ clickable: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {TopCardData.map((item, i) => (
          <SwiperSlide key={i}>
            <div className=" py-[30px] px-[8%] bg-[#F1F2FA] rounded-[15px] text-center mb-8 ">
              <Link href="/" className="text-center">
                <Image
                  alt="top-card-img"
                  src={item.icon}
                  className=" mx-auto mb-10 shadow-2xl"
                />
                <h5 className="text-[15px] xxl:text-[17px] text-[#000] mb-[15px] font-bold leading-[1.4] ">
                  {item.title}
                </h5>
                <p className="text-[11px] xxl:text-[13px] text-[#777] leading-[1.8]">
                  {item.peratitle}
                </p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TopCard;
