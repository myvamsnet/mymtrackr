import React, { Suspense } from "react";
import { HelpHeader } from "./components/Header";

import { BlogsCarousel } from "./components/BlogsCarousel";
import ProtectedLayout from "../_components/layout/ProtectedLayout";
import { getContents } from "@/app/actions/getContents";
import CustomLoader from "@/components/CustomLoader/page";
import { Faq } from "./components/Faq";

const Help = async () => {
  const contentsData = (await getContents()) as {
    success: boolean;
    contents: ContentProps[];
  };
  return (
    <ProtectedLayout className=" pb-40">
      <HelpHeader />
      <Suspense fallback={<CustomLoader />}>
        <BlogsCarousel contents={contentsData?.contents as ContentProps[]} />
      </Suspense>
      <Faq />
    </ProtectedLayout>
  );
};

export default Help;
export interface ContentProps {
  title: string;
  link: string;
}
