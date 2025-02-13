import React from "react";
import PageLayout from "@/app/(protectedRoute)/_components/layout/PageLayout";
import { CustomHeader } from "@/components/CustomHeader";
import { BusinessForm } from "../__components/BusinessForm";

const BusinessDetail = () => {
  return (
    <PageLayout className="pt-0">
      <CustomHeader title="Business Settings" />
      <BusinessForm direction="update" />
    </PageLayout>
  );
};

export default BusinessDetail;
