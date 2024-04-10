import React from "react";
import Image from "next/image";
import ExperienceOne from "../../../public/assets/service/exper1.png";
import ExperienceTwo from "../../../public/assets/service/exper2.png";
import ExperienceThree from "../../../public/assets/service/exper3.png";
import ExperienceFour from "../../../public/assets/service/exper4.png";
import ExperienceFive from "../../../public/assets/service/exper5.png";

const SerExRight = () => {
  return (
    <>
      <div className="relative">
        <Image
          src={ExperienceOne}
          width={173}
          height={172}
          alt="ExperienceOne"
          className="absolute w-[35%] top-[20%] right-[5%] z-10 animate-spin animate-duration-[40000ms] animate-ease-linear animate-reverse"
        />
        <Image
          src={ExperienceTwo}
          width={614}
          height={534}
          alt="ExperienceOne"
          className="absolute top-0 z-20 animate-[topbottom] animate-infinite animate-duration-[6000ms] animate-delay-1000 animate-ease-in-out animate-alternate animate-fill-both"
        />
        <Image
          src={ExperienceThree}
          width={666}
          height={455}
          alt="ExperienceOne"
          className="absolute top-0 right-0 md:right-[12%] xl:right-[135px] z-20 animate-[topbottomscaledown] animate-infinite animate-duration-[10000ms] animate-ease-in-out animate-alternate"
        />
        <Image
          src={ExperienceFour}
          width={718}
          height={417}
          alt="ExperienceOne"
          className="absolute top-0 right-0 md:right-[9%] xl:right-[130px] z-20 animate-[topbottomscaledown] animate-infinite animate-duration-[10000ms] animate-ease-in-out animate-alternate"
        />
        <Image
          src={ExperienceFive}
          width={458}
          height={446}
          alt="ExperienceOne"
          className="absolute w-[59%] top-[-46px] left:[7%] sm:left-[0%] xl:top-[-20%] xl:left-[-170px] animate-spin animate-duration-[40000ms] animate-ease-linear  z-10 "
        />
      </div>
    </>
  );
};

export default SerExRight;
