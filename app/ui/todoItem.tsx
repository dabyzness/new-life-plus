import React from "react";
import { TodoCompleteButton } from "./todoCompleteButton";
import { Todo } from "../lib/definitions";
import { TodoPendingButton } from "./todoPendingButton";
import Link from "next/link";

interface TodoItemProps {
  todo: Todo;
  completeTodo: (id: string) => void;
}

export function TodoItem({ todo, completeTodo }: TodoItemProps) {
  return (
    <div className="flex w-full justify-between">
      <div className={`${todo.status === "complete" ? "line-through" : ""}`}>
        {todo.title}
      </div>

      {todo.status === "complete" ? (
        <TodoCompleteButton />
      ) : (
        <TodoPendingButton id={todo.id} completeTodo={completeTodo} />
      )}

      <Link href={`/dashboard/editTask/${todo.id}`}>EDIT</Link>
    </div>
  );
}
