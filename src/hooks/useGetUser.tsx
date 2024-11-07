import axiosInstance from "@/lib/axios";
import { createClient } from "@/lib/supabse/client";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = () => {
  const { data, isLoading, error } = useQuery<UserResponseAPI>({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosInstance.get("/me");
      return res.data;
    },
  });
  console.log(data);
  return {
    user: data?.data as IUser,
    isLoading,
    error,
  };
};
export interface UserResponseAPI {
  status: string;
  data: IUser;
}

export interface IUser {
  id: string;
  created_at: string;
  fullName: string;
  email: string;
  imageUrl: string;
  phoneNumber: string;
  referralCode: string;
  role: string;
  user_id: string;
  update_at: string;
  subscriptions: Subscriptions;
}

export interface Subscriptions {
  id: string;
  amount: number;
  status: string;
  user_id: string;
  expiresAt: string;
  created_at: string;
  updated_at: string;
  userProfile_id: string;
}
