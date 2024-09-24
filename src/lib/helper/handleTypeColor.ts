import { cn } from "../utils";

export const handleTypeColor = (type: Type) => {
  if (type) {
    return cn({
      "text-green-500 focus:text-green-800": type === "income",
      "text-red-500 focus:text-red-800": type === "expense",
      "text-primary focus:text-blue-800": type === "debtor",
      "text-gray-500 focus:text-gray-800": type === "payable",
    });
  }
};
export type Type = "income" | "expense" | "debtor" | "payable" | "history";
