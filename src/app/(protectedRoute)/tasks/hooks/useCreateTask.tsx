"use client";

import { useRedirect } from "@/hooks/useRedirect";
import axiosInstance from "@/lib/axios";
import { handleError } from "@/lib/helper/handleError";
import { taskSchema, TaskSchemaType } from "@/lib/Schema/taskSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const useCreateTask = () => {
  const redirect = useRedirect();
  // Access the client
  const queryClient = useQueryClient();
  const { control, handleSubmit } = useForm<TaskSchemaType>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      taskDate: new Date(),
      title: "",
    },
    mode: "onSubmit",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: Payload) => {
      const { data } = await axiosInstance.post("/tasks", payload);
      return data;
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task created successfully");
      return redirect("/tasks");
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
  };
};
interface Payload {
  taskDate: string;
  title: string;
}
