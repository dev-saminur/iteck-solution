import Container from "@/components/helpers/Container/Container";
import Heading from "@/components/helpers/Heading/Heading";
import Image from "next/image";
import React from "react";
import CircleImg from "../../../public/assets/circles.png";
import Right from "./Right";
import Bottom from "./Bottom";

const Chooseme = () => {
  return (
    <>
      <div className="bg-secondary py-[140px] border-y border-solid border-[#45447A] ">
        <Container>
          <div className="text-center mb-[70px]">
            <Heading title="Why Choose me" className="sm:text-[30px]" />
          </div>
          <div className="grid lg:grid-cols-2 sm:col-start-2 sm:col-end-12 gap-8 items-center">
            <div className=" flex items-center justify-center overflow-hidden">
              <Image
                src={CircleImg}
                className="animate-spin animate-duration-[100000ms] animate-ease-linear	"
              />
            </div>
            <Right />
          </div>
          <Bottom />
        </Container>
      </div>
    </>
  );
};

export default Chooseme;
