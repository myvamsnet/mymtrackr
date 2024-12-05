import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/Modal";
import { useGetUser } from "@/hooks/useGetUser";
import { useLogout } from "@/hooks/useLogout";
import { useSubscription } from "@/hooks/useSubscription";
import React, { useEffect, useState } from "react";

export const SubscriptionExpiredModal = () => {
  const { handleLogout, isPending: logoutLoader } = useLogout();
  const { handleClickPayment, isPending } = useSubscription();
  const [open, setOpen] = useState(false);
  const { user } = useGetUser();

  useEffect(() => {
    if (user?.subscriptions?.status === "expired") {
      setOpen(true);
    }
  }, [user?.subscriptions?.status]);
  return (
    <Modal
      isOpen={open}
      onClose={() => {
        window.location.reload();
      }}
    >
      <div className="flex justify-center items-center flex-col gap-3">
        <h2 className="md:text-2xl text-xl text-dark font-medium text-center">
          Your Subscription has expired
        </h2>
        <p className="text-dark-200 text-base text-center ">
          To keep using{" "}
          <span className="text-primary font-semibold">Mtrackr</span> without
          any interruption kindly Click on the Subscription Button
        </p>

        <div>
          <Button
            disabled={isPending}
            onClick={handleClickPayment}
          >
            {isPending ? "Loading..." : " Subscribe"}
          </Button>
        </div>
      </div>
      <div className="flex justify-end items-center text-sm font-semibold text-dark-100 hover:text-primary">
        <button onClick={handleLogout}>
          {logoutLoader ? "Loading..." : "Logout"}
        </button>
      </div>
    </Modal>
  );
};
