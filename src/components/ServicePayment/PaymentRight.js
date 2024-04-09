import React from "react";
import Image from "next/image";
import PaymentImgOne from "../../../public/assets/service/payment.png";
import PaymentImgTwo from "../../../public/assets/service/payment2.png";

const PaymentRight = () => {
  return (
    <>
      <div className="relative">
        <Image
          src={PaymentImgOne}
          width={750}
          height={553}
          alt="payment"
          className="absolute w-[68%] lg:w-[85%] top-0 right-[22px] sm:right-[74px] lg:right-0 z-10  animate-spin animate-duration-[20000ms] animate-ease-linear "
        />
        <Image
          src={PaymentImgTwo}
          width={749}
          height={553}
          alt="payment"
          className="absolute scale-[.6] lg:scale-100 top-0 left-0 xxl:left-[170px] z-20 animate-[topbottom] animate-infinite animate-duration-[6000ms] animate-delay-1000 animate-ease-in-out animate-alternate animate-fill-both"
        />
      </div>
    </>
  );
};

export default PaymentRight;
