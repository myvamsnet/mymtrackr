import axiosInstance from "@/lib/axios";
import { handleError } from "@/lib/helper/handleError";
import { contentSchema, ContentSchemaType } from "@/lib/Schema/contentSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const useAddContent = () => {
  // Access the client
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm<ContentSchemaType>({
    defaultValues: {
      title: "",
      link: "",
    },
    resolver: zodResolver(contentSchema),
  });

  const { isPending, mutate } = useMutation({
    mutationFn: async (payload: ContentSchemaType) => {
      const { data } = await axiosInstance.post("/admin/contents", payload);
      return data;
    },
    onSuccess: (data) => {
      if (data) {
        queryClient.invalidateQueries({ queryKey: ["contents"] });
        reset();
        toast.success(data?.message);
      }
    },
    onError: handleError,
  });
  const onSubmit = (data: ContentSchemaType) => {
    mutate(data);
  };
  return {
    control,
    handleSubmit,
    onSubmit,
    isPending,
  };
};

export default useAddContent;
