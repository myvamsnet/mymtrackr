"use client";
import { CustomDialog } from "@/components/CustomDialog";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { useDeleteInvoiceAndReceipt } from "../../../hooks/useDeleteInvoiceAndReceipt";
import { Icons } from "@/assets/icons";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";

export function ConfirmDeleteInvoiceAndRecipt({
  id,
  type,
}: ConfirmDeleteRecordProps) {
  const { deleteLoader, deleteMutation, isOpen, setIsOpen } =
    useDeleteInvoiceAndReceipt();

  return (
    <CustomDialog
      isOpen={isOpen}
      toggle={(open) => {
        setIsOpen(open);
      }}
      buttonText={
        <button className="flex items-center gap-1 py-4 border-b border-off-white-200 ">
          <div className="h-8 w-8 bg-off-white flex justify-center items-center">
            <Icons.Delete color="#C25353" />
          </div>
          <span className="font-normal text-sm text-danger-500 capitalize">
            {`Delete ${type}`}
          </span>
        </button>
      }
      title={`Confirm Delete ${type === "receipts" ? "Receipt" : "Invoice"}`}
      subTitle=" Are you sure you want to delete this Recipt? This action cannot be  undone."
      btnClassName="bg-red-500 hover:bg-red-400 text-white outline-none"
      subTitleClassName="text-red-500 text-xs my-3"
    >
      <div className="grid gap-4 py-4 grid-cols-2">
        <DialogClose className="w-full">
          <Button
            variant="outline"
            className="bg-white border w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          >
            Cancel
          </Button>
        </DialogClose>
        <Button
          onClick={() => deleteMutation(id)}
          disabled={deleteLoader ? true : false}
        >
          {deleteLoader ? "Deleting..." : "Confirm"}
        </Button>
      </div>
    </CustomDialog>
  );
}
interface ConfirmDeleteRecordProps {
  id: string;
  type: "invoices" | "receipts";
}
