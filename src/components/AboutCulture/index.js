"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CultureOne from "../../../public/assets/about/cl1.png";
import CultureTwo from "../../../public/assets/about/cl2.png";
import CultureThree from "../../../public/assets/about/cl3.png";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Container from "../helpers/Container/Container";
const AboutCulture = () => {
  return (
    <>
      <div className="py-[80px]">
        <Container>
          <div className="mb-[70px] text-center">
            <h2 className="text-[45px] font-bold text-[#212529] leading-[1.4] mb-5 z-50">
              Discovery
              <span className="text-[#157EFB] ml-2  relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-[100%] after:h-[40%] after:bg-[#157EFB] after:opacity-[.1]">
                Our Culture
              </span>
            </h2>
            <p className="text-[15px] text-[#666666] leading-[1.7]  text-center">
              Profressional & Friendly is our slogan. Meet our leaders
            </p>
          </div>
        </Container>
        <div className=" py-[80px] overflow-hidden">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            navigation={false}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <div className="max-w-[455px]  relative group overflow-hidden pr-[40px]">
                <Link
                  href="/"
                  className="relative overflow-hidden	 rounded-[20px] max-h-[500px] after:absolute after:content-[' '] after:w-[50px] after:h-[3px] after:bg-white after:top-[51%] after:duration-500 after:left-[-12%] group-hover:after:left-[35%] after:translate-[-50%] before:absolute before:content-[' '] before:w-[3px] before:h-[50px] before:bg-white before:top-[-12%] group-hover:before:top-[45%] before:left-[43%] before:translate-[-50%] before:duration-500"
                >
                  <Image
                    src={CultureOne}
                    alt="CultureImg"
                    className="rounded-l-[20px]"
                  />
                </Link>
                <span className="bg-[#0a050513] absolute top-0 left-0 w-full group-hover:h-full rounded-[20px] "></span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-[455px]  relative group overflow-hidden pr-[40px]">
                <Link
                  href="/"
                  className="relative overflow-hidden	 rounded-[20px] max-h-[500px] after:absolute after:content-[' '] after:w-[50px] after:h-[3px] after:bg-white after:top-[51%] after:duration-500 after:left-[-12%] group-hover:after:left-[35%] after:translate-[-50%] before:absolute before:content-[' '] before:w-[3px] before:h-[50px] before:bg-white before:top-[-12%] group-hover:before:top-[45%] before:left-[43%] before:translate-[-50%] before:duration-500"
                >
                  <Image
                    src={CultureTwo}
                    alt="CultureImg"
                    className="rounded-l-[20px]"
                  />
                </Link>
                <span className="bg-[#0a050513] absolute top-0 left-0 w-full group-hover:h-full rounded-[20px] "></span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-[455px]  relative group overflow-hidden pr-[40px]">
                <Link
                  href="/"
                  className="relative overflow-hidden	 rounded-[20px] max-h-[500px] after:absolute after:content-[' '] after:w-[50px] after:h-[3px] after:bg-white after:top-[51%] after:duration-500 after:left-[-12%] group-hover:after:left-[35%] after:translate-[-50%] before:absolute before:content-[' '] before:w-[3px] before:h-[50px] before:bg-white before:top-[-12%] group-hover:before:top-[45%] before:left-[43%] before:translate-[-50%] before:duration-500"
                >
                  <Image
                    src={CultureThree}
                    alt="CultureImg"
                    className="rounded-l-[20px]"
                  />
                </Link>
                <span className="bg-[#0a050513] absolute top-0 left-0 w-full group-hover:h-full rounded-[20px] "></span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-[455px]  relative group overflow-hidden pr-[40px]">
                <Link
                  href="/"
                  className="relative overflow-hidden	 rounded-[20px] max-h-[500px] after:absolute after:content-[' '] after:w-[50px] after:h-[3px] after:bg-white after:top-[51%] after:duration-500 after:left-[-12%] group-hover:after:left-[35%] after:translate-[-50%] before:absolute before:content-[' '] before:w-[3px] before:h-[50px] before:bg-white before:top-[-12%] group-hover:before:top-[45%] before:left-[43%] before:translate-[-50%] before:duration-500"
                >
                  <Image
                    src={CultureOne}
                    alt="CultureImg"
                    className="rounded-l-[20px]"
                  />
                </Link>
                <span className="bg-[#0a050513] absolute top-0 left-0 w-full group-hover:h-full rounded-[20px] "></span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-[455px]  relative group overflow-hidden pr-[40px]">
                <Link
                  href="/"
                  className="relative overflow-hidden	 rounded-[20px] max-h-[500px] after:absolute after:content-[' '] after:w-[50px] after:h-[3px] after:bg-white after:top-[51%] after:duration-500 after:left-[-12%] group-hover:after:left-[35%] after:translate-[-50%] before:absolute before:content-[' '] before:w-[3px] before:h-[50px] before:bg-white before:top-[-12%] group-hover:before:top-[45%] before:left-[43%] before:translate-[-50%] before:duration-500"
                >
                  <Image
                    src={CultureTwo}
                    alt="CultureImg"
                    className="rounded-l-[20px]"
                  />
                </Link>
                <span className="bg-[#0a050513] absolute top-0 left-0 w-full group-hover:h-full rounded-[20px] "></span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-[455px]  relative group overflow-hidden pr-[40px]">
                <Link
                  href="/"
                  className="relative overflow-hidden	 rounded-[20px] max-h-[500px] after:absolute after:content-[' '] after:w-[50px] after:h-[3px] after:bg-white after:top-[51%] after:duration-500 after:left-[-12%] group-hover:after:left-[35%] after:translate-[-50%] before:absolute before:content-[' '] before:w-[3px] before:h-[50px] before:bg-white before:top-[-12%] group-hover:before:top-[45%] before:left-[43%] before:translate-[-50%] before:duration-500"
                >
                  <Image
                    src={CultureThree}
                    alt="CultureImg"
                    className="rounded-l-[20px]"
                  />
                </Link>
                <span className="bg-[#0a050513] absolute top-0 left-0 w-full group-hover:h-full rounded-[20px] "></span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-[455px]  relative group overflow-hidden pr-[40px]">
                <Link
                  href="/"
                  className="relative overflow-hidden	 rounded-[20px] max-h-[500px] after:absolute after:content-[' '] after:w-[50px] after:h-[3px] after:bg-white after:top-[51%] after:duration-500 after:left-[-12%] group-hover:after:left-[35%] after:translate-[-50%] before:absolute before:content-[' '] before:w-[3px] before:h-[50px] before:bg-white before:top-[-12%] group-hover:before:top-[45%] before:left-[43%] before:translate-[-50%] before:duration-500"
                >
                  <Image
                    src={CultureOne}
                    alt="CultureImg"
                    className="rounded-l-[20px]"
                  />
                </Link>
                <span className="bg-[#0a050513] absolute top-0 left-0 w-full group-hover:h-full rounded-[20px] "></span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-[455px]  relative group overflow-hidden pr-[40px]">
                <Link
                  href="/"
                  className="relative overflow-hidden	 rounded-[20px] max-h-[500px] after:absolute after:content-[' '] after:w-[50px] after:h-[3px] after:bg-white after:top-[51%] after:duration-500 after:left-[-12%] group-hover:after:left-[35%] after:translate-[-50%] before:absolute before:content-[' '] before:w-[3px] before:h-[50px] before:bg-white before:top-[-12%] group-hover:before:top-[45%] before:left-[43%] before:translate-[-50%] before:duration-500"
                >
                  <Image
                    src={CultureTwo}
                    alt="CultureImg"
                    className="rounded-l-[20px]"
                  />
                </Link>
                <span className="bg-[#0a050513] absolute top-0 left-0 w-full group-hover:h-full rounded-[20px] "></span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-[455px]  relative group overflow-hidden pr-[40px]">
                <Link
                  href="/"
                  className="relative overflow-hidden	 rounded-[20px] max-h-[500px] after:absolute after:content-[' '] after:w-[50px] after:h-[3px] after:bg-white after:top-[51%] after:duration-500 after:left-[-12%] group-hover:after:left-[35%] after:translate-[-50%] before:absolute before:content-[' '] before:w-[3px] before:h-[50px] before:bg-white before:top-[-12%] group-hover:before:top-[45%] before:left-[43%] before:translate-[-50%] before:duration-500"
                >
                  <Image
                    src={CultureThree}
                    alt="CultureImg"
                    className="rounded-l-[20px]"
                  />
                </Link>
                <span className="bg-[#0a050513] absolute top-0 left-0 w-full group-hover:h-full rounded-[20px] "></span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default AboutCulture;
