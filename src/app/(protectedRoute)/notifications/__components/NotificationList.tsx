"use client";
import { NoNotifications } from "./NoNotifications";

interface Notification {
  id: string;
  message: string;
  timestamp: string;
}

interface NotificationListProps {
  notifications: Notification[];
}

export function NotificationList({ notifications }: NotificationListProps) {
  if (notifications.length === 0) {
    return <NoNotifications />;
  }

  return (
    <ul className="divide-y divide-gray-200 h-screen overflow-hidden">
      {notifications.map((notification) => (
        <li key={notification.id} className="py-4">
          <div className="flex space-x-3">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium text-gray-900">
                {notification.message}
              </p>
              <p className="text-sm text-gray-500">{notification.timestamp}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
