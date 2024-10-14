'use client';
import { useState } from 'react';
import { currencyFormatter } from '@/lib/helper/currencyFormatter';
import { SelectWorth } from './SelectWorth';
import { calculateWorth } from '@/lib/helper/calculateWorth';
import { Records } from '@/types/records';
import useRecordStore from '@/zustand/recordStore';
import { Icons } from '@/assets/icons';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

import { User } from '@/types/auth';
import toast from 'react-hot-toast';

const Balance = ({ user, data }: Props) => {
  const [doCopy] = useCopyToClipboard();
  const records = data;
  const handleCopy = (refId: string, text: string) => {
    doCopy(refId);
    toast.success(text);
  };
  const [showBalance, setShowBalance] = useState(true);
  const balanceType = useRecordStore((state) => state.balanceType);
  const { grossWorth, netWorth } = calculateWorth(records as Records[]);

  const handleShowBalance = (showBalance: boolean) => {
    setShowBalance(showBalance);
  };

  return (
    <section className=" bg-primary rounded-xl py-3 grid gap-4 mt-16 lg:mt-0">
      <div className="flex justify-between px-2">
        <SelectWorth />
        <button
          className="text-sm leading-[10px] text-primary font-medium bg-off-white rounded-lg px-3 py-px flex justify-center items-center"
          onClick={() => {
            if (!user?.referralCode) return;
            handleCopy(user?.referralCode as string, 'Referral link copied');
          }}
        >
          Refer & Earn
        </button>
      </div>
      <div className="flex justify-between items-center px-4">
        {showBalance ? (
          <p className="text-off-white-300 text-2xl font-semibold">
            {
              // Show GrossWorth or NetWorth based on balanceType state
              balanceType === 'gross'
                ? currencyFormatter(Number(grossWorth))
                : currencyFormatter(Number(netWorth))
            }
          </p>
        ) : (
          <p className="text-off-white-300 text-2xl font-semibold">****</p>
        )}
        {
          // Show EyeOpen or EyeOff icon based on showBalance state
          showBalance ? (
            <Icons.EyeOpen
              className="cursor-pointer"
              onClick={() => handleShowBalance(false)}
            />
          ) : (
            <Icons.EyeOff
              className="cursor-pointer"
              onClick={() => handleShowBalance(true)}
            />
          )
        }
      </div>
    </section>
  );
};

export default Balance;
interface Props {
  user: User;
  data: Records[];
}
