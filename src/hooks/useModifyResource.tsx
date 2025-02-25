import {
  useMutation,
  useQueryClient,
  UseMutationResult,
} from "@tanstack/react-query";
import { AxiosRequestConfig, AxiosError } from "axios";
import { useRedirect } from "./useRedirect";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const useModifyResource = function <TResponse, TPayload>({
  endpoint,
  queryKey,
  method = "POST", // Default to POST
  handleCloseModal,
  params,
  redirect,
}: MutationProps): UseMutationResult<TResponse, Error, TPayload> {
  const queryClient = useQueryClient();

  const redirectToPage = useRedirect();

  return useMutation<TResponse, Error, TPayload>({
    mutationFn: async (payload: TPayload) => {
      const config: AxiosRequestConfig = {
        url: `${endpoint}${params ? `/${params}` : ""}`,
        method,
        data: payload,
      };

      const res = await axiosInstance(config);
      return res.data;
    },
    onSuccess: () => {
      if (queryKey) {
        queryClient.invalidateQueries({
          queryKey: typeof queryKey === "string" ? [queryKey] : queryKey,
        });
      }
      if (handleCloseModal) {
        handleCloseModal();
      }
      if (redirect) {
        redirectToPage(redirect);
      }
    },
    onError: (error: unknown) => {
      if (
        (error instanceof AxiosError && error.response?.data === null) ||
        (error instanceof AxiosError && error.response?.data === undefined)
      ) {
        toast.error("Network Error, Please try again later");
      }

      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.error);
      }
    },
  });
};

interface MutationProps {
  endpoint: string;
  method: "POST" | "PUT" | "DELETE" | "PATCH"; // Made method optional with default
  queryKey?: string | string[];
  handleCloseModal?: () => void;
  params?: string;
  redirect?: string;
}

