"use client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { handleError } from "@/lib/helper/handleError";
import { useGetUser } from "@/hooks/useGetUser";
import { Delete } from "@/assets/icons/Delete";
import { ConfirmAction } from "@/components/ConfirmAction";
import { deActivateAccount } from "@/app/actions/deactivateUser";

export function ConfirmAccountDelete() {
  const { user } = useGetUser();
  const [isOpen, setIsOpen] = useState(false);
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const res = await deActivateAccount();
      if ("success" in res && !res.success) {
        throw new Error(res.message);
      }
      return res;
    },
    onSuccess(data) {
      if ("success" in data && data.success) {
        window.location.href = "/login";
      }
    },
    onError: handleError,
  });

  const handleAccountDelete = () => {
    if (!user) return;
    mutate();
  };
  return (
    <ConfirmAction
      isOpen={isOpen}
      toggle={(open) => {
        setIsOpen(open);
      }}
      buttonText={
        <button className="flex items-center gap-1 p-4 border-b border-off-white-200 ">
          <div className="h-8 w-8 bg-off-white flex justify-center items-center">
            <Delete color="#C25353" />
          </div>
          <span className="font-normal text-sm text-danger-500 capitalize">
            {`Delete Account`}
          </span>
        </button>
      }
      title={`Confirm Delete Account`}
      subTitle=" Are you sure you want to delete your account? This action cannot be  undone."
      btnClassName="bg-red-500 hover:bg-red-400 text-white outline-none"
      subTitleClassName="text-red-500 text-xs my-3"
      isPending={isPending}
      handleAction={handleAccountDelete}
    />
  );
}
