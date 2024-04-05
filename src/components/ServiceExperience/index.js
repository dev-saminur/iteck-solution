import React from "react";
import Container from "../helpers/Container/Container";
import Link from "next/link";

import SerExRight from "./SerExRight";

const ServiceExperience = () => {
  return (
    <>
      <div className="py-[100px] ">
        <Container>
          <div className="grid grid-cols-2  ">
            <div className="pr-[325px]">
              <h2 className="text-[45px] font-bold text-[#212529] leading-[1.4] mb-6 z-50">
                Optimized User
                <span className="text-[#157EFB] block  relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-[65%] after:h-[40%] after:bg-[#157EFB] after:opacity-[.1]">
                  Experiences
                </span>
              </h2>
              <p className="text-xs text-[#777777] leading-[2] mb-5 pr-7">
                The uploading and updating processes made by suppliers can be
                streamlined through front-end dashboards that create better ease
                of access.
              </p>

              <div className="line-links mt-[30px]">
                <Link
                  href="/"
                  className="block text-[15px] text-[#000] font-bold py-[13px] border-b border-solid border-[#EBEBEB]  relative after:absolute after:content-[''] after:left-0 after:bottom-0 after:border-b after:border-solid after:hover:border-[#157EFB] after:w-[0%] after:h-[1px]  after:hover:w-full after:duration-500"
                >
                  Sales Breakdown & Funnel
                </Link>
                <Link
                  href="/"
                  className="block text-[15px] text-[#000] font-bold py-[13px] border-b border-solid border-[#EBEBEB]  relative after:absolute after:content-[''] after:left-0 after:bottom-0 after:border-b after:border-solid after:hover:border-[#157EFB] after:w-[0%] after:h-[1px]  after:hover:w-full after:duration-500"
                >
                  Abadoned Carts
                </Link>
                <Link
                  href="/"
                  className="block text-[15px] text-[#000] font-bold py-[13px] border-b border-solid border-[#EBEBEB]  relative after:absolute after:content-[''] after:left-0 after:bottom-0 after:border-b after:border-solid after:hover:border-[#157EFB] after:w-[0%] after:h-[1px]  after:hover:w-full after:duration-500"
                >
                  Revenue by Channel & Devices
                </Link>
                <Link
                  href="/"
                  className="block text-[15px] text-[#000] font-bold py-[13px]  relative after:absolute after:content-[''] after:left-0 after:bottom-0 after:border-b after:border-solid after:hover:border-[#157EFB] after:w-[0%] after:h-[1px]  after:hover:w-full after:duration-500"
                >
                  Sales Forecast
                </Link>
              </div>
            </div>
            <SerExRight />
          </div>
        </Container>
      </div>
    </>
  );
};

export default ServiceExperience;
