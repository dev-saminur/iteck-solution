import React from "react";

const Peragraph = ({ ClassName, peratitle }) => {
  return (
    <p
      className={`text-white text-sm font-normal pt-5 pb-7 px-[80px] ${ClassName}`}
    >
      {peratitle}
    </p>
  );
};

export default Peragraph;
