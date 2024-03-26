import React from "react";

const Heading = ({ className, title }) => {
  return (
    <h2
      className={`text-[40px] text-[white] font-bold tracking-[20px] uppercase ${className}`}
    >
      {title}
    </h2>
  );
};

export default Heading;
