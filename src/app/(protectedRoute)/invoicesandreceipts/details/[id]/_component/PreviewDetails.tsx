import PreviewDetailsModal from "@/app/(protectedRoute)/_components/PreviewDetailsModal";
import { Button } from "@/components/ui/button";
import { useGenerateImage } from "@/hooks/useGenerateImage";
import useModal from "@/hooks/useModal";
import { BusinessData } from "@/types/business";
import { Data } from "@/types/invoicesandreceipts";
import useInvoiceAndReceiptStore, {
  InvoiceAndReceiptData,
} from "@/zustand/invoiceAndReceiptStore";
import React from "react";

const PreviewDetails = ({ list, businessInfo }: Props) => {
  const { clearInvoiceAndReceipt } = useInvoiceAndReceiptStore();
  const { modal, onCancel } = useModal();
  const { handleGenerateAndDownload, isGenerating, invoiceRef } =
    useGenerateImage();
  return (
    <>
      {modal.type === "preview" && (
        <PreviewDetailsModal
          title="Preview"
          lists={list as InvoiceAndReceiptData}
          businessInfo={businessInfo as BusinessData}
          isOpen={modal.isOpen && modal.type === "preview" && list !== null}
          onCancel={() => {
            clearInvoiceAndReceipt();
            onCancel();
          }}
          invoiceRef={invoiceRef}
        >
          <section className="bg-off-white-300 p-4 flex gap-3 justify-between mt-6  w-full">
            <Button
              className="py-[14px] px-[10px] w-full h-[45px] transition-all ease-out duration-300  "
              role="button"
              onClick={handleGenerateAndDownload}
              disabled={isGenerating}
            >
              {isGenerating ? "Generating..." : "Download"}
            </Button>
          </section>
        </PreviewDetailsModal>
      )}
    </>
  );
};

export default PreviewDetails;
interface Props {
  list: Data;
  businessInfo: BusinessData;
}
