import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

interface IAppTabEmptyStateProps {
  Illustration?: React.ReactNode;
  title?: string;
  message?: string;
  colSpan?: number;
  rowSpan?: number;
}

const AppTabEmptyState = ({
  Illustration = "",
  title,
  message,
  rowSpan,
  colSpan,
}: IAppTabEmptyStateProps) => {
  return (
    <TableRow style={{ height: 500 }}>
      <TableCell align="center" colSpan={colSpan} rowSpan={rowSpan}>
        {Illustration}
        <h4 className="mt-4 text-center text-xl font-bold capitalize">
          {title}
        </h4>
        <p className="mt-3 text-center text-dark">{message}</p>
      </TableCell>
    </TableRow>
  );
};

export default AppTabEmptyState;
