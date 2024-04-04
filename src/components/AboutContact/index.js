import React from "react";
import Container from "../helpers/Container/Container";
import ContactForm from "./ContactForm";

const AboutContact = () => {
  return (
    <>
      <div className="py-[100px] bg-[#FFFFFF]">
        <Container>
          <div className="mb-[70px] text-center">
            <h2 className="text-[45px] font-bold text-[#212529] leading-[1.4] mb-5 z-50">
              Ready To Start A
              <span className="text-[#157EFB] ml-2  relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-[100%] after:h-[40%] after:bg-[#157EFB] after:opacity-[.1]">
                Projects
              </span>
            </h2>
            <p className="text-[15px] text-[#666666] leading-[1.7]  text-center">
              We will contact again after receive your request in 24h
            </p>
          </div>
          <ContactForm />
        </Container>
      </div>
    </>
  );
};

export default AboutContact;
