"use client";

import { FacebookIcon } from "@/assets/icons/FacebookIcon";
import { InstagramIcon } from "@/assets/icons/InstagramIcon";
import { LinkedInIcon } from "@/assets/icons/LinkedInIcon";
import useModal from "@/hooks/useModal";
import { Copyright } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ScrollIntoView from "react-scroll-into-view";
export const FooterSection = () => {
  const { onConfirm } = useModal();
  return (
    <div className="bg-dark pt-[100px] pb-[40px] gap-[40px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 items-center justify-center">
          <Link
            href="/"
            className="flex justify-center items-center gap-4 sm:gap-12"
          >
            <Image
              src={"/images/logo_white.svg"}
              alt="logo"
              className=""
              height={31}
              width={107}
            />
          </Link>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-off-white-400 font-inter font-normal text-sm  text-center">
            {lists.map((item, index) => {
              return item.type ? (
                <Link
                  href="#"
                  onClick={() => {
                    onConfirm({
                      isOpen: true,
                      type: item.type as "signIn" | "signUp",
                    });
                  }}
                  key={`${item.name}-${index}`}
                >
                  {item.name}
                </Link>
              ) : (
                <ScrollIntoView
                  selector={`#${item.name}`}
                  className="text-white capitalize cursor-pointer"
                  key={`${item.name}-${index}`}
                  scrollOptions={{
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  }}
                >
                  {item.name}
                </ScrollIntoView>
              );
            })}
          </div>
          <div className="flex gap-4 sm:gap-12 items-center justify-center  ">
            <FacebookIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>
      <div className="py-6">
        <hr className="w-full bg-dark-300" />
      </div>
      <div className="wrapper  flex justify-between md:flex-raw flex-col gap-6 px-4 md:px-0">
        <div className="text-off-white-400 font-inter flex space-x-1 flex-1">
          <Copyright className="w-4 h-4 mt-2" />{" "}
          <span className="font-medium text-sm   gap-x-1 leading-[30px]">
            2024 MyVamsnet Ltd. Copyright and rights reserved
          </span>
        </div>
        <div className="text-off-white-400 font-inter font-medium text-xs flex items-center gap-6 ">
          <Link
            href={"https://www.myvamsnet.com/terms-of-service"}
            target="_blank"
            className="block"
          >
            {" "}
            Terms of Service{" "}
          </Link>{" "}
          <p>&middot;</p>{" "}
          <Link
            href={"https://www.myvamsnet.com/privacy-policy"}
            target="_blank"
            className="block"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};
const lists = [
  {
    name: "home",
    url: "/",
    type: "",
  },
  {
    name: "about",
    url: "/",
    type: "",
  },
  {
    name: "benefits",
    url: "/",
    type: "",
  },
  {
    name: "Login",
    url: "/",
    type: "signIn",
  },
  {
    name: "Create an Account",
    url: "/",
    type: "signUp",
  },
];
