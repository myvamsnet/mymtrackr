"use client";

import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "react-beautiful-dnd";

interface Item {
  id: string;
  content: string;
}

const initialItems: Item[] = [
  { id: "item-1", content: "Item 1" },
  { id: "item-2", content: "Item 2" },
  { id: "item-3", content: "Item 3" },
  { id: "item-4", content: "Item 4" },
  { id: "item-5", content: "Item 5" },
];

export default function DragDropList() {
  const [items, setItems] = useState<Item[]>(initialItems);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedItems = [...items];
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);

    setItems(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="bg-white rounded-lg shadow-md p-4 w-full max-w-md mx-auto"
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`
                      bg-gray-100 p-4 mb-2 rounded-md
                      ${
                        snapshot.isDragging
                          ? "bg-blue-200 shadow-lg scale-105"
                          : ""
                      }
                      transition-all text-lg font-medium
                      flex items-center justify-between
                    `}
                  >
                    {item.content}
                    <span className="text-gray-400 ml-2">☰</span>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
