import React from "react";
import { CheckBox } from "./checkbox";

interface TodoItemProps {
  isComplete: boolean;
  name: string;
  onComplete: (name: string) => void;
}

export function TodoItem({ name, isComplete, onComplete }: TodoItemProps) {
  console.log(name, isComplete);

  function onCheck(event: React.ChangeEventHandler<HTMLInputElement>) {
    console.log(event);

    onComplete(name);
  }

  return (
    <div className="flex w-full h-6 justify-between">
      <div className={`${isComplete ? "line-through" : ""}`}>{name}</div>
      <CheckBox isComplete={isComplete} onCheck={onCheck} />
    </div>
  );
}
