import React from "react";
import Headertop from "../Common/Navbar/Headertop";
import CommonNavbar from "../Common/Navbar";
import Footer from "../Common/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Headertop />
      <CommonNavbar />
      {children}

      <Footer />
    </>
  );
};

export default Layout;
