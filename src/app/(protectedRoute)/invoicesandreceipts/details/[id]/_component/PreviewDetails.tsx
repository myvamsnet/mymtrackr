import { PreviewDetailsModal } from "@/app/(protectedRoute)/_components/PreviewDetailsModal";
import { Button } from "@/components/ui/button";
import useModal from "@/hooks/useModal";
import { Data } from "@/types/invoicesandreceipts";
import { InvoiceAndReceiptData } from "@/zustand/invoiceAndReceiptStore";
import { Butcherman } from "next/font/google";
import React from "react";

const PreviewDetails = ({ list }: Props) => {
  const { modal, onCancel } = useModal();
  return (
    <>
      {modal.type === "preview" && (
        <PreviewDetailsModal
          title="Preview"
          lists={list as InvoiceAndReceiptData}
          isOpen={modal.isOpen && modal.type === "preview" && list !== null}
          onCancel={onCancel}
        >
          <section className="bg-off-white-300 p-4 flex gap-3 justify-between mt-6  w-full">
            <Button
              className="py-[14px] px-[10px] w-[93px] h-[45px] transition-all ease-out duration-300  "
              role="button"
              variant={"outline"}
            >
              Download
            </Button>
            <Button
              className="py-[14px] px-[10px] w-[183px] h-[45px] transition-all ease-out duration-300  bg-primary"
              role="button"
            >
              Share
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
}
