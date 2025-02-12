"use client";
import { CustomDatePicker } from "@/components/CustomDatePicker";
import { CustomInput } from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useCreateTask } from "../hooks/useCreateTask";
import { CustomModal } from "@/components/CustomModal";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import { useSearchParams } from "next/navigation";

const TaskCreateForm = () => {
  const { updateQueryParams } = useUpdateQuery();
  const searchParam = useSearchParams();
  const createTask = searchParam.get("createTask");
  const { control, handleSubmit, onSubmit, isPending } = useCreateTask();
  return (
    <CustomModal
      isOpen={createTask === "true"}
      onOpenChange={(open) => {
        updateQueryParams({
          createTask: open ? "true" : "",
        });
      }}
      subTitle=""
      content=""
      title="Create Task"
      btnText={"+ Add New"}
      className="text-xs font-semibold text-off-white-300 font-inter   p-4 rounded-2xl gap-2 bg-primary  flex justify-center items-center my-4 btn-drop-shadow  cursor-pointer  w-[103px]"
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
        <div className="w-full">
          <Button className="w-full py-2 px-4 h-[45px]">
            {isPending ? "Creating..." : "Create Task"}
          </Button>
        </div>
      </form>
    </CustomModal>
  );
};

export default TaskCreateForm;
