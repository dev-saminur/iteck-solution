import React from "react";
import Flex from "../helpers/Flex/Flex";
import Link from "next/link";
import { PostCatagoryData } from "./data";
const Catagories = () => {
  return (
    <>
      <div className="mt-[50px]">
        <h3 className="text-base text-[#212529] mb-5 leading-[2] font-semibold uppercase ">
          categories
        </h3>
        <div>
          {PostCatagoryData.map((item, i) => (
            <Link key={i} href="#" className="group">
              <Flex className=" items justify-between border-b border-solid border-[#C2C2C2] pb-4 mb-4 ">
                <span className="text-[11px] text-[#666]  group-hover:text-[#0d6efd] duration-200 uppercase">
                  {item.heading}
                </span>
                <span className="text-[11px] text-[#666] group-hover:text-[#0d6efd] duration-200 uppercase">
                  {item.numberpost}
                </span>
              </Flex>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Catagories;
