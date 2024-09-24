"use client";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

export const Banner = () => {
  return (
    <section className=" !overflow-hidden ">
      <Fade cascade>
        <Image
          src={"/images/banner.svg"}
          alt="banner"
          width={0}
          height={473}
          className=" h-[400px] md:block hidden w-full"
        />
      </Fade>
      <Fade cascade>
        <Image
          src={"/images/banner-mobile.svg"}
          alt="banner"
          width={0}
          height={384.84}
          className="w-full  object-center md:hidden block  "
        />
      </Fade>
    </section>
  );
};
