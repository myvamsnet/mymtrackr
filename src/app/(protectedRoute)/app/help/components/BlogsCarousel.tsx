"use client";
import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { blogs } from "@/constant/help";

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

export function BlogsCarousel() {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex w-max space-x-4 p-4">
        {blogs.map((blog) => (
          <figure
            key={blog.title}
            className="shrink-0"
          >
            <div className="overflow-hidden rounded-md">
              <Image
                src={"/images/welcome-mtrackr.svg"}
                alt={`Photo by ${blog.title}`}
                className=" h-[106px] w-fit object-cover"
                width={300}
                height={400}
              />
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
}
