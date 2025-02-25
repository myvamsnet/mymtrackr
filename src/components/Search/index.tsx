"use client";
import { useSearch } from "@/hooks/useSearch";
import { Search } from "lucide-react";

export const CustomSearch = ({
  className = "w-full",
  placeholder = "search...",
}: Props) => {
  const { handleChange, query } = useSearch();
  return (
    <div
      className={`${className} border border-[#D6D7DB] rounded-lg flex h-[45px]  items-center py-3 px-4 gap-2 bg-off-white-300`}
    >
      <Search color="#3E3E4C" className=" opacity-50" />
      <input
        type="text"
        onChange={handleChange}
        value={query}
        placeholder={placeholder}
        className="w-full border-none bg-transparent focus:outline-none  text-sm font-normal text-[#7A7A84]"
      />
    </div>
  );
};
interface Props {
  className?: string;
  placeholder?: string;
}
