import { getUser } from "@/app/actions/getUser";
import { CustomHeader } from "@/components/CustomHeader";
import { UserResponse } from "@/types/auth";

import React from "react";
import ReferralCodeUi from "./components/ReferralCodeUi";
import { createClient } from "@/lib/supabse/server";
import { userReferrals } from "@/app/actions/userReferrals";
import {
  SubscriptionPayload,
  SubscriptionType,
} from "@/app/actions/getSubscription";

const page = async () => {
  const user = (await getUser()) as unknown as UserResponse;
  const getUserReferrals = await userReferrals(user?.data?.id as string);

  return (
    <main className="container mx-auto md:max-w-[700px] bg-off-white-300 overflow-y-auto overflow-x-hidden h-screen relative">
      <CustomHeader title="Refer & Earn" />
      <ReferralCodeUi
        referralCode={user?.data?.referralCode as string}
        userReferrals={getUserReferrals.data as unknown as RefereeEntry[]}
      />
    </main>
  );
};

export default page;
export interface Referee {
  id: string;
  email: string;
  fullName: string;
  subscriptions: SubscriptionType; // Assuming subscriptions is an array of Subscription
}

export interface RefereeEntry {
  referee: Referee;
}
