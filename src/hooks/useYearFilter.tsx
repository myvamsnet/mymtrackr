"use client";
import { useEffect, useState, useMemo } from "react";
import { useUpdateQuery } from "./useUpdateQuery";
import { useSearchParams } from "next/navigation";

export const useYearFilter = () => {
  const searchParams = useSearchParams();
  const year = searchParams.get("year");
  const month = searchParams.get("month");
  const currentDate = useMemo(() => new Date(), []);
  const currentYear = useMemo(
    () => String(currentDate.getFullYear()),
    [currentDate]
  );

  const queryYear = searchParams.get("year") || currentYear;
  const queryMonth = searchParams.get("month") || "all";

  const [filter, setFilter] = useState({
    month: queryMonth,
    year: queryYear,
  });
  const { updateQueryParams } = useUpdateQuery();

  const onChangeYear = (value: string, type: string) => {
    if (value) {
      updateQueryParams({ [type]: value });
      setFilter((prev) => ({ ...prev, [type]: value }));
    }
  };

  useEffect(() => {
    setFilter({ year: queryYear, month: queryMonth });

    if (!year || !month) {
      updateQueryParams({ year: currentYear, month: "all" });
    }

    if (year === "" && month === "") {
      updateQueryParams({
        year: currentYear,
        month: "all",
      });
    }
  }, [queryYear, queryMonth, currentYear, updateQueryParams, year, month]);

  const yearOptions = [{ value: "2024", label: "2024" }];

  const monthOptions = [
    { value: "all", label: "All" },
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  return {
    onChangeYear,
    filter,
    yearOptions,
    monthOptions,
  };
};
