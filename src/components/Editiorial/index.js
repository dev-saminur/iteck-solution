import Image from "next/image";
import React from "react";
import Heading from "../helpers/Heading/Heading";
import Container from "../helpers/Container/Container";
import Flex from "../helpers/Flex/Flex";
import BlogImg from "../../../public/assets/blog.png";
import Link from "next/link";
import EditoriImg from "../../../public/assets/editiorial.png";
import Editileft from "./Editileft";
import Editiright from "./Editiright";
import EditImage from "../../../public/assets/editiorial.png";
const Editiorial = () => {
  return (
    <div className="relative   bg-gradient-to-b from-[#157aa6]  to-[#010049] py-[100px] ">
      {/* <div className="w-full absolute bottom-0 left-0 bg-center bg-cover bg-no-repeat">
        <Image
          width={987}
          height={591}
          src={EditoriImg}
          className="w-[100%]  "
          alt="Editrioal"
        />
      </div> */}
      <Container>
        <div className="relative z-50">
          <div className="text-center z-50  mb-[70px]">
            <Heading className="text-canter z-50" title="Editiorial" />
          </div>
          <div className="max-w-[1065px] z-50 mx-auto px-10">
            <Flex className="flex-wrap lg:flex-nowrap lg:justify-between  z-50">
              <div>
                <Editileft />
              </div>
              <div>
                <Editiright />
              </div>
            </Flex>
            <div className="text-center mt-[70px] mr-5">
              <Link
                href="#"
                className="text-xs  z-[999] text-white py-3 px-6 border rounded-full hover:border-[#010049] hover:bg-[#010049] transition-all ease-in after:duration-300"
              >
                More About Articles
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <div className="w-full hidden xl:block absolute top-0 left-0  ">
        <Image
          src={EditImage}
          alt="hero-img"
          loading="lazy"
          width="0"
          height="0"
          className="w-[110%]  "
        />
      </div>
    </div>
  );
};

export default Editiorial;
