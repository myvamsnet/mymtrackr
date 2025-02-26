"use client";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { landingPageNav } from "@/constant/landingPageNav";
import ScrollIntoView from "react-scroll-into-view";
import { unprotectedRoute } from "@/constant/app";
import clsx from "clsx";
import { NavMobile } from "./NavMobile";
export const ShowCaseNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      }

      // Update the last scroll position
      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let ticking = false;

      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            controlNavbar();
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup function
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [controlNavbar]);

  return (
    <header className={`relative z-20 w-full `}>
      <section
        className={clsx(
          `pt-3 px-4  fixed md:top-6 w-full transition-transform duration-300 ease-in-out flex justify-center items-center`,
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full sticky top-0 opacity-0"
        )}
      >
        <nav
          className={clsx(
            `wrapper bg-dark flex items-center  justify-between rounded-full py-3 px-4 `
          )}
        >
          <Link href="/">
            <Image
              src={"/images/logo_white.svg"}
              alt="logo"
              className="w-full h-full"
              height={107}
              width={31}
            />
          </Link>
          <ul className="hidden md:flex items-center justify-center  gap-8 font-inter text-base font-normal">
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
                  >
                    {item.name}
                  </ScrollIntoView>
                </li>
              );
            })}
          </ul>

          <Link
            href={unprotectedRoute.Login}
            className="md:block hidden text-white bg-primary w-[110px] h-[46px] py-3 px-6 rounded-3xl text-center"
          >
            Login
          </Link>
          {isMenuOpen ? (
            <button className="md:hidden ">
              {isMenuOpen ? (
                <Image
                  src={"/images/close.svg"}
                  alt="Close"
                  onClick={toggleMenu}
                  height={24}
                  width={24}
                />
              ) : (
                <button onClick={toggleMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              )}
            </button>
          ) : (
            <button
              onClick={toggleMenu}
              className="md:hidden text-off-white-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          )}
        </nav>
        {isMenuOpen && <NavMobile toggleMenu={toggleMenu} />}
      </section>
    </header>
  );
};
