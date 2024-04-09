"use client";
import React from "react";
import { IoIosStar } from "react-icons/io";
import Flex from "../helpers/Flex/Flex";
import Image from "next/image";
import LeaderImg from "../../../public/assets/about/leader.jpeg";
import LeaderImg1 from "../../../public/assets/about/leader1.jpeg";
import LeaderImg2 from "../../../public/assets/about/leader2.jpeg";
import LeaderImg3 from "../../../public/assets/about/leader3.jpeg";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Container from "../helpers/Container/Container";
const SerClientReview = () => {
  return (
    <>
      <div className="py-[100px] bg-[#F3F7FE] px-4 lg:px-2 xl:px-0">
        <Container>
          <div className="mb-[70px] text-center">
            <h2 className="text-[30px] lg:text-[45px] font-bold text-[#212529] leading-[1.4] mb-5 z-50">
              Clients
              <span className="text-[#157EFB] ml-2  relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-[100%] after:h-[40%] after:bg-[#157EFB] after:opacity-[.1]">
                Reviews
              </span>
            </h2>
            <p className=" text-[15px] text-[#666666] leading-[1.7]  text-center px-0 sm:px-[150px] xl:px-[200px] xxl:px-[350px]">
              Iteck loved from thoudsands customer worldwide and get trusted
              from big companies.
            </p>
          </div>
        </Container>
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
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-10 lg:px-0 px-4">
            <SwiperSlide>
              <div className=" text-center bg-white py-10 px-[30px] hover:shadow-2xl group rounded-[15px] duration-200">
                <Flex className="justify-center gap-x-2 mb-[15px]">
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                </Flex>
                <h4 className="text-[19px] text-[#000] font-normal mb-10 leading-[1.6]">
                  “Big thank to team support of Iteck. Fast, professional and
                  extremly friendly. This product alway update and ehance
                  everyday.”
                </h4>
                <div className="text-center flex justify-center  mb-7">
                  <Image
                    src={LeaderImg2}
                    alt="Review"
                    className=" w-[80px] text-center h-[80px] rounded-full overflow-hidden bg-center bg-cover object-cover "
                  />
                </div>
                <h5 className="text-base text-[#212529] text-center font-bold group-hover:text-[#0d6efd] duration-200">
                  Eduard Mendy
                </h5>
                <span className="text-[#666]  text-[11px]">
                  VP of Sale Development
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center bg-white py-10 px-[30px] hover:shadow-2xl group rounded-[15px] duration-200">
                <Flex className="justify-center gap-x-2 mb-[15px]">
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                </Flex>
                <h4 className="text-[19px] text-[#000] font-normal mb-10 leading-[1.6] px-4">
                  “10/10 for all related to Iteck E-Com Dashboard. It's too
                  perfect!”
                </h4>
                <div className="text-center flex justify-center  mb-7">
                  <Image
                    src={LeaderImg3}
                    alt="Review"
                    className=" w-[80px] text-center h-[80px] rounded-full overflow-hidden bg-center bg-cover object-cover "
                  />
                </div>
                <h5 className="text-base text-[#212529] text-center font-bold group-hover:text-[#0d6efd] duration-200">
                  Lucas Digne
                </h5>
                <span className="text-[#666]  text-[11px]">
                  Sale Product Management at Flipkart
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center bg-white py-10 px-[30px] hover:shadow-2xl group rounded-[15px] duration-200">
                <Flex className="justify-center gap-x-2 mb-[15px]">
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                </Flex>
                <h4 className="text-[19px] text-[#000] font-normal mb-10 leading-[1.6]">
                  “Best dashboard for any your store, woo or shopify. Powerful
                  and very flexiable. Recommended!”
                </h4>
                <div className="text-center flex justify-center  mb-7">
                  <Image
                    src={LeaderImg}
                    alt="Review"
                    className=" w-[80px] text-center h-[80px] rounded-full overflow-hidden bg-center bg-cover object-cover "
                  />
                </div>
                <h5 className="text-base text-[#212529] text-center font-bold group-hover:text-[#0d6efd] duration-200">
                  Thomas Eristen
                </h5>
                <span className="text-[#666]  text-[11px]">
                  Sale Director at Amazon Retail
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center bg-white py-10 px-[30px] hover:shadow-2xl group rounded-[15px] duration-200">
                <Flex className="justify-center gap-x-2 mb-[15px]">
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                </Flex>
                <h4 className="text-[19px] text-[#000] font-normal mb-10 leading-[1.6] ">
                  “Iteck provide very much features to help increase CRO so
                  amazing.”
                </h4>
                <div className="text-center flex justify-center  mb-7">
                  <Image
                    src={LeaderImg1}
                    alt="Review"
                    className=" w-[80px] text-center h-[80px] rounded-full overflow-hidden bg-center bg-cover object-cover "
                  />
                </div>
                <h5 className="text-base text-[#212529] text-center font-bold group-hover:text-[#0d6efd] duration-200">
                  Carlos Martinelli
                </h5>
                <span className="text-[#666]  text-[11px]">
                  SEO & Marketing at Ebay Global
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" text-center bg-white py-10 px-[30px] hover:shadow-2xl group rounded-[15px] duration-200">
                <Flex className="justify-center gap-x-2 mb-[15px]">
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                </Flex>
                <h4 className="text-[19px] text-[#000] font-normal mb-10 leading-[1.6]">
                  “Big thank to team support of Iteck. Fast, professional and
                  extremly friendly. This product alway update and ehance
                  everyday.”
                </h4>
                <div className="text-center flex justify-center  mb-7">
                  <Image
                    src={LeaderImg2}
                    alt="Review"
                    className=" w-[80px] text-center h-[80px] rounded-full overflow-hidden bg-center bg-cover object-cover "
                  />
                </div>
                <h5 className="text-base text-[#212529] text-center font-bold group-hover:text-[#0d6efd] duration-200">
                  Eduard Mendy
                </h5>
                <span className="text-[#666]  text-[11px]">
                  VP of Sale Development
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center bg-white py-10 px-[30px] hover:shadow-2xl group rounded-[15px] duration-200">
                <Flex className="justify-center gap-x-2 mb-[15px]">
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                </Flex>
                <h4 className="text-[19px] text-[#000] font-normal mb-10 leading-[1.6] px-4">
                  “10/10 for all related to Iteck E-Com Dashboard. It's too
                  perfect!”
                </h4>
                <div className="text-center flex justify-center  mb-7">
                  <Image
                    src={LeaderImg3}
                    alt="Review"
                    className=" w-[80px] text-center h-[80px] rounded-full overflow-hidden bg-center bg-cover object-cover "
                  />
                </div>
                <h5 className="text-base text-[#212529] text-center font-bold group-hover:text-[#0d6efd] duration-200">
                  Lucas Digne
                </h5>
                <span className="text-[#666]  text-[11px]">
                  Sale Product Management at Flipkart
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" text-center bg-white py-10 px-[30px] hover:shadow-2xl group rounded-[15px] duration-200">
                <Flex className="justify-center gap-x-2 mb-[15px]">
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                </Flex>
                <h4 className="text-[19px] text-[#000] font-normal mb-10 leading-[1.6]">
                  “Best dashboard for any your store, woo or shopify. Powerful
                  and very flexiable. Recommended!”
                </h4>
                <div className="text-center flex justify-center  mb-7">
                  <Image
                    src={LeaderImg}
                    alt="Review"
                    className=" w-[80px] text-center h-[80px] rounded-full overflow-hidden bg-center bg-cover object-cover "
                  />
                </div>
                <h5 className="text-base text-[#212529] text-center font-bold group-hover:text-[#0d6efd] duration-200">
                  Thomas Eristen
                </h5>
                <span className="text-[#666]  text-[11px]">
                  Sale Director at Amazon Retail
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center bg-white py-10 px-[30px] hover:shadow-2xl group rounded-[15px] duration-200">
                <Flex className="justify-center gap-x-2 mb-[15px]">
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                  <IoIosStar className="text-[#27A700]" />
                </Flex>
                <h4 className="text-[19px] text-[#000] font-normal mb-10 leading-[1.6] ">
                  “Iteck provide very much features to help increase CRO so
                  amazing.”
                </h4>
                <div className="text-center flex justify-center  mb-7">
                  <Image
                    src={LeaderImg1}
                    alt="Review"
                    className=" w-[80px] text-center h-[80px] rounded-full overflow-hidden bg-center bg-cover object-cover "
                  />
                </div>
                <h5 className="text-base text-[#212529] text-center font-bold group-hover:text-[#0d6efd] duration-200">
                  Carlos Martinelli
                </h5>
                <span className="text-[#666]  text-[11px]">
                  SEO & Marketing at Ebay Global
                </span>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default SerClientReview;
