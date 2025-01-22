"use client";
import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { blogs } from "@/constant/help";
import { ContentProps } from "../page";
import ReactPlayer from "react-player";

export interface Artwork {
  artist: string;
  art: string;
}

export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "/images/images/welcome-mtrackr.svg",
  },
  {
    artist: "Tom Byrom",
    art: "/images/images/welcome-mtrackr.svg",
  },
  {
    artist: "Vladimir Malyavko",
    art: "/images/images/welcome-mtrackr.svg",
  },
];

export const BlogsCarousel: React.FC<Props> = ({ contents }) => {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex w-max space-x-4 p-4">
        {contents &&
          contents?.length > 0 &&
          contents?.map((blog) => (
            <figure key={blog.title} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <ReactPlayer url={blog?.link} width={300} height={224} />
              </div>
              <figcaption className="text-sm leading-5 font-inter font-normal text-[#3E3E4C]  break-words py-3 flex">
                {`${
                  blog.title.length > 30
                    ? blog.title.slice(0, 30) + "..."
                    : blog.title
                }`}
              </figcaption>
            </figure>
          ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
interface Props {
  contents: ContentProps[];
}
