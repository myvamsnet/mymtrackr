import React from "react";
import { MoreHeader } from "./__components/MoreHeader";
import { MoreLists } from "./__components/MoreLists";
import { getUserProfile } from "@/app/actions/getUserProfile";
import ProtectedLayout from "../_components/layout/ProtectedLayout";

const More = async () => {
  const { data } = await getUserProfile();
  return (
    <ProtectedLayout>
      <MoreHeader data={data} />
      <MoreLists data={data} />
    </ProtectedLayout>
  );
};

export default More;
