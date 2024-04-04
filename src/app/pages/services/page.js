import Layout from "@/components/Layout/Layout";
import OurServices from "@/components/OurServices";
import SerClientReview from "@/components/SerClientReview";
import TopServices from "@/components/TopServices";
import React from "react";

const Services = () => {
  return (
    <>
      <Layout>
        <OurServices />
        <TopServices />
        <SerClientReview />
      </Layout>
    </>
  );
};

export default Services;
