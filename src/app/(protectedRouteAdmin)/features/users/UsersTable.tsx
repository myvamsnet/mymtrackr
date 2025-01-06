"use client";
import { CustomeTable } from "@/app/(protectedRoute)/_components/customeTable";
import { CustomPaginate } from "@/components/CustomPaginate";
import { TableCell, TableHead, TableRow } from "@/components/ui/table";
import { users } from "@/constant/admin/users";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import UserTableDropdownAction from "./UserTableDropdownAction";

export const UsersTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const paginatedUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <section className="p-6 bg-off-white-300 w-full">
      <CustomeTable
        tableHeader={
          <>
            <TableHead className="tabeHeadClass ">Name</TableHead>
            <TableHead className="tabeHeadClass ">Email</TableHead>
            <TableHead className="tabeHeadClass ">Phone No</TableHead>
            <TableHead className="tabeHeadClass ">Referee</TableHead>
            <TableHead className="tabeHeadClass ">Date joined</TableHead>
            <TableHead className="tabeHeadClass ">Last Active</TableHead>
            <TableHead className="tabeHeadClass ">Status</TableHead>
            <TableHead className="tabeHeadClass text-right min-w-[100px]">
              Action
            </TableHead>
          </>
        }
      >
        {paginatedUsers?.map((list, i) => (
          <TableRow key={`${list?.id}-${i}`} className="p-4">
            <TableCell className="flex items-center gap-3">
              <Image
                src={"/images/user-profile.svg"}
                alt={list?.name}
                width={40}
                height={40}
              />
              <span className="tabeCellClass">{list?.name}</span>
            </TableCell>
            <TableCell className="tabeCellClass">{list?.email}</TableCell>
            <TableCell className="tabeCellClass">{list?.phone}</TableCell>
            <TableCell className="tabeCellClass">{list?.referee}</TableCell>
            <TableCell className="tabeCellClass">{list?.dateJoined}</TableCell>
            <TableCell className="tabeCellClass">{list?.lastActive}</TableCell>
            <TableCell
              className={`tabeCellClass ${
                list?.status === "Active"
                  ? "!text-[#1D9213]"
                  : "!text-[#FF6E01]"
              }`}
            >
              {list?.status}
            </TableCell>
            <TableCell className="text-right flex justify-end items-center">
              <UserTableDropdownAction data={list} />
            </TableCell>
          </TableRow>
        ))}
      </CustomeTable>

      <div className="flex items-center justify-between py-4">
        <CustomPaginate
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};
