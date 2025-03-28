"use client";
import React from "react";
import ReactPlayer from "react-player";
import { useGetAllContent } from "./hooks/useGetAllContent";
import { ContentLoader } from "./ContentLoader";
import { DeleteContent } from "./DeleteContent";

export const ContentLists = () => {
  const { contents, status } = useGetAllContent();

  if (status === "pending") return <ContentLoader />;
  return (
    <section className="grid md:grid-cols-3 grid-cols-1 gap-5 w-full">
      {contents && contents.length > 0 && status === "success" ? (
        contents.map((content) => (
          <div key={content?.id} className="space-y-2">
            <ReactPlayer url={content?.link} width="100%" height="218px" />
            <div className="flex justify-between items-center">
              <p className="text-dark md:text-base text-sm font-normal">
                {content?.title}
              </p>
              <DeleteContent content={content} />
            </div>
          </div>
        ))
      ) : (
        <section className="">
          <h4>No Content Found</h4>
        </section>
      )}
    </section>
  );
};
