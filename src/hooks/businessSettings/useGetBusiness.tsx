import axiosInstance from "@/lib/axios";
import { BusinessResponseData } from "@/types/business";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export const useGetBusiness = () => {
  const { id } = useParams() as {
    id: string;
  };
  const query = useQuery<BusinessResponseData>({
    queryKey: ["business/settings"],
    queryFn: async () => {
      if (!id) return;
      const { data } = await axiosInstance.get(`business/settings/${id}`);
      return data;
    },
  });

  return query;
};
