import { CustomHeader } from "@/components/CustomHeader";
import React from "react";
import { BusinessForm } from "./__components/BusinessForm";
import PageLayout from "../../_components/layout/PageLayout";

const BusinessSettings = async () => {
  return (
    <PageLayout>
      <CustomHeader title="Business Settings" />
      <BusinessForm direction="create" />
    </PageLayout>
  );
};

export default BusinessSettings;
