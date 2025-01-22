import { redirect } from "next/navigation";

const TaskPage = () => {
  return redirect("/tasks/pending");
};

export default TaskPage;
