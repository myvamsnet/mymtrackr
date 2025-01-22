import { getUser } from "@/app/actions/getUser";
import { CustomHeader } from "@/components/CustomHeader";
import { User, UserResponse } from "@/types/auth";
import ReferralCodeUi from "./components/ReferralCodeUi";
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

    return (
      <main className="container mx-auto md:max-w-[700px] bg-[#F1F5FD] overflow-y-auto overflow-x-hidden h-screen relative">
        <CustomHeader title="Refer & Earn" link="/home" />
        <ReferralCodeUi user={user?.data as User} />
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
