import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetAllContent = () => {
  const { data, status, error } = useQuery<ContentResponseData>({
    queryKey: ["contents"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/admin/contents");
      return data;
    },
  });
  return {
    contents: data?.data,
    status,
    error,
  };
};

export interface ContentResponseData {
  success: boolean;
  message: string;
  data: ContentData[];
}

export interface ContentData {
  id: string;
  created_at: string;
  title: string;
  link: string;
  user_id: string;
}
