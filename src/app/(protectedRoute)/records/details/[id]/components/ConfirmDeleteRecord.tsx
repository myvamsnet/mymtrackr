"use client";
import { deleteRecord } from "@/app/actions/deleteRecord";
import { CustomDialog } from "@/components/CustomDialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export function ConfirmDeleteRecord({ id }: ConfirmDeleteRecordProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate, isPending } = useMutation({
    mutationFn: async (id: string) => {
      const res = await deleteRecord(id);
      return res;
    },
  });
  return (
    <CustomDialog
      isOpen={isOpen}
      toggle={(open) => setIsOpen(open)}
      buttonText=" Delete Record"
      title="Confirm Record Deletion"
      subTitle=" Are you sure you want to delete this record? This action cannot be  undone."
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
          onClick={() => mutate(id)}
          disabled={isPending ? true : false}
        >
          {isPending ? "Deleting..." : "Confirm"}
        </Button>
      </div>
    </CustomDialog>
  );
}
interface ConfirmDeleteRecordProps {
  id: string;
}
