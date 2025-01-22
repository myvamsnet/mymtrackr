"use client";

import { CustomSelect } from "@/components/CustomSelect";
import { useYearFilter } from "@/hooks/useYearFilter";

export const FilterAnalytics = () => {
  const { filter, onChangeYear, yearOptions, monthOptions } = useYearFilter();
  return (
    <div className="grid lg:grid-cols-2 gap-4 grid-cols-1 w-full">
      <CustomSelect
        dateFilter={filter.year}
        onChangeDate={onChangeYear}
        options={yearOptions}
        name={"year"}
      />
      <CustomSelect
        dateFilter={filter.month}
        onChangeDate={onChangeYear}
        options={monthOptions}
        name={"month"}
      />
    </div>
  );
};
