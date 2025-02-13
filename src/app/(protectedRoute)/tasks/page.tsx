import TaskEntry from "./components/TaskEntry";
import { TaskLayout } from "./components/TaskLayout";

const TaskPage = () => {
  return (
    <TaskLayout type="show" url="/records">
      <TaskEntry />
    </TaskLayout>
  );
};

export default TaskPage;
