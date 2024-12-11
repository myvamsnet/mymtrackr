import axiosInstance from "@/lib/axios";
import { BusinessResponseData } from "@/types/business";
import { useQuery } from "@tanstack/react-query";

export const useGetBusiness = () => {
  const query = useQuery<BusinessResponseData>({
    queryKey: ["business/settings"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`business/settings`);
      return data;
    },
  });
  console.log(query.status);
  return query;
};
