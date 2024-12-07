"use client";
import PageLayout from "@/app/(protectedRoute)/_components/layout/PageLayout";
import { CustomHeader } from "@/components/CustomHeader";
import React from "react";
import { BusinessForm } from "./BusinessForm";
import { useGetBusiness } from "@/hooks/businessSettings/useGetBusiness";

export const Details = () => {
  const { data, status } = useGetBusiness();
  return (
    <PageLayout className="pt-0">
      <CustomHeader title="Business Settings" />

      {status === "pending" ? (
        <section className=" h-full justify-center items-center flex flex-col gap-2 bg-white">
          <div className="loader"></div>
          <p className="font-medium text-2xl text-primary">Loading...</p>
        </section>
      ) : (
        <BusinessForm direction="update" />
      )}
    </PageLayout>
  );
};
