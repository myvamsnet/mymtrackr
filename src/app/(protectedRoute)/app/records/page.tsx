'use client';
import { AnalyticsIcon } from '@/assets/icons/AnalyticsIcon';
import { ArrowDownIcon } from '@/assets/icons/ArrowDownIcon';
import { ArrowLeftIcon } from '@/assets/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '@/assets/icons/ArrowRightIcon';
import { ArrowUpIcon } from '@/assets/icons/ArrowUpIcon';
import { ClockRewindIcon } from '@/assets/icons/ClockRewindIcon';
import { NoteIcon } from '@/assets/icons/NoteIcon';

import Link from 'next/link';
import ProtectedLayout from '../_components/layout/ProtectedLayout';

const Records = () => {
  const products = [
    {
      id: 1,
      icon: ArrowDownIcon,
      title: 'Income List',
      description: 'Records of money inflow',
      type: 'income',
    },
    {
      id: 2,
      icon: ArrowUpIcon,
      title: 'Expense List',
      description: 'Records of money outflow',
      type: 'expense',
    },
    {
      id: 3,
      icon: ArrowRightIcon,
      title: 'Debtors List',
      description: 'Records of my debtors',
      type: 'debtor',
    },
    {
      id: 4,
      icon: ArrowLeftIcon,
      title: 'Payable List',
      description: 'Records of money I owe people',
      type: 'payable',
    },
    {
      id: 5,
      icon: NoteIcon,
      type: '#',
      title: 'Notes',
      description: 'Coming soon!',
    },
  ];
  return (
    <ProtectedLayout>
      <main className="container mx-auto bg-off-white-300 rounded-xl h-screen">
        <div className="flex justify-between items-center py-4 px-3 border-b ">
          <div className="flex flex-col items-center">
            <p className="font-semibold text-base/4 font-inter">My Records</p>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/app/analytics">
              <AnalyticsIcon />
            </Link>
            <Link href="/app/history">
              <ClockRewindIcon />
            </Link>
          </div>
        </div>
        <section className=" px-4">
          {products?.map((product, i) => {
            const Icon = product.icon;
            return (
              <Link
                href={`/app/records/${product?.type}`}
                className="flex items-center gap-2 py-5"
                key={`${product?.id}-${i}`}
              >
                <span className=" bg-[#F1F5FD] h-8 w-8 rounded-full flex justify-center items-center">
                  <Icon />
                </span>
                <div className="space-y-1">
                  <h2 className="text-sm/5 font-medium font-inter text-dark">
                    {product.title}
                  </h2>
                  <p className="text-xs font-normal font-inter text-dark-100">
                    {product.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </section>
      </main>
    </ProtectedLayout>
  );
};

export default Records;
