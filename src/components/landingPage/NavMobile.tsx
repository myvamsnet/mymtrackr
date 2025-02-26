import { unprotectedRoute } from "@/constant/app";
import { landingPageNav } from "@/constant/landingPageNav";
import Link from "next/link";
import React from "react";
import ScrollIntoView from "react-scroll-into-view";
export const NavMobile = ({ toggleMenu }: Props) => {
  return (
    <section className="md:hidden absolute top-[100%] bg-primary h-[461px] z-40 w-full flex justify-center items-center">
      <div className="bg-[#010114] py-10 px-[30px] h-full rounded-[100px] w-full flex flex-col items-center gap-10">
        <ul className=" text-off-white-500 font-inter text-base font-normal grid gap-10">
          {landingPageNav?.map((item, index) => {
            return item.path ? (
              <li key={`${item.name}-${index}`}>
                <Link
                  className="text-white capitalize cursor-pointer"
                  href={item.path}
                  target="_blank"
                >
                  {item.name}
                </Link>
              </li>
            ) : (
              <li key={`${item.name}-${index}`}>
                <ScrollIntoView
                  selector={`#${item.name}`}
                  className="text-white capitalize cursor-pointer"
                  scrollOptions={{
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  }}
                  onClick={toggleMenu}
                >
                  {item.name}
                </ScrollIntoView>
              </li>
            );
          })}
        </ul>
        <Link
          href={unprotectedRoute.Login}
          className="font-inter text-base font-medium text-off-white-400 bg-primary rounded-full h-[41px] w-[100px] text-center py-3 px-6 flex items-center justify-center "
        >
          Login
        </Link>
      </div>
    </section>
  );
};
interface Props {
  toggleMenu: () => void;
}
