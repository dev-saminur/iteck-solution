import React from "react";
import List from "../helpers/List/List";
import Listitem from "../helpers/Listitem/Listitem";
import Link from "next/link";
import Flex from "../helpers/Flex/Flex";
import { FooterMenuData } from "../data/MenuData";

const FooterMenu = () => {
  return (
    <>
      <div>
        <List className="flex justify-center">
          {FooterMenuData.map((item, i) => (
            <Listitem key={i}>
              <Link
                href={item.link}
                className="text-[13px] text-white font-medium  uppercase  mx-6 hover:text-[#084AB6]  transition-all ease-in after:duration-300"
              >
                {item.title}
              </Link>
            </Listitem>
          ))}
        </List>
      </div>
    </>
  );
};

export default FooterMenu;
