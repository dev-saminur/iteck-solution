"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Container from "../helpers/Container/Container";
import { Navigation, Pagination, Autoplay, prevEl } from "swiper/modules";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineWatchLater } from "react-icons/md";

import BlogBannerImg from "../../../public/assets/blogs/blogbanner.png";
import BlogBannerImg1 from "../../../public/assets/blogs/blogbanner1.png";
import BlogBannerImg2 from "../../../public/assets/blogs/blogbanner2.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Flex from "../helpers/Flex/Flex";
const BlogBanner = () => {
  return (
    <>
      <div className="py-[100px]">
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
              modules={[Navigation, Autoplay, Pagination]}
              navigation={{
                prevEl: "next",
              }}
              slidesPerView={1}
              pagination={{ clickable: false }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="max-w-[1140px] max-h-[500px] mx-auto rounded-[20px] relative overflow-hidden">
                  <Image
                    src={BlogBannerImg}
                    width={1140}
                    height={500}
                    alt="blog-img-banner"
                    className="w-full h-full rounded-[20px] bg-center bg-cover object-cover"
                  />
                  <div className="bg-gradient-to-b from-[#00000015] to-[#121415]  absolute top-0 left-0 w-full h-full z-10 "></div>
                  <div className="max-w-[550px] absolute bottom-[80px] left-[80px] z-30">
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
                        className="text-white text-[32px] font-bold hover:text-[#0d6ef] ease-in-out duration-75  uppercase"
                      >
                        Solutions For Big Data Issue, Expert Perspective
                      </Link>
                      <p className="text-white text-[13px] mt-2 pr-[116px] opacity-100">
                        If theres one way that wireless technology has changed
                        the way we work, its that will everyone is now connected
                        [...]
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-[1140px] max-h-[500px] mx-auto rounded-[20px] relative overflow-hidden">
                  <Image
                    src={BlogBannerImg1}
                    width={1140}
                    height={500}
                    alt="blog-img-banner"
                    className="w-full h-full rounded-[20px] bg-center bg-cover object-cover"
                  />
                  <div className="bg-gradient-to-b from-[#00000015] to-[#121415]  absolute top-0 left-0 w-full h-full z-10 "></div>
                  <div className="max-w-[550px] absolute bottom-[80px] left-[80px] z-30">
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
                        className="text-white text-[32px] font-bold hover:text-[#0d6ef] ease-in-out duration-75  uppercase"
                      >
                        Solutions For Big Data Issue, Expert Perspective
                      </Link>
                      <p className="text-white text-[13px] mt-2 pr-[116px] opacity-100">
                        If theres one way that wireless technology has changed
                        the way we work, its that will everyone is now connected
                        [...]
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-[1140px] max-h-[500px] mx-auto rounded-[20px] relative overflow-hidden">
                  <Image
                    src={BlogBannerImg2}
                    width={1140}
                    height={500}
                    alt="blog-img-banner"
                    className="w-full h-full rounded-[20px] object-cover  bg-center bg-cover"
                  />
                  <div className="bg-gradient-to-b from-[#00000015] to-[#121415]  absolute top-0 left-0 w-full h-full z-10 "></div>
                  <div className="max-w-[550px] absolute bottom-[80px] left-[80px] z-30">
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
                        className="text-white text-[32px] font-bold hover:text-[#0d6ef] ease-in-out duration-75  uppercase"
                      >
                        Solutions For Big Data Issue, Expert Perspective
                      </Link>
                      <p className="text-white text-[13px] mt-2 pr-[116px] opacity-100">
                        If theres one way that wireless technology has changed
                        the way we work, its that will everyone is now connected
                        [...]
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BlogBanner;
