"use client";

import { CustomSearch } from "@/components/Search";
import { selectByDate } from "@/constant/selectOptions";
import { SearchableSelect } from "@/components/SearchableSelect";
import { DateRangeModal } from "@/components/DateRangeFilter/DateRangeModal";
import { useDateFilter } from "@/hooks/useDateFilter";

// Main Filters Component
export const Filters = () => {
  const {
    handleSubmitDate,
    control,
    initialDateFilter,
    show,
    watchFilterDate,
    toggle,
  } = useDateFilter();

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
        <CustomSearch />
        <SearchableSelect
          name="filterDate"
          control={control}
          options={selectByDate}
        />
      </div>

      {/* Reusable Date Range Modal */}
      <DateRangeModal
        isOpen={show && watchFilterDate === "custom"}
        onClose={toggle}
        initialDateFilter={initialDateFilter}
        onSubmit={handleSubmitDate}
      />
    </>
  );
};
