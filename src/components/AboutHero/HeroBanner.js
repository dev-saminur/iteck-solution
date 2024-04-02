import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa6";
import AboutHeroBanner from "../../../public/assets/about/vid_banner5.png";

const HeroBanner = () => {
  return (
    <>
      <div className="grid grid-cols-12 	">
        <div className="col-start-1 col-end-13 lg:col-start-2 lg:col-end-12 px-4 lg:px-0">
          <div className="relative mt-[150px] ml-0 lg:ml-5">
            <div className="relative max:w-[1120px] rounded-[20px] h-[550px] overflow-hidden text-center">
              <Image
                width={1120}
                height={550}
                src={AboutHeroBanner}
                className="border-8 border-solid border-white rounded-[20px]"
              />
            </div>
            <div className="bg-[#157EFB] w-[100px] h-[100px] absolute top-[12%] left-[36%] sm:top-[27%] sm:left-[41%] lg:top-[42%]  lg:left-[44%] translate-y-[-50%] translate-x-[-50%]  rounded-full flex justify-center items-center border-b-[5px] border-solid border-[#5842BC] animate-[smalltobig] animate-infinite animate-duration-[3000ms] animate-ease-in-out animate-alternate">
              <FaPlay className="text-xl text-white " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
