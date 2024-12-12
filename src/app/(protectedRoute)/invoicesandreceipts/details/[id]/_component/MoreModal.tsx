import { Icons } from "@/assets/icons";
import { Modal } from "@/components/ui/Modal";
import useModal from "@/hooks/useModal";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const MoreModal = () => {
  const { onCancel, modal } = useModal();
  const { id } = useParams() as {
    id: string;
  };
  return (
    <Modal
      title="More"
      isOpen={modal.isOpen && modal.type === "more"}
      onClose={onCancel}
      className="p-4 "
      closeOutside={true}
    >
      <Link
        href={`/invoicesandreceipts/edit/${id}`}
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
      <div className="flex items-center gap-1 py-4 border-b border-off-white-200 ">
        <div className="h-8 w-8 bg-off-white flex justify-center items-center">
          <Icons.ReceiptIcon />
        </div>
        <span className="font-normal text-sm text-dark">
          Convert to Receipt
        </span>
      </div>
      <div className="flex items-center gap-1 py-4 border-b border-off-white-200 ">
        <div className="h-8 w-8 bg-off-white flex justify-center items-center">
          <Icons.Delete color="#C25353" />
        </div>
        <span className="font-normal text-sm text-danger-500">
          Delete Invoice
        </span>
      </div>
    </Modal>
  );
};

export default MoreModal;
