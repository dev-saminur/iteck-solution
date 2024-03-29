import React from "react";

const Headings = ({ className, title }) => {
  return (
    <h4
      className={`text-xl sm:text-[22px] lg:text-2xl text-white font-bold capitalize ${className}`}
    >
      {title}
    </h4>
  );
};

export default Headings;
