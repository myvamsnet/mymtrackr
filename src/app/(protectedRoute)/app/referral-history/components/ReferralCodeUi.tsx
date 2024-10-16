'use client';
import { ReferralIcon } from '@/assets/icons/ReferralIcon';
import { Files } from 'lucide-react';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import toast from 'react-hot-toast';
const ReferralCodeUi = ({ referralCode }: Props) => {
  const [doCopy] = useCopyToClipboard();

  const handleCopy = (refId: string, text: string) => {
    doCopy(refId);
    toast.success(text);
  };
  const appUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <section className="p-4 gap-4 rounded-xl bg-off-white-300 grid">
      <div className=" space-y-2">
        <h4 className="font-medium text-xs text-dark-300">
          Your referral code
        </h4>
        <div className="flex justify-between items-center border-[#E3E4E7] border px-4 py-3 rounded-lg">
          <p className="font-medium text-sm text-dark">{referralCode}</p>
          <p className="flex items-center gap-2 font-normal text-sm text-dark">
            Copy <Files fontSize={18} />
          </p>
        </div>
      </div>
      <div
        className="flex justify-between items-center py-2"
        onClick={() =>
          handleCopy(
            `${appUrl}/?referralCode=${referralCode}`,
            'Referral code copied'
          )
        }
      >
        <p className="flex items-center gap-2 text-primary font-medium text-sm">
          <ReferralIcon /> Invite friends now
        </p>
        <ChevronRight
          color="#246BFD"
          fontSize={18}
        />
      </div>
    </section>
  );
};

export default ReferralCodeUi;
interface Props {
  referralCode: string;
}
