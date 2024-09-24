"use client";
import { useSearch } from "@/hooks/useSearch";
import { Search } from "lucide-react";

export const CustomSearch = () => {
  const { handleChange, query } = useSearch();
  return (
    <div className="w-full border border-[#D6D7DB] rounded-lg flex h-[45px]  items-center py-3 px-4 gap-2 bg-off-white-300">
      <Search color="#3E3E4C" className=" opacity-50" />
      <input
        type="text"
        onChange={handleChange}
        value={query}
        placeholder="Search..."
        className="w-full border-none bg-transparent focus:outline-none  text-sm font-normal text-[#7A7A84]"
      />
    </div>
  );
};
