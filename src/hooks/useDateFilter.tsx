import { FilterType, useFilterStore } from "@/zustand/useFilterStore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const useDateFilter = () => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow((prev) => !prev);

  const initialDateFilter = { startDate: new Date(), endDate: new Date() };
  const { setFilter } = useFilterStore();
  const { control, watch } = useForm({
    defaultValues: { filterDate: "today" },
  });
  const watchFilterDate = watch("filterDate");

  // Update the filter store whenever the selected date filter changes
  useEffect(() => {
    if (watchFilterDate && watchFilterDate !== "custom") {
      setFilter(watchFilterDate as FilterType);
    }

    if (watchFilterDate === "custom") {
      toggle();
    }
  }, [watchFilterDate, setFilter]);

  const handleSubmitDate = (dateFilter: {
    startDate: string;
    endDate: string;
  }) => {
    setFilter("custom", dateFilter);
  };
  return {
    handleSubmitDate,
    control,
    initialDateFilter,
    show,
    toggle,
    watchFilterDate,
  };
};
