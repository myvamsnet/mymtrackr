"use client";
import { ReferralIcon } from "@/assets/icons/ReferralIcon";
import { Files } from "lucide-react";
import React from "react";
import { ChevronRight } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import toast from "react-hot-toast";
import { SubscriptionType } from "@/app/actions/getSubscription";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import dayjs from "dayjs";

const ReferralCodeUi = ({ referralCode, userReferrals }: Props) => {
  const [doCopy] = useCopyToClipboard();
  const pathname = useSearchParams().get("status");
  const handleCopy = (refId: string, text: string) => {
    doCopy(refId);
    toast.success(text);
  };
  const appUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const lists = [
    {
      name: "pending",
      id: "1",
      link: "/app/referral-history?status=trial",
      pathname: "trial",
    },
    {
      name: "Earned",
      id: "2",
      link: "/app/referral-history?status=active",
      pathname: "active",
    },
  ];

  const userReferralsLists = userReferrals?.filter(
    (referral) => referral.referee.subscriptions?.status === pathname
  );
  return (
    <main className=" space-y-4  p-4">
      <section className="p-4 gap-4 rounded-xl bg-white grid">
        <div className=" space-y-2">
          <h4 className="font-medium text-xs text-dark-300">
            Your referral code
          </h4>
          <div className="flex justify-between items-center border-[#E3E4E7] border px-4 py-3 rounded-lg">
            <p className="font-medium text-sm text-dark">{referralCode}</p>
            <p
              className="flex items-center gap-2 font-normal text-sm text-dark hover:text-primary cursor-pointer transition-all ease-in-out"
              onClick={() => handleCopy(referralCode, "Referral code copied")}
            >
              Copy <Files fontSize={18} />
            </p>
          </div>
        </div>
        <div
          className="flex justify-between items-center py-2"
          onClick={() =>
            handleCopy(
              `${appUrl}/?referralCode=${referralCode}`,
              "Referral link copied"
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
      <section className="bg-off-white-300 rounded-xl">
        <div className=" rounded-xl p-4">
          <h4 className="text-sm font-medium text-dark-100 capitalize">
            Referral History
          </h4>
        </div>
        <section>
          <div className="flex justify-between border-b border-[#E3E4E7] items-center  mt-4  px-[44px]">
            {lists?.map((list) => (
              <Link
                href={list.link}
                key={list.id}
                className={`font-medium text-sm cursor-pointer capitalize   py-3  h-auto ${
                  pathname === list.pathname
                    ? "text-primary  border-primary border-b-2  "
                    : "text-dark-300"
                }`}
              >
                {list.name}
              </Link>
            ))}
          </div>
          <div className="py-2 px-4">
            {userReferralsLists?.length > 0 ? (
              userReferralsLists?.map((referral) => (
                <div
                  key={referral.referee.id}
                  className="flex justify-between items-center px-4 py-4 border-b border-[#E3E4E7]"
                >
                  <div className="grid gap-2">
                    <p className="text-sm font-medium text-dark">
                      {referral.referee.fullName}
                    </p>
                    <p className="text-xs text-dark-200">
                      {dayjs(referral?.referee.subscriptions?.expiresAt).format(
                        "DD/MM/YYYY"
                      )}
                    </p>
                  </div>
                  <p
                    className={`text-sm font-medium capitalize ${
                      referral.referee.subscriptions?.status === "trial"
                        ? "text-[#880606]"
                        : "text-success"
                    }`}
                  >
                    {referral.referee.subscriptions?.status === "trial"
                      ? "Inactive"
                      : "Active"}
                  </p>
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center h-[200px] capitalize">
                <p className="text-sm text-dark-300">
                  No <span>{pathname}</span> referrals yet
                </p>
              </div>
            )}
          </div>
        </section>
      </section>
    </main>
  );
};

export default ReferralCodeUi;
interface Props {
  referralCode: string;
  userReferrals: RefereeEntry[];
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
