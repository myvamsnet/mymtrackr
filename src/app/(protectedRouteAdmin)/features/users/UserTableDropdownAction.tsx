import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";

import React from "react";

const UserTableDropdownAction = ({ children }: Props) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <EllipsisVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white z-50">
          {children}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserTableDropdownAction;
interface Props {
  children: React.ReactNode;
}
