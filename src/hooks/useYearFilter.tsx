"use client";
import { useEffect, useState, useMemo } from "react";
import { useUpdateQuery } from "./useUpdateQuery";
import { useSearchParams } from "next/navigation";

export const useYearFilter = () => {
  const searchParams = useSearchParams();
  const year = searchParams.get("year") || "";
  const month = searchParams.get("month") || "";

  const currentDate = new Date();
  const currentYear = String(currentDate.getFullYear());
  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");

  const [filter, setFilter] = useState({ year, month });
  const { updateQueryParams } = useUpdateQuery();

  const onChangeYear = (value: string, type: string) => {
    if (value) {
      updateQueryParams({ [type]: value });
      setFilter((prev) => ({ ...prev, [type]: value }));
    }
  };

  useEffect(() => {
    if (!year && !month) {
      updateQueryParams({ year: currentYear, month: currentMonth });
      setFilter({ year: currentYear, month: currentMonth });
    } else {
      setFilter({ year, month });
    }
  }, [currentYear, currentMonth, year, month, updateQueryParams]);

  const yearOptions = [
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
  ];
  const monthOptions = [
    { value: "all", label: "All" },
    ...Array.from({ length: 12 }, (_, i) => ({
      value: String(i + 1).padStart(2, "0"),
      label: new Date(0, i).toLocaleString("default", { month: "long" }),
    })),
  ];

  return {
    onChangeYear,
    filter,
    yearOptions,
    monthOptions,
  };
};
