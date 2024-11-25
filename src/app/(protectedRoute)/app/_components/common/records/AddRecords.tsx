import { TaskIcon } from "@/assets/icons/TaskIcon";
import { addRecords } from "@/constant/records";
import { handleTypeColor } from "@/lib/helper/handleTypeColor";
import { Type } from "@/types/records";
import Link from "next/link";

export const AddRecords = () => {
  return (
    <section className="fixed bg-black/5 h-screen inset-0  z-40 w-full">
      <section className="absolute md:bottom-[10%] bottom-[13%] p-4 w-full">
        <div className="p-4 bg-off-white-400 w-full  drop-shadow rounded-2xl box-shadow grid gap-2">
          <h4 className="m-4    text-center text-xs font-medium text-dark-100">
            Add New
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {addRecords.map((record, index) => (
              <Link
                href={record.path}
                key={`${record.name}-${index}`}
                className={`flex w-full p-4 justify-center text-sm text-center items-center gap-2  rounded-md bg-white cursor-pointer  font-medium border border-[#E3E4E7] ${handleTypeColor(
                  record?.type as Type
                )}`}
              >
                <span className="bg-[#F1F5FD] h-8 w-8 rounded-full flex justify-center items-center">
                  {record.icon && <record.icon color={record.color} />}
                </span>
                {record.name}
              </Link>
            ))}
          </div>
          <Link
            href={"/app/todo"}
            className={`flex w-full p-4 justify-center text-sm text-center items-center gap-2  rounded-md bg-white cursor-pointer  font-medium border border-[#E3E4E7] `}
          >
            <span className="bg-[#F1F5FD] h-8 w-8 rounded-full flex justify-center items-center">
              <TaskIcon />
            </span>
            Todo
          </Link>
        </div>
      </section>
    </section>
  );
};
