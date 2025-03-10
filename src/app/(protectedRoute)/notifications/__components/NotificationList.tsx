"use client";
import { NoNotifications } from "./NoNotifications";
import { useGetNotifications } from "@/hooks/useGetNotifications";
import { useNotificationStore } from "@/zustand/notificationStore";
import { X } from "lucide-react";
import ReactMarkdown from "react-markdown";

export function NotificationList() {
  const { status } = useGetNotifications();
  const { notifications, markAllAsRead } = useNotificationStore();
  if (status === "pending") {
    return (
      <section>
        <ul className="bg-white overflow-hidden p-6 space-y-4 shadow-xl rounded-lg ">
          {[...Array(5)].map((_, index) => (
            <li
              key={index}
              className="py-4 border-b border-gray-100 flex justify-between animate-pulse"
            >
              <div className="space-y-4 w-full">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              </div>
              <div>
                <div className="h-4 w-10 bg-gray-200 rounded"></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (notifications?.length === 0) {
    return <NoNotifications />;
  }

  return (
    <section>
      {notifications?.length > 0 && (
        <div className="flex justify-end items-center py-4">
          <button
            className="text-dark-200 font-semibold border border-dark-200 rounded-lg p-3"
            onClick={markAllAsRead}
          >
            Mark All as read
          </button>
        </div>
      )}

      <ul className="bg-white overflow-hidden p-4 space-y-4 shadow-xl rounded-lg">
        {notifications.length > 0 &&
          notifications?.map((notification) => (
            <li
              key={notification.id}
              className="p-4 border-b border-gray-100 flex justify-between hover:bg-gray-50"
            >
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-900">
                  {notification.title}
                </h4>
                <p className="text-dark-400">
                  <ReactMarkdown>{notification.body}</ReactMarkdown>
                </p>
              </div>
              <div>
                {notification.isNew ? (
                  <div>
                    <span className="bg-primary/50 text-primary py-1 px-2 rounded-md text-xs">
                      {"New"}
                    </span>
                    <X />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}
