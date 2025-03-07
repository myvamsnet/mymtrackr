"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import { NotificationLoader } from "./NotificationLoader";
import { NotificationData } from "@/types/notifications";
import DeleteNotification from "./DeleteNotification";
import EditnotificationForm from "./EditnotificationForm";

interface NotificationListProps {
  notifications: NotificationData[];
  status: "pending" | "success" | "error";
  error: { message: string } | null;
}

export default function NotificationList({
  notifications,
  status,
  error,
}: NotificationListProps) {
  if (status === "pending") {
    return (
      <div className="flex justify-center items-center h-64">
        <NotificationLoader size="large" />
      </div>
    );
  }

  if (notifications?.length === 0 && status === "success") {
    return (
      <div className="text-center py-8 text-gray-700">
        No notifications found. Create one to get started.
      </div>
    );
  }
  if (notifications?.length === 0 && status === "error") {
    return (
      <div className="text-center py-8 text-red-500">{error?.message}</div>
    );
  }

  return (
    <div className="space-y-4">
      {notifications &&
        notifications?.length > 0 &&
        notifications?.map((notification) => (
          <Card key={notification.id} className="overflow-hidden">
            <CardContent className="p-4">
              <h3 className="font-medium text-lg">{notification.title}</h3>
              <div className="mt-1 prose prose-sm max-w-none">
                <ReactMarkdown>{notification.body}</ReactMarkdown>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2 p-4 pt-0">
              <EditnotificationForm id={notification.id} />

              <DeleteNotification id={notification.id} />
            </CardFooter>
          </Card>
        ))}
    </div>
  );
}
