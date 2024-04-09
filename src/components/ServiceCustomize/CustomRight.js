import React from "react";
import Image from "next/image";
import CustomizeImgOne from "../../../public/assets/service/customize.png";
import CustomizeImgTwo from "../../../public/assets/service/customize1.png";
import CustomizeImgThree from "../../../public/assets/service/customize2.png";
import CustomizeImgFour from "../../../public/assets/service/customize3.png";
import CustomizeImgFive from "../../../public/assets/service/customize4.png";

const CustomRight = () => {
  return (
    <>
      <div className="relative">
        <Image
          src={CustomizeImgOne}
          width={700}
          height={480}
          alt="CustomizeImgOne"
          className="absolute w-[85%] sm:w-[67%] top-[10px] lg:top-[-10px]  xl:top-[-110px] right-[20px] sm:right-[45px] md:right-[66px] lg:right-[56px] xl:right-[12%]  xxl:right-[0%] object-contain z-10 animate-spin animate-duration-[90000ms] animate-ease-linear "
        />
        <Image
          src={CustomizeImgTwo}
          width={750}
          height={443}
          alt="CustomizeImgTwo"
          className="absolute top-0 right-0 z-30 animate-[topbottom] animate-infinite animate-duration-[6000ms] animate-delay-1000 animate-ease-in-out animate-alternate animate-fill-both"
        />
        <Image
          src={CustomizeImgThree}
          width={750}
          height={488}
          alt="CustomizeImgThree"
          className="absolute top-[35%] right-[20px] z-20 animate-[topbottom] animate-infinite animate-duration-[6500ms] animate-ease-in-out animate-alternate"
        />
        <Image
          src={CustomizeImgFour}
          width={750}
          height={500}
          alt="CustomizeImgFour"
          className="absolute top-0 right-0 z-40 animate-[topbottom] animate-infinite animate-duration-[8000ms] animate-ease-in-out animate-alternate"
        />
        <Image
          src={CustomizeImgFive}
          width={750}
          height={444}
          alt="CustomizeImgFive"
          className="absolute top-[-20%] left-[4px] lg:left-0 xxl:left-[17%] z-50 animate-[topbottom] animate-infinite animate-duration-[6000ms] animate-ease-in-out animate-alternate  "
        />
      </div>
    </>
  );
};

export default CustomRight;
