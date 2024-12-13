import { Icons } from "@/assets/icons";
import { Modal } from "@/components/ui/Modal";
import useModal from "@/hooks/useModal";
import { Data } from "@/types/invoicesandreceipts";
import Link from "next/link";
import React from "react";
import { useDeleteInvoiceAndReceipt } from "../../../hooks/useDeleteInvoiceAndReceipt";
import { useUpdateInvoiceAndReceipt } from "../../hooks/useUpdateInvoiceAndReceipt";
import { dateFormatter } from "@/lib/helper/dateFormatter";

const MoreModal = ({ data }: Props) => {
  const { onCancel, modal } = useModal();
  const { deleteLoader, deleteMutation } = useDeleteInvoiceAndReceipt();
  const { mutate, isPending } = useUpdateInvoiceAndReceipt();
  return (
    <Modal
      title="More"
      isOpen={modal.isOpen && modal.type === "more"}
      onClose={onCancel}
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
      <div className="flex items-center gap-1 py-4 border-b border-off-white-200 ">
        <div className="h-8 w-8 bg-off-white flex justify-center items-center">
          <Icons.DownloadIcon />
        </div>
        <span className="font-normal text-sm text-dark">Download Invoice</span>
      </div>
      <button
        className="flex items-center gap-1 py-4 border-b border-off-white-200 "
        disabled={isPending}
        onClick={() =>
          mutate({
            id: data?.id,
            type: data?.type === "invoices" ? "receipts" : ("invoices" as any),
            issueDate:
              dateFormatter(new Date().toDateString()) ?? data?.dueDate,
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
      <button className="flex items-center gap-1 py-4 border-b border-off-white-200 ">
        <div className="h-8 w-8 bg-off-white flex justify-center items-center">
          {data?.type === "invoices" ? (
            <Icons.ArrowRightIcon />
          ) : (
            <Icons.ArrowDownIcon />
          )}
        </div>
        <span className="font-normal text-sm text-dark capitalize">
          {data?.type === "invoices" ? "Record as debtor" : "Record as Income"}
        </span>
      </button>
      <button
        className="flex items-center gap-1 py-4 border-b border-off-white-200 "
        disabled={deleteLoader}
        onClick={() => deleteMutation(data?.id)}
      >
        <div className="h-8 w-8 bg-off-white flex justify-center items-center">
          <Icons.Delete color="#C25353" />
        </div>
        <span className="font-normal text-sm text-danger-500">
          {deleteLoader ? "Deleting..." : " Delete Invoice"}
        </span>
      </button>
    </Modal>
  );
};

interface Props {
  data: Data;
}

export default MoreModal;
