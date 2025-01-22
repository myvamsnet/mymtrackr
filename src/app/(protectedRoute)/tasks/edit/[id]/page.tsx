import React from "react";
import { TaskLayout } from "../../components/TaskLayout";
import TaskEditForm from "../../components/TaskEditForm";

const EditTaskPage = () => {
  return (
    <TaskLayout
      type="create"
      url="/tasks"
      title="Edit Task"
    >
      <TaskEditForm />
    </TaskLayout>
  );
};

export default EditTaskPage;
