"use client";

import { CustomSearch } from "@/components/Search";
import { Filter } from "lucide-react";

const SearchAndFilterComponent = ({
  showFilter = false,
  showSearch = false,
}: Props) => {
  return (
    <section
      className={`md:p-6 p-4 border-b border-[#EFF2F7] bg-off-white-300 my-10 flex gap-5 ${
        showSearch ? "justify-between" : " justify-end"
      }  items-center rounded-sm`}
    >
      {showSearch && (
        <div className="md:w-[394px] w-full">
          <CustomSearch placeholder="Search name" className=" w-full" />
        </div>
      )}
      {showFilter && (
        <div className="py-3 px-5 border border-[#D9DADB] rounded-md gap-3 flex justify-between items-center w-[132px] cursor-pointer">
          Filter
          <Filter color="#40444C" height={18} width={18} />
        </div>
      )}
    </section>
  );
};

export default SearchAndFilterComponent;
interface Props {
  showSearch: boolean;
  showFilter: boolean;
}
