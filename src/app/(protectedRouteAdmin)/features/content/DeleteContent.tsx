import { CustomModal } from "@/components/CustomModal";
import { Trash2 } from "lucide-react";
import React, { FC, useState } from "react";
import useDeleteContent from "./hooks/useDeleteContent";

export const DeleteContent: FC<Props> = ({ content }) => {
  const { mutate, isPending, isOpen, setIsOpen } = useDeleteContent();

  return (
    <CustomModal
      isOpen={isOpen}
      title="Are you sure to delete?"
      subTitle=""
      btnText={<Trash2 width={24} height={24} />}
      onOpenChange={(open) => setIsOpen(open)}
      content=""
      className="bg-transparent text-dark border-none outline-none hover:bg-transparent hover:text-dark"
    >
      <section className="flex gap-4">
        <button
          className="w-[93px] py-2 px-4 border border-[#010114] rounded-lg"
          onClick={() => setIsOpen(false)}
        >
          No
        </button>
        <button
          disabled={isPending}
          className="flex-1 bg-danger text-white rounded-lg py-4 px-2 font-semibold text-base"
          onClick={() => mutate(content.id)}
        >
          {isPending ? "Deleting..." : "Yes, Delete"}
        </button>
      </section>
    </CustomModal>
  );
};

interface Props {
  content: {
    id: string;
    title: string;
  };
}
