import React, { useState } from "react";

interface TodoPendingButtonProps {
  id: string;
  completeTodo: (id: string) => void;
}

export function TodoPendingButton({
  id,
  completeTodo,
}: TodoPendingButtonProps) {
  return (
    <button
      onClick={() => completeTodo(id)}
      className="bg-blue-500 text-white py-2 px-4 rounded"
    >
      Start
    </button>
  );
}
