"use client";
import { CustomDatePicker } from "@/components/CustomDatePicker";
import { CustomInput } from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import React from "react";
import { useEditTask } from "../hooks/useEditTask";
import { useSearchParams } from "next/navigation";
import { CustomModal } from "@/components/CustomModal";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import { EditIcon } from "@/assets/icons/EditIcon";
import CustomLoader from "@/components/CustomLoader/page";

const TaskEditForm = ({ id }: Props) => {
  const { updateQueryParams } = useUpdateQuery();
  const searchParam = useSearchParams();
  const editTask = searchParam.get("editTask");

  const { control, handleSubmit, onSubmit, isPending } = useEditTask();

  return (
    <CustomModal
      isOpen={editTask === "true"}
      onOpenChange={(open) => {
        updateQueryParams({
          editTask: open ? "true" : "",
          taskId: open ? id : "",
        });
      }}
      subTitle=""
      content=""
      title="Edit Task"
      btnText={
        <span>
          <EditIcon />
        </span>
      }
      className="size-4 !bg-[#F4F8FF] rounded-full flex justify-center items-center text-pretty"
    >
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
          <Button className="w-full py-2 px-4 h-[45px] flex-1">
            {isPending ? "Updating..." : "Updating Task"}
          </Button>
        </div>
      </form>
    </CustomModal>
  );
};

export default TaskEditForm;
interface Props {
  id: string;
}
