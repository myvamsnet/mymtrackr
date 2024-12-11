import { Icons } from "@/assets/icons";
import Link from "next/link";

export const HelpHeader = () => {
  return (
    <div className="flex justify-between items-center py-4 px-3  bg-off-white sticky top-0 z-40">
      <div>
        <p className="font-semibold text-base/4 font-inter">Help & Support</p>
      </div>
      <Link
        href={"https://wa.me/2348052763968"}
        target="_blank"
      >
        <Icons.WhatsAppIcon />
      </Link>
    </div>
  );
};
