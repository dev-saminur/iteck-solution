import React from "react";
import Container from "../helpers/Container/Container";
import Link from "next/link";
import PaymentRight from "./PaymentRight";
import Flex from "../helpers/Flex/Flex";
import { FaCheckCircle } from "react-icons/fa";

const ServicePayment = () => {
  return (
    <>
      <div className="py-[100px] ">
        <Container>
          <div className="grid grid-cols-12  ">
            <div className="col-start-1 col-end-[-1] lg:col-start-1 lg:col-end-9 mb-[300px] sm:mb-[500px] md:mb-[650px] lg:mb-0 ">
              <PaymentRight />
            </div>
            <div className="col-start-1 col-end-[-1] lg:col-start-9 lg:col-end-[-1]">
              <div className="px-4 lg:px-0">
                <h2 className="text-[30px] lg:text-[45px] font-bold text-[#212529] leading-[1.4] mb-6 z-50">
                  100+ Payment
                  <span className="text-[#157EFB] inline-block ml-2 xxl:block  relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-[100%] xxl:after:w-[65%] after:h-[40%] after:bg-[#157EFB] after:opacity-[.1]">
                    Gateways
                  </span>
                </h2>
                <p className="text-xs text-[#777777] leading-[2] mb-5 pr-0 sm:pr-[52px] md:pr-[207px] lg:pr-[103px] xl:pr-[51px] xxl:pr-[103px]">
                  With Iteck Marketplace, choose from hundreds of payment
                  gateways for your customers. From PayPal to Stripe to Skrill,
                  Visa Debit, Master Card, etc
                </p>

                <div className="line-links mt-[30px]">
                  <Flex className="items-center gap-x-2 mb-3">
                    <FaCheckCircle color="#0066ff" className="text-lg" />
                    <h6 className="text-[#212529] text-[15px] font-bold leading-[1.4]">
                      100% Guarantee Secure Payment
                    </h6>
                  </Flex>
                  <Flex className="items-center gap-x-2 mb-3">
                    <FaCheckCircle color="#0066ff" className="text-lg" />
                    <h6 className="text-[#212529] text-[15px] font-bold leading-[1.4]">
                      1% Extra Fees For All
                    </h6>
                  </Flex>
                  <Flex className="items-center gap-x-2 ">
                    <FaCheckCircle color="#0066ff" className="text-lg" />
                    <h6 className="text-[#212529] text-[15px] font-bold leading-[1.4]">
                      Support Dispute & Refund 24/7
                    </h6>
                  </Flex>
                </div>
                <div className="mt-[50px]">
                  <Link
                    href="/"
                    className="text-xs z-50 text-white font-normal py-2.5 px-6  rounded-[50px] bg-[#157efb] hover:bg-[#4A00E1] border-b-4 border-solid border-[#5842BC] duration-150"
                  >
                    Get Started Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ServicePayment;
