import AboutBusiness from "@/components/AboutBusiness";
import AboutCulture from "@/components/AboutCulture";
import AboutHero from "@/components/AboutHero";
import AboutLeader from "@/components/AboutLeader";
import AboutService from "@/components/AboutService";
import Layout from "@/components/Layout/Layout";
import Philosophy from "@/components/Philosophy";
import TopReason from "@/components/TopReason";
import React from "react";

const Abouts = () => {
  return (
    <>
      <Layout>
        <AboutHero />
        <TopReason />
        <Philosophy />
        <AboutService />
        <AboutBusiness />
        <AboutCulture />
        <AboutLeader />
      </Layout>
    </>
  );
};

export default Abouts;
