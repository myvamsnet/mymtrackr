"use client";
import { DateRangeModal } from "@/components/DateRangeFilter/DateRangeModal";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetUser } from "@/hooks/useGetUser";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import dayjs from "dayjs";
import { Calendar, Download } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

export const Top = () => {
  const searchParams = useSearchParams();
  const { updateQueryParams } = useUpdateQuery();
  const initialDateFilter = { startDate: new Date(), endDate: new Date() };
  const [filter, setFilter] = useState({
    startDate: dayjs(initialDateFilter.startDate).format("MM/DD/YYYY"),
    endDate: dayjs(initialDateFilter.endDate).format("MM/DD/YYYY"),
  });
  const { user, isLoading } = useGetUser();
  const [show, setShow] = useState(false);
  const toggle = () => setShow((prev) => !prev);

  const handleSubmitDate = (dateFilter: {
    startDate: string;
    endDate: string;
  }) => {
    updateQueryParams({
      startDate: dateFilter.startDate,
      endDate: dateFilter.endDate,
    });
    setFilter(dateFilter);
  };

  return (
    <>
      <section className="flex justify-between md:items-center md:flex-row flex-col gap-5">
        <div className="space-y-[0.625rem]">
          Welcome back,{" "}
          {isLoading && !user ? (
            <Skeleton className="bg-gray-300 h-10 w-40" />
          ) : (
            <h4 className="text-dark font-normal md:text-2xl text-xl">
              {user?.fullName}
            </h4>
          )}
          <p className="text-dark-200 font-normal md:text-base text-sm">
            Monitor all activities here.
          </p>
        </div>
        <div className="flex md:items-center gap-4 md:flex-row flex-col">
          <button
            className="flex items-center gap-2 bg-off-white-300 py-3 px-5 rounded-lg md:justify-start justify-between"
            onClick={toggle}
          >
            <p className="text-dark text-base">
              {dayjs(filter.startDate).format("MM/DD/YYYY")} -
              {dayjs(filter.endDate).format("MM/DD/YYYY")}
            </p>
            <Calendar />
          </button>
          <div className="md:block flex justify-end items-center">
            <Button className="flex items-center gap-3 w-[128px]">
              <Download />
              Export
            </Button>
          </div>
        </div>
      </section>
      <DateRangeModal
        isOpen={show}
        onClose={toggle}
        initialDateFilter={initialDateFilter}
        onSubmit={handleSubmitDate}
      />
    </>
  );
};
