import { Type } from "@/lib/helper/handleTypeColor";
import { RecordType } from "@/types/records";

export const expense: InputType[] = [
  {
    name: "amount",
    type: "currency",
    label: "Amount",
    placeholder: "Enter amount",
  },
  {
    name: "name",
    type: "text",
    label: "Type",
    placeholder: "E.g Inventory, Operation, Fun",
  },
  {
    name: "note",
    type: "file",
    label: "File (optional)",
    placeholder: "Choose file",
  },
  {
    name: "note",
    type: "textarea",
    label: "Note (optional)",
    placeholder: "Add a note...",
  },
];
export const income: InputType[] = [
  {
    name: "amount",
    type: "currency",
    label: "Amount",
    placeholder: "Enter amount",
  },
  {
    name: "name",
    type: "text",
    label: "Type",
    placeholder: "E.g Sales, Tips, Capital, Income, Salary",
  },
  {
    name: "note",
    type: "file",
    label: "File (optional)",
    placeholder: "Choose file",
  },
  {
    name: "note",
    type: "textarea",
    label: "Note (optional)",
    placeholder: "Add a note...",
  },
];

export const capital: InputType[] = [
  {
    name: "amount",
    type: "currency",
    label: "Amount",
    placeholder: "Enter amount",
  },
  {
    name: "name",
    type: "text",
    label: "Type",
    placeholder: "E.g  Capital, Investments",
  },
  {
    name: "note",
    type: "file",
    label: "File (optional)",
    placeholder: "Choose file",
  },
  {
    name: "note",
    type: "textarea",
    label: "Note (optional)",
    placeholder: "Add a note...",
  },
];

export const payable: InputType[] = [
  {
    name: "amount",
    type: "currency",
    label: "Amount",
    placeholder: "Enter amount",
  },
  {
    name: "name",
    type: "text",
    label: "Name",
    placeholder: "Enter name",
  },
  {
    name: "note",
    type: "file",
    label: "File (optional)",
    placeholder: "Choose file",
  },
  {
    name: "note",
    type: "textarea",
    label: "Note (optional)",
    placeholder: "Add a note...",
  },
];

export const typeListInput = (type: RecordType) => {
  if (type === "expense") return expense as InputType[];
  if (type === "income") return income as InputType[];
  if (type === "payable") return payable as InputType[];
  if (type === "debtor") return payable as InputType[];
  if (type === "capital") return capital as InputType[];
};

export const getTypeListInput = (type: RecordType): InputType[] => {
  switch (type) {
    case "expense":
      return expense;
    case "income":
      return income;
    case "payable":
      return payable;
    case "capital":
      return capital;
    default:
      return [];
  }
};

export interface InputType {
  name: string;
  type:
    | "number"
    | "text"
    | "file"
    | "textarea"
    | "select"
    | "email"
    | "password"
    | "currency";
  label: string;
  placeholder: string;
}
