import { CustomHeader } from "@/components/CustomHeader";
import { BusinessForm } from "./__components/BusinessForm";
import PageLayout from "../../_components/layout/PageLayout";
import {
  BusinessProfilePayload,
  getUserBusiness,
} from "@/app/actions/getUserBusiness";
import { getUser, UserResponseData } from "@/app/actions/getUser";
import { redirect } from "next/navigation";

const BusinessSettings = async () => {
  const data = (await getUserBusiness()) as BusinessProfilePayload;
  if (data?.data?.id) {
    return redirect(`/settings/business/${data?.data?.id}`);
  }
  const user = (await getUser()) as UserResponseData;
  const businessInfo = data?.data
    ? data?.data?.businessEmail
    : user.data?.fullName;

  return (
    <PageLayout>
      <CustomHeader title="Business Settings" />
      <BusinessForm businessInfo={businessInfo as string} />
    </PageLayout>
  );
};

export default BusinessSettings;
