import React from "react";
import Flex from "../helpers/Flex/Flex";
import NewsBlog from "../../../public/assets/blogs/news.png";
import NewsBlog1 from "../../../public/assets/blogs/news1.png";
import NewsBlog2 from "../../../public/assets/blogs/news2.png";
import NewsBlog3 from "../../../public/assets/blogs/news3.png";
import NewsBlog4 from "../../../public/assets/blogs/news4.png";
import NewsBlog5 from "../../../public/assets/blogs/news5.png";
import NewsBlog6 from "../../../public/assets/blogs/news6.png";
import Image from "next/image";
import { IoLogoInstagram } from "react-icons/io";
import { InstaData } from "./data";

const InstaTag = () => {
  return (
    <>
      <div>
        <div>
          <h3 className="text-base text-[#212529] mb-2 leading-[2] font-semibold uppercase ">
            OUR INSTAGRAM
          </h3>

          <Flex className="justify-between flex-wrap">
            {InstaData.map((item, i) => (
              <div
                key={i}
                className="relative w-[120px] h-[100px] group rounded-[10px] overflow-hidden bg-gray-700 mb-3"
              >
                <Image
                  width={120}
                  height={100}
                  src={item.imgages}
                  alt="our-instagram"
                  className="w-full h-full bg-cover object-cover bg-center rounded-[10px]"
                />
                <div className="bg-black w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-50 duration-200"></div>
                <IoLogoInstagram className="text-white absolute top-[45%] left-[42%] z-10 translate-[-50%] duration-200 opacity-0 group-hover:opacity-100" />
              </div>
            ))}
          </Flex>
        </div>
        <div className="mt-[50px]">
          <h3 className="text-base text-[#212529] mb-2 leading-[2] font-semibold uppercase ">
            POPULAR TAGS
          </h3>
        </div>
      </div>
    </>
  );
};

export default InstaTag;
