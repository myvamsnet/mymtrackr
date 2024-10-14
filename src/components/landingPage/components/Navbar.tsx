'use client';
import { Close } from '@/assets/icons/Close';
import { MenuBar } from '@/assets/icons/MenuBar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow((prev) => !prev);
  };
  return (
    <nav className=" container mx-auto max-w-[1144px]  relative">
      <section className=" flex justify-between items-center lg:h-[70px] h-12 bg-dark  py-3 lg:px-[30px] px-4 rounded-[100px]">
        <Link href={'/'}>
          <Image
            src={'/images/logoNew.svg'}
            alt="MTrackr Logo"
            width={0}
            height={0}
            className="lg:h-[70px] h-6 lg:w-[106px] w-full "
          />
        </Link>
        <ul className="  justify-between items-center gap-[50px] lg:flex hidden">
          {routes?.map((route) => (
            <li key={route}>
              <Link
                href={`/#${route?.toLowerCase()}`}
                className="text-base text-white font-normal hover:text-primary transition-all ease-in-out"
              >
                {route}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          {show ? (
            <Close
              className="lg:hidden block"
              onClick={toggle}
            />
          ) : (
            <MenuBar
              className="lg:hidden block"
              onClick={toggle}
            />
          )}

          <Button className=" w-[110px] h-[46px]  rounded-3xl  lg:flex  hidden justify-center items-center">
            Login
          </Button>
        </div>
      </section>
      {show && (
        <section className="bg-primary h-[461px] absolute  z-30 w-full">
          <div className="bg-dark  rounded-[100px] grid gap-10 py-10 px-[20px]">
            <ul className="flex items-center gap-3 flex-col">
              {routes?.map((route) => (
                <li
                  key={route}
                  className="px-8 py-4"
                >
                  <Link
                    href={`/#${route?.toLowerCase()}`}
                    className="text-base text-white font-normal hover:text-primary transition-all ease-in-out "
                  >
                    {route}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 flex-col">
              <Button className=" w-[110px] h-[41px] py-3 px-6  rounded-3xl flex justify-center items-center">
                Login
              </Button>
            </div>
          </div>
        </section>
      )}
    </nav>
  );
};
const routes = ['Home', 'Aboute', 'Benefits', 'Pricing', 'Chat us'];
