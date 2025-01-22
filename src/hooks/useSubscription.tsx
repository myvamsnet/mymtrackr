"use client";
import axiosInstance from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { useGetUser } from "./useGetUser";
import toast from "react-hot-toast";

export const useSubscription = () => {
  const redirect_url = process.env.NEXT_PUBLIC_BASE_URL;
  const { user } = useGetUser();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: SubscriptionPayload) =>
      axiosInstance.post("/payment", data).then((res) => res.data),
    onError: (error) => {
      if (error) {
        toast.error("Something went wrong, Try Again");
      }
    },
  });

  const handleClickPayment = async () => {
    if (!user) return;
    const { checkoutUrl } = await mutateAsync({
      email: user.email,
      fullName: user.fullName,
      redirect_url: `${redirect_url}/subscription`,
    });
    window.location.href = checkoutUrl;
  };

  return {
    handleClickPayment,
    isPending,
  };
};
interface SubscriptionPayload {
  email: string;
  fullName: string;
  redirect_url: string;
}
