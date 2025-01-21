"use client";
import { Files } from "lucide-react";
import React from "react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import toast from "react-hot-toast";
import { SubscriptionType } from "@/app/actions/getSubscription";
import { ReferralModal } from "./ReferralModal";
import { AddAcountDetails } from "./AddAcountDetails";
import { User } from "@/types/auth";
import { ViewBankDetails } from "./ViewBankDetails";
import ReferralLists from "./ReferralLists";

const ReferralCodeUi = ({ user }: Props) => {
  const [doCopy] = useCopyToClipboard();
  const handleCopy = (refId: string, text: string) => {
    doCopy(refId);
    toast.success(text);
  };

  const lists = [
    {
      name: "pending",
      id: "1",
      link: "/referral-history?status=pending",
      pathname: "pending",
    },
    {
      name: "Earned",
      id: "2",
      link: "/referral-history?status=active",
      pathname: "active",
    },
  ];

  const checkAccountDetails = Boolean(
    user?.accountName && user?.bankName && user?.accountNumber
  );
  return (
    <main className=" space-y-4  p-4">
      <section className="p-4 gap-4 rounded-xl bg-white grid">
        <div className=" space-y-2">
          <h4 className="font-medium text-xs text-dark-300">
            Your referral code
          </h4>
          <div className="flex justify-between items-center border-[#E3E4E7] border px-4 py-3 rounded-lg">
            <p className="font-medium text-sm text-dark">
              {user?.referralCode}
            </p>
            <p
              className="flex items-center gap-2 font-normal text-sm text-dark hover:text-primary cursor-pointer transition-all ease-in-out"
              onClick={() =>
                handleCopy(user?.referralCode as string, "Referral code copied")
              }
            >
              Copy <Files fontSize={18} />
            </p>
          </div>
        </div>
        <ReferralModal referralCode={user?.referralCode as string} />
      </section>
      <section className="bg-off-white-300 rounded-xl">
        <div className=" rounded-xl p-4 flex justify-between items-center">
          <h4 className="text-sm font-medium text-dark-100 capitalize">
            Referral History
          </h4>
          <div className="">
            {checkAccountDetails ? (
              <ViewBankDetails {...user} />
            ) : (
              <AddAcountDetails />
            )}
          </div>
        </div>
        <ReferralLists />
      </section>
    </main>
  );
};

export default ReferralCodeUi;
interface Props {
  user: User;
}
export interface Referee {
  id: string;
  email: string;
  fullName: string;
  subscriptions: SubscriptionType; // Assuming subscriptions is an array of Subscription
}

export interface RefereeEntry {
  referee: Referee;
}
