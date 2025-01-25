import React from "react";
import ProtectedLayout from "../_components/layout/ProtectedLayout";
import { NotificationList } from "./__components/NotificationList";
import { CustomHeader } from "@/components/CustomHeader";

const NotificationsPage = () => {
  // In a real application, you would fetch this data from an API
  const notifications: { id: string; message: string; timestamp: string }[] =
    [];
  return (
    <ProtectedLayout className="bg-off-white relative h-screen overflow-hidden">
      <CustomHeader title="Notification" link="/home" />
      <NotificationList notifications={notifications} />
    </ProtectedLayout>
  );
};

export default NotificationsPage;
