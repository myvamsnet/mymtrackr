import { CustomDialog } from "@/components/CustomDialog";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useDeleteNotification } from "../hooks/useDeleteNotification";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { DialogClose } from "@/components/ui/dialog";
import toast from "react-hot-toast";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";

const DeleteNotification = ({ id }: { id: string }) => {
  const { updateQueryParams } = useUpdateQuery();
  const { mutate, isPending, onConfirm, onCancel, modal } =
    useDeleteNotification();
  const searchParams = useSearchParams();
  const notificationId = searchParams.get("notificationId");

  return (
    <CustomDialog
      isOpen={
        modal?.isOpen && modal?.type === "delete" && Boolean(notificationId)
      }
      toggle={(open) =>
        onConfirm({
          isOpen: open,
          type: "delete",
        })
      }
      buttonText={
        <Button
          variant="outline"
          className={`bg-red-500 hover:bg-red-400 text-white  outline-none border-none`}
          onClick={() =>
            updateQueryParams({
              notificationId: id,
            })
          }
        >
          <Trash2 className="h-4 w-4 mr-1" />
          Delete
        </Button>
      }
      title="Confirm Notification Deletion"
      subTitle=" Are you sure you want to delete this Notification? This action cannot be  undone."
      btnClassName=""
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
          onClick={() => {
            if (!notificationId)
              return toast.error("Notification Id not found");

            mutate(notificationId as string);
          }}
          disabled={isPending}
        >
          {isPending ? "Deleting..." : "Confirm"}
        </Button>
      </div>
    </CustomDialog>
  );
};

export default DeleteNotification;
