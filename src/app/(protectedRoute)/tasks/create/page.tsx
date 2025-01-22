import React from "react";
import { TaskLayout } from "../components/TaskLayout";
import TaskCreateForm from "../components/TaskCreateForm";

const CreateTask = () => {
  return (
    <TaskLayout
      type="create"
      url="/tasks"
      title="Add New To-Do"
    >
      <TaskCreateForm />
    </TaskLayout>
  );
};

export default CreateTask;
