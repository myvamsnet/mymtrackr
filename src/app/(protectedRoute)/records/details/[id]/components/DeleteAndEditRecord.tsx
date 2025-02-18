"use client";
import React, { FC } from "react";
import { ConfirmDeleteRecord } from "./ConfirmDeleteRecord";
import { Button } from "@/components/ui/button";
import useModal from "@/hooks/useModal";
import { Records, Type } from "@/types/records";
import { expense, income, payable } from "@/constant/createRecords";
import EditRecordForm from "./EditRecordForm";

export const DeleteAndEditRecord: FC<DeleteAndEditRecordProps> = ({ data }) => {
  const { modal, onCancel, onConfirm } = useModal();
  const typeListInput =
    data?.type === "expense"
      ? expense
      : data?.type === "income"
      ? income
      : payable;
  return (
    <>
      <section className=" flex items-center gap-3 w-full justify-end bg-off-white-300 p-4">
        <div className="">
          <ConfirmDeleteRecord id={data?.id as string} />
        </div>
        <div className="flex-1">
          <Button
            className="w-full"
            onClick={() => {
              onConfirm({ type: "editRecord", isOpen: true });
            }}
          >
            Edit Details
          </Button>
        </div>
      </section>

      <EditRecordForm
        recordType={data?.type as "expense" | "income" | "debtor" | "payable"}
        inputlists={typeListInput}
        title={`Edit ${data?.type}`}
        record={data as Records}
        isOpen={modal?.type === "editRecord" && modal.isOpen}
        onCancel={onCancel}
      />
    </>
  );
};
interface DeleteAndEditRecordProps {
  data: Records;
}
