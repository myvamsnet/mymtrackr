"use client";

import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import axiosInstance from "@/lib/axios";
import { handleError } from "@/lib/helper/handleError";
import { isValidDate } from "@/lib/helper/isValidDate";
import { taskSchema, TaskSchemaType } from "@/lib/Schema/taskSchema";
import useTaskStore from "@/zustand/taskStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const useEditTask = () => {
  const { updateTask, tasks } = useTaskStore();
  const searchParam = useSearchParams();
  const taskId = searchParam.get("taskId") || "";
  const { updateQueryParams } = useUpdateQuery();
  const queryClient = useQueryClient();

  // Memoize the task lookup
  const singleTask = useMemo(
    () => tasks.find((task) => task.id === taskId),
    [tasks, taskId]
  );

  const { control, handleSubmit, setValue } = useForm<TaskSchemaType>({
    resolver: zodResolver(taskSchema),
    defaultValues: { taskDate: new Date(), title: "" },
    mode: "onSubmit",
  });

  // Set default values when singleTask changes
  useEffect(() => {
    if (singleTask) {
      setValue(
        "taskDate",
        isValidDate(singleTask.taskDate)
          ? new Date(singleTask.taskDate)
          : new Date()
      );
      setValue("title", singleTask.title);
    }
  }, [singleTask, setValue]);

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: Payload) => {
      if (!taskId) return;
      const { data } = await axiosInstance.put(`/tasks/${taskId}`, payload);
      return data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries({
          queryKey: [`tasks`, data.data.status ? "completed" : "pending"],
        });

        toast.success(data.message, { id: "update-task" });

        updateTask(data.data);
        updateQueryParams({
          status: data.data.status ? "completed" : "pending",
          editTask: "",
        });
      }
    },
    onError: handleError,
  });

  const onSubmit = useCallback(
    (data: TaskSchemaType) => {
      if (!taskId) return;
      const payload: Payload = {
        ...data,
        taskDate: dayjs(data.taskDate).format("dddd, MMMM D, YYYY h:mm"),
      };
      mutate(payload);
    },
    [mutate, taskId]
  );

  return { control, handleSubmit, onSubmit, isPending, id: taskId };
};

interface Payload {
  taskDate: string;
  title: string;
}
