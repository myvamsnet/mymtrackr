import Link from "next/link";
import React from "react";

const AddNewLayout = ({ path }: Props) => {
  return (
    <div className="absolute right-6 bottom-0 z-30">
      <Link
        href={path}
        className="text-xs font-semibold text-off-white-300 font-inter   p-4 rounded-2xl gap-2 bg-primary  flex justify-center items-center my-4 btn-drop-shadow "
      >
        + Add New
      </Link>
    </div>
  );
};

export default AddNewLayout;
interface Props {
  path: string;
}
