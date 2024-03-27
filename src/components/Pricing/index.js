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
      <div className="relative overflow-hidden bg-gradient-to-b from-[#010049]  to-[#157aa6] py-[140px] border-b border-solid border-[#0F588C]">
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

            <Image
              loading="lazy"
              src={PriceL}
              alt="PricingPlane"
              className="absolute  top-[10%] left-[0%] "
            />

            <Image
              loading="lazy"
              src={PriceR}
              alt="PricingPlane"
              className="absolute  top-[10%] right-[0%]  "
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Pricing;
