import React from "react";
import Container from "../helpers/Container/Container";
import Image from "next/image";
import HeadBorder from "../../../public/assets/about/head5_line.png";
import HeadPen from "../../../public/assets/about/head5_pen.png";
import HandMeghaphone from "../../../public/assets/about/hand_megaphone.png";
import LineChart from "../../../public/assets/about/header5_linechart.png";
import Rocket from "../../../public/assets/about/rocket.png";
import RattingImg from "../../../public/assets/about/head6_rating.png";

import HeroBanner from "./HeroBanner";

const AboutHero = () => {
  return (
    <div className="bg-[#E8F1FF]  py-[80px]">
      <div className="relative ">
        <Container>
          <div>
            <div className="grid grid-cols-12">
              <div className="col-start-1 col-end-13 lg:col-start-3 lg:col-end-11 ">
                <div className="relative  text-center z-40">
                  <h2 className="text-[29px] sm:text-[30px] lg:text-[55px] text-black font-bold leading-[1.2] tracking-[-2px] capitalize px-0 lg:px-[80px]">
                    We provide perfect <br /> IT Solutions & Technology for any
                    Startups
                  </h2>
                  <p className="text-[#666666] text-[13px] sm:text-[15px] font-normal leading-[1.7] mt-[30px] px-0 md:px-[86px] lg:px-[35px] xl:px-[172px] z-50">
                    Iteck helps you unify your brand identity by collecting,
                    storing and distributing design tokens and assets —
                    automatically.
                  </p>
                  <Image
                    width={218}
                    height={8}
                    src={HeadBorder}
                    alt="Heade-border"
                    className="w-[33%] sm:w-[20%] md:w-[15%] lg:w-[218px] absolute left-[51%]  sm:left-[79%] md:left-[72%] lg:left-[34%]  bottom-[47%] sm:bottom-[51%] lg:bottom-[78px] xl:bottom-[75px] xl:left-[47%] "
                  />
                  <Image
                    width={25}
                    height={25}
                    src={HeadPen}
                    alt="Heade-pen"
                    className="absolute  left-[83%] bottom-[47%]  sm:left-[97%] md:left-[87%]  sm:bottom-[53%] lg:bottom-[78px] xl:bottom-[75px] lg:left-[71%]  xl:left-[71%] overflow-hidden"
                  />
                  <Image
                    src={LineChart}
                    width={267}
                    height={243}
                    className="w-[14%]  max:w-[267px] absolute top-0 right-0 lg:top-[50px] xl:top-0 lg:right-[-100px] xl:right-[-225px] animate-[shakeamimate] animate-infinite animate-duration-[3000ms] animate-ease-in-out animate-alternate"
                  />
                  <Image
                    src={RattingImg}
                    width={344}
                    height={258}
                    className="w-[18%] xl:w-[344px] absolute top-[86%]  lg:top-[90%] xl:top-[83%] left-0 md:left-[100px] lg:left-0 xl:left-[-210px] animate-[shakeamimate] animate-infinite animate-duration-[3000ms] animate-ease-in-out animate-alternate"
                  />
                </div>
              </div>
            </div>
            <HeroBanner />
          </div>
        </Container>
        <Image
          src={HandMeghaphone}
          width={324}
          height={536}
          className="absolute top-0 left-0 w-[17%] max:w-[324px] animate-[topbottom] animate-infinite animate-duration-[4000ms] animate-delay-1000 animate-ease-in-out animate-alternate animate-fill-both "
        />
        <Image
          src={Rocket}
          width={382}
          height={482}
          className="w-[20%] xl:w-[382px] absolute top-[160px] lg:top-[200px] right-0 "
        />
      </div>
    </div>
  );
};

export default AboutHero;
