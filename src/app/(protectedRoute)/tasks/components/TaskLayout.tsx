"use client";
import React from "react";
import PageLayout from "../../_components/layout/PageLayout";
import { RecordHeader } from "../../_components/common/records/RecordHeader";
import { CustomSearch } from "@/components/Search";
import TaskCreateForm from "./TaskCreateForm";

export const TaskLayout = ({
  children,
  type = "show",
  url = "/records",
  title,
}: Props) => {
  return (
    <PageLayout>
      <RecordHeader title={title ? title : `My To-Do List`} url={url} />
      <main className="h-screen relative">
        <div className="bg-off-white-400 p-4 rounded-tr-xl rounded-tl-xl space-y-4">
          {type === "show" && <CustomSearch />}

          {children}
        </div>
      </main>
      {type === "show" && (
        <section className="flex justify-end items-center sticky bottom-5 right-0 z-10">
          <TaskCreateForm />
        </section>
      )}
    </PageLayout>
  );
};
interface Props {
  children: React.ReactNode;
  type: "show" | "create";
  url: string;
  title?: string;
}
