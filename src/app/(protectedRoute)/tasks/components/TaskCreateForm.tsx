"use client";
import { CustomDatePicker } from "@/components/CustomDatePicker";
import { CustomInput } from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import React from "react";
import { useCreateTask } from "../hooks/useCreateTask";

const TaskCreateForm = () => {
  const { control, handleSubmit, onSubmit, isPending } = useCreateTask();
  return (
    <form
      className="space-y-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <CustomDatePicker
        name="taskDate"
        control={control}
        label="Task Date"
      />
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
  );
};

export default TaskCreateForm;
