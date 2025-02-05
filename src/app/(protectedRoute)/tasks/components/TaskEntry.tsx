"use client";
import React from "react";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { Move } from "lucide-react";

export function TaskEntry() {
  const todoItems = [
    "Schedule perm",
    "Rewind VHS tapes",
    "Make change for the arcade",
    "Get disposable camera developed",
    "Learn C++",
    "Return Nintendo Power Glove",
  ];
  const doneItems = ["Pickup new mix-tape from Beth", "Implement drag handles"];

  const [todoList, todos] = useDragAndDrop<HTMLUListElement, string>(
    todoItems,
    {
      group: "todoList",

      dragHandle: ".kanban-handle",
    }
  );
  const [doneList, dones] = useDragAndDrop<HTMLUListElement, string>(
    doneItems,
    {
      group: "todoList",

      dragHandle: ".kanban-handle",
    }
  );
  return (
    <div className="kanban-board">
      <ul ref={todoList} className="kanban-column grid gap-4">
        {todos.map((todo) => (
          <li className="kanban-item" key={todo}>
            <div className="kanban-handle h-20 w-full ">
              <Move className="text-gray-100" />
              {todo}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
