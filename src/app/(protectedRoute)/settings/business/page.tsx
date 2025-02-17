import { CustomHeader } from "@/components/CustomHeader";
import { BusinessForm } from "./__components/BusinessForm";
import PageLayout from "../../_components/layout/PageLayout";
import {
  BusinessProfilePayload,
  getUserBusiness,
} from "@/app/actions/getUserBusiness";
import { getUser, Payload } from "@/app/actions/getUser";

const BusinessSettings = async () => {
  try {
    const data = (await getUserBusiness()) as BusinessProfilePayload;
    const user = (await getUser()) as Payload;
    const businessInfo = data?.data
      ? data?.data?.businessEmail
      : user.data?.fullName;
    return (
      <PageLayout>
        <CustomHeader title="Business Settings" />
        <BusinessForm businessInfo={businessInfo as string} />
      </PageLayout>
    );
  } catch (error) {
    <main className="container mx-auto md:max-w-[700px] bg-off-white relative h-screen p-4 flex flex-col items-center justify-center">
      <CustomHeader title="Business Settings" />
      <p className="text-red-500">
        Failed to load Business details. Please try again later.
      </p>
    </main>;
  }
};

export default BusinessSettings;
