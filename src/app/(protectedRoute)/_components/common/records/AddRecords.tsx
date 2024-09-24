import { addRecords } from "@/constant/records";
import { handleTypeColor } from "@/lib/helper/handleTypeColor";
import { Type } from "@/types/records";
import { useRouter } from "next/navigation";

export const AddRecords = () => {
  const router = useRouter();

  const handleClick = (path: string, type: string) => {
    router.push(path);
  };
  return (
    <div className="fixed  bg-off-white-400  md:bottom-[11%] bottom-[14%] md:left-[45%] left-[30%] z-30 w-[150px] h-[216px] drop-shadow rounded-2xl p-4">
      {addRecords.map((record, index) => (
        <span
          onClick={() => handleClick(record.path, record.type)}
          key={`${record.name}-${index}`}
          className={`flex w-full py-3 justify-center text-sm text-center items-center gap-2 md:p-2 rounded-md bg-white cursor-pointer  font-medium ${handleTypeColor(
            record?.type as Type
          )}`}
        >
          {record.name}
        </span>
      ))}
    </div>
  );
};
