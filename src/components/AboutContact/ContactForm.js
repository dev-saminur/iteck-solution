import React from "react";
import Flex from "../helpers/Flex/Flex";
import Link from "next/link";
import Image from "next/image";
import ContactA from "../../../public/assets/about/contact_a.png";
import ContactMessage from "../../../public/assets/about/contact_message.png";
const ContactForm = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#79b1c2a1]  to-[#c9abee62] py-[100px] px-4 rounded-2xl border-t-[10px] border-b-[10px] border-solid border-[#157EFB]">
      <div className="grid grid-cols-12">
        <div className="col-start-3 col-end-11">
          <p className="text-red-500 text-xs leading-[1.7] text-center">
            The field is required mark as *
          </p>
          <div className=" mt-8">
            <form>
              <Flex className="justify-between mb-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-[49%] text-[#999] text-xs  outline-none py-2.5 px-[25px] rounded-[30px] border border-solid border-[#999] focus:ring-1 focus:ring-inset focus:ring-[#157EFB]"
                />

                <input
                  type="email"
                  placeholder="Enter Your Email Address *"
                  className="w-[49%] text-[#999] text-xs  outline-none py-2.5 px-[25px] rounded-[30px] border border-solid border-[#999] focus:ring-1 focus:ring-inset focus:ring-[#157EFB]"
                />
              </Flex>
              <Flex className="justify-between mb-5">
                <input
                  type="text"
                  placeholder="Phone Number (Option)"
                  className="w-[49%] text-[#999] text-xs  outline-none py-2.5 px-[25px] rounded-[30px] border border-solid border-[#999] focus:ring-1 focus:ring-inset focus:ring-[#157EFB]"
                />

                <input
                  type="text"
                  placeholder="Your Website (option) "
                  className="w-[49%] text-[#999] text-xs  outline-none py-2.5 px-[25px] rounded-[30px] border border-solid border-[#999] focus:ring-1 focus:ring-inset focus:ring-[#157EFB]"
                />
              </Flex>
              <div className=" w-full bg-white rounded-[30px] mb-5">
                <select
                  id="currency"
                  name="currency"
                  className="w-full bg-white text-xs   py-2.5 px-[25px] rounded-[30px]  border border-solid border-[#999]   text-[#999] outline-none focus:ring-1 focus:ring-inset focus:ring-[#157EFB] "
                >
                  <option className="text-xs text-[#999]">
                    How can we help you ?
                  </option>
                  <option className="text-xs text-[#999]">Option 1</option>
                  <option className="text-xs text-[#999]">Option 2</option>
                  <option className="text-xs text-[#999]">Option 3</option>
                </select>
              </div>
              <div className="mb-5">
                <textarea
                  type="comment"
                  placeholder="How can we help you ? "
                  className="w-full text-[#999] text-xs  outline-none pt-2.5 pb-[100px] px-[25px] rounded-[30px] border border-solid border-[#999] focus:ring-1 focus:ring-inset focus:ring-[#157EFB]"
                />
              </div>
              <div className="flex justify-center">
                <input type="checkbox" />
                <span className="text-[13px] text-[#212529] ml-1">
                  By submitting, i'm agreed to the{" "}
                  <Link href="#" className="underline">
                    Terms & Conditons
                  </Link>
                </span>
              </div>
              <div className="text-center mt-7">
                <Link
                  href="/"
                  className="text-xs text-white font-normal py-2.5 px-6 rounded-[50px] bg-[#157efb] hover:bg-[#4A00E1] border-b-4 border-solid border-[#5842BC] duration-150"
                >
                  Send Your Request
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Image
        src={ContactA}
        width={204}
        height={270}
        alt="Contact_a"
        className="absolute bottom-0 left-0"
      />
      <Image
        src={ContactMessage}
        width={342}
        height={342}
        alt="Contact_message"
        className="absolute top-[13%] right-[-11%]"
      />
    </div>
  );
};

export default ContactForm;
