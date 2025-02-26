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
    question: "How do I install Mtrackr on my phone?",
    answer:
      'Click the "Install" button on our website ((link unavailable)) or click the "More" icon on your browser and select "Add to Home screen."',
  },
  {
    question:
      "What is the difference between Available Balance and Final Balance?",
    answer:
      "Available Balance = Income - Expenses. Final Balance = Income - Expenses + Debtors - Payables.",
  },
  {
    question: "How do I earn with referrals?",
    answer: `When someone registers using your referral code and subscribes, you'll receive ₦2000. Track your referral earnings on the "Refer and Earn" page.`,
  },
  {
    question: "How do I suggest a feature for the App?",
    answer: `Go to the "More" section and click "Chat with Support" or click the WhatsApp icon at the top right corner of your screen.`,
  },
  {
    question: "How many invoices or receipts can I generate?",
    answer:
      "You can generate as many invoices and receipts as you need - it's unlimited!",
  },
];

export const menuItems = [
  {
    icon: DiamondIcon,
    text: "Subscription",
    textColor: "text-dark",
    link: "/subscription",
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
    link: "/analytics",
  },
  {
    icon: ReferalIcon,
    text: "Earn with Referal",
    textColor: "text-dark",
    link: "/referral-history?status=pending",
  },

  {
    icon: SettingsIcon,
    text: "Settings",
    textColor: "text-dark",
    link: "/settings",
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
