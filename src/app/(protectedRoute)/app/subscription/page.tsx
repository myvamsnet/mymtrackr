import { CustomHeader } from '@/components/CustomHeader';
import { SubDetails } from './components/SubDetails';
import {
  getSubscription,
  SubscriptionType,
} from '@/app/actions/getSubscription';
import { getUser, UserProfile } from '@/app/actions/getUser';

const page = async () => {
  const subscription = await getSubscription();
  const user = await getUser();
  return (
    <main className="container mx-auto md:max-w-[700px] bg-off-white relative h-screen p-4">
      <CustomHeader
        title="Subscription"
        link="/app/more"
      />
      <SubDetails
        subscription={subscription?.data as SubscriptionType}
        user={user?.data as UserProfile}
      />
    </main>
  );
};

export default page;
