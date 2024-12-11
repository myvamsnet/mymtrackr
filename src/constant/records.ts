import { ArrowDownIcon } from "@/assets/icons/ArrowDownIcon";
import { ArrowLeftIcon } from "@/assets/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { ArrowUpIcon } from "@/assets/icons/ArrowUpIcon";
import { InvoiceIcon } from "@/assets/icons/InvoiceIcon";
import { TaskIcon } from "@/assets/icons/TaskIcon";
import { Type } from "@/types/records";

export const addRecords = [
  {
    name: "Income",
    path: "/records/add/income",
    color: "#06870B",
    type: "income",
    icon: ArrowDownIcon,
    tile: "Income List",
    description: "Records of money inflow",
  },
  {
    name: "Expense",
    path: "/records/add/expense",
    color: "#880606",
    type: "expense",
    icon: ArrowUpIcon,
    tile: "Expense List",
    description: "Records of money outflow",
  },

  {
    name: "Payable",
    path: "/records/add/payable",
    color: "#9B8306",
    type: "payable",
    icon: ArrowLeftIcon,
    tile: "Payable List",
    description: "Records of money I owe people",
  },
  {
    name: "Debtors",
    path: "/records/add/debtor",
    color: "#3E3E4C",
    type: "debtor",
    icon: ArrowRightIcon,
    tile: "Debtors List",
    description: "Records of my debtors",
  },
  {
    name: "Invoice",
    path: "/invoicesandreceipts/invoices",
    color: "#010114",
    type: "invoice",
    icon: InvoiceIcon,
  },
  {
    name: "Receipt",
    path: "/invoicesandreceipts/receipts",
    color: "#010114",
    type: "receipt",
    icon: InvoiceIcon,
  },
];

export const products = [
  {
    id: 1,
    icon: ArrowDownIcon,
    title: "Income List",
    description: "Records of money inflow",
    type: "income",
    path: "/records/income",
  },
  {
    id: 2,
    icon: ArrowUpIcon,
    title: "Expense List",
    description: "Records of money outflow",
    type: "expense",
    path: "/records/expense",
  },
  {
    id: 3,
    icon: ArrowRightIcon,
    title: "Debtors List",
    description: "Records of my debtors",
    type: "debtor",
    path: "/records/debtor",
  },
  {
    id: 4,
    icon: ArrowLeftIcon,
    title: "Payable List",
    description: "Records of money I owe people",
    type: "payable",
    path: "/records/payable",
  },
  {
    id: 5,
    icon: InvoiceIcon,
    type: "invoicesandreceipts",
    title: "Invoices and Receipts",
    description: "Awaiting and received payments",
    path: "/invoicesandreceipts",
  },
  {
    id: 6,
    icon: TaskIcon,
    type: "tasks",
    title: "My To-Do List",
    description: "Personal task tracker",
    path: "/tasks",
  },
];

export interface RecordItemProps {
  id: string;
  amount: number;
  type: Type;
  createdAt: string;
  name: string;
}
export const recordTypes = ["income", "expense", "payable", "debtor"];
