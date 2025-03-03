"use client";
import { DateRangeModal } from "@/components/DateRangeFilter/DateRangeModal";
import { SearchableSelect } from "@/components/SearchableSelect";
import { selectByDate } from "@/constant/selectOptions";
import { useDateFilter } from "@/hooks/useDateFilter";
import React from "react";

export const FilterHistory = () => {
  const {
    handleSubmitDate,
    control,
    initialDateFilter,
    show,
    watchFilterDate,
    toggle,
  } = useDateFilter();
  return (
    <section className="p-3">
      <SearchableSelect
        name="filterDate"
        control={control}
        options={selectByDate}
      />
      {/* Reusable Date Range Modal */}
      <DateRangeModal
        isOpen={show && watchFilterDate === "custom"}
        onClose={toggle}
        initialDateFilter={initialDateFilter}
        onSubmit={handleSubmitDate}
      />
    </section>
  );
};
