"use client";
import React from "react";
import Container from "../helpers/Container/Container";
import Heading from "../helpers/Heading/Heading";
import ContactForm from "../AboutContact/ContactForm";
import { MdFullscreen } from "react-icons/md";

const ContactUs = () => {
  return (
    <>
      <div className="bg-[#010049] pt-[100px] ">
        <Container>
          <div className="text-center">
            <h2 className="text-[45px] font-bold text-[#CDCDDB] leading-[1.4] mb-5 z-50">
              Get In
              <span className="text-[#157EFB] ml-2  relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-[100%] after:h-[40%] after:bg-[#CDCDDB] after:opacity-[.1]">
                Touch
              </span>
            </h2>
            <p className="text-[15px] text-[#CDCDDB] leading-[1.7]  text-center mb-[100px]">
              We will contact again after receive your request in 24h
            </p>
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
          </div>
          <ContactForm />
        </Container>
        <div className="pt-[70px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.170254395753!2d90.38000527605102!3d23.74130738912394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1712203507751!5m2!1sen!2sbd"
            width="100%"
            height="500"
            allowFullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
