"use client";
import { CustomDialog } from "@/components/CustomDialog";
import { addRecords } from "@/constant/records";
import Link from "next/link";

export const AddRecords = ({ isOpen, toggle }: Props) => {
  return (
    <CustomDialog isOpen={isOpen} toggle={toggle} subTitle="">
      <h4 className="m-3 text-center text-xs font-medium text-dark-100">
        Add New
      </h4>
      <div className="grid grid-cols-2 gap-2">
        {addRecords.map((record, index) => (
          <Link
            href={record.path}
            key={`${record.name}-${index}`}
            className="flex w-full p-4 justify-center text-sm text-center items-center gap-2 rounded-md bg-white cursor-pointer font-medium border border-[#E3E4E7]"
            style={{
              color: record.color,
            }}
          >
            <span className="bg-[#F1F5FD] h-8 w-8 rounded-full flex justify-center items-center">
              {record.icon && <record.icon color={record.color} />}
            </span>
            {record.name}
          </Link>
        ))}
      </div>
    </CustomDialog>
  );
};

interface Props {
  toggle: (open: boolean) => void;
  isOpen: boolean;
}
