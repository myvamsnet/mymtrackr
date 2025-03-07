import { useFetch } from "@/hooks/useFetch";
import {
  NotificationApiResponse,
  NotificationData,
} from "@/types/notifications";
import { useNotificationStore } from "@/zustand/notificationStore";
import { useEffect } from "react";

export const useGetNotifications = () => {
  const { setNotifications, notifications } = useNotificationStore();
  const { data, error, isLoading, status } = useFetch<NotificationApiResponse>(
    "/notifications",
    "",
    "notifications",
    false
  );

  useEffect(() => {
    if (data?.data && data?.success) {
      if (notifications.length === 0) {
        // First-time load: set notifications
        setNotifications(
          data.data.map((notification) => ({ ...notification, isNew: true }))
        );
      } else {
        // Add new notifications without overriding existing ones
        const existingIds = new Set(notifications.map((n) => n.id));
        const newNotifications = data.data.filter(
          (n) => !existingIds.has(n.id)
        );

        if (newNotifications.length > 0) {
          setNotifications([
            ...notifications,
            ...newNotifications.map((notification) => ({
              ...notification,
              isNew: true,
            })),
          ]);
        }
      }
    }
  }, [data, setNotifications, notifications]);

  return {
    notifications,
    error,
    isLoading,
    status,
  };
};
