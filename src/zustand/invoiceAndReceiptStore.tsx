import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type DiscountType = "percent" | "amount";

export interface DiscountAndDeliveryFeeType {
  discount: number;
  deliveryFee: number;
  discountType: DiscountType;
}

export interface InvoiceAndReceiptStoreState {
  setInvoiceAndReceipt: (value: Partial<InvoiceAndReceiptData>) => void;
  invoiceAndReceiptData: InvoiceAndReceiptData;
  clearInvoiceAndReceipt: () => void;
}

const initialInvoiceAndReceiptDataState = {
  issueDate: "",
  dueDate: "",
  discount: "0",
  delivery: "0",
  customerName: "",
  user_id: "",
  business_id: "",
  type: "invoice" as InvoiceAndReceiptType,
  items: [
    {
      description: "",
      quantity: "",
      price: "",
      id: "",
    },
  ],
};

const useInvoiceAndReceiptStore = create<InvoiceAndReceiptStoreState>()(
  persist(
    immer((set) => ({
      invoiceAndReceiptData: initialInvoiceAndReceiptDataState,
      setInvoiceAndReceipt: (value) => {
        set((state) => {
          state.invoiceAndReceiptData = {
            ...state.invoiceAndReceiptData, // Preserve existing values
            ...value, // Update with new values
          };
        });
      },
      clearInvoiceAndReceipt: () => {
        set((state) => {
          state.invoiceAndReceiptData = initialInvoiceAndReceiptDataState;
        });
      },
    })),
    {
      name: "my-app", // Unique name for the storage
      storage: createJSONStorage(() => localStorage), // Use localStorage
      // Persist only `invoiceAndReceiptData`
      partialize: (state) => ({
        invoiceAndReceiptData: state.invoiceAndReceiptData,
      }),
    }
  )
);

export default useInvoiceAndReceiptStore;

export interface InvoiceAndReceiptData {
  issueDate: string;
  dueDate: string;
  customerName: string;
  items: Item[];
  discount: string;
  delivery: string;
  user_id: string;
  business_id: string;
  type: InvoiceAndReceiptType;
}

export interface Item {
  description: string;
  quantity: string;
  price: string;
  id?: string;
}
export type InvoiceAndReceiptType = "invoices" | "invoices";
