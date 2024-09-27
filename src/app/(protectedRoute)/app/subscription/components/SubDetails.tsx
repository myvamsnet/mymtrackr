"use client";
import { Button } from "@/components/ui/button";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import axiosInstance from "@/lib/axios";
import { currencyFormatter } from "@/lib/helper/currencyFormatter";
import { UserProfile } from "@/types/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import dayjs from "dayjs";
import { useSearchParams } from "next/navigation";
import React, { Fragment, useEffect } from "react";
import toast from "react-hot-toast";

export const SubDetails = ({ user }: Props) => {
  const searchParams = useSearchParams();
  const paymentStatus = searchParams.get("status");
  const tx_ref = searchParams.get("tx_ref");
  const transaction_id = searchParams.get("transaction_id");
  const { updateQueryParams } = useUpdateQuery();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: SubscriptionPayload) =>
      axiosInstance.post("/payment", data).then((res) => res.data),
  });

  const handleClickPayment = async () => {
    if (!user) return;
    const { checkoutUrl } = await mutateAsync({
      email: user.email,
      fullName: user.fullName,
    });
    window.location.href = checkoutUrl;
  };

  const { data } = useQuery({
    queryKey: ["subscription", paymentStatus, tx_ref],
    queryFn: () => {
      if (!paymentStatus || !tx_ref || !transaction_id) return;
      return axiosInstance
        .get(
          `/payment/verify?status=${paymentStatus}&tx_ref=${tx_ref}&transaction_id=${transaction_id}`
        )
        .then((res) => res.data);
    },
  });

  useEffect(() => {
    if (data?.message === "Subscription successful") {
      updateQueryParams({ status: "", tx_ref: "", transaction_id: "" });
      toast.success("Subscription successful");
    }
  }, [data, updateQueryParams]);

  const subscriptionInfo = [
    {
      label: "Free Tier",
      value: dayjs(user?.created_at).format("ddd, MMM D, YYYY h:mm A"),
      show: user?.subscription_status === "trialing" ? true : false,
    },
    {
      label: "Last Sub Date",
      value: dayjs(user?.updateat).format("ddd, MMM D, YYYY h:mm A"),
    },
    {
      label: "Next Due Date",
      value: dayjs(user?.subscription_expiry).format("ddd, MMM D, YYYY h:mm A"),
    },
    { label: "Status", value: user?.subscription_status, status: true },
  ];
  return (
    <Fragment>
      <section className="bg-off-white-300 py-6 px-4 rounded-xl flex justify-center items-center text-center my-4">
        <div className="grid gap-6 w-[288px]">
          <h3 className="text-2xl font-semibold text-dark">
            {currencyFormatter(3000)}
            <span className="text-dark-100 text-base">/Year</span>
          </h3>
          <p className="text-sm font-normal text-dark-300">
            Enjoy all the benefits of Mtrackr
          </p>
          {user?.subscription_status !== "active" && (
            <Button
              className="w-full py-[14px] px-[10px] h-[45px]"
              disabled={isPending}
              onClick={handleClickPayment}
            >
              {isPending ? "Loading..." : "Subscribe"}
            </Button>
          )}
        </div>
      </section>

      <section className="p-4 bg-off-white-300 rounded-xl my-4">
        <h3 className="font-medium text-sm text-dark">Subscription Details</h3>
        {user?.subscription_status === "trialing" && (
          <div className="border-b border-[#F4F5F7] py-3 flex justify-between items-center">
            <p className="text-xs text-dark-100">Free Tier</p>
            <p className={`text-xs text-dark`}>
              {dayjs(user?.subscription_expiry).format(
                "ddd, MMM D, YYYY h:mm A"
              )}
            </p>
          </div>
        )}

        <div className="border-b border-[#F4F5F7] py-3 flex justify-between items-center">
          <p className="text-xs text-dark-100">Last Sub Date</p>
          <p className={`text-xs text-dark`}>
            {dayjs(user?.updateat).format("ddd, MMM D, YYYY h:mm A")}
          </p>
        </div>
        <div className="border-b border-[#F4F5F7] py-3 flex justify-between items-center">
          <p className="text-xs text-dark-100">Next Due Date</p>
          <p className={`text-xs text-dark`}>
            {dayjs(user?.subscription_expiry).format("ddd, MMM D, YYYY h:mm A")}
          </p>
        </div>
        <div className="border-b border-[#F4F5F7] py-3 flex justify-between items-center">
          <p className="text-xs text-dark-100">Status</p>
          <p className={`text-xs  capitalize  text-primary`}>
            {user?.subscription_status}
          </p>
        </div>
      </section>
    </Fragment>
  );
};

interface Props {
  user: UserProfile;
}
interface SubscriptionPayload {
  email: string;
  fullName: string;
}
