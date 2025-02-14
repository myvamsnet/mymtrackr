import { CustomHeader } from "@/components/CustomHeader";
import { SubDetails } from "./components/SubDetails";
import {
  getSubscription,
  SubscriptionType,
} from "@/app/actions/getSubscription";
import { getUser, userprofile } from "@/app/actions/getUser";

const Page = async () => {
  try {
    const [subscription, user] = await Promise.all([
      getSubscription(),
      getUser(),
    ]);

    return (
      <main className="container mx-auto md:max-w-[700px] bg-off-white relative h-screen p-4">
        <CustomHeader title="Subscription" link="/more" />
        <SubDetails
          subscription={subscription?.data as SubscriptionType}
          user={user?.data as userprofile}
        />
      </main>
    );
  } catch (error) {
    console.error("Error fetching subscription or user data:", error);

    return (
      <main className="container mx-auto md:max-w-[700px] bg-off-white relative h-screen p-4 flex flex-col items-center justify-center">
        <CustomHeader title="Subscription" link="/more" />
        <p className="text-red-500">
          Failed to load subscription details. Please try again later.
        </p>
      </main>
    );
  }
};

export default Page;
