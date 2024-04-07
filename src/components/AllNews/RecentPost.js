import React from "react";
import Flex from "../helpers/Flex/Flex";
import Image from "next/image";
import NewsBlog1 from "../../../public/assets/blogs/news1.png";
import { IoSearch } from "react-icons/io5";
import { RecentPostData } from "./data";

const RecentPost = () => {
  return (
    <>
      <div className="mb-[50px]">
        <h3 className="text-base text-[#212529] mb-5 leading-[2] font-semibold uppercase ">
          Search
        </h3>
        <div className="relative mb-[50px]">
          <input
            type="text"
            placeholder="Type and hit enter"
            className=" w-full  text-xs text-[#212529]  rounded-[50px] outline-[#157EFB] border border-solid border-[#C2C2C2] focus:ring-inset focus:ring-[#157EFB] py-3 pl-5 pr-[50px]"
          />
          <IoSearch className="absolute top-[10px] right-3 text-lg pointer" />
        </div>
        <div>
          <h3 className="text-base text-[#212529] mb-5 leading-[2] font-semibold uppercase ">
            Recent Post
          </h3>
          {RecentPostData.map((item, i) => (
            <Flex className="items-center gap-x-6 group cursor-pointer border-b border-solid border-[#DDDDDD] pb-4 mb-4">
              <div className="bg-red-400 w-[90px] h-[60px] rounded-[10px] ">
                <Image
                  src={item.images}
                  width={90}
                  height={60}
                  alt="recent-post"
                  className="w-full h-full object-cover bg-center rounded-[10px]"
                />
              </div>
              <div>
                <h6 className="text-[13px] text-[#000] mb-1.5 leading-[1.4] font-bold  group-hover:text-[#0d6efd]">
                  {item.title}
                </h6>
                <p className="text-[10px] text-[#666] leading-[1.7] w-[70%]">
                  {item.peratitle}
                </p>
              </div>
            </Flex>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentPost;
