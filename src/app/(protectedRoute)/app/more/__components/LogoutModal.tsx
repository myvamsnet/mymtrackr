"use client";
import { logoutAction } from "@/app/actions/logoutAction";
import { LogoutIcon } from "@/assets/icons/LogoutIcon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export function LogoutModal() {
  const [isLoading, setIsloading] = useState(false);
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    setIsloading(true);
    try {
      event.preventDefault();
      await logoutAction();
    } catch (error) {
      console.error(error);
    } finally {
      setIsloading(false);
    }
  };
  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="flex border-b-2 border-[#F4F5F7] gap-2 py-6 px-2 items-center bg-off-white-300"
      >
        <button
          type="submit"
          className="font-inter px-2 py-4 flex items-center gap-2  font-normal text-base/5 text-red-500"
        >
          <LogoutIcon />
          {"Logout"}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="grid gap-2">
          <DialogTitle>Logout</DialogTitle>
          <DialogDescription className=" text-red-400">
            Are you sure you want to logout?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <form onSubmit={handleSubmit}>
            <button
              type="submit"
              className="font-inter font-normal text-base/5 text-primary"
            >
              {isLoading ? "Loading..." : "Confirm"}
            </button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
