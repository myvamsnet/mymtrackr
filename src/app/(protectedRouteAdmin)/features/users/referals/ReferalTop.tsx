"use client";
import { CustomSelect } from "@/components/CustomSelect";
import { Button } from "@/components/ui/button";
import { useRedirect } from "@/hooks/useRedirect";
import { useYearFilter } from "@/hooks/useYearFilter";
import { User } from "@/types/auth";
import { ArrowLeft } from "lucide-react";
import React from "react";

export const ReferalTop = ({ user }: Props) => {
  const { filter, onChangeYear, yearOptions, monthOptions } = useYearFilter();
  const redirect = useRedirect();
  return (
    <>
      <div className="mb-4">
        <Button
          variant={"outline"}
          className="py-2 px-4 flex items-center gap-2"
          onClick={() => redirect(`/admin/users`)}
        >
          <ArrowLeft className="hover:!text-white" /> Back
        </Button>
      </div>
      <header className="bg-white py-4 px-6 border-b border-dark-500 rounded-md flex justify-between items-center">
        <h4 className="text-xl font-semibold text-dark">
          {user?.fullName}&apos;s Referrals
        </h4>
        <div className="grid lg:grid-cols-2 gap-4 grid-cols-1 w-[392px]">
          <CustomSelect
            dateFilter={filter.year}
            onChangeDate={onChangeYear}
            options={yearOptions}
            name={"year"}
          />
          <CustomSelect
            dateFilter={filter.month}
            onChangeDate={onChangeYear}
            options={monthOptions}
            name={"month"}
          />
        </div>
      </header>
    </>
  );
};
interface Props {
  user: User;
}
