"use client";
import { CustomeTable } from "@/app/(protectedRoute)/_components/customeTable";
import { TableCell, TableHead, TableRow } from "@/components/ui/table";
import Image from "next/image";
import React from "react";
import UserTableDropdownAction from "./UserTableDropdownAction";
import { UserAdminApiresponse } from "@/types/admin/users";
import { dateFormatter } from "@/lib/helper/dateFormatter";
import ListShimmer from "@/components/ListShimmer";
import { Pagination } from "../../__components/pagination";
import { checkDataStatus } from "@/lib/helper/checkDataStatus";
import { ITableBody } from "@/types/newTable.types";
import AppTabEmptyState from "@/app/(protectedRoute)/_components/customeTable/EmptyTableState";
import useAdminUser from "../../admin/users/hooks/useAdminUser";
import { useFetch } from "@/hooks/useFetch";

export const UsersTable = () => {
  const { data, isLoading, error, status, isError } =
    useFetch<UserAdminApiresponse>("admin/users", "", "admin-users");

  const users = data?.data.users;
  const { checkEmptyData, dataNotEmpty } = checkDataStatus({
    isLoading,
    isError,
    results: users as ITableBody[],
  });
  // Handling error case
  if (error) {
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
              <TableHead className="tabeHeadClass">Referee</TableHead>
              <TableHead className="tabeHeadClass">Date joined</TableHead>
              <TableHead className="tabeHeadClass">Last Active</TableHead>
              <TableHead className="tabeHeadClass">Status</TableHead>
              <TableHead className="tabeHeadClass text-right min-w-[100px]">
                Action
              </TableHead>
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
          {status === "success" &&
            users &&
            users?.length > 0 &&
            users?.map((list, i) => (
              <TableRow key={`${list?.id}-${i}`} className="p-4">
                <TableCell className="flex items-center gap-3">
                  {list?.imageUrl && (
                    <Image
                      src={list?.imageUrl}
                      alt={list?.fullName}
                      width={40}
                      height={40}
                      className="rounded-full h-10 w-10 object-center"
                    />
                  )}

                  <span className="tabeCellClass">{list?.fullName}</span>
                </TableCell>
                <TableCell className="tabeCellClass">{list?.email}</TableCell>
                <TableCell className="tabeCellClass">
                  {list?.phoneNumber || "--"}
                </TableCell>
                <TableCell className="tabeCellClass">
                  {list.referrals?.length}
                </TableCell>
                <TableCell className="tabeCellClass">
                  {dateFormatter(list?.created_at, "long")}
                </TableCell>
                <TableCell className="tabeCellClass">
                  {dateFormatter(list?.last_active, "long") || "--"}
                </TableCell>
                <TableCell
                  className={`tabeCellClass capitalize ${
                    list?.subscriptions?.status === "active"
                      ? "!text-[#1D9213]"
                      : list?.subscriptions?.status === "trial"
                      ? "!text-[#FF6E01]"
                      : "!text-danger"
                  }`}
                >
                  {list?.subscriptions?.status}
                </TableCell>
                <TableCell className="text-right flex justify-end items-center">
                  <UserTableDropdownAction data={list?.id} />
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
