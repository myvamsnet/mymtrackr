import { useGetNotifications } from "@/hooks/useGetNotifications";
import useModal from "@/hooks/useModal";
import axiosInstance from "@/lib/axios";
import { handleError } from "@/lib/helper/handleError";
import {
  notificationSchema,
  NotificationSchemaType,
} from "@/lib/Schema/notificationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const useCreateNotification = () => {
  const queryClient = useQueryClient();
  const { onCancel, onConfirm, modal } = useModal();
  const { control, handleSubmit, watch, reset, setValue } =
    useForm<NotificationSchemaType>({
      defaultValues: { title: "", body: "" },
      resolver: zodResolver(notificationSchema),
    });

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: NotificationSchemaType) => {
      const { data } = await axiosInstance.post("/notifications", payload);
      return data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        onCancel();
        reset();
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ["notifications"] });
        toast.success(data.message);
      }
    },
    onError: handleError,
  });

  const body = watch("body");
  const [activeTab, setActiveTab] = useState("edit");
  const onSubmitNotification = (data: NotificationSchemaType) => {
    mutate(data);
  };

  return {
    onConfirm,
    onCancel,
    modal,
    handleSubmit,
    onSubmitNotification,
    body,
    activeTab,
    setActiveTab,
    control,
    isPending,
  };
};
