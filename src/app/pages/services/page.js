import Layout from "@/components/Layout/Layout";
import OurServices from "@/components/OurServices";
import SerClientReview from "@/components/SerClientReview";
import ServiceCustomize from "@/components/ServiceCustomize";
import ServiceExperience from "@/components/ServiceExperience";
import ServicePackage from "@/components/ServicePackage";
import ServicePayment from "@/components/ServicePayment";
import TopServices from "@/components/TopServices";
import React from "react";

const Services = () => {
  return (
    <>
      <Layout>
        <OurServices />
        <TopServices />
        <ServiceExperience />
        <ServicePayment />
        <ServiceCustomize />
        <SerClientReview />
        <ServicePackage />
      </Layout>
    </>
  );
};

export default Services;
