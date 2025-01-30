import { redirect } from "next/navigation";
import { TaskLayout } from "./components/TaskLayout";
import TaskLists from "./components/TaskLists";

const TaskPage = () => {
  return (
    <TaskLayout type="show" url="/records">
      <TaskLists />
    </TaskLayout>
  );
};

export default TaskPage;
