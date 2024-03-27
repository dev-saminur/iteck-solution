import Link from "next/link";
import React from "react";

const CopyRight = () => {
  return (
    <>
      <div className="mt-[30px] text-center">
        <span className="text-[12px] text-[#8D8DAE] font-normal">
          © 2023 Copyrights by
          <Link
            href="#"
            className="text-white hover:text-[#053495] ease-in-out duration-100 "
          >
            Iteck Co.
          </Link>
          All Rights Reserved.
        </span>
      </div>
    </>
  );
};

export default CopyRight;
