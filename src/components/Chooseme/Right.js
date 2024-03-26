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
      <div>
        <p className="text-sm text-white font-normal mb-[60px] lg:pr-32 xl:pr-[380px] leading-6">
          WE CREATE DIFFERENTIATED VALUE TO RISE TO THE TOP IN THIS FIELD
        </p>
        <div>
          <Flex className="mb-8 ">
            <div className="mr-8">
              <Image src={Ch1} alt="chimg" />
            </div>
            <div>
              <Headings
                title="Affordable Price
"
                className="text-lg md:text-2xl"
              />
              <p className="text-white text-[13px] font-normal lg:pr-24 xl:pr-[350px] mt-2">
                our top-notch Experts with much years of experience certail will
                give best solutions for your business
              </p>
            </div>
          </Flex>

          <Flex className="mb-8 ">
            <div className="mr-8">
              <Image src={Ch2} alt="chimg" />
            </div>
            <div>
              <Headings
                title="Top-Notch Experts Consulting"
                className="text-lg md:text-2xl"
              />
              <p className="text-white text-[13px] font-normal lg:pr-24  xl:pr-[350px] mt-2">
                Our top-notch Experts with much years of experience certail will
                give best solutions for your business
              </p>
            </div>
          </Flex>
          <Flex className="mb-8 ">
            <div className="mr-8">
              <Image src={Ch3} alt="chimg" />
            </div>
            <div>
              <Headings
                title="Dedicated Support 24/7"
                className="text-lg md:text-2xl"
              />
              <p className="text-white text-[13px] font-normal lg:pr-24  xl:pr-[350px] mt-2">
                Customer support is always our number one priority.
              </p>
            </div>
          </Flex>
          <div className="mt-14">
            <Link
              href="#"
              className="text-xs   text-white py-3 px-6 border rounded-full hover:border-[#010049] hover:bg-[#010049] transition-all ease-in after:duration-300"
            >
              More About us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Right;
