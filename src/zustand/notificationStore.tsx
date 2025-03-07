import { create } from "zustand";
import { persist } from "zustand/middleware";
import { produce } from "immer";
import { NotificationData } from "@/types/notifications";

interface Notification extends NotificationData {
  isNew: boolean;
}

interface NotificationStore {
  notifications: Notification[];
  newNotificationsCount: number;
  markAllAsRead: () => void;
  markNotificationAsRead: (id: string) => void;
  deleteNotification: (id: string) => void;
  setNotifications: (notifications: Notification[]) => void;
  addNotifications: (notifications: Notification[]) => void;
}

export const useNotificationStore = create<NotificationStore>()(
  persist(
    (set, get) => ({
      notifications: [],
      get newNotificationsCount() {
        return get().notifications.filter((n) => n.isNew).length;
      },
      markAllAsRead: () => {
        set(
          produce((state: NotificationStore) => {
            state.notifications.forEach((n) => (n.isNew = false));
          })
        );
      },
      markNotificationAsRead: (id: string) => {
        set(
          produce((state: NotificationStore) => {
            const notification = state.notifications.find((n) => n.id === id);
            if (notification) {
              notification.isNew = false;
            }
          })
        );
      },
      deleteNotification: (id: string) => {
        set(
          produce((state: NotificationStore) => {
            state.notifications = state.notifications.filter(
              (n) => n.id !== id
            );
          })
        );
      },
      setNotifications: (notifications: Notification[]) => {
        set(
          produce((state: NotificationStore) => {
            state.notifications = notifications.map((n) => ({
              ...n,
              isNew: false, // Mark as old when setting notifications initially
            }));
          })
        );
      },
      addNotifications: (notifications: Notification[]) => {
        set(
          produce((state: NotificationStore) => {
            const existingIds = new Set(state.notifications.map((n) => n.id));
            const newNotifications = notifications
              .filter((n) => !existingIds.has(n.id))
              .map((n) => ({ ...n, isNew: true })); // Mark new notifications as `isNew: true`

            if (newNotifications.length > 0) {
              state.notifications.push(...newNotifications);
            }
          })
        );
      },
    }),
    {
      name: "notification-storage", // Persistent storage key
    }
  )
);
