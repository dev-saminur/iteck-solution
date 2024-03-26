import React from "react";
import Container from "../helpers/Container/Container";
import Heading from "../helpers/Heading/Heading";
import Link from "next/link";
import Flex from "../helpers/Flex/Flex";
import Image from "next/image";
import ContimgAni from "../../../public/assets/global2.png";

const Contact = () => {
  return (
    <div className="bg-secondary pt-1 pb-[250px] relative overflow-hidden">
      <Container>
        <div>
          <div className="text-center mt-[70px] uppercase">
            <h6 className="text-sm text-[#CDCDDB] font-normal mb-[70px]">
              LET US OPPORTUNITY TO HELP YOU!
            </h6>
            <Heading
              title="(+23) 5535 68 68
"
            />
            <h5 className="text-[#CDCDDB] text-xl font-normal mt-[50px] mb-[20px]">
              contact@Itecksolution.com
            </h5>
            <h5 className="text-[#CDCDDB] text-xl font-normal mb-[30px]">
              58 Howard St, San Francisco, CA 941
            </h5>
            <Flex className="justify-center gap-x-6">
              <Link
                href="#"
                className="text-xs   text-white py-3 px-6 border rounded-full hover:border-[#010049] hover:bg-[#010049] transition-all ease-in after:duration-300 capitalize"
              >
                Let's Chat
              </Link>
              <Link
                href="#"
                className="text-xs   text-white py-3 px-6 border rounded-full hover:border-[#010049] hover:bg-[#010049] transition-all ease-in after:duration-300 capitalize"
              >
                Request Consultation
              </Link>
            </Flex>
          </div>
        </div>
      </Container>
      <div className="absolute bottom-[-600px] left-[50%] translate-x-[-50%] ">
        <Image
          src={ContimgAni}
          alt="contact-img-animation"
          className=" animate-spin animate-duration-[100000ms] animate-ease-linear  opacity-[.7]"
        />
      </div>
    </div>
  );
};

export default Contact;
