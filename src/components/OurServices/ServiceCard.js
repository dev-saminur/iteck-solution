import Image from "next/image";
import Link from "next/link";
import React from "react";
import serItemImg from "../../../public/assets/service/item.png";
import { CardData } from "./data";

const ServiceCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10">
        {CardData.map((item, i) => (
          <div
            key={i}
            className="py-12 px-4 sm:px-[30px] xl:px-14 bg-white rounded-[15px] text-center mb-8 hover:shadow-2xl group duration-200"
          >
            <Link href="/" className="text-center">
              <Image
                src={item.icon}
                width={80}
                height={80}
                alt="icons"
                className=" mx-auto mb-10 shadow-2xl"
              />
              <h5 className="text-[17px] text-[#000] mb-[15px] px-6 font-bold leading-[1.4] group-hover:text-[#0d6efd] duration-200">
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

export default ServiceCard;
