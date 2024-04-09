import React from "react";
import Container from "../helpers/Container/Container";
import Image from "next/image";
import Flex from "../helpers/Flex/Flex";
import OwnerImg from "../../../public/assets/service/owners.png";
import CustomRight from "./CustomRight";
const ServiceCustomize = () => {
  return (
    <>
      <div className="py-[100] md:pt-0 md:pb-[100px] lg:py-[100px] mt-0 lg:mt-[60px] xl:mt-[200px]  lg:mb-[100px] xxl:px-0 px-4">
        <Container>
          <div className="grid grid-cols-12">
            <div className="col-start-1 col-end-[-1] lg:col-start-5 lg:col-end-[-1] lg:hidden block mb-[300px] sm:mb-[420px] md:mb-[530px]">
              <CustomRight />
            </div>
            <div className="col-start-1 col-end-[-1] lg:col-start-1 lg:col-end-5">
              <div className="pr-[5px]">
                <h2 className="text-[30px] lg:text-[45px] font-bold text-[#212529] leading-[1.4] mb-6 z-50">
                  Easy To
                  <span className="text-[#157EFB] ml-2 lg:ml-0 inline-block lg:block  relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-[100%] lg:after:w-[65%] after:h-[40%] after:bg-[#157EFB] after:opacity-[.1]">
                    Customizable
                  </span>
                </h2>
                <p className="text-xs text-[#777777] leading-[2] mb-5 pr-0 xl:pr-[130px]">
                  Dashboards are meant to be personal tools for website managers
                  and suppliers to enjoy, and are therefore largely modifiable.
                </p>
                <p className="text-xs text-[#777777] leading-[2] mb-5 pr-0 xl:pr-[112px]">
                  When it comes to customer actions, website administrators can
                  choose the permissions of each supplier, allowing them to
                  limit or empower commerce activity as needed.
                </p>

                <div className="line-links mt-[70px]">
                  <Flex className="items-center">
                    <Image
                      src={OwnerImg}
                      width={106}
                      height={46}
                      alt="owner-img"
                    />
                    <div className="ml-3">
                      <h4 className="text-2xl text-[#0066ff] font-bold  leading-[1]">
                        42,500+
                      </h4>
                      <p className="text-[13px] text-[#777] leading-[2]">
                        Marketplace Owners Trust Us
                      </p>
                    </div>
                  </Flex>
                </div>
              </div>
            </div>
            <div className="col-start-1 col-end-[-1] lg:col-start-5 lg:col-end-[-1] lg:block hidden">
              <CustomRight />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ServiceCustomize;
