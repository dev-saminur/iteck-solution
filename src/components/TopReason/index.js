import React from "react";
import Container from "../helpers/Container/Container";
import Flex from "../helpers/Flex/Flex";
import Image from "next/image";
import CodingImg from "../../../public/assets/about/code.png";
import Message from "../../../public/assets/about/message3d.png";
import Money from "../../../public/assets/about/money.png";

const TopReason = () => {
  return (
    <>
      <div className="py-[60px] bg-[#E8F1FF]">
        <Container>
          <div className="text-center">
            <h2 className="text-[45px] font-bold text-[#212529] leading-[1.4] mb-5 z-50">
              Top
              <span className="text-[#157EFB]   relative after:absolute after:content-[''] after:bottom-0 after:left-2 after:w-[100%] after:h-[40%] after:bg-[#157EFB] after:opacity-[.1]">
                {" "}
                Reasons
              </span>
            </h2>
            <p className="text-[15px] text-[#666666] leading-[1.7]">
              Unify your business data in one simple ecommerce dashboard
            </p>
          </div>
          <div className="max-w-[1170px] mx-auto mt-10">
            <Flex className="py-5 rounded-[80px] border border-solid border-[#788593] items-center justify-between ">
              <div className="w-[33%] border-r border-solid border-[#788593] pl-[50px] pr-[50px] py-[10px]">
                <Flex className="justify-between items-center">
                  <Image
                    src={CodingImg}
                    alt="coding"
                    width={54}
                    height={54}
                    className="mr-6"
                  />
                  <h3 className="text-xl text-[#000] font-bold leading-[1.1]">
                    Front-End Friendly
                  </h3>
                </Flex>
              </div>
              <div className="w-[33%]  border-r border-solid border-[#788593] pl-[50px] pr-[50px] py-[10px]">
                <Flex className="justify-between items-center">
                  <Image
                    src={Message}
                    alt="message"
                    width={54}
                    height={54}
                    className="mr-6"
                  />
                  <h3 className="text-xl text-[#000] font-bold leading-[1.1]">
                    Front-End Friendly
                  </h3>
                </Flex>
              </div>
              <div className="w-[33%]  pl-[50px] pr-[50px] py-[10px]">
                <Flex className="justify-between items-center">
                  <Image
                    src={Money}
                    alt="money"
                    width={54}
                    height={54}
                    className="mr-6"
                  />
                  <h3 className="text-xl text-[#000] font-bold leading-[1.1]">
                    Front-End Friendly
                  </h3>
                </Flex>
              </div>
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TopReason;
