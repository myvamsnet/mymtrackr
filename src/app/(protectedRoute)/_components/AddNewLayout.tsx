import { useRedirect } from "@/hooks/useRedirect";
import useInvoiceAndReceiptStore from "@/zustand/invoiceAndReceiptStore";
import React from "react";

const AddNewLayout = ({ path }: Props) => {
  const { clearInvoiceAndReceipt } = useInvoiceAndReceiptStore();
  const redirect = useRedirect();
  console.log(path);
  return (
    <div className="absolute right-6 bottom-0 z-30">
      <div
        className="text-xs font-semibold text-off-white-300 font-inter   p-4 rounded-2xl gap-2 bg-primary  flex justify-center items-center my-4 btn-drop-shadow  cursor-pointer"
        onClick={() => {
          clearInvoiceAndReceipt();
          return redirect(path);
        }}
      >
        + Add New
      </div>
    </div>
  );
};

export default AddNewLayout;
interface Props {
  path: string;
}
