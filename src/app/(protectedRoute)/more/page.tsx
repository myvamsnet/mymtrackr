import React from "react";
import { MoreHeader } from "./__components/MoreHeader";
import { MoreLists } from "./__components/MoreLists";
import ProtectedLayout from "../_components/layout/ProtectedLayout";
import { getUser, userprofile } from "@/app/actions/getUser";
import {
  getSubscription,
  SubscriptionType,
} from "@/app/actions/getSubscription";

const More = async () => {
  const user = await getUser();
  const subscription = await getSubscription();
  return (
    <ProtectedLayout className="bg-[#F4F8FF]  pb-10">
      <section className=" sticky top-0 z-50">
        <MoreHeader
          data={user?.data as userprofile}
          subscription={subscription?.data as SubscriptionType}
        />
      </section>
      <MoreLists />
    </ProtectedLayout>
  );
};

export default More;
