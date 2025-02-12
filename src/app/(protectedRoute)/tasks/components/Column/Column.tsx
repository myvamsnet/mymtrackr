import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { Task } from "../Task/Task";
import { TasksData } from "@/types/tasks";

export const Column = ({ tasks }: Props) => {
  return (
    <div className="py-4 bg-[#FBFCFF]">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </SortableContext>
    </div>
  );
};
interface Props {
  tasks: TasksData[];
  id: string;
}
