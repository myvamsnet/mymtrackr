import {
  FilterStoreState,
  FilterType,
  initialState,
} from "@/zustand/useFilterStore";
import dayjs from "dayjs";

// Helper function to generate filters based on type
export const getFilterByType = (
  filterType: FilterType,
  customDates?: { startDate: string; endDate: string }
): FilterStoreState => {
  switch (filterType) {
    case "all":
      return {
        startDate: "",
        endDate: "",
      };
    case "today":
      return {
        startDate: dayjs()
          .startOf("day")
          .subtract(1, "day")
          .format("YYYY-MM-DD"),
        endDate: dayjs().endOf("day").add(1, "day").format("YYYY-MM-DD"),
      };
    case "thisWeek":
      return {
        startDate: dayjs().startOf("week").format("YYYY-MM-DD"),
        endDate: dayjs().endOf("week").format("YYYY-MM-DD"),
      };
    case "thisMonth":
      return {
        startDate: dayjs().startOf("month").format("YYYY-MM-DD"),
        endDate: dayjs().endOf("month").format("YYYY-MM-DD"),
      };
    case "thisYear":
      return {
        startDate: dayjs().startOf("year").format("YYYY-MM-DD"),
        endDate: dayjs().endOf("year").format("YYYY-MM-DD"),
      };
    case "custom":
      return customDates
        ? {
            startDate: customDates.startDate,
            endDate: customDates.endDate,
          }
        : initialState; // fallback if custom dates are not provided
    default:
      return initialState;
  }
};
