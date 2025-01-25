import { Bell } from "lucide-react";

export function NoNotifications() {
  return (
    <div className="flex flex-col items-center bg-white py-40 px-5">
      <Bell className="h-16 w-16 text-gray-400" />
      <h3 className="text-lg font-medium text-gray-900">
        No new notifications
      </h3>
      <p className="text-gray-500 text-center max-w-sm">
        When you have new notifications, they&apos;ll appear here. Stay tuned!
      </p>
    </div>
  );
}
