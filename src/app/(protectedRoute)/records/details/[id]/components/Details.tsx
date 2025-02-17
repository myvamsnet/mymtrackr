import { Icons } from "@/assets/icons";
import { checkImageFormat } from "@/lib/helper/checkImageFormat";
import { currencyFormatter } from "@/lib/helper/currencyFormatter";
import { handleTypeColor, Type } from "@/lib/helper/handleTypeColor";
import { Records } from "@/types/records";
import dayjs from "dayjs";
import Image from "next/image";

export const Details = ({ records }: DetailsProps) => {
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

  const summaryDetail = [
    {
      [records?.type === "income" || records?.type === "expense"
        ? "Type"
        : "Name"]: records?.name,
    },
    {
      date: dayjs(records?.created_at).format("MMMM D, YYYY h:mm A"),
    },
    {
      amount: currencyFormatter(records?.amount),
    },
  ];

  return (
    <main className="grid gap-4 p-4 ">
      <section className="bg-off-white-300 p-4 rounded-xl grid gap-2">
        <div className="flex items-center gap-2">
          <div className="bg-[#F1F5FD] h-8 w-8 rounded-full flex justify-center items-center">
            {handleType(records?.type as Type)}
          </div>
          <span
            className={`${handleTypeColor(
              records?.type as Type
            )} text-sm font-medium capitalize`}
          >
            {records?.type}
          </span>
        </div>
        <h2 className="text-2xl font-semibold text-dark mt-1">
          {currencyFormatter(records?.amount)}
        </h2>
        <small className="font-medium text-[#7A7A84] text-xs">
          {dayjs(records?.created_at).format("MMMM D, YYYY h:mm A")}
        </small>
      </section>
      <section className="bg-off-white-300 p-4 rounded-xl grid gap-2">
        <h2 className="font-medium text-sm text-dark capitalize">
          {`${records?.type} Details`}
        </h2>
        <div className="grid gap-2 mt-4">
          {summaryDetail?.map((detail, i) => (
            <div
              className="flex justify-between items-center mt-2 border-b border-[#F4F5F7] pb-2"
              key={`${detail.date}-${i}`}
            >
              <p className="text-sm text-dark-200 capitalize">
                {Object.keys(detail)[0]}
              </p>
              <p className="text-sm text-dark font-normal">
                {Object.values(detail)[0]}
              </p>
            </div>
          ))}
        </div>
      </section>
      {records?.imageUrl && checkImageFormat(records?.imageUrl) && (
        <section className="bg-off-white-300 p-4 rounded-xl">
          <h2>Uploaded File</h2>

          <div className="my-3">
            <Image
              src={records?.imageUrl}
              height={160}
              width={160}
              alt="uploaded"
              className="  object-cover mt-2 h-40 lg:w-40 w-full rounded-lg"
            />
          </div>
        </section>
      )}
      {records?.note && (
        <section className="bg-off-white-300 p-4 rounded-xl">
          <h2 className="text-sm font-medium text-dark">Note</h2>
          <p className="w-full font-medium text-sm text-[#7A7A84] leading-7 my-2">
            {records?.note}
          </p>
        </section>
      )}
    </main>
  );
};
interface DetailsProps {
  records: Records;
}
