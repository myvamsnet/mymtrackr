export type Records = {
  id: string;
  amount: number;
  name: string;
  note: string;
  type: Type;
  image: string;
  userId: string;
  createdAt: string; // Using string to represent the ISO date format
  updateat: string; // Using string to represent the ISO date format
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

export type Type = 'income' | 'expense' | 'debtor' | 'payable';

export interface RecordData {
  records: Records[];
  currentPage: number;
  totalPages: number;
  totalRecords: number;
}
export interface RecordsResponse {
  data: RecordData;
  success: true;
  message: string;
}
