import React from "react";
import Container from "../helpers/Container/Container";
import TopCard from "./TopCard";

const TopServices = () => {
  return (
    <>
      <div className="py-[100px]">
        <Container>
          <div className="mb-[70px] text-center">
            <h2 className="text-[45px] font-bold text-[#212529] leading-[1.4] mb-5 z-50">
              Our Top
              <span className="text-[#157EFB] ml-2  relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-[100%] after:h-[40%] after:bg-[#157EFB] after:opacity-[.1]">
                Services
              </span>
            </h2>
            <p className="text-[15px] text-[#666666] leading-[1.7]  text-center px-[350px]">
              Iteck Dashboard is a powerhouse when it comes to the feature list.
              This ensures you have every functionality you need to build, run,
              and expand your marketplace
            </p>
          </div>
        </Container>
        <TopCard />
      </div>
    </>
  );
};

export default TopServices;
