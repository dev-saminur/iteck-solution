"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Container from "../helpers/Container/Container";
import {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineWatchLater } from "react-icons/md";
import BlogBannerImg from "../../../public/assets/blogs/blogbanner.png";
import BlogBannerImg1 from "../../../public/assets/blogs/blogbanner1.png";
import BlogBannerImg2 from "../../../public/assets/blogs/blogbanner2.png";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Flex from "../helpers/Flex/Flex";
const BlogBanner = () => {
  return (
    <>
      <div className="py-[100px] xl:px-0 px-4">
        <Container>
          <div className="mb-[70px] text-center">
            <h2 className="text-[45px] font-bold text-[#212529] leading-[1.4] mb-5 z-50">
              Our
              <span className="text-[#157EFB] ml-2  relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-[100%] after:h-[40%] after:bg-[#157EFB] after:opacity-[.1]">
                Journal
              </span>
            </h2>
            <p className="text-[15px] text-[#666666] leading-[1.7]  text-center">
              Get the latest articles from our journal, writing, discuss and
              share
            </p>
          </div>
          <div>
            <Swiper
              modules={[
                Navigation,
                Autoplay,
                Pagination,
                Scrollbar,
                A11y,
                EffectFade,
              ]}
              navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
              slidesPerView={1}
              pagination={{ clickable: false }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              className="mySwiper relative overflow-hidden"
            >
              <SwiperSlide>
                <div className="max-w-[1140px] h-[500px] mx-auto rounded-[20px] relative overflow-hidden">
                  <Image
                    src={BlogBannerImg}
                    width={1140}
                    height={500}
                    alt="blog-img-banner"
                    className="w-full h-full rounded-[20px] bg-center bg-cover object-cover"
                  />
                  <div className="bg-gradient-to-b from-[#00000015] to-[#121415]  absolute top-0 left-0 w-full h-full z-10 "></div>
                  <div className="w-full lg:w-[550px] absolute bottom-[80px] left-4 lg:left-[80px] z-30">
                    <Flex className="mt-4 items-center">
                      <Link
                        href="#"
                        className="text-white text-xs z-30 hover:text-[#0d6ef] font-bold ease-in-out duration-75   pr-3"
                      >
                        News
                      </Link>

                      <div className="ml-2 flex items-center ">
                        <MdOutlineWatchLater className="text-white text-xs mr-2" />
                        <Link
                          href="#"
                          className="text-white text-xs font-light hover:text-[#0d6ef] ease-in-out duration-75  uppercase"
                        >
                          Posted On 3 days ago
                        </Link>
                      </div>
                    </Flex>
                    <div className="mt-4 ">
                      <Link
                        href="#"
                        className="text-white text-[18px] sm:text-2xl lg:leading-[1.4] lg:text-[32px] pr-4  lg:pr-0 leading-[1.4] font-bold hover:text-[#0d6ef] ease-in-out duration-75  uppercase"
                      >
                        Solutions For Big Data Issue, Expert Perspective
                      </Link>
                      <p className="text-white text-[13px] mt-2 leading-[1.7] pr-7 lg:pr-[116px] opacity-100">
                        If theres one way that wireless technology has changed
                        the way we work, its that will everyone is now connected
                        [...]
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-[1140px] h-[500px] mx-auto rounded-[20px] relative overflow-hidden">
                  <Image
                    src={BlogBannerImg1}
                    width={1140}
                    height={500}
                    alt="blog-img-banner"
                    className="w-full h-full rounded-[20px] bg-center bg-cover object-cover"
                  />
                  <div className="bg-gradient-to-b from-[#00000015] to-[#121415]  absolute top-0 left-0 w-full h-full z-10 "></div>
                  <div className="w-full lg:w-[550px] absolute bottom-[80px] left-4 lg:left-[80px] z-30">
                    <Flex className="mt-4 items-center">
                      <Link
                        href="#"
                        className="text-white text-xs z-30 hover:text-[#0d6ef] font-bold ease-in-out duration-75   pr-3"
                      >
                        News
                      </Link>

                      <div className="ml-2 flex items-center ">
                        <MdOutlineWatchLater className="text-white text-xs mr-2" />
                        <Link
                          href="#"
                          className="text-white text-xs font-light hover:text-[#0d6ef] ease-in-out duration-75  uppercase"
                        >
                          Posted On 3 days ago
                        </Link>
                      </div>
                    </Flex>
                    <div className="mt-4 ">
                      <Link
                        href="#"
                        className="text-white text-[18px] sm:text-2xl lg:leading-[1.4] lg:text-[32px] pr-4 lg:pr-0 leading-[1.4] font-bold hover:text-[#0d6ef] ease-in-out duration-75  uppercase"
                      >
                        Solutions For Big Data Issue, Expert Perspective
                      </Link>
                      <p className="text-white text-[13px] mt-2 leading-[1.7] pr-7 lg:pr-[116px] opacity-100">
                        If theres one way that wireless technology has changed
                        the way we work, its that will everyone is now connected
                        [...]
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-[1140px] h-[500px] mx-auto rounded-[20px] relative overflow-hidden">
                  <Image
                    src={BlogBannerImg2}
                    width={1140}
                    height={500}
                    alt="blog-img-banner"
                    className="w-full h-full rounded-[20px] bg-center bg-cover object-cover"
                  />
                  <div className="bg-gradient-to-b from-[#00000015] to-[#121415]  absolute top-0 left-0 w-full h-full z-10 "></div>
                  <div className="w-full lg:w-[550px] absolute bottom-[80px] left-4 lg:left-[80px] z-30">
                    <Flex className="mt-4 items-center">
                      <Link
                        href="#"
                        className="text-white text-xs z-30 hover:text-[#0d6ef] font-bold ease-in-out duration-75   pr-3"
                      >
                        News
                      </Link>

                      <div className="ml-2 flex items-center ">
                        <MdOutlineWatchLater className="text-white text-xs mr-2" />
                        <Link
                          href="#"
                          className="text-white text-xs font-light hover:text-[#0d6ef] ease-in-out duration-75  uppercase"
                        >
                          Posted On 3 days ago
                        </Link>
                      </div>
                    </Flex>
                    <div className="mt-4 ">
                      <Link
                        href="#"
                        className="text-white text-[18px] sm:text-2xl lg:text-[32px] leading-[1.4] lg:leading-[1.4] pr-4 lg:pr-0 font-bold hover:text-[#0d6ef] ease-in-out duration-75  uppercase"
                      >
                        Solutions For Big Data Issue, Expert Perspective
                      </Link>
                      <p className="text-white text-[13px] mt-2 leading-[1.7] pr-7 lg:pr-[116px] opacity-100">
                        If theres one way that wireless technology has changed
                        the way we work, its that will everyone is now connected
                        [...]
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <button className="arrow-left arrow z-50 absolute top-[50%] translate-y-[-50%] left-[-33px] lg:left-[-28px] xl:left-0 xxl:left-[100px] bg-[#FFFFFF] rotate-45 rounded-[10px] w-[50px] h-[50px] ">
                <LiaAngleLeftSolid className="text-xl text-[#0066FF] ml-[25px] mb-[19px] rotate-[-45deg]" />
              </button>
              <button className="arrow-right arrow absolute top-[50%] z-50 translate-y-[-50%] right-[-32px] lg:right-[-27px] xl:right-[0px] xxl:right-[100px] bg-[#FFFFFF] rotate-45 rounded-[10px] w-[50px] h-[50px] ">
                <LiaAngleRightSolid className="text-xl text-[#0066FF] rotate-[-45deg] ml-[5px] mb-[-20px]" />
              </button>
            </Swiper>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BlogBanner;
