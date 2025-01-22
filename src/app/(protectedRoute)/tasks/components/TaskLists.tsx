"use client";
import { Icons } from "@/assets/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import CustomLoader from "@/components/CustomLoader/page";
import { DataNotFound } from "@/components/DataNotFound";
import { dateFormatter } from "@/lib/helper/dateFormatter";
import useUpdateStatus from "../hooks/useUpdateStatus";
import useGetAllTasks from "../hooks/useGetAllTasks";
import { TasksData } from "@/types/tasks";
import useDeleteTask from "../hooks/useDeleteTask";
import { Circle } from "lucide-react";
import { button } from "@material-tailwind/react";
const TaskLists = () => {
  const { tasks, status } = useGetAllTasks();
  const { handleDelete, isPending: deleteLoader } = useDeleteTask();
  const { handleChangedStatus } = useUpdateStatus();

  const pathname = usePathname();

  if (status === "pending") {
    return <CustomLoader />;
  }

  if (status === "error") {
    return (
      <p className="text-red-500 text-base">
        Something went wrong. Please try again later.
      </p>
    );
  }

  return (
    <section>
      <div className="flex justify-between items-center border-b md:px-[44px]">
        {tabs.map((tab) => (
          <Link
            href={tab.value}
            className={`w-[100px] h-[36px] font-medium text-sm flex justify-center items-center ${
              pathname === tab.value
                ? "border-b-2 border-primary p-3 text-primary"
                : "text-dark-100"
            } capitalize cursor-pointer`}
            key={tab.id}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      <section className="p-3">
        {tasks && tasks.length > 0 ? (
          tasks.map((task: TasksData) => (
            <div
              className="py-4 border-b border-off-white-200 flex justify-between items-center gap-3"
              key={task.id}
            >
              <label
                className="flex space-x-2 text-sm font-medium leading-none  flex-1 cursor-pointer"
                htmlFor={task.id.toString()}
              >
                <input
                  type="checkbox"
                  id={task.id.toString()}
                  name={task.title}
                  className="text-white h-6 w-6 rounded-2xl accent-primary outline-none border-2 border-[#D6D7DB]"
                  checked={task.status}
                  onChange={(e) => handleChangedStatus(e, task)}
                />
                <div className="">
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
              {task.status ? (
                <div
                  onClick={() => handleDelete(task.id)}
                  role="button"
                  className="w-8 h-8 flex justify-center items-center bg-off-white text-sm cursor-pointer p-3"
                >
                  {deleteLoader && task.id ? (
                    <div className="loader"></div>
                  ) : (
                    <button>
                      <Icons.Delete />
                    </button>
                  )}
                </div>
              ) : (
                <Link href={`/tasks/edit/${task.id}`}>
                  <Icons.EditIcon />
                </Link>
              )}
            </div>
          ))
        ) : (
          <DataNotFound message="tasks" />
        )}
      </section>
    </section>
  );
};

const tabs = [
  {
    value: "/tasks/pending",
    label: "My Tasks",
    id: 1,
  },
  {
    value: "/tasks/completed",
    label: "Completed",
    id: 2,
  },
];

export default TaskLists;

const tasks = [
  {
    id: 1,
    title: "Learn React js for 1 hour",
    description: "Description 1",
    status: "pending",
    date: "05 April 2024",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
    status: "completed",
    date: "05 April 2024",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description 3",
    status: "pending",
    date: "05 April 2024",
  },
  {
    id: 4,
    title: "Task 4",
    description: "Description 4",
    status: "completed",
    date: "05 April 2024",
  },
];
