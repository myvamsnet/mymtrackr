"use client";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ContentProps } from "../page";
import ReactPlayer from "react-player";

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
