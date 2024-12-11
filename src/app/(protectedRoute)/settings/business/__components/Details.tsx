"use client";
import PageLayout from "@/app/(protectedRoute)/_components/layout/PageLayout";
import { CustomHeader } from "@/components/CustomHeader";
import React from "react";
import { BusinessForm } from "./BusinessForm";

export const Details = () => {
  return (
    <PageLayout className="pt-0">
      <CustomHeader
        title="Business Settings"
        link="/settings"
      />
      <BusinessForm direction="update" />
    </PageLayout>
  );
};
