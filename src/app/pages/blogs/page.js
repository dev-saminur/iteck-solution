import AllNews from "@/components/AllNews";
import BlogBanner from "@/components/BlogBanner";
import Layout from "@/components/Layout/Layout";
import PopularPost from "@/components/PopularPost";
import React from "react";

const blogs = () => {
  return (
    <>
      <Layout>
        <BlogBanner />
        <PopularPost />
        <AllNews />
      </Layout>
    </>
  );
};

export default blogs;
