import { TasksData } from "@/types/tasks";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react"; // Added drag icon
import { dateFormatter } from "@/lib/helper/dateFormatter";
import { DeleteTaskModal } from "./DeleteTaskModal";
import useDeleteTask from "../hooks/useDeleteTask";
import TaskEditForm from "./TaskEditForm";

export const Task = ({ task, handleChangedStatus }: Props) => {
  const { id, status, title } = task;
  const { handleDelete, deleteLoader, open, toggle } = useDeleteTask();

  // DnD Sorting
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="py-4 flex items-center justify-between gap-3 border-b border-[#F4F5F7]"
    >
      {/* Task Checkbox & Info */}
      <label
        className="flex space-x-2 text-sm font-medium leading-none flex-1 cursor-pointer"
        htmlFor={task.id.toString()}
      >
        <input
          type="checkbox"
          id={task.id.toString()}
          className="text-white h-5 w-5 rounded-2xl accent-primary outline-none border-2 border-[#D6D7DB]"
          checked={task.status}
          name={task.title}
          onChange={(e) => {
            e.stopPropagation(); // Prevent drag event from triggering
            handleChangedStatus(e, task);
          }}
        />
        <div>
          <h4
            className={`font-medium text-sm text-dark ${
              task.status ? "line-through text-dark-100" : ""
            }`}
          >
            {task.title}
          </h4>
          <small className="text-dark-200 text-sm">
            {dateFormatter(task.taskDate)}
          </small>
        </div>
      </label>

      {/* Edit or Delete */}
      {status ? (
        <DeleteTaskModal
          handleDelete={() => handleDelete(task.id)}
          deleteLoader={deleteLoader}
          isOpen={open}
          toogle={(open) => toggle(open)}
        />
      ) : (
        <TaskEditForm id={task.id} />
      )}
      {/* Drag Icon (Only this is draggable) */}
      {!task.status && (
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing p-2"
        >
          <GripVertical size={18} />
        </div>
      )}
    </div>
  );
};

interface Props {
  task: TasksData;
  handleChangedStatus: (
    e: React.ChangeEvent<HTMLInputElement>,
    task: {
      id: string;
      status: boolean;
    }
  ) => Promise<void>;
}
