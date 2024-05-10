import React from "react";
import Container from "../helpers/Container/Container";
import Link from "next/link";
import Image from "next/image";
import SuperMan from "../../../public/assets/about/superman_3d.png";

const Philosophy = () => {
  return (
    <>
      <div className="py-[100px] bg-[#ECF5FF] px-4 xl:px-0">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:mx-[100px] xl:gap-x-[250px] items-center">
            <Image
              src={SuperMan}
              alt="superman"
              width={555}
              height={400}
              className="w-full h-full block lg:hidden mb-[100px]"
            />
            <div className="pr-0 lg:pr-[100px] mb-[70px] lg:mb-0 ">
              <h2 className="text-[30px] lg:text-[45px] font-bold text-[#212529] leading-[1.4] mb-5 z-50">
                Itec's
                <span className="text-[#157EFB] lg:block  relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-[65%] after:h-[40%] after:bg-[#157EFB] after:opacity-[.1]">
                  Philosophy
                </span>
              </h2>
              <p className="text-xs text-[#777777] leading-[1.7] ">
                Like any great agency, we are only as good as the result we
                deliver of our recent work. Our developers are committed to
                maintaining the highest web standards so that your site.
              </p>
              <div className="line-links mt-[30px]">
                <Link
                  href="/"
                  className="block text-[15px] text-[#000] font-bold py-[13px] border-b border-solid border-[#EBEBEB]  relative after:absolute after:content-[''] after:left-0 after:bottom-0 after:border-b after:border-solid after:hover:border-[#157EFB] after:w-[0%] after:h-[1px]  after:hover:w-full after:duration-500"
                >
                  Become 1st in the IT industrial
                </Link>
                <Link
                  href="/"
                  className="block text-[15px] text-[#000] font-bold py-[13px] border-b border-solid border-[#EBEBEB]  relative after:absolute after:content-[''] after:left-0 after:bottom-0 after:border-b after:border-solid after:hover:border-[#157EFB] after:w-[0%] after:h-[1px]  after:hover:w-full after:duration-500"
                >
                  Competitive Price
                </Link>
                <Link
                  href="/"
                  className="block text-[15px] text-[#000] font-bold py-[13px] border-b border-solid border-[#EBEBEB]  relative after:absolute after:content-[''] after:left-0 after:bottom-0 after:border-b after:border-solid after:hover:border-[#157EFB] after:w-[0%] after:h-[1px]  after:hover:w-full after:duration-500"
                >
                  Enhance the quality of life
                </Link>
              </div>
            </div>
            <Image
              src={SuperMan}
              alt="superman"
              width={555}
              height={400}
              className="w-full h-full hidden lg:block "
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Philosophy;
