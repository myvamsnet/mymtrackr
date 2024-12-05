import React from "react";
import { HelpHeader } from "./components/Header";
import { Faq } from "./components/Faq";
import { BlogsCarousel } from "./components/BlogsCarousel";
import ProtectedLayout from "../_components/layout/ProtectedLayout";

const Help = () => {
  return (
    <ProtectedLayout className=" pb-40">
      <HelpHeader />
      <BlogsCarousel />
      <Faq />
    </ProtectedLayout>
  );
};

export default Help;
