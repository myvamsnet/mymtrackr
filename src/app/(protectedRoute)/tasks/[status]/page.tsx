import React from "react";
import { TaskLayout } from "../components/TaskLayout";
import TaskLists from "../components/TaskLists";

const page = () => {
  return (
    <TaskLayout
      type="show"
      url="/records"
    >
      <TaskLists />
    </TaskLayout>
  );
};

export default page;
