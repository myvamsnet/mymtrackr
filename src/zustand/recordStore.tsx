import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface Record {
  amount: string;
  note?: string;
  image?: string;
  name: string;
  recordType: "expense" | "income" | "debtor" | "payable";
}
export type BalanceType = "finalBalance" | "avaliableBalance" | "profit";

export interface RecordState {
  addRecord: (record: Record) => void;
  records: Record;
  resetRecords: () => void;
  balanceType: BalanceType;
  setBalanceType: (type: BalanceType) => void;
}

const initialState: Record = {
  amount: "",
  note: "",
  image: "",
  name: "",
  recordType: "expense",
};

const useRecordStore = create<RecordState>()(
  persist(
    immer((set) => ({
      records: initialState,
      addRecord: (record: Record) => {
        set((state) => {
          state.records = record;
        });
      },
      resetRecords: () => {
        set((state) => {
          state.records = initialState;
        });
      },
      balanceType: "avaliableBalance",
      setBalanceType: (type: BalanceType) => {
        set((state) => {
          state.balanceType = type;
        });
      },
    })),
    {
      name: "my-app", // Unique name for the storage
      storage: createJSONStorage(() => localStorage), // Use localStorage
    }
  )
);

export default useRecordStore;
