import React from "react";
import Flex from "../helpers/Flex/Flex";
import Heading from "../helpers/Heading/Heading";
import Peragraph from "../helpers/Peragraph/Peragraph";

const Bottom = () => {
  return (
    <div className="mt-[100px]">
      <div className="grid grid-cols-12 justify-items-center">
        <div className="col-start-3 col-end-5 ">
          <Flex className="items-center">
            <Heading
              title="25 +"
              className="tracking-normal font-semibold mr-5"
            />
            <p className="text-[13px] text-[#CCCCCC] font-normal">
              YEARS <span className="block">OFEXPERIENCE</span>
            </p>
          </Flex>
        </div>
        <div className="col-start-6 col-end-8">
          <Flex className="items-center">
            <Heading
              title="1565"
              className="tracking-normal font-semibold mr-5"
            />
            <p className="text-[13px] text-[#CCCCCC] font-normal">
              PROJECTS <span className="block">COMPLETED</span>
            </p>
          </Flex>
        </div>
        <div className="col-start-9 col-end-11 ">
          <Flex className="items-center">
            <Heading
              title="240"
              className="tracking-normal font-semibold mr-5"
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
