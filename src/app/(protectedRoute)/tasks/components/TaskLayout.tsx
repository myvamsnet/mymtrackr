"use client";
import React from "react";
import PageLayout from "../../_components/layout/PageLayout";
import { RecordHeader } from "../../_components/common/records/RecordHeader";
import AddNewLayout from "../../_components/AddNewLayout";
import { CustomSearch } from "@/components/Search";

export const TaskLayout = ({
  children,
  type = "show",
  url = "/records",
  title,
}: Props) => {
  return (
    <PageLayout>
      <RecordHeader
        title={title ? title : `My To-Do List`}
        url={url}
      />
      <main className="h-screen">
        <div className="bg-off-white-400 p-4 rounded-tr-xl rounded-tl-xl space-y-4">
          {type === "show" && <CustomSearch />}

          {children}
        </div>
      </main>
      {type === "show" && <AddNewLayout path={`/tasks/create`} />}
    </PageLayout>
  );
};
interface Props {
  children: React.ReactNode;
  type: "show" | "create";
  url: string;
  title?: string;
}
