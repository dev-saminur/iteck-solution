import React from "react";
import Container from "../helpers/Container/Container";
import Flex from "../helpers/Flex/Flex";
import Image from "next/image";
import CodingImg from "../../../public/assets/about/code.png";
import Message from "../../../public/assets/about/message3d.png";
import Money from "../../../public/assets/about/money.png";
const Experience = () => {
  return (
    <>
      <Container>
        <div className="max-w-[1170px] mx-auto mt-10">
          <Flex className="pt-5 pb-[110px]  border-b border-solid border-[#788593] items-center justify-between ">
            <Flex className="w-[33%]  border-r border-solid border-[#EBEBEB] pl-[50px] pr-[50px] py-[10px] items-center">
              <h2 className="text-[45px] font-bold text-[#157EFB] leading-[1.4] mr-4 z-50">
                12+
              </h2>
              <h3 className="text-[15px] text-[#777777] font-bold leading-[1.1] pr-[42px]">
                Years Of Experience
              </h3>
            </Flex>
            <Flex className="w-[33%]  border-r border-solid border-[#EBEBEB] pl-[50px] pr-[50px] py-[10px] items-center">
              <h2 className="text-[45px] font-bold text-[#157EFB] leading-[1.4] mr-4 z-50">
                1565
              </h2>
              <h3 className="text-[15px] text-[#777777] font-bold leading-[1.1] pr-5">
                Projects Completed
              </h3>
            </Flex>

            <Flex className="w-[33%]  pl-[50px] pr-[50px] py-[10px] items-center">
              <h2 className="text-[45px] font-bold text-[#157EFB] leading-[1.4] mr-4 z-50">
                265
              </h2>
              <h3 className="text-[15px] text-[#777777] font-bold leading-[1.1]">
                Satisfied Clients On 24 Countries
              </h3>
            </Flex>
          </Flex>
        </div>
      </Container>
    </>
  );
};

export default Experience;
