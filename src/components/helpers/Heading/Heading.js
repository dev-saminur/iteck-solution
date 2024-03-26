import React from "react";

const Heading = ({ className, title }) => {
  return (
    <h2
      className={`text-3xl lg:text-[40px] text-[white] font-bold tracking-[10px] lg:tracking-[10px] xl:tracking-[20px] uppercase ${className}`}
    >
      {title}
    </h2>
  );
};

export default Heading;
