import React from "react";
import Container from "../helpers/Container/Container";
import Heading from "../helpers/Heading/Heading";
import Link from "next/link";
import PricingTable from "./PricingTable";
import Image from "next/image";
import PriceL from "../../../public/assets/shap_l.png";
import PriceR from "../../../public/assets/shap_r.png";

const Pricing = () => {
  return (
    <>
      <div className="relative bg-gradient-to-b from-[#010049]  to-[#157aa6] py-[140px] border-b border-solid border-[#0F588C]">
        <Container>
          <div className="relative">
            <div className="text-center mb-[80px]">
              <Heading
                title="PRICING & PLAN
"
              />
            </div>

            <PricingTable />
            <p className="text-sm text-white mt-[50px] text-center">
              You have a large team?{" "}
              <Link href="#" className="underline">
                Contact us
              </Link>{" "}
              for information about more enterprise options
            </p>
            <div className="absolute top-[10%] lg:left-[-11%]">
              <Image
                loading="lazy"
                src={PriceL}
                alt="PricingPlane"
                className="animate-new-animation	2s linear infinite"
              />
            </div>
            <div className="absolute top-[10%] lg:right-[-11%]">
              <Image loading="lazy" src={PriceR} alt="PricingPlane" />
            </div>
          </div>
        </Container>
        {/* <div className="bg-red-400 w-[800px] h-[800px] absolute top-0 left-0"></div> */}
      </div>
    </>
  );
};

export default Pricing;
