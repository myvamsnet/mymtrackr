"use client";
import { SubscriptionType } from "@/app/actions/getSubscription";
import { userprofile } from "@/app/actions/getUser";
import { Button } from "@/components/ui/button";
import { useSubscription } from "@/hooks/useSubscription";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import axiosInstance from "@/lib/axios";
import { currencyFormatter } from "@/lib/helper/currencyFormatter";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useSearchParams } from "next/navigation";
import React, { Fragment, useEffect } from "react";
import toast from "react-hot-toast";

export const SubDetails = ({ subscription, user }: Props) => {
  const searchParams = useSearchParams();
  const paymentStatus = searchParams.get("status");
  const tx_ref = searchParams.get("tx_ref");
  const transaction_id = searchParams.get("transaction_id");
  const { updateQueryParams } = useUpdateQuery();

  const { handleClickPayment, isPending } = useSubscription();
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
          {subscription?.status !== "active" && (
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
        {subscription?.status === "trial" && (
          <div className="border-b border-[#F4F5F7] py-3 flex justify-between items-center">
            <p className="text-xs text-dark-100">Free Tier</p>
            <p className={`text-xs text-dark`}>
              {dayjs(subscription?.expired_at).format(
                "ddd, MMM D, YYYY h:mm A"
              )}
            </p>
          </div>
        )}

        <div className="border-b border-[#F4F5F7] py-3 flex justify-between items-center">
          <p className="text-xs text-dark-100">Last Sub Date</p>
          <p className={`text-xs text-dark`}>
            {dayjs(subscription?.updated_at).format("ddd, MMM D, YYYY h:mm A")}
          </p>
        </div>
        <div className="border-b border-[#F4F5F7] py-3 flex justify-between items-center">
          <p className="text-xs text-dark-100">Next Due Date</p>
          <p className={`text-xs text-dark`}>
            {dayjs(subscription?.expired_at).format("ddd, MMM D, YYYY h:mm A")}
          </p>
        </div>
        <div className="border-b border-[#F4F5F7] py-3 flex justify-between items-center">
          <p className="text-xs text-dark-100">Status</p>
          <p className={`text-xs  capitalize  text-primary`}>
            {subscription?.status}
          </p>
        </div>
      </section>
    </Fragment>
  );
};

interface Props {
  user: userprofile;
  subscription: SubscriptionType;
}
interface SubscriptionPayload {
  email: string;
  fullName: string;
}
