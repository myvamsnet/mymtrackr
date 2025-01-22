"use client";

import { useFetch } from "@/hooks/useFetch";
import { useRedirect } from "@/hooks/useRedirect";
import axiosInstance from "@/lib/axios";
import { handleError } from "@/lib/helper/handleError";
import { isValidDate } from "@/lib/helper/isValidDate";
import { taskSchema, TaskSchemaType } from "@/lib/Schema/taskSchema";
import { SingleTaskResponseData } from "@/types/tasks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const useEditTask = () => {
  const { id } = useParams() as {
    id: string;
  };
  const redirect = useRedirect();
  const { data, status } = useFetch<SingleTaskResponseData>(
    "/tasks",
    id,
    "tasks"
  );
  const singleTask = data?.data;
  // Access the client
  const queryClient = useQueryClient();
  const { control, handleSubmit, setValue } = useForm<TaskSchemaType>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      taskDate: new Date(),
      title: "",
    },
    mode: "onSubmit",
  });

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
      if (!id) return;
      const { data } = await axiosInstance.put(`/tasks/${id}`, payload);
      return data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        // Invalidate and refetch
        queryClient.invalidateQueries({
          queryKey: [`tasks-pending`],
        });
        toast.success(data?.message);
        return redirect(`/tasks/pending`);
      }
    },
    onError: handleError,
  });

  const onSubmit = (data: TaskSchemaType) => {
    const payload = {
      ...data,
      taskDate: dayjs(data.taskDate).format("dddd, MMMM D, YYYY h:mm"),
    } as Payload;
    mutate(payload);
  };
  return {
    control,
    handleSubmit,
    onSubmit,
    isPending,
    status,
    id,
  };
};
interface Payload {
  taskDate: string;
  title: string;
}
