import React from "react";
import ProtectedLayout from "../_components/layout/ProtectedLayout";
import { NotificationList } from "./__components/NotificationList";
import { CustomHeader } from "@/components/CustomHeader";

const NotificationsPage = () => {
  return (
    <ProtectedLayout className=" relative pb-40">
      <CustomHeader title="Notification" link="/home" />
      <NotificationList />
    </ProtectedLayout>
  );
};

export default NotificationsPage;
