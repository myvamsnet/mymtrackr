"use client";
import PageLayout from "@/app/(protectedRoute)/_components/layout/PageLayout";
import { CustomHeader } from "@/components/CustomHeader";
import React from "react";
import { BusinessForm } from "./BusinessForm";
import { useGetBusiness } from "@/hooks/businessSettings/useGetBusiness";
import CustomLoader from "@/components/CustomLoader/page";

export const Details = () => {
  const { data, status } = useGetBusiness();
  return (
    <PageLayout className="pt-0">
      <CustomHeader
        title="Business Settings"
        link="/settings"
      />

      {status === "pending" ? (
        <CustomLoader />
      ) : (
        <BusinessForm direction="update" />
      )}
    </PageLayout>
  );
};
