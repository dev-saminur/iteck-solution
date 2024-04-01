import { ResourceData } from "@/components/data/data";
import List from "@/components/helpers/List/List";
import Listitem from "@/components/helpers/Listitem/Listitem";
import Link from "next/link";
import React from "react";

const Recorces = () => {
  return (
    <>
      <div className="mb-8">
        <h3 className="text-sm text-white font-bold leading-[1] mb-10">
          Useful Links
        </h3>
        {ResourceData.map((item, i) => (
          <List key={i}>
            <Listitem>
              <Link
                href={item.link}
                className="text-xs text-[#d4dae0] font-normal leading-[2] hover:font-semibold ease-linear duration-100"
              >
                {item.title}
              </Link>
            </Listitem>
          </List>
        ))}
      </div>
    </>
  );
};

export default Recorces;
