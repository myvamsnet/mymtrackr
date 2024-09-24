import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
export interface Record {
  amount: string;
  note?: string;
  image?: string;
  name: string;
  recordType: 'expense' | 'income' | 'debtor' | 'payable';
}
export interface RecordState {
  addRecord: (record: Record) => void;
  records: Record;
  resetRecords: () => void;
  balanceType: 'gross' | 'net';
  setBalanceType: (type: 'gross' | 'net') => void;
}

const initialState = {
  amount: '',
  note: '',
  image: '',
  name: '',
  recordType: 'expense',
} as Record;

const useRecordStore = create<RecordState>()(
  persist(
    (set) => ({
      records: initialState,
      addRecord: (record: Record) => {
        set({ records: record });
      },
      resetRecords: () => {
        set({ records: initialState });
      },
      balanceType: 'gross',
      setBalanceType: (type: 'gross' | 'net') => {
        set({ balanceType: type });
      },
    }),

    {
      name: 'my-app', // Unique name for the storage
      storage: createJSONStorage(() => localStorage), // Use localStorage
    }
  )
);
export default useRecordStore;
