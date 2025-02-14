"use client";
import React from "react";
import PageLayout from "../../_components/layout/PageLayout";
import { RecordHeader } from "../../_components/common/records/RecordHeader";
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
      {children}
      <TaskCreateForm />
    </PageLayout>
  );
};
interface Props {
  children: React.ReactNode;
  type: "show" | "create";
  url: string;
  title?: string;
}
