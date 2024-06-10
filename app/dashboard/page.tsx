"use client";

import { ButtonHTMLAttributes, useState } from "react";
import { TodoList } from "../ui/todoList";

const todoListDaily = [
  { name: "Peepee poopoo", isComplete: false },
  { name: "Swagdaddy", isComplete: true },
  { name: "Drinking mudwtr", isComplete: false },
  { name: "Eating his shoes", isComplete: false },
];

const todoListWeekly = [
  { name: "abba", isComplete: false },
  { name: "babbaa", isComplete: true },
  { name: "stabba", isComplete: true },
  { name: "plebba", isComplete: false },
];

const todoListMonthly = [
  { name: "stagnate", isComplete: false },
  { name: "floodgate", isComplete: true },
  { name: "jew hate", isComplete: false },
  { name: "pee date", isComplete: true },
];

export default function Page() {
  const [listSelected, setListSelected] = useState(todoListDaily);

  function onChange(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const target = event.target as HTMLButtonElement;
    switch (target.innerHTML) {
      case "Daily":
        setListSelected(todoListDaily);
        break;
      case "Weekly":
        setListSelected(todoListWeekly);
        break;
      case "Monthly":
        setListSelected(todoListMonthly);
        break;
      default:
        break;
    }
  }

  function onComplete(name: string) {
    const foundTodo = listSelected.find((todo) => todo.name === name);
    if (foundTodo) {
      foundTodo.isComplete = true;
      setListSelected([...listSelected, foundTodo]);
    }
  }

  return (
    <div>
      <div className="inline-flex w-3/12 ">
        <button
          className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl"
          onClick={onChange}
        >
          Daily
        </button>
        <button
          className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent"
          onClick={onChange}
        >
          Weekly
        </button>
        <button
          className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-tr"
          onClick={onChange}
        >
          Monthly
        </button>
      </div>
      <TodoList todoList={listSelected} onComplete={onComplete} />
    </div>
  );
}
