import { getUserProfile } from "@/app/actions/getUserProfile";
import { CustomHeader } from "@/components/CustomHeader";
import { UserProfile } from "@/types/auth";
import { SubDetails } from "./components/SubDetails";

const page = async () => {
  const { data } = await getUserProfile();
  const user = data as UserProfile;
  return (
    <main className="container mx-auto md:max-w-[700px] bg-off-white relative h-screen p-4">
      <CustomHeader title="Subscription" link="/more" />
      <SubDetails user={user} />
    </main>
  );
};

export default page;
