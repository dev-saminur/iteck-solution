import React from "react";
import Flex from "../helpers/Flex/Flex";
import Heading from "../helpers/Heading/Heading";
import Peragraph from "../helpers/Peragraph/Peragraph";

const Bottom = () => {
  return (
    <div className="mt-[100px]">
      <div className="lg:grid lg:grid-cols-12 lg:py-0 justify-items-center items-center">
        <div className="sm:px-4 lg:px-0 lg:col-start-3 lg:col-end-5 ">
          <Flex className="items-center">
            <h2 className="text-[35px]   text-white font-semibold mr-5">25+</h2>

            <p className="text-[13px] text-[#CCCCCC] font-normal">
              YEARS <span className="block">OFEXPERIENCE</span>
            </p>
          </Flex>
        </div>
        <div className="sm:grid sm:grid-cols-1 sm:py-8 lg:py-0 sm:px-4 lg:px-0 lg:col-start-6 lg:col-end-8">
          <Flex className="items-center">
            <h2 className="text-[40px]   text-white font-semibold mr-5">
              1565
            </h2>
            <p className="text-[13px] text-[#CCCCCC] font-normal">
              PROJECTS <span className="block">COMPLETED</span>
            </p>
          </Flex>
        </div>
        <div className="cols-start-1 cols-end-[-1] sm:px-4 lg:px-0 lg:col-start-9 lg:col-end-12 ">
          <Flex className="items-center">
            <h2 className="text-[40px] text-white   font-semibold mr-5">240</h2>

            <p className="text-[13px] text-[#CCCCCC] font-normal">
              SATISFIED CLIENTS ON
              <span className="block">24 COUNTRIES</span>
            </p>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
