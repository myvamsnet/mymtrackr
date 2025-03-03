import { useRedirect } from "@/hooks/useRedirect";
import useInvoiceAndReceiptStore from "@/zustand/invoiceAndReceiptStore";
import React from "react";

const AddNewLayout = ({ path }: Props) => {
  const { clearInvoiceAndReceipt } = useInvoiceAndReceiptStore();
  const redirect = useRedirect();

  return (
    <div className="flex justify-end items-center md:sticky fixed right-6 bottom-0 z-30">
      <button
        className="text-xs font-semibold text-off-white-300 font-inter   p-4 rounded-2xl gap-2 bg-primary  flex justify-center items-center my-4 btn-drop-shadow  cursor-pointer  w-[103px]"
        onClick={() => {
          clearInvoiceAndReceipt();
          return redirect(path);
        }}
      >
        + Add New
      </button>
    </div>
  );
};

export default AddNewLayout;
interface Props {
  path: string;
}
