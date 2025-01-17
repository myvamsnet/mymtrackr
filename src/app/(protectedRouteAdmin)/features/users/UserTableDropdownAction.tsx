import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";

import React from "react";

const UserTableDropdownAction = ({ data }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisVertical />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white z-50">
        <DropdownMenuItem>
          <Link href={`/admin/users/${data}`}>View Referees</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserTableDropdownAction;
interface Props {
  data: string;
}
