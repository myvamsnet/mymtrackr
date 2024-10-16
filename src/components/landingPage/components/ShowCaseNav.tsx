'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { landingPageNav } from '@/constant/landingPageNav';

export const ShowCaseNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={`relative z-20 w-full `}>
      <section className="pt-3 px-4">
        <nav className="wrapper bg-dark flex items-center justify-between rounded-full py-3 px-4">
          <Link href="/">
            <Image
              src={'/images/logo.svg'}
              alt="logo"
              className="w-full h-full"
              height={107}
              width={31}
            />
          </Link>
          <ul className="hidden md:flex items-center justify-center  gap-8 font-inter text-base font-normal">
            {landingPageNav.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className="text-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <button className="hidden md:block font-inter text-base font-medium text-off-white-400 bg-primary rounded-full py-3 px-6">
            Login
          </button>
          {isMenuOpen ? (
            <button className="md:hidden ">
              {isMenuOpen ? (
                <Image
                  src={'/images/close.svg'}
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
      </section>
      {isMenuOpen && (
        <section className="md:hidden absolute top-[100%] bg-primary h-[461px] z-40 w-full">
          <div className="bg-[#010114] py-10 px-[30px] h-full rounded-[100px] w-full flex flex-col items-center gap-10">
            <ul className=" text-off-white-500 font-inter text-base font-normal grid gap-10">
              {landingPageNav.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className="text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="font-inter text-base font-medium text-off-white-400 bg-primary rounded-full h-[41px] w-[100px] text-center py-3 px-6 flex items-center justify-center ">
              Login
            </button>
          </div>
        </section>
      )}
    </header>
  );
};
