import { getUser } from "@/app/actions/getUser";
import { CustomHeader } from "@/components/CustomHeader";
import { UserResponse } from "@/types/auth";
import React from "react";
import { BusinessForm } from "./__components/BusinessForm";
import PageLayout from "../../_components/layout/PageLayout";

const BusinessSettings = async () => {
  const user = (await getUser()) as unknown as UserResponse;
  return (
    <PageLayout>
      <CustomHeader title="Business Settings" />
      <BusinessForm direction="create" />
    </PageLayout>
  );
};

export default BusinessSettings;
