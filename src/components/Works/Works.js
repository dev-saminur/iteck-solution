import React, { useState } from "react";
import Heading from "../helpers/Heading/Heading";
import Image from "next/image";
import Container from "../helpers/Container/Container";
import { WorksData } from "../data/data";
import Link from "next/link";
import Headings from "../helpers/Headings/Headings";

import Slider from "react-slick";

const Works = () => {
  var settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="pt-[110px]">
        <Container>
          <div>
            <Heading title="Works" className="text-center mb-[70px] z-10" />
            <div className="max-w-[1000px] mx-auto ">
              <Slider {...settings}>
                {WorksData.map((item, i) => (
                  <div key={i} className=" sm:mx-0 lg:ml-[20px] px-4 lg:px-0 ">
                    <div className=" max-h-[416px] sm:w-full  lg:w-[457px] lg:h-[316px] overflow-hidden rounded-md">
                      <Image
                        src={item.workimg}
                        width={457}
                        height={316}
                        className="w-full h-full hover:scale-150	 hover:-rotate-6	 	 transition-all animate-ease-in-out duration-1000		"
                      />
                    </div>
                    <div className="text-center mt-6">
                      <Headings title="Analys & Backup Blockchain" />
                      <Link
                        href="#"
                        className=" text-[13px] text-[#15f1ff] mt-2 uppercase hover:text-[#0d6efd] transition-all mr-1"
                      >
                        {item.link}
                      </Link>
                      <Link
                        href="#"
                        className=" text-[13px] text-[#15f1ff] mt-2 uppercase hover:text-[#0d6efd] transition-all"
                      >
                        {item.links}
                      </Link>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="text-center mt-16 z-50">
              <Link
                href="#"
                className="text-xs text-center  text-white py-3 px-6 border rounded-full hover:border-[#010049] hover:bg-[#010049] transition-all ease-in after:duration-300"
              >
                See All Projects
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Works;
