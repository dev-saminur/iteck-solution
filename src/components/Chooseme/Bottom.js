import React from "react";
import Flex from "../helpers/Flex/Flex";
import Heading from "../helpers/Heading/Heading";
import Peragraph from "../helpers/Peragraph/Peragraph";

const Bottom = () => {
  return (
    <div className="mt-[100px]">
      <div className="grid grid-cols-12 gap-y-10 lg:gap-y-0 justify-items-start lg:justify-items-center">
        <div className="col-start-4 col-end-9 lg:col-start-2 lg:col-end-6 xl:col-start-3 xl:col-end-5 ">
          <Flex className="items-center">
            <Heading
              title="25 +"
              className="lg:text-3xl xl:text-[40px] lg:tracking-[10px] xl:tracking-normal font-semibold mr-5"
            />
            <p className="text-[13px] text-[#CCCCCC] font-normal">
              YEARS <span className="block">OFEXPERIENCE</span>
            </p>
          </Flex>
        </div>
        <div className="col-start-4 col-end-9 lg:col-start-6 lg:col-end-9 xl:col-start-6 xl:col-end-8">
          <Flex className="items-center">
            <Heading
              title="1565"
              className="lg:text-3xl xl:text-[40px] lg:tracking-[10px] xl:tracking-normal font-semibold mr-5"
            />
            <p className="text-[13px] text-[#CCCCCC] font-normal">
              PROJECTS <span className="block">COMPLETED</span>
            </p>
          </Flex>
        </div>
        <div className="col-start-4 col-end-9 lg:col-start-9 lg:col-end-12 xl:col-start-9 xl:col-end-11 ">
          <Flex className="items-center">
            <Heading
              title="240"
              className="lg:text-3xl xl:text-[40px] lg:tracking-[10px] xl:tracking-normal font-semibold mr-5"
            />
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
