import { CustomHeader } from "@/components/CustomHeader";
import { BusinessForm } from "./__components/BusinessForm";
import PageLayout from "../../_components/layout/PageLayout";
import {
  BusinessProfilePayload,
  getUserBusiness,
} from "@/app/actions/getUserBusiness";
import { BusinessData } from "@/types/business";

const BusinessSettings = async () => {
  try {
    const data = (await getUserBusiness()) as BusinessProfilePayload;
    return (
      <PageLayout>
        <CustomHeader title="Business Settings" />
        <BusinessForm businessInfo={data?.data as BusinessData} />
      </PageLayout>
    );
  } catch (error) {
    <main className="container mx-auto md:max-w-[700px] bg-off-white relative h-screen p-4 flex flex-col items-center justify-center">
      <CustomHeader title="Business Settings" />
      <p className="text-red-500">
        Failed to load subscription details. Please try again later.
      </p>
    </main>;
  }
};

export default BusinessSettings;
