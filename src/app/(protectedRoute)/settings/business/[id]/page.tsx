import React, { Suspense } from "react";
import PageLayout from "@/app/(protectedRoute)/_components/layout/PageLayout";
import { CustomHeader } from "@/components/CustomHeader";
import {
  BusinessProfilePayload,
  getUserBusinessById,
} from "@/app/actions/getUserBusiness";
import { notFound } from "next/navigation";
import { EditBusinessForm } from "../__components/EditBusinessForm";
import { BusinessData } from "@/types/business";
import CustomLoader from "@/components/CustomLoader/page";

const BusinessDetail = async ({ params }: BusinessDetailProps) => {
  const data = (await getUserBusinessById(params.id)) as BusinessProfilePayload;
  if (!data?.success && !data?.data) return notFound();
  return (
    <PageLayout className="pt-0">
      <CustomHeader title="Business Settings" />
      <Suspense fallback={<CustomLoader />}>
        <EditBusinessForm businessData={data?.data as BusinessData} />
      </Suspense>
    </PageLayout>
  );
};

export default BusinessDetail;
interface BusinessDetailProps {
  params: {
    id: string;
  };
}
