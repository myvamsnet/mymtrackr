import axiosInstance from "@/lib/axios";
import { apiParams } from "@/lib/helper/apiParams";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";

interface AdminUser {
  id: string;
  name: string;
  email: string;
  status: string;
}

const useAdminUser = () => {
  const searchParams = useSearchParams();
  const activeStatus = searchParams.get("status");
  const params = useParams() as { id?: string };
  const values = {
    status: activeStatus as string,
    // searchTerm: searchParams.get("searchTerm") as string,
    // page: searchParams.get("page") as string,
    // startDate: searchParams.get("startDate") as string,
    // endDate: searchParams.get("endDate") as string,
  };
  const controller = new AbortController();
  const query = useQuery<AdminUserResponse>({
    queryKey: ["admin-users", params?.id, activeStatus ?? ""],
    queryFn: async () => {
      if (!params?.id) return;
      // Construct query parameters dynamically
      const queryParams = new URLSearchParams();
      if (activeStatus && activeStatus !== "all") {
        queryParams.append("status", activeStatus); // Only include status if it's provided
      }
      const response = await axiosInstance.get(
        `/admin/users/${params.id}${queryParams ? `?${queryParams}` : ""}`,
        {
          signal: controller.signal,
        }
      );
      return response.data;
    },
    enabled: !!params?.id, // Ensure the query is not triggered if `id` is missing
  });

  return query;
};

export default useAdminUser;
export interface AdminUserResponse {
  success: boolean;
  message: string;
  data: Data;
}

export interface Data {
  users: User[];
  totalPages: number;
  page: number;
}

export interface User {
  referee: Referee;
  status: string;
}

export interface Referee {
  id: string;
  email: string;
  fullName: string;
  imageUrl: any;
  created_at: string;
  last_active: string;
  phoneNumber: any;
  subscriptions: Subscriptions;
}

export interface Subscriptions {
  status: string;
}
