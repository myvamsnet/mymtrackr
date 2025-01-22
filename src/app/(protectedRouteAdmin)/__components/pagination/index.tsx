import { FC, useState } from "react";
import { IconButton } from "@material-tailwind/react";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import { useSearchParams } from "next/navigation";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export const Pagination: FC<IPagination> = ({ totalPages }) => {
  const searchParams = useSearchParams();
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  const currentPage = Number(searchParams.get("page")) || 1;
  const [active, setActive] = useState(currentPage);
  const { updateQueryParams } = useUpdateQuery();

  const getItemProps = (index: number): any => ({
    variant: active === index ? "filled" : "text",

    color: "blue",
    onClick: () => {
      updateQueryParams({ page: index.toString() });
      setActive(index);
    },
  });

  const next = () => {
    if (active === totalPages) return;
    const newActive = active + 1;
    updateQueryParams({ page: newActive.toString() });
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    const newActive = active - 1;
    updateQueryParams({ page: newActive.toString() });
    setActive(newActive);
  };

  return (
    <div className="flex items-center gap-4 justify-between">
      <button
        className={`flex items-center gap-2 border py-2 px-4 rounded-lg ${
          active === 1
            ? "text-[#D9DADB] border-[#D9DADB]"
            : "text-primary border-primary"
        }`}
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </button>
      <div className="flex items-center gap-2">
        {pageNumbers.map((number) => (
          <IconButton {...getItemProps(number)} key={number}>
            {number}
          </IconButton>
        ))}
      </div>
      <button
        className={`flex items-center gap-2 border py-2 px-4 rounded-lg ${
          active === totalPages
            ? "text-[#D9DADB] border-[#D9DADB]"
            : "text-primary border-primary"
        }`}
        onClick={next}
        disabled={active === totalPages}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </button>
    </div>
  );
};

interface IPagination {
  totalPages: number;
  perPage?: number;
}
