"use client";
import { Icons } from "@/assets/icons";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { DataNotFound } from "@/components/DataNotFound";
import { dateFormatter } from "@/lib/helper/dateFormatter";
import useUpdateStatus from "../hooks/useUpdateStatus";
import useGetAllTasks from "../hooks/useGetAllTasks";
import { TasksData } from "@/types/tasks";
import useDeleteTask from "../hooks/useDeleteTask";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import { CustomTab } from "@/components/CsutomTab";
import { ConfirmAction } from "@/components/ConfirmAction";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
const TaskLists = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { tasks, status } = useGetAllTasks();
  const { updateQueryParams } = useUpdateQuery();
  const { handleDelete, isPending: deleteLoader } = useDeleteTask();
  const { handleChangedStatus, mutate } = useUpdateStatus();

  const searchParams = useSearchParams();
  const active = searchParams.get("status");
  useEffect(() => {
    if (!active) {
      updateQueryParams({
        status: "pending",
      });
    }
  }, [active, updateQueryParams]);

  const [todoList, todos] = useDragAndDrop<HTMLUListElement, TasksData>(tasks, {
    group: "todoList",
    dragHandle: ".kanban-handle",
    onDragend: (updatedTodos) => {
      console.log(updatedTodos);
    },
  });

  console.log(todos);
  return (
    <section>
      <CustomTab queryName="status" tabs={tabs} />
      <ul className="p-3 kanban-board" ref={todoList}>
        {todos?.map((task: TasksData, index) => (
          <li
            className="p-4 rounded-md border-b border-off-white-200 flex justify-between items-center gap-3 kanban-item"
            key={task.id}
          >
            <label
              className="flex space-x-2 text-sm font-medium leading-none  flex-1 cursor-pointer "
              htmlFor={task.id.toString()}
              kanban-handle
            >
              <input
                type="checkbox"
                id={task.id.toString()}
                name={task.title}
                className="text-white h-6 w-6 rounded-2xl accent-primary outline-none border-2 border-[#D6D7DB] cursor-pointer"
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
              <ConfirmAction
                isOpen={isOpen}
                toggle={(open) => {
                  setIsOpen(open);
                }}
                buttonText={
                  <button
                    className="w-[100px] flex justify-center items-center text-danger-500 text-sm cursor-pointer"
                    role="button"
                    disabled={deleteLoader}
                  >
                    Delete
                  </button>
                }
                title={`Confirm Delete  Task`}
                subTitle=" Are you sure you want to delete this Task? This action cannot be  undone."
                btnClassName="bg-red-500 hover:bg-red-400 text-white outline-none"
                subTitleClassName="text-red-500 text-xs my-3"
                handleAction={() => handleDelete(task.id)}
                isPending={deleteLoader}
              />
            ) : (
              <Link href={`/tasks/edit/${task.id}`}>
                <Icons.EditIcon />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

const tabs = [
  {
    id: 1,
    name: "pending",
  },
  {
    name: "Completed",
    id: 2,
  },
];

export default TaskLists;
