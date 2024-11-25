import { cn } from "../utils";

export const handleTypeColor = (type: Type) => {
  if (type) {
    return cn({
      "text-success focus:text-sucess/80": type === "income",
      "text-danger focus:text-danger/80": type === "expense",
      "text-dark-400 focus:text-dark-400": type === "debtor",
      "text-payable focus:text-payable/80": type === "payable",
    });
  }
};
export type Type = "income" | "expense" | "debtor" | "payable" | "history";
