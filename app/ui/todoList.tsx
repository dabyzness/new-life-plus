import { useState } from "react";
import { TodoItem } from "./todoItem";

type Todo = {
  name: string;
  isComplete: boolean;
};

interface TodoListProps {
  todoList: Todo[];
  onComplete: object;
}

export function TodoList({ todoList, onComplete }: TodoListProps) {
  return (
    <div className="flex-col max-h-96 w-3/12 border-2 border-cyan-800 space-y-1">
      {todoList.map((item, index) => (
        <TodoItem
          isComplete={item.isComplete}
          name={item.name}
          key={index}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
}
