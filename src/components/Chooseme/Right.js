import React from "react";
import Flex from "@/components/helpers/Flex/Flex";
import Ch1 from "../../../public/assets/ch1.png";
import Ch2 from "../../../public/assets/ch2.png";
import Ch3 from "../../../public/assets/ch3.png";
import Headings from "@/components/helpers/Headings/Headings";
import Link from "next/link";
import Image from "next/image";
const Right = () => {
  return (
    <>
      <div className="sm:mx-4 md:ml-[60px] lg:ml-0 lg:mx-0">
        <p className="text-sm sm:pr-[155px] md:pr-[295px] text-white font-normal mb-[60px] lg:pr-32 leading-6">
          WE CREATE DIFFERENTIATED VALUE TO RISE TO THE TOP IN THIS FIELD
        </p>
        <div>
          <Flex className="mb-8 ">
            <div className="w-[11%]">
              <Image width={45} height={42} src={Ch1} alt="chimg" />
            </div>
            <div className="ml-10">
              <Headings
                title="Affordable Price"
                className="text-xl md:text-2xl"
              />
              <p className="text-white text-[13px] font-normal sm:pr-[130px] md:pr-[288px] lg:pr-24 lg:min-pr-[152px] xl:pr-[152px] xxl:pr-[250px]  mt-2">
                Nanotechnology immersion along the information high will close
                the loop on focusing solely
              </p>
            </div>
          </Flex>

          <Flex className="mb-8  ">
            <div className="w-[11%]">
              <Image width={45} height={42} src={Ch2} alt="chimg" />
            </div>
            <div className="ml-10 ">
              <Headings
                title="Top-Notch Experts Consulting"
                className="text-xl md:text-2xl"
              />
              <p className="text-white text-[13px] font-normal  sm:pr-[130px] md:pr-[288px]  lg:pr-24 lg:min-pr-[152px] xl:pr-[152px] xxl:pr-[250px]  mt-2">
                Our top-notch Experts with much years of experience certail will
                give best solutions for your business
              </p>
            </div>
          </Flex>
          <Flex className="mb-8 ">
            <div>
              <Image src={Ch3} alt="chimg" />
            </div>
            <div className="ml-8">
              <Headings
                title="Dedicated Support 24/7"
                className="text-xl md:text-2xl"
              />
              <p className="text-white text-[13px] sm:pr-[130px] md:pr-[288px] font-normal lg:pr-24  xl:pr-[280px] mt-2">
                Customer support is always our number one priority.
              </p>
            </div>
          </Flex>
          <div className="mt-14 ">
            <Link
              href="#"
              className="text-xs   text-white py-3 px-6 border rounded-full hover:border-[#010049] hover:bg-[#010049] transition-all ease-in after:duration-300"
            >
              Request A Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Right;
