import React, { ReactNode } from "react";
import { CustomDialog } from "../CustomDialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
export const ConfirmAction = ({
  isOpen,
  toggle,
  buttonText,
  title,
  subTitle,
  isPending,
  handleAction,
}: Props) => {
  return (
    <CustomDialog
      isOpen={isOpen}
      toggle={toggle}
      buttonText={buttonText}
      title={title}
      subTitle={subTitle}
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
        <Button disabled={isPending} onClick={handleAction}>
          {isPending ? "Loading..." : "Confirm"}
        </Button>
      </div>
    </CustomDialog>
  );
};
interface Props {
  isOpen: boolean;
  className?: string;
  title?: string;
  subTitle: string;
  toggle: (open: boolean) => void;
  buttonText?: ReactNode;
  titleClassName?: string;
  subTitleClassName?: string;
  btnClassName?: string;
  isPending: boolean;
  handleAction: () => void;
}
