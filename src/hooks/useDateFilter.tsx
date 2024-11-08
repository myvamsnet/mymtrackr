"use client";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useUpdateQuery } from "./useUpdateQuery";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const useDateFilter = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const router = useRouter();
  const pathname = usePathname();
  const [dateFilter, setDateFilter] = useState<string>("Today");
  const [showCustom, setShowCustom] = useState<boolean>(false);

  const { updateQueryParams } = useUpdateQuery();

  const handleDateFilter = (
    e: string,
    startDate?: string,
    endDate?: string
  ) => {
    const today = dayjs().add(1, "day").format("YYYY-MM-DD");
    updateQueryParams({
      type: e,
      startDate: startDate || "",
      endDate: endDate || today,
    });
    setDateFilter(e);
  };

  const onChangeDate = (e: string) => {
    switch (e) {
      case "custom":
        setShowCustom(true);
        handleDateFilter(e);
        break;
      case "today":
        handleDateFilter(
          e,
          dayjs().format("YYYY-MM-DD"),
          dayjs().add(1, "day").format("YYYY-MM-DD")
        );
        break;
      case "yesterday":
        handleDateFilter(
          e,
          dayjs().subtract(1, "day").format("YYYY-MM-DD"),
          dayjs().format("YYYY-MM-DD")
        );
        break;
      case "this week":
        handleDateFilter(
          e,
          dayjs().startOf("week").format("YYYY-MM-DD"),
          dayjs().add(1, "day").format("YYYY-MM-DD")
        );
        break;
      case "this month":
        handleDateFilter(
          e,
          dayjs().startOf("month").format("YYYY-MM-DD"),
          dayjs().add(1, "day").format("YYYY-MM-DD")
        );
        break;
      case "this year":
        handleDateFilter(
          e,
          dayjs().startOf("year").format("YYYY-MM-DD"),
          dayjs().add(1, "day").format("YYYY-MM-DD")
        );
        break;
      default:
        handleDateFilter(e);
        const currentParams = new URLSearchParams(window.location.search);
        currentParams.delete("custom");
        currentParams.delete("startDate");
        currentParams.delete("endDate");
        currentParams.delete("type");
        router.replace(`${pathname}?${currentParams.toString()}`);
        break;
    }
  };

  useEffect(() => {
    if (type) {
      setDateFilter(type);
    }
  }, [type]);

  const toggleOut = () => {
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.delete("custom");
    router.replace(`${pathname}?${currentParams.toString()}`);
    setShowCustom(false);
  };

  const submitAction = (startDate: string, endDate: string) => {
    toggleOut();
    updateQueryParams({
      startDate,
      endDate,
      type: "custom",
    });
    setDateFilter("Select Options");
  };

  return {
    dateFilter,
    onChangeDate,
    toggleOut,
    submitAction,
    showCustom,
  };
};
