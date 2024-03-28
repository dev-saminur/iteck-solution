import React from "react";
import List from "../helpers/List/List";
import Listitem from "../helpers/Listitem/Listitem";
import Link from "next/link";

const Homepages = () => {
  return (
    <>
      <List className="absolute z-50 invisible group-hover:visible py-3 w-full lg:w-[180px] top-[73px] left-0  bg-[#348CB2] transition-all ease-in duration-300">
        <Listitem className="hover:bg-[#010049]  p-2 text-white text-xs transition-all ease-in after:duration-300">
          <Link href="#" className="  uppercase font-medium">
            Front-end development
          </Link>
        </Listitem>
        <Listitem className="hover:bg-[#010049] p-2 text-white text-xs transition-all ease-in after:duration-300">
          <Link href="#" className="  uppercase font-medium">
            Backend development
          </Link>
        </Listitem>
        <Listitem className="hover:bg-[#010049] p-2 text-white text-xs transition-all ease-in after:duration-300">
          <Link href="#" className="  uppercase font-medium">
            App development
          </Link>
        </Listitem>
        <Listitem className="hover:bg-[#010049] p-2 text-white text-xs transition-all ease-in after:duration-300">
          <Link href="#" className="  uppercase font-medium">
            Full Stack development
          </Link>
        </Listitem>
        <Listitem className="hover:bg-[#010049] p-2 text-white text-xs transition-all ease-in after:duration-300">
          <Link href="#" className="  uppercase font-medium">
            Graphic Design
          </Link>
        </Listitem>
      </List>
    </>
  );
};

export default Homepages;
