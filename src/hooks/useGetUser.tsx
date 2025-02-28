"use client";
import axiosInstance from "@/lib/axios";
import { User } from "@/types/auth";

import userStore from "@/zustand/userStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useGetUser = () => {
  const { setUser } = userStore();
  const { data, isLoading, error } = useQuery<UserResponseAPI>({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosInstance.get("/me");
      return res.data;
    },
  });

  useEffect(() => {
    if (data?.data) {
      const userInfo = {
        ...data.data,
      };
      setUser(data?.data as User);
    }
  }, [data?.data, setUser]);

  return {
    user: data?.data as User,
    isLoading,
    error,
  };
};
export interface UserResponseAPI {
  status: string;
  data: User;
}
