import { ArrowDownIcon } from "@/assets/icons/ArrowDownIcon";
import { ArrowLeftIcon } from "@/assets/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { ArrowUpIcon } from "@/assets/icons/ArrowUpIcon";
import { Capital } from "@/assets/icons/Capital";
import { InvoiceIcon } from "@/assets/icons/InvoiceIcon";
import { TaskIcon } from "@/assets/icons/TaskIcon";
import { Type } from "@/lib/helper/handleTypeColor";

export const addRecords = [
  {
    name: "Capital",
    path: "/records/add/capital",
    color: "#85008F",
    type: "capital",
    icon: Capital,
    tile: "Records of money to run my business",
    description: "Records of money inflow",
  },
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
    path: "/invoicesandreceipts/create/invoices",
    color: "#010114",
    type: "invoice",
    icon: InvoiceIcon,
  },
  {
    name: "Receipt",
    path: "/invoicesandreceipts/create/receipts",
    color: "#010114",
    type: "receipt",
    icon: InvoiceIcon,
  },
  {
    name: "Tasks",
    path: "/tasks",
    color: "#010134",
    type: "tasks",
    icon: TaskIcon,
  },
];

export const products = [
  {
    id: 1,
    icon: Capital,
    title: "Capital and Investments",
    description: "Records of money to run my business",
    type: "capital",
    path: "/records/capital",
  },
  {
    id: 1,
    icon: ArrowDownIcon,
    title: "Income List",
    description: "Records of money for my sales",
    type: "income",
    path: "/records/income",
  },
  {
    id: 2,
    icon: ArrowUpIcon,
    title: "Expense List",
    description: "Records of money that goes out",
    type: "expense",
    path: "/records/expense",
  },
  {
    id: 3,
    icon: ArrowRightIcon,
    title: "Debtors List",
    description: "Records of money I owe people",
    type: "debtor",
    path: "/records/debtor",
  },
  {
    id: 4,
    icon: ArrowLeftIcon,
    title: "Payable List",
    description: "Records of money people owe me",
    type: "payable",
    path: "/records/payable",
  },
  {
    id: 5,
    icon: InvoiceIcon,
    type: "invoicesandreceipts",
    title: "Invoices and Receipts",
    description: "Awaiting and received payments",
    path: "/invoicesandreceipts/invoices",
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
export const recordTypes = [
  "income",
  "expense",
  "payable",
  "debtor",
  "capital",
];
