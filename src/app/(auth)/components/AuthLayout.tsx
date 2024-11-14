"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthLayout = ({
  subTitle,
  title,
  content,
  children,
  authContent,
  path,
}: AuthWrapperProps) => {
  return (
    <main className="h-screen bg-white overflow-x-hidden w-full  pt-5">
      <section className="p-4 overflow-hidden  md:w-1/2 mx-auto w-full">
        <Link
          href={"/"}
          className="w-full justify-center items-center flex"
        >
          <Image
            src={"/images/logo.svg"}
            alt="logo"
            className="w-28"
            width={112}
            height={0}
          />
        </Link>
        <div className="my-6">
          <h1 className="text-2xl font-bold text-dark">{title}</h1>
          <p className="text-sm text-dark-200 my-2">{subTitle} </p>
        </div>
        <div>
          {children}

          {path && authContent && (
            <p className="text-sm text-dark-200 my-6">
              {authContent}{" "}
              <Link
                href={path}
                className="text-primary cursor-pointer"
              >
                {content}
              </Link>
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
interface AuthWrapperProps {
  children: React.ReactNode;
  title: string;
  authContent: string;
  subTitle: string;
  content: string;
  path: string;
}
