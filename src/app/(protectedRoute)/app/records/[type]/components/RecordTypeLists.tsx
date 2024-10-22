"use client";
import { RecordItem } from "@/app/(protectedRoute)/app/_components/common/records/RecordItem";
import { RecordsNotFound } from "@/app/(protectedRoute)/app/_components/common/records/RecordsNotFound";
import { LoadingRecords } from "@/components/LoadingRecords";
import { useGetRecordByType } from "@/hooks/useGetRecordByType";
import React from "react";

export const RecordTypeLists = () => {
  const { records, status, error } = useGetRecordByType();

  return (
    <section className=" bg-off-white-300 overflow-y-auto overflow-x-hidden ">
      {status === "error" && <p>{error?.name}</p>}
      {records && records?.length === 0 && <RecordsNotFound />}
      {status === "pending" && <LoadingRecords />}
      {records &&
        records?.length > 0 &&
        records?.map((record, index) => (
          <RecordItem
            key={`${record?.id}-${index}`}
            record={record}
          />
        ))}
    </section>
  );
};
