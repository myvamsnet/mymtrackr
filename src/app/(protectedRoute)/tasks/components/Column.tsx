import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { TasksData } from "@/types/tasks";
import { Task } from "./Task";

export const Column = ({ tasks, handleChangedStatus }: Props) => {
  return (
    <div className="py-4 bg-[#FBFCFF]">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks?.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleChangedStatus={handleChangedStatus}
          />
        ))}
      </SortableContext>
    </div>
  );
};
interface Props {
  tasks: TasksData[];
  id: string;
  handleChangedStatus: (
    e: React.ChangeEvent<HTMLInputElement>,
    task: {
      id: string;
      status: boolean;
    }
  ) => Promise<void>;
}
