import Image from "next/image";
import Link from "next/link";
import React from "react";
import TopCardImg from "../../../public/assets/service/topcard.png";
import TopCardImg1 from "../../../public/assets/service/topcard6.png";
import { TopCardData } from "./data";

const TopCard = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-x-8">
        {TopCardData.map((item, i) => (
          <div
            key={i}
            className=" py-[30px] px-[8%] bg-[#F1F2FA] rounded-[15px] text-center mb-8 "
          >
            <Link href="/" className="text-center">
              <Image
                width={98}
                height={100}
                src={item.icon}
                className=" mx-auto mb-10 shadow-2xl"
              />
              <h5 className="text-[17px] text-[#000] mb-[15px] font-bold leading-[1.4] ">
                {item.title}
              </h5>
              <p className="text-[13px] text-[#777] leading-[1.8]">
                {item.peratitle}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopCard;
