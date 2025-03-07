import { cn } from "../utils";

export type Type =
  | "income"
  | "expense"
  | "payable"
  | "debtor"
  | "tasks"
  | "invoicesandreceipts"
  | "history"
  | "capital";

export const handleTypeColor = (type: Type) => {
  return (
    cn({
      "text-success focus:text-success/80": type === "income",
      "text-danger focus:text-danger/80": type === "expense",
      "text-dark-400 focus:text-dark-400": type === "debtor",
      "text-payable focus:text-payable/80": type === "payable",
      "text-[#85008F] focus:text-[#85008F]/80": type === "capital",
    }) || ""
  );
};
