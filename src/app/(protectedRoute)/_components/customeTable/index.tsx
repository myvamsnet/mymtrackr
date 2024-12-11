import { Table, TableBody, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";

export const CustomeTable = ({ children, tableHeader }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-[#F4F8FF] text-[6.75px] md:text-xs text-dark font-bold leading-[8.17px]">
          {tableHeader}
        </TableRow>
      </TableHeader>
      <TableBody>{children}</TableBody>
    </Table>
  );
};
interface Props {
  children: React.ReactNode;
  tableHeader: React.ReactNode;
}
