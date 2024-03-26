import React from "react";
import Flex from "../helpers/Flex/Flex";
import Heading from "../helpers/Heading/Heading";
import Peragraph from "../helpers/Peragraph/Peragraph";

const Bottom = () => {
  return (
    <div className="mt-[100px]">
      <div className="w-[900px] mx-auto">
        <Flex className="justify-between">
          <div>
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
          <div>
            <Flex className="items-center">
              <Heading
                title="1565"
                className="tracking-normal font-semibold mr-5"
              />
              <p className="text-[13px] text-[#CCCCCC] font-normal">
                PROJECTS
                <span className="block">COMPLETED</span>
              </p>
            </Flex>
          </div>
          <div>
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
        </Flex>
      </div>
    </div>
  );
};

export default Bottom;
