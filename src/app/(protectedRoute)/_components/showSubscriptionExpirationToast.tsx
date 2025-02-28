import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { AlertCircle, X } from "lucide-react";

export const showSubscriptionExpirationToast = (daysRemaining: number) => {
  const message =
    daysRemaining === 1
      ? "Your subscription expires tomorrow!"
      : `Your subscription expires in ${daysRemaining} days!`;

  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <AlertCircle className="h-6 w-6 text-orange-500" />
            </div>
            <div className="ml-3 flex-1 space-y-2">
              <p className="text-sm font-medium text-gray-900">
                Subscription Expiring
              </p>
              <p className=" text-sm text-gray-500">{message}</p>
            </div>
          </div>
          <div className="flex  border-gray-200 justify-end items-center">
            <button onClick={() => toast.dismiss(t.id)}>
              <X height={18} width={18} className="text-dark-200" />
            </button>
          </div>
        </div>
      </div>
    ),
    { duration: 10000, position: "top-right", id: String(daysRemaining) }
  );
};

export const ToastContainer: React.FC = () => {
  return <Toaster position="top-right" />;
};
