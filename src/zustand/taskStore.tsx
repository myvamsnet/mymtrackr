"use client";

import { TasksData } from "@/types/tasks";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface TaskStore {
  tasks: TasksData[] | null;
  setTasks: (tasks: TasksData[]) => void;
}

export const useTaskStore = create<TaskStore>()(
  persist(
    immer((set) => ({
      tasks: [
        {
          title: "good",
          id: "1",
          user_id: "333",
          created_at: "",
          status: false,
          taskDate: "",
          updated_at: "",
        },
      ],
      setTasks: (tasks) =>
        set((state) => {
          state.tasks = tasks;
        }),
    })),
    {
      name: "my-app", // Unique name for the storage
      storage: createJSONStorage(() => localStorage), // Use localStorage
    }
  )
);
