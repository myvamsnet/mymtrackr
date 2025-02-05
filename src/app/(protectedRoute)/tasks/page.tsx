import { TaskEntry } from "./components/TaskEntry";
import { TaskLayout } from "./components/TaskLayout";
import TaskLists from "./components/TaskLists";

const TaskPage = () => {
  return (
    <TaskLayout type="show" url="/records">
      <TaskEntry />
      {/* <TaskLists /> */}
    </TaskLayout>
  );
};

export default TaskPage;
