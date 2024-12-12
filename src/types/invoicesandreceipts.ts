export type InvoicesAndReceiptsResponseData = {
  success: boolean;
  message: string;
  data: Data[];
};
export type SingleInvoicesAndReceiptsResponseData = {
  success: boolean;
  message: string;
  data: Data;
};

export interface Data {
  id: string;
  created_at: string;
  issueDate: string;
  dueDate: string;
  customerName: string;
  items: Item[];
  discount: string;
  delivery: string;
  business_id: string;
  user_id: string;
  type: "invoices" | "receipts";
  updated_at: string;
}

export interface Item {
  price: string;
  quantity: string;
  description: string;
}
