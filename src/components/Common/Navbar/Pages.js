import React from "react";

import Link from "next/link";
import List from "@/components/helpers/List/List";
import Listitem from "@/components/helpers/Listitem/Listitem";
const Pages = () => {
  return (
    <div>
      <List className="absolute z-50 invisible group-hover:visible py-3 w-full lg:w-[180px] top-[45px] left-0  bg-[#348CB2] transition-all ease-in duration-300">
        <Listitem className="hover:bg-[#010049] p-2 text-white text-xs transition-all ease-in after:duration-300">
          <Link href="/pages/about" className="  uppercase font-medium">
            About
          </Link>
        </Listitem>
        <Listitem className="hover:bg-[#010049] p-2 text-white text-xs transition-all ease-in after:duration-300">
          <Link href="#" className="  uppercase font-medium">
            Product
          </Link>
        </Listitem>
        <Listitem className="hover:bg-[#010049] p-2 text-white text-xs transition-all ease-in after:duration-300">
          <Link href="#" className="  uppercase font-medium">
            Service
          </Link>
        </Listitem>
        <Listitem className="hover:bg-[#010049] p-2 text-white text-xs transition-all ease-in after:duration-300">
          <Link href="#" className="  uppercase font-medium">
            Shop
          </Link>
        </Listitem>
        <Listitem className="hover:bg-[#010049] p-2 text-white text-xs transition-all ease-in after:duration-300">
          <Link href="#" className="  uppercase font-medium">
            Feature
          </Link>
        </Listitem>
      </List>
    </div>
  );
};

export default Pages;
