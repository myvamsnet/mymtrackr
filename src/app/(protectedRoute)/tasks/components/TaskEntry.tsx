"use client";
import { useMemo, useState } from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
  TouchSensor,
  DragEndEvent,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import useGetAllTasks from "../hooks/useGetAllTasks";
import useUpdateStatus from "../hooks/useUpdateStatus";
import CustomLoader from "@/components/CustomLoader/page";
import { DataNotFound } from "@/components/DataNotFound";
import { CustomTab } from "@/components/CsutomTab";
import { Column } from "./Column";

export default function TaskEntry() {
  const { tasks = [], status, setTasks } = useGetAllTasks();
  const { handleChangedStatus, mutate } = useUpdateStatus();

  const sensors = useSensors(
    useSensor(PointerSensor), // Keeps pointer support
    useSensor(TouchSensor, {
      activationConstraint: {
        distance: 10, // Adjust this value if needed
      },
    }), // Adds touch support
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Memoize the task position finder function
  const getTaskPos = useMemo(
    () => (id: string) => tasks.findIndex((task) => task.id === id),
    [tasks]
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const originalPos = getTaskPos(active.id as string);
    const newPos = getTaskPos(over.id as string);
    if (originalPos === -1 || newPos === -1) return;

    const updatedTasks = arrayMove(tasks, originalPos, newPos);
    mutate({
      id: over?.id as string,
    });
    setTasks(updatedTasks);
  };

  if (status === "pending") {
    return <CustomLoader />;
  }

  const isEmpty = Boolean(status === "success" && tasks.length === 0);
  return (
    <div className="App">
      <CustomTab tabs={tabs} queryName="status" />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        {isEmpty && <DataNotFound message="task" />}
        <Column
          id="toDo"
          tasks={tasks}
          handleChangedStatus={handleChangedStatus}
        />
      </DndContext>
    </div>
  );
}
const tabs = [
  {
    name: "My Tasks",
    id: 1,
    path: "pending",
  },
  {
    name: "Completed",
    id: 2,
    path: "completed",
  },
];
