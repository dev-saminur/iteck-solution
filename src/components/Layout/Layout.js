import React from "react";
import CommonNavbar from "../Common/Navbar";
import Footer from "../Common/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <CommonNavbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
