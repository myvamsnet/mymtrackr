import { getUser } from "@/app/actions/getUser";
import { CustomHeader } from "@/components/CustomHeader";
import { UserResponse } from "@/types/auth";
import ReferralCodeUi from "./components/ReferralCodeUi";
import { userReferrals } from "@/app/actions/userReferrals";
import { SubscriptionType } from "@/app/actions/getSubscription";
import { FC } from "react";
import { Button } from "@/components/ui/button";

// Interfaces for types
export interface Referee {
  id: string;
  email: string;
  fullName: string;
  subscriptions: SubscriptionType; // Assuming subscriptions is an array of Subscription
}

export interface RefereeEntry {
  referee: Referee;
}

// Marking the component as a server component
const Page: FC = async () => {
  try {
    // Fetch user data
    const user = (await getUser()) as UserResponse;

    // Fetch user referrals if user data exists
    const getUserReferrals = user?.data?.id
      ? await userReferrals(user.data.id)
      : { data: [] };

    return (
      <main className="container mx-auto md:max-w-[700px] bg-[#F1F5FD] overflow-y-auto overflow-x-hidden h-screen relative">
        <CustomHeader
          title="Refer & Earn"
          link="/more"
        />
        <ReferralCodeUi
          referralCode={user?.data?.referralCode || ""}
          userReferrals={getUserReferrals.data as RefereeEntry[]}
        />
      </main>
    );
  } catch (error) {
    console.error("Failed to fetch user data or referrals:", error);
    // Optionally, render an error message or fallback UI
    return (
      <div>
        <p>Failed to load page. Please try again later.</p>;
        <Button>Try Again</Button>
      </div>
    );
  }
};

export default Page;