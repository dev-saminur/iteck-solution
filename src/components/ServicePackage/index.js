import React from "react";
import Container from "../helpers/Container/Container";
import PackagePlan from "./PackagePlan";

const ServicePackage = () => {
  return (
    <>
      <div className="py-[100px]">
        <Container>
          <div className="mb-[70px] text-center">
            <h2 className="text-[45px] font-bold text-[#212529] leading-[1.4] mb-5 z-50">
              Choose Plan and
              <span className="text-[#157EFB] ml-2  relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-[100%] after:h-[40%] after:bg-[#157EFB] after:opacity-[.1]">
                Kick-start
              </span>
            </h2>
            <p className="text-[15px] text-[#666666] leading-[1.7]  text-center ">
              Whether you're just getting started with rapid testing or scaling
              across the organization, we've got you covered.
            </p>
          </div>
          <PackagePlan />
        </Container>
      </div>{" "}
    </>
  );
};

export default ServicePackage;
