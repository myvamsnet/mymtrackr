import { Type } from '@/types/records';

export const addRecords = [
  {
    name: 'Add Income',
    path: '/app/records/add/income',
    color: 'tex-[#1D9213]',
    type: 'income',
  },
  {
    name: 'Add Expense',
    path: '/app/records/add/expense',
    color: 'text-[#C25353]',
    type: 'expense',
  },
  {
    name: 'Add Debtors',
    path: '/app/records/add/debtor',
    color: '#1A1A1E',
    type: 'debtor',
  },
  {
    name: 'Add Payable',
    path: '/app/records/add/payable',
    color: '#1A1A1E',
    type: 'payable',
  },
];

export const records: RecordItemProps[] = [
  {
    id: '1',
    amount: 20000,
    type: 'income',
    createdAt: '2021-09-10T12:00:00',
    name: 'Salary',
  },
  {
    id: '2',
    amount: 10000,
    type: 'expense',
    createdAt: '2021-09-10T12:00:00',
    name: 'Rent',
  },
  {
    id: '3',
    amount: 10000,
    type: 'debtor',
    createdAt: '2021-09-10T12:00:00',
    name: 'Debt',
  },
  {
    id: '4',
    amount: 10000,
    type: 'payable',
    createdAt: '2021-09-10T12:00:00',
    name: 'Payable',
  },
];

interface RecordItemProps {
  id: string;
  amount: number;
  type: Type;
  createdAt: string;
  name: string;
}
