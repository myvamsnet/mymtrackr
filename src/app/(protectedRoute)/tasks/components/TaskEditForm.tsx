"use client";
import { CustomDatePicker } from "@/components/CustomDatePicker";
import { CustomInput } from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useEditTask } from "../hooks/useEditTask";
import CustomLoader from "@/components/CustomLoader/page";
import useDeleteTask from "../hooks/useDeleteTask";
import { useParams } from "next/navigation";
import { ConfirmAction } from "@/components/ConfirmAction";

const TaskEditForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams() as {
    id: string;
  };
  const { control, handleSubmit, onSubmit, isPending, status } = useEditTask();
  const { handleDelete, isPending: deleteLoader } = useDeleteTask();

  if (status === "pending") {
    return <CustomLoader />;
  }
  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <CustomDatePicker name="taskDate" control={control} label="Task Date" />
      <CustomInput
        name={"title"}
        type={"text"}
        label={"Title"}
        control={control}
        placeholder={"Enter task title"}
      />
      <div className="w-full flex items-center gap-6">
        <ConfirmAction
          isOpen={isOpen}
          toggle={(open) => {
            setIsOpen(open);
          }}
          buttonText={
            <button
              className="w-[100px] flex justify-center items-center text-danger-500 text-sm cursor-pointer"
              role="button"
              disabled={deleteLoader}
            >
              Delete
            </button>
          }
          title={`Confirm Delete  Task`}
          subTitle=" Are you sure you want to delete this Task? This action cannot be  undone."
          btnClassName="bg-red-500 hover:bg-red-400 text-white outline-none"
          subTitleClassName="text-red-500 text-xs my-3"
          handleAction={() => handleDelete(id)}
          isPending={deleteLoader}
        />
        <Button className="w-full py-2 px-4 h-[45px] flex-1">
          {isPending ? "Updating..." : "Updating Task"}
        </Button>
      </div>
    </form>
  );
};

export default TaskEditForm;
