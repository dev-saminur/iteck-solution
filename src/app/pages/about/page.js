import AboutBusiness from "@/components/AboutBusiness";
import AboutContact from "@/components/AboutContact";
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
        {/*  <AboutCulture />
        <AboutLeader />
        <AboutContact /> */}
      </Layout>
    </>
  );
};

export default Abouts;
