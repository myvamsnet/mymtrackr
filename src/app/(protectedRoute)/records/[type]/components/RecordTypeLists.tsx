"use client";
import { RecordItem } from "@/app/(protectedRoute)/_components/common/records/RecordItem";
import { DataNotFound } from "@/components/DataNotFound";
import { LoadingRecords } from "@/components/LoadingRecords";
import { useGetRecordByType } from "@/hooks/useGetRecordByType";
import React from "react";

const RecordTypeLists = () => {
  const { records, status, error } = useGetRecordByType();

  return (
    <section className=" bg-off-white-300 overflow-y-auto overflow-x-hidden ">
      {status === "error" && <p>{error?.name}</p>}
      {records && records?.length === 0 && <DataNotFound message="records" />}
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

export default RecordTypeLists;
