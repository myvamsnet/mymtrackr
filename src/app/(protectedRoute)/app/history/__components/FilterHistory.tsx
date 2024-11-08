"use client";
import { SearchableSelect } from "@/components/SearchableSelect";
import { selectByDate } from "@/constant/selectOptions";
import { useDateFilter } from "@/hooks/useDateFilter";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export const FilterHistory = () => {
  const { onChangeDate } = useDateFilter();
  const { control, watch, setValue } = useForm({
    defaultValues: {
      filterDate: "today",
    },
  });

  const watchFramework = watch("filterDate");
  useEffect(() => {
    if (watchFramework) {
      onChangeDate(watchFramework);
    }

    if (!watchFramework) {
      setValue("filterDate", "today");
    }
  }, [watchFramework, onChangeDate, setValue]);
  return (
    <section className="p-3">
      <SearchableSelect
        name="filterDate"
        control={control}
        options={selectByDate}
      />
    </section>
  );
};
