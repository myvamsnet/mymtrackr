export type Records = {
  id: string;
  amount: number;
  name: string;
  note: string;
  type: Type;
  imageUrl: string;
  user_id: string;
  created_at: string; // Using string to represent the ISO date format
  updated_at: string; // Using string to represent the ISO date format
};

export interface SearchProps {
  type: Type;
  userId: string;
  startDate?: string | null;
  endDate?: string | null;
  searchTerm?: string | number | null;
}
export interface ParamsProps {
  params: {
    type: Type;
  };
  searchParams: SearchParamsProps;
}

export interface SearchParamsProps {
  startDate: string;
  endDate: string;
  searchTerm: string;
  limi: number;
  page: number;
}

export type Type =
  | "income"
  | "expense"
  | "debtor"
  | "payable"
  | "tasks"
  | "invoicesandreceipts";

export interface RecordsResponse {
  data: Records[];
  success: boolean;
  message: string;
}
