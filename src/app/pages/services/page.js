import Layout from "@/components/Layout/Layout";
import OurServices from "@/components/OurServices";
import SerClientReview from "@/components/SerClientReview";
import ServicePackage from "@/components/ServicePackage";
import TopServices from "@/components/TopServices";
import React from "react";

const Services = () => {
  return (
    <>
      <Layout>
        <OurServices />
        <TopServices />
        <SerClientReview />
        <ServicePackage />
      </Layout>
    </>
  );
};

export default Services;
