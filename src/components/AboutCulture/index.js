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
const AboutCulture = () => {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   autoplay: true,
  //   speed: 3500,
  //   autoplaySpeed: 3500,
  //   cssEase: "linear",
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 6,
  //         slidesToScroll: 3,
  //         infinite: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <>
      <div className=" py-[80px] overflow-hidden">
        {/* <Slider {...settings}> */}
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
    </>
  );
};

export default AboutCulture;
