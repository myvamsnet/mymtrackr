"use client";

import { Card, CardContent } from "@/components/ui/card";
import NotificationForm from "./notification-form";
import NotificationList from "./NotificationList";
import { useGetNotifications } from "@/hooks/useGetNotifications";

export default function NotificationDashboard() {
  const { notifications, status, error } = useGetNotifications();
  return (
    <div className="grid grid-cols-1 gap-6 max-w-[70%] mx-auto">
      <div className="flex justify-end items-center">
        <NotificationForm />
      </div>
      <Card className="bg-white p-3 rounded-lg">
        <CardContent className="pt-6 ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Notifications</h2>
            <div className="text-sm text-muted-foreground">
              {notifications?.length || 0} notification
              {notifications?.length !== 1 ? "s" : ""}
            </div>
          </div>
          <NotificationList
            notifications={notifications}
            status={status}
            error={error}
          />
        </CardContent>
      </Card>
    </div>
  );
}
