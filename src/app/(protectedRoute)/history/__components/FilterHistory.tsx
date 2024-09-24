"use client";
import { CustomSelect } from "@/components/CustomSelect";
import { selectByDate } from "@/constant/selectOptions";
import { useDateFilter } from "@/hooks/useDateFilter";
import React from "react";

export const FilterHistory = () => {
  const { dateFilter, onChangeDate } = useDateFilter();
  return (
    <section className="p-3">
      <CustomSelect
        dateFilter={dateFilter}
        onChangeDate={onChangeDate}
        options={selectByDate}
      />
    </section>
  );
};
