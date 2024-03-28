import React from "react";

const Peragraph = ({ ClassName, peratitle }) => {
  return (
    <p
      className={`text-white text-sm font-normal pt-5 pb-7 sm:px-4 md:px-7 lg:px-[80px]  lg:min-xl:px-[90px]  xl:px-[50px] xxl:px-[75px] leading-[1.7] ${ClassName}`}
    >
      {peratitle}
    </p>
  );
};

export default Peragraph;
