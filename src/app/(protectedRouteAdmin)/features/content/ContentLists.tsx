"use client";
import ReactPlayer from "react-player";
import React from "react";
import { Trash2 } from "lucide-react";

export const ContentLists = () => {
  const lists = [
    {
      title: "How I Started a Successful Business From Scratch",
      link: "https://youtu.be/oEniUWbDqbQ?si=K5iarD18I95IOhOK",
      id: 1,
    },
    {
      title: "How I Started a Successful Business From Scratch",
      link: "https://youtu.be/LBhugx4Op1s?si=HEBMI4lOlxu9QDqP",
      id: 2,
    },
    {
      title: "How I Started a Successful Business From Scratch",
      link: "https://youtu.be/oEniUWbDqbQ?si=K5iarD18I95IOhOK",
      id: 3,
    },
    {
      title: "How I Started a Successful Business From Scratch",
      link: "https://youtu.be/oEniUWbDqbQ?si=K5iarD18I95IOhOK",
      id: 4,
    },
    {
      title: "How I Started a Successful Business From Scratch",
      link: "https://youtu.be/oEniUWbDqbQ?si=K5iarD18I95IOhOK",
      id: 15,
    },
    {
      title: "How I Started a Successful Business From Scratch",
      link: "https://youtu.be/oEniUWbDqbQ?si=K5iarD18I95IOhOK",
      id: 6,
    },
  ];
  return (
    <section className="  grid md:grid-cols-3 grid-cols-1 gap-5 w-full">
      {lists.map((list) => (
        <div
          key={list.id}
          className=" space-y-2"
        >
          <ReactPlayer
            url={list.link}
            width="100%"
            height={"218px"}
          />
          <div className="flex justify-between items-center">
            <p className="text-dark md:text-base text-sm font-normal">
              {list.title}
            </p>
            <button>
              <Trash2
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};
