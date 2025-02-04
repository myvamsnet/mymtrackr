import { Icons } from "@/assets/icons";
import Modal from "@/components/ui/Modal";
import { Data } from "@/types/invoicesandreceipts";
import Link from "next/link";
import React from "react";
import { useUpdateInvoiceAndReceipt } from "../../hooks/useUpdateInvoiceAndReceipt";
import { dateFormatter } from "@/lib/helper/dateFormatter";
import { useConvertToRecord } from "../../hooks/useConvertToRecord";
import { ConfirmDeleteInvoiceAndRecipt } from "./ConfirmDeleteInvoiceAndRecipt";

const MoreModal = ({ data, isOpen, onClose }: Props) => {
  const { mutate, isPending } = useUpdateInvoiceAndReceipt();
  const { addConvertToRecord, isPending: loader } = useConvertToRecord();
  return (
    <Modal
      title="More"
      isOpen={isOpen}
      onClose={onClose}
      className="p-4 "
      closeOutside={true}
    >
      <Link
        href={`/invoicesandreceipts/edit/${data?.id}`}
        className="flex items-center gap-1 py-4 border-b border-off-white-200 "
      >
        <div className="h-8 w-8 bg-off-white flex justify-center items-center">
          <Icons.EditIcon />
        </div>
        <span className="font-normal text-sm text-dark">Edit Invoice</span>
      </Link>
      <button
        className="flex items-center gap-1 py-4 border-b border-off-white-200 "
        disabled={isPending}
        onClick={() =>
          mutate({
            id: data?.id,
            type: data?.type === "invoices" ? "receipts" : ("invoices" as any),
            issueDate:
              dateFormatter(new Date().toDateString()) ?? data?.dueDate,
            recordId: data?.record_id ?? "",
          })
        }
      >
        <div className="h-8 w-8 bg-off-white flex justify-center items-center">
          <Icons.ReceiptIcon />
        </div>
        <span className="font-normal text-sm text-dark capitalize">
          {isPending
            ? "Converting..."
            : data?.type === "invoices"
            ? "Convert to receipt"
            : " Convert to invoice"}
        </span>
      </button>
      {!data?.record_id && (
        <button
          className="flex items-center gap-1 py-4 border-b border-off-white-200 "
          onClick={() => {
            addConvertToRecord(data);
          }}
          disabled={loader}
        >
          <div className="h-8 w-8 bg-off-white flex justify-center items-center">
            {data?.type === "invoices" ? (
              <Icons.ArrowRightIcon />
            ) : (
              <Icons.ArrowDownIcon />
            )}
          </div>
          <span className="font-normal text-sm text-dark capitalize">
            {loader
              ? "Recording..."
              : data?.type === "invoices"
              ? "Record as debtor"
              : "Record as Income"}
          </span>
        </button>
      )}
      <ConfirmDeleteInvoiceAndRecipt type={data?.type} id={data?.id} />
    </Modal>
  );
};

interface Props {
  data: Data;
  onClose: () => void;
  isOpen: boolean;
}

export default MoreModal;
