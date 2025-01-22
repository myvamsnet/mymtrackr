"use client";

import { getFilterByType } from "@/lib/helper/getFilterByType";
import dayjs from "dayjs";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const initialState: FilterStoreState = {
  startDate: dayjs().startOf("year").format("YYYY-MM-DD"),
  endDate: dayjs().add(1, "day").format("YYYY-MM-DD"),
};

export const useFilterStore = create<FilterStore>()(
  immer((set) => ({
    filter: initialState,
    setFilter: (
      filterType: FilterType,
      customDates?: { startDate: string; endDate: string }
    ) => {
      set((state) => {
        state.filter = getFilterByType(filterType, customDates);
      });
    },
  }))
);

interface FilterStore {
  filter: FilterStoreState;
  setFilter: (
    filterType: FilterType,
    customDates?: { startDate: string; endDate: string }
  ) => void;
}

export interface FilterStoreState {
  startDate: string;
  endDate: string;
}

export type FilterType =
  | "all"
  | "today"
  | "thisWeek"
  | "thisMonth"
  | "thisYear"
  | "custom";
