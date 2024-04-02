import React from "react";
import Container from "../helpers/Container/Container";
import Image from "next/image";
import ManArrow from "../../../public/assets/about/man_arrow.png";
import SerPeople from "../../../public/assets/about/ser_people.png";
import SerCoder from "../../../public/assets/about/ser_coder.png";
import SerCloud from "../../../public/assets/about/ser_cloud.png";
import Flex from "../helpers/Flex/Flex";
import Link from "next/link";

const AboutService = () => {
  return (
    <>
      <div className="bg-[#ECF5FF] py-8">
        <Container>
          <div className="grid grid-cols-2 gap-x-[100px]">
            <div>
              <Image
                src={ManArrow}
                alt="AboutService"
                width={680}
                height={516}
                className="ml-[-200px]"
              />
            </div>
            <div>
              <div className="mb-[50px]">
                <h2 className="text-[45px] font-bold text-[#212529] leading-[1.4] mb-5 z-50">
                  Our
                  <span className="text-[#157EFB] ml-2  relative after:absolute after:content-[''] after:bottom-0 after:left-2 after:w-[100%] after:h-[40%] after:bg-[#157EFB] after:opacity-[.1]">
                    Services
                  </span>
                </h2>
                <p className="text-xs text-[#666666] leading-[1.7] pr-[260px]">
                  With Iteck Marketplace, choose from hundreds of payment
                  gateways for your customers.
                </p>
              </div>
              <div>
                <Flex>
                  <div className="w-[73px] mr-6">
                    <Image
                      src={SerPeople}
                      alt="serPerson"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="mb-10">
                    <h5 className="text-lg text-[#000] font-bold leading-[1.4] capitalize">
                      IT Consultation
                    </h5>
                    <p className="text-xs text-[#666] mt-1 font-normal leading-[1.7] pr-[280px]">
                      Nanotechnology immersion along the information high will
                      close the loop on focusing solely
                    </p>
                  </div>
                </Flex>
                <Flex>
                  <div className="w-[73px] mr-6">
                    <Image
                      src={SerCoder}
                      alt="serPerson"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="mb-10">
                    <h5 className="text-lg text-[#000] font-bold leading-[1.4] capitalize">
                      Software Design & Development
                    </h5>
                    <p className="text-xs text-[#666] mt-1 font-normal leading-[1.7] pr-[255px]">
                      Our top-notch Experts with much years of experience
                      certail will give best solutions for your business
                    </p>
                  </div>
                </Flex>
                <Flex>
                  <div className="w-[73px]">
                    <Image
                      src={SerCloud}
                      alt="serPerson"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="mb-10">
                    <h5 className="text-lg text-[#000] font-bold leading-[1.4] capitalize">
                      Cloud Services
                    </h5>
                    <p className="text-xs text-[#666] mt-1 font-normal leading-[1.7] ">
                      Customer support is always our number one priority.
                    </p>
                  </div>
                </Flex>
                <Link
                  href="/"
                  className="text-xs text-white font-normal py-2.5 px-[50px] rounded-[50px] bg-[#157efb] hover:bg-[#4A00E1] border-b-4 border-solid border-[#5842BC] duration-150"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutService;
