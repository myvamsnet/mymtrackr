"use client";
import { CustomeTable } from "@/app/(protectedRoute)/_components/customeTable";
import { TableCell, TableHead, TableRow } from "@/components/ui/table";
import Image from "next/image";
import React from "react";
import { dateFormatter } from "@/lib/helper/dateFormatter";
import ListShimmer from "@/components/ListShimmer";
import { checkDataStatus } from "@/lib/helper/checkDataStatus";
import { ITableBody } from "@/types/newTable.types";
import AppTabEmptyState from "@/app/(protectedRoute)/_components/customeTable/EmptyTableState";
import { Pagination } from "@/app/(protectedRouteAdmin)/__components/pagination";
import useAdminUser from "@/app/(protectedRouteAdmin)/admin/users/hooks/useAdminUser";

export const ReferalTable = () => {
  const { data, isLoading, status, isError } = useAdminUser();
  const users = data?.data.users;
  const { checkEmptyData, dataNotEmpty } = checkDataStatus({
    isLoading,
    isError,
    results: users as ITableBody[],
  });

  // Handling error case
  if (isError) {
    return <div className="error-message">Failed to load data</div>;
  }
  return (
    <section className="p-6 bg-off-white-300 w-full">
      <>
        <CustomeTable
          tableHeader={
            <>
              <TableHead className="tabeHeadClass">Name</TableHead>
              <TableHead className="tabeHeadClass">Email</TableHead>
              <TableHead className="tabeHeadClass">Phone No</TableHead>
              <TableHead className="tabeHeadClass">Date joined</TableHead>
              <TableHead className="tabeHeadClass">Last Active</TableHead>
              <TableHead className="tabeHeadClass">Status</TableHead>
            </>
          }
        >
          {status === "pending" && (
            <TableRow>
              <TableCell align="center" colSpan={10} rowSpan={7}>
                <ListShimmer length={16} />
              </TableCell>
            </TableRow>
          )}
          {users &&
            users?.length > 0 &&
            users?.map((list, i) => (
              <TableRow key={`${list?.referee?.id}-${i}`} className="p-4">
                <TableCell className="flex items-center gap-3">
                  {list?.referee?.imageUrl && (
                    <Image
                      src={list?.referee?.imageUrl}
                      alt={list?.referee?.fullName}
                      width={40}
                      height={40}
                      className="rounded-full h-10 w-10 object-center"
                    />
                  )}

                  <span className="tabeCellClass">
                    {list?.referee?.fullName}
                  </span>
                </TableCell>
                <TableCell className="tabeCellClass">
                  {list?.referee?.email}
                </TableCell>
                <TableCell className="tabeCellClass">
                  {list?.referee?.phoneNumber || "--"}
                </TableCell>

                <TableCell className="tabeCellClass">
                  {dateFormatter(list?.referee?.created_at, "long")}
                </TableCell>
                <TableCell className="tabeCellClass">
                  {dateFormatter(list?.referee?.last_active, "long") || "--"}
                </TableCell>
                <TableCell
                  className={`tabeCellClass capitalize ${
                    list?.status === "active"
                      ? "!text-[#1D9213]"
                      : list?.status === "pending"
                      ? "!text-[#FF6E01]"
                      : "!text-danger"
                  }`}
                >
                  {list?.status}
                </TableCell>
              </TableRow>
            ))}

          {checkEmptyData && (
            <AppTabEmptyState
              title={"No user Found"}
              message={""}
              colSpan={10}
              rowSpan={7}
            />
          )}
        </CustomeTable>
        {dataNotEmpty && (
          <section className="py-10">
            <Pagination totalPages={data?.data?.totalPages as number} />
          </section>
        )}
      </>
    </section>
  );
};
