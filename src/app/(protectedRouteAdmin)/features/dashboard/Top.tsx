"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetUser } from "@/hooks/useGetUser";
import { Calendar, Download } from "lucide-react";
import React from "react";

export const Top = () => {
  const { user, isLoading } = useGetUser();
  return (
    <section className="flex justify-between md:items-center md:flex-row flex-col gap-5">
      <div className="space-y-[0.625rem]">
        Welcome back,{" "}
        {isLoading && !user ? (
          <Skeleton className="bg-gray-300 h-10 w-40" />
        ) : (
          <h4 className="text-dark font-normal md:text-2xl text-xl">
            user?.fullName
          </h4>
        )}
        <p className="text-dark-200 font-normal md:text-base text-sm">
          Monitor all activities here.
        </p>
      </div>
      <div className="flex md:items-center gap-4 md:flex-row flex-col">
        <div className="flex items-center gap-2 bg-off-white-300 py-3 px-5 rounded-lg md:justify-start justify-between">
          <p className="text-dark text-base">01 Jan 2024 - 01 Dec 2024</p>
          <Calendar />
        </div>
        <div className="md:block flex justify-end items-center">
          <Button className="flex items-center gap-3 w-[128px]">
            <Download />
            Export
          </Button>
        </div>
      </div>
    </section>
  );
};
