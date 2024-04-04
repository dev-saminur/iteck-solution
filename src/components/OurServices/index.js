import React from "react";
import Container from "../helpers/Container/Container";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
  return (
    <>
      <div className="bg-[#E7F1FF] py-[100px]">
        <Container>
          <div className="mb-[70px] text-center">
            <h2 className="text-[45px] font-bold text-[#212529] leading-[1.4] mb-5 z-50">
              Our
              <span className="text-[#157EFB] ml-2  relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-[100%] after:h-[40%] after:bg-[#157EFB] after:opacity-[.1]">
                Services
              </span>
            </h2>
            <p className="text-[15px] text-[#666666] leading-[1.7]  text-center">
              We provide perfect IT Solutions for your business
            </p>
          </div>
          <ServiceCard />
        </Container>
      </div>
    </>
  );
};

export default OurServices;
