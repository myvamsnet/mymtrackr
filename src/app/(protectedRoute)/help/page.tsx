import React from "react";
import { HelpHeader } from "./components/Header";
import { Faq } from "./components/Faq";
import { BlogsCarousel } from "./components/BlogsCarousel";
import ProtectedLayout from "../_components/layout/ProtectedLayout";
import { getContents } from "@/app/actions/getContents";
import { step } from "@material-tailwind/react/types/components/slider";

const Help = async () => {
  const contentsData = (await getContents()) as {
    success: boolean;
    contents: ContentProps[];
  };
  return (
    <ProtectedLayout className=" pb-40">
      <HelpHeader />
      <BlogsCarousel contents={contentsData?.contents as ContentProps[]} />
      <Faq />
    </ProtectedLayout>
  );
};

export default Help;
export interface ContentProps {
  title: string;
  link: string;
}
