import { Icons } from "@/assets/icons";
import { currencyFormatter } from "@/lib/helper/currencyFormatter";
import { handleTypeColor, Type } from "@/lib/helper/handleTypeColor";
import { Records } from "@/types/records";
import dayjs from "dayjs";
import Link from "next/link";
import { FC } from "react";

export const RecordItem: FC<TransactionItemPros> = ({ record }) => {
  const handleType = (type: Type) => {
    switch (type) {
      case "income":
        return <Icons.ArrowDownIcon />;
      case "expense":
        return <Icons.ArrowUpIcon />;
      case "debtor":
        return <Icons.ArrowRightIcon />;

      case "payable":
        return <Icons.ArrowLeftIcon />;

      default:
        return <Icons.ArrowDownIcon />;
    }
  };
  return (
    <Link
      href={`/records/details/${record?.id}`}
      className="py-4 flex justify-between items-center px-4"
    >
      <div
        className="flex items-center gap-2 relative
       z-20"
      >
        <div className=" bg-[#F1F5FD] h-8 w-8 rounded-full flex justify-center items-center">
          {record?.type && handleType(record?.type as Type)}
        </div>
        <div className=" space-y-1">
          <p className="text-sm font-medium text-dark capitalize">
            {record?.name}
          </p>
          <span className="text-xs font-normal text-dark-200">
            {dayjs(record?.updated_at).format("MMM D, YYYY h:mm A")}
          </span>
        </div>
      </div>
      <div>
        <p className={`${handleTypeColor(record?.type)}  text-sm font-normal`}>
          {currencyFormatter(Number(record?.amount))}
        </p>
      </div>
    </Link>
  );
};
export interface TransactionItemPros {
  record: Records;
}
