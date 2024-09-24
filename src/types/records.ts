export type Records = {
  id: string;
  amount: number;
  name: string;
  note: string;
  type: Type;
  image: string;
  user_id: string;
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
}

export type Type = "income" | "expense" | "debtor" | "payable";
