import React from "react";
import Flex from "../helpers/Flex/Flex";
import Image from "next/image";
import Link from "next/link";
import { AllNewsData } from "../AllNews/data";
const AllBlogPost = () => {
  return (
    <>
      {AllNewsData.map((item, i) => (
        <div key={i} className="my-5">
          <Flex className=" border-b border-solid  items-center pb-5">
            <Image
              width={292}
              height={200}
              src={item.images}
              alt="BlogImg"
              className="w-[73%] h-full mr-6 overflow-hidden rounded-[20px] object-cover  "
            />

            <div>
              <div className="flex">
                <Link
                  href="#"
                  className="text-[#157efb] text-xs  font-bold ease-in-out duration-75   pr-3 border-r border-solid border-white"
                >
                  {item.news}
                </Link>
                <div className="ml-2 flex  ">
                  <span>{item.dateicon}</span>
                  <Link
                    href="#"
                    className="text-[#212529] text-xs font-light hover:text-[#0d6efd] ease-in-out duration-75  uppercase"
                  >
                    {item.date}
                  </Link>
                </div>
              </div>
              <div className="mt-3 ">
                <Link
                  href="#"
                  className="text-[#212529] text-lg hover:text-[#0d6efd]  font-bold ease-in-out duration-75  "
                >
                  {item.headlinks}
                </Link>
                <p className="text-sm text-[#666] leading-[1.7] mt-5">
                  {item.peratitle}
                </p>
              </div>
              <div className="mt-[50px]">
                <Flex className="justify-between">
                  <div className="flex items-center gap-x-2">
                    <span>{item.adminicon}</span>
                    <Link
                      href="#"
                      className="text-[13px] ml-1 text-[#212529] hover:text-[#0d6efd] ease-in-out duration-75"
                    >
                      {item.admin}
                    </Link>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <div className="flex items-center">
                      <span>{item.msgicon}</span>
                      <Link
                        href="#"
                        className="text-[13px] ml-2 text-[#212529] hover:text-[#0d6efd] ease-in-out duration-75"
                      >
                        {item.react}
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <span>{item.eyeicon}</span>
                      <Link
                        href="#"
                        className="text-[13px] ml-2 text-[#212529] hover:text-[#0d6efd] ease-in-out duration-75"
                      >
                        {item.view}
                      </Link>
                    </div>
                  </div>
                </Flex>
              </div>
            </div>
          </Flex>
        </div>
      ))}
    </>
  );
};

export default AllBlogPost;
