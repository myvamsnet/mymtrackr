import { ViewBankDetails } from "@/app/(protectedRoute)/referral-history/components/ViewBankDetails";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "@/types/auth";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";

import React from "react";

const UserTableDropdownAction = ({ user }: Props) => {
  const accountDetails = [
    { label: "Bank Name", value: user?.bankName },
    { label: "Account Name", value: user?.accountName },
    { label: "Account Number", value: user?.accountNumber },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisVertical />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white z-50">
        <DropdownMenuItem>
          <Link href={`/admin/users/${user?.id}`}>View Referees</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>View Account Details</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserTableDropdownAction;
interface Props {
  user: User;
}
