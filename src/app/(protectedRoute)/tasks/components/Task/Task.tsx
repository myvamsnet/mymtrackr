import { TasksData } from "@/types/tasks";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { EditIcon } from "lucide-react";
import Link from "next/link";

export const Task = ({ id, title }: TasksData) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="py-4 flex items-center justify-between gap-3 border-b border-[#F4F5F7]"
    >
      <div className="flex items-center gap-2">
        <input type="checkbox" className="checkbox" />
        {title}
      </div>
      <Link
        href={`/tasks/edit/${id}`}
        className="size-8 bg-[#F4F8FF] rounded-full flex justify-center items-center"
      >
        <EditIcon />
      </Link>
    </div>
  );
};
