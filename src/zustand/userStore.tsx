/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from "@/types/auth";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface BusinessProfileState {
  user: User | null;
  setUser: (value: Partial<User>) => void;
}

const userStore = create<BusinessProfileState>()(
  persist(
    immer((set) => ({
      user: null,
      setUser: (value) => {
        set((state) => {
          if (!state.user) {
            // If user is null, initialize it with default values
            state.user = { ...value } as User;
          } else {
            // Merge values safely, ignoring undefined properties
            state.user = {
              ...state.user,
              ...Object.fromEntries(
                Object.entries(value).filter(([_, v]) => v !== undefined)
              ),
            };
          }
        });
      },
    })),
    {
      name: "my-app", // Unique name for the storage
      storage: createJSONStorage(() => localStorage), // Use localStorage
    }
  )
);

export default userStore;
