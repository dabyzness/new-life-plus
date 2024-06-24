import { useState } from "react";
import { Todo } from "../lib/definitions";
import { TodoItem } from "./todoItem";

interface TodoListProps {
  todoList: Todo[];
  completeTodo: (id: string) => void;
}

export function TodoList({ todoList, completeTodo }: TodoListProps) {
  return (
    <div className="flex-col max-h-96 w-3/12 border-2 border-cyan-800 space-y-1">
      {todoList.map((todo, index) => (
        <TodoItem todo={todo} key={todo.id} completeTodo={completeTodo} />
      ))}
    </div>
  );
}
