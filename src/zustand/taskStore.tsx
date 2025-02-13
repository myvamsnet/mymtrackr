import { TasksData } from "@/types/tasks";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface TaskState {
  tasks: TasksData[];
  setTasks: (tasks: TasksData[]) => void;
  addTask: (task: TasksData) => void;
  removeTask: (taskId: string) => void;
  updateTask: (updatedTask: TasksData) => void;
  resetTasks: () => void;
}

const initialState: TasksData[] = [];

const useTaskStore = create<TaskState>()(
  persist(
    immer((set) => ({
      tasks: initialState,
      setTasks: (tasks) => {
        set((state) => {
          state.tasks = tasks;
        });
      },
      addTask: (task) => {
        set((state) => {
          state.tasks.push(task);
        });
      },
      removeTask: (taskId) => {
        set((state) => {
          state.tasks = state.tasks.filter((task) => task.id !== taskId);
        });
      },
      updateTask: (updatedTask) => {
        set((state) => {
          const index = state.tasks.findIndex(
            (task) => task.id === updatedTask.id
          );
          if (index !== -1) {
            state.tasks[index] = updatedTask;
          }
        });
      },
      resetTasks: () => {
        set((state) => {
          state.tasks = initialState;
        });
      },
    })),
    {
      name: "my-app", // Unique name for the storage
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useTaskStore;
