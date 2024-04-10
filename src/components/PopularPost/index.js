import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbCircleLetterA } from "react-icons/tb";
import { RiMessage2Line } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Flex from "../helpers/Flex/Flex";
import Container from "../helpers/Container/Container";
import BlogImg from "../../../public/assets/blog.png";
import BlogBannerImg from "../../../public/assets/blogs/blogbanner.png";
import BlogBannerImg1 from "../../../public/assets/blogs/blogbanner1.png";
const PopularPost = () => {
  return (
    <>
      <div className="pt-2 pb-12 lg:pt-[100px] lg:pb-[300px] xl:px-0 px-2">
        <Container>
          <div className="max-w-[1160px] mx-auto ml-0 xl:ml-[40px] xxl:ml-[165px]">
            <h5 className="text-xl text-[#212529] font-bold tracking-[2] text-center mb-[50px] uppercase">
              Popular Posts
            </h5>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 ">
              <div className=" w-full p-4    lg:p-0 lg:w-[317px] max-h-[200px] z-50 mb-[180px] lg:mb-0  ">
                <Image
                  width={1400}
                  src={BlogBannerImg1}
                  alt="BlogImg"
                  className="w-full h-full rounded-[20px] object-cover "
                />
                <Flex className="mt-4 items-center">
                  <Link
                    href="#"
                    className=" text-[10px] text-[#0d6efd] font-normal ease-in-out duration-75   pr-3 border-r border-solid border-[#212529]"
                  >
                    News
                  </Link>

                  <div className="ml-2 flex items-center ">
                    <MdOutlineWatchLater className="text-[#212529] text-xs mr-2" />
                    <Link
                      href="#"
                      className="text-[#212529] text-[10px] font-light hover:text-[#0d6efd] ease-in-out duration-75  uppercase"
                    >
                      Posted On 3 days ago
                    </Link>
                  </div>
                </Flex>
                <div className="mt-4 ">
                  <Link
                    href="#"
                    className="text-[#212529] text-lg lg:text-xl font-bold hover:text-[#0d6efd] ease-in-out duration-75  uppercase"
                  >
                    Crypto Trend 2023
                  </Link>
                  <p className="text-[#212529] text-[10px] mt-2">
                    If theres one way that wireless technology has changed the
                    way we work, its that will everyone is now connected [...]
                  </p>
                </div>
                <div className="mt-[30px]">
                  <Flex className="justify-between">
                    <div className="flex items-center gap-x-2">
                      <TbCircleLetterA className=" text-[#0d6efd] text-lg" />
                      <Link
                        href="#"
                        className="text-[13px] ml-1 text-[#212529] hover:text-[#0d6efd] ease-in-out duration-75"
                      >
                        By Admin
                      </Link>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <div className="flex items-center">
                        <RiMessage2Line className="text-[#212529]" />{" "}
                        <Link
                          href="#"
                          className="text-[13px] ml-2 text-[#212529] hover:text-[#0d6efd] ease-in-out duration-75"
                        >
                          24
                        </Link>
                      </div>
                      <div className="flex items-center">
                        <FaRegEye className="text-[#212529]" />{" "}
                        <Link
                          href="#"
                          className="text-[13px] ml-2 text-[#212529] hover:text-[#0d6efd] ease-in-out duration-75"
                        >
                          774k
                        </Link>
                      </div>
                    </div>
                  </Flex>
                </div>
              </div>
              <div className=" w-full p-4    lg:p-0 lg:w-[317px] max-h-[200px] z-50 mb-[180px] lg:mb-0  py-6 lg:py-0">
                <Image
                  width={1400}
                  src={BlogBannerImg}
                  alt="BlogImg"
                  className="w-full h-full rounded-[20px] object-cover "
                />
                <Flex className="mt-4 items-center">
                  <Link
                    href="#"
                    className=" text-[10px] text-[#0d6efd] font-normal ease-in-out duration-75   pr-3 border-r border-solid border-[#212529]"
                  >
                    News
                  </Link>

                  <div className="ml-2 flex items-center ">
                    <MdOutlineWatchLater className="text-[#212529] text-xs mr-2" />
                    <Link
                      href="#"
                      className="text-[#212529] text-[10px] font-light hover:text-[#0d6efd] ease-in-out duration-75  uppercase"
                    >
                      Posted On 3 days ago
                    </Link>
                  </div>
                </Flex>
                <div className="mt-4 ">
                  <Link
                    href="#"
                    className="text-[#212529] text-lg lg:text-xl font-bold hover:text-[#0d6efd] ease-in-out duration-75  uppercase"
                  >
                    AI With Fingerprint
                  </Link>
                  <p className="text-[#212529] text-[10px] mt-2">
                    If theres one way that wireless technology has changed the
                    way we work, its that will everyone is now connected [...]
                  </p>
                </div>
                <div className="mt-[30px]">
                  <Flex className="justify-between">
                    <div className="flex items-center gap-x-2">
                      <TbCircleLetterA className=" text-[#0d6efd] text-lg" />
                      <Link
                        href="#"
                        className="text-[13px] ml-1 text-[#212529] hover:text-[#0d6efd] ease-in-out duration-75"
                      >
                        By Admin
                      </Link>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <div className="flex items-center">
                        <RiMessage2Line className="text-[#212529]" />{" "}
                        <Link
                          href="#"
                          className="text-[13px] ml-2 text-[#212529] hover:text-[#0d6efd] ease-in-out duration-75"
                        >
                          24
                        </Link>
                      </div>
                      <div className="flex items-center">
                        <FaRegEye className="text-[#212529]" />{" "}
                        <Link
                          href="#"
                          className="text-[13px] ml-2 text-[#212529] hover:text-[#0d6efd] ease-in-out duration-75"
                        >
                          774k
                        </Link>
                      </div>
                    </div>
                  </Flex>
                </div>
              </div>
              <div className=" w-full p-4    lg:p-0 lg:w-[317px] max-h-[200px] z-50 mb-[180px] lg:mb-0  ">
                <Image
                  width={1400}
                  src={BlogImg}
                  alt="BlogImg"
                  className="w-full h-full rounded-[20px] object-cover "
                />
                <Flex className="mt-4 items-center">
                  <Link
                    href="#"
                    className=" text-[10px] text-[#0d6efd] font-normal ease-in-out duration-75   pr-3 border-r border-solid border-[#212529]"
                  >
                    News
                  </Link>

                  <div className="ml-2 flex items-center ">
                    <MdOutlineWatchLater className="text-[#212529] text-xs mr-2" />
                    <Link
                      href="#"
                      className="text-[#212529] text-[10px] font-light hover:text-[#0d6efd] ease-in-out duration-75  uppercase"
                    >
                      Posted On 3 days ago
                    </Link>
                  </div>
                </Flex>
                <div className="mt-4 ">
                  <Link
                    href="#"
                    className="text-[#212529] text-lg lg:text-xl font-bold hover:text-[#0d6efd] ease-in-out duration-75  uppercase"
                  >
                    NFT Game! New Oppoturnity{" "}
                  </Link>
                  <p className="text-[#212529] text-[10px] mt-2">
                    If theres one way that wireless technology has changed the
                    way we work, its that will everyone is now connected [...]
                  </p>
                </div>
                <div className="mt-[30px]">
                  <Flex className="justify-between">
                    <div className="flex items-center gap-x-2">
                      <TbCircleLetterA className=" text-[#0d6efd] text-lg" />
                      <Link
                        href="#"
                        className="text-[13px] ml-1 text-[#212529] hover:text-[#0d6efd] ease-in-out duration-75"
                      >
                        By Admin
                      </Link>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <div className="flex items-center">
                        <RiMessage2Line className="text-[#212529]" />{" "}
                        <Link
                          href="#"
                          className="text-[13px] ml-2 text-[#212529] hover:text-[#0d6efd] ease-in-out duration-75"
                        >
                          24
                        </Link>
                      </div>
                      <div className="flex items-center">
                        <FaRegEye className="text-[#212529]" />{" "}
                        <Link
                          href="#"
                          className="text-[13px] ml-2 text-[#212529] hover:text-[#0d6efd] ease-in-out duration-75"
                        >
                          774k
                        </Link>
                      </div>
                    </div>
                  </Flex>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PopularPost;
