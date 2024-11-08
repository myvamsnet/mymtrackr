import { AnalyticsIcon } from "@/assets/icons/AnalyticsIcon";
import { ArrowDownIcon } from "@/assets/icons/ArrowDownIcon";
import { ArrowLeftIcon } from "@/assets/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { ArrowUpIcon } from "@/assets/icons/ArrowUpIcon";
import { DiamondIcon } from "@/assets/icons/DiamondIcon";
import { LogoutIcon } from "@/assets/icons/LogoutIcon";

import { NoteIcon } from "@/assets/icons/NoteIcon";
import { ReferalIcon } from "@/assets/icons/ReferalIcon";
import { SettingsIcon } from "@/assets/icons/SettingsIcon";
import { WhatsAppIcon } from "@/assets/icons/WhatsAppIcon";
export const products = [
  {
    id: 1,
    icon: ArrowDownIcon,
    title: "Income List",
    description: "Records of money inflow",
    type: "income",
  },
  {
    id: 2,
    icon: ArrowUpIcon,
    title: "Expense List",
    description: "Records of money outflow",
    type: "expense",
  },
  {
    id: 3,
    icon: ArrowRightIcon,
    title: "Debtors List",
    description: "Records of my debtors",
    type: "debtor",
  },
  {
    id: 4,
    icon: ArrowLeftIcon,
    title: "Payable List",
    description: "Records of money I owe people",
    type: "payable",
  },
  {
    id: 5,
    icon: NoteIcon,
    type: "#",
    title: "Notes",
    description: "Coming soon!",
  },
];

export const FAQs = [
  {
    question: "How do I record a sales?",
    answer: "Here is how you record a sales.",
  },
  {
    question: "How is net worth calculated?",
    answer: "Net worth is calculated by.",
  },
  { question: "The meaning of payable and debt?", answer: "Payable means." },
  {
    question: "Can I use any analytic tool?",
    answer: "Yes, you can use any analytic tool.",
  },
  {
    question: "Can I use Mtrackr for Free?",
    answer: "Mtrackr offers a free version.",
  },
  {
    question: "Where is Mtrackr office located?",
    answer: "Mtrackr office is located at.",
  },
];

export const menuItems = [
  {
    icon: DiamondIcon,
    text: "Subscription",
    textColor: "text-dark",
    link: "/app/subscription",
  },
  {
    icon: WhatsAppIcon,
    text: "Chat with Support",
    textColor: "text-dark",
    link: "https://wa.me/+2348057384590",
    target: "_blank",
  },
  {
    icon: AnalyticsIcon,
    text: "Business Analytics",
    textColor: "text-dark",
    link: "/app/analytics",
  },
  {
    icon: ReferalIcon,
    text: "Earn with Referal",
    textColor: "text-dark",
    link: "/app/referral-history?status=trial",
  },

  {
    icon: SettingsIcon,
    text: "Settings",
    textColor: "text-dark",
    link: "/app/settings",
  },
  {
    icon: LogoutIcon,
    text: "logout",
    textColor: "text-danger",
  },
];

export const Financial = [
  {
    type: "Sales",
    date: "formattedDate",
    amount: "formattedNaira",
  },
  {
    type: "Sales",
    date: "formattedDate",
    amount: "formattedNaira",
  },
  {
    type: "Capital",
    date: "formattedDate",
    amount: "formattedNaira",
  },
  {
    type: "Sales",
    date: "formattedDate",
    amount: "formattedNaira",
  },
  {
    type: "Sales",
    date: "formattedDate",
    amount: "formattedNaira",
  },
  {
    type: "Capital",
    date: "formattedDate",
    amount: "formattedNaira",
  },
  {
    type: "Sales",
    date: "formattedDate",
    amount: "formattedNaira",
  },
  {
    type: "Sales",
    date: "formattedDate",
    amount: "formattedNaira",
  },
  {
    type: "Capital",
    date: "formattedDate",
    amount: "formattedNaira",
  },
  {
    type: "Sales",
    date: "formattedDate",
    amount: "formattedNaira",
  },
  {
    type: "Sales",
    date: "formattedDate",
    amount: "formattedNaira",
  },
];
