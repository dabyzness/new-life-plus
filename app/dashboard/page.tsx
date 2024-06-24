"use client";

import React from "react";
import { ButtonHTMLAttributes, useState } from "react";
import { TodoList } from "../ui/todoList";
import { Todo } from "../lib/definitions";
import Link from "next/link";

const todoListDaily: Todo[] = [
  { id: "1", title: "Peepee poopoo", status: "pending" },
  { id: "2", title: "Swagdaddy", status: "complete" },
  { id: "3", title: "Drinking mudwtr", status: "pending" },
  { id: "4", title: "Eating his shoes", status: "pending" },
];

const todoListWeekly: Todo[] = [
  { id: "5", title: "abba", status: "pending" },
  { id: "6", title: "babbaa", status: "complete" },
  { id: "7", title: "stabba", status: "complete" },
  { id: "8", title: "plebba", status: "pending" },
];

const todoListMonthly: Todo[] = [
  { id: "9", title: "stagnate", status: "pending" },
  { id: "10", title: "floodgate", status: "complete" },
  { id: "11", title: "jew hate", status: "pending" },
  { id: "12", title: "pee date", status: "complete" },
];

const clickedEmptyState = {
  daily: false,
  weekly: false,
  monthly: false,
};

export default function Page() {
  const [listSelected, setListSelected] = useState<Todo[]>(todoListDaily);
  const [clicked, setClicked] = useState({
    daily: true,
    weekly: false,
    monthly: false,
  });

  function onChange(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const target = event.target as HTMLButtonElement;
    switch (target.innerHTML) {
      case "Daily":
        setListSelected(todoListDaily);
        setClicked({ ...clickedEmptyState, daily: true });
        break;
      case "Weekly":
        setListSelected(todoListWeekly);
        setClicked({ ...clickedEmptyState, weekly: true });
        break;
      case "Monthly":
        setListSelected(todoListMonthly);
        setClicked({ ...clickedEmptyState, monthly: true });
        break;
      default:
        break;
    }
  }

  // TODO: Persist change in database
  function completeTodo(id: string) {
    const foundTodo = listSelected.find((todo) => todo.id === id);
    if (foundTodo) {
      foundTodo.status = "complete";
      setListSelected([...listSelected]);
    }
  }

  function isListComplete(todoList: Todo[]): boolean {
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].status === "pending") {
        return false;
      }
    }

    return true;
  }

  // REFACTOR: button classNames need to be slurped up into one style.
  return (
    <div>
      <div className="inline-flex w-3/12 ">
        <button
          className={`w-full font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl ${
            clicked.daily
              ? isListComplete(todoListDaily)
                ? "text-white bg-lime-500"
                : "text-white bg-blue-500"
              : isListComplete(todoListDaily)
              ? "bg-transparent hover:bg-lime-500 text-lime-500 hover:text-white"
              : "bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white"
          }`}
          onClick={onChange}
        >
          Daily
        </button>
        <button
          className={`w-full font-semibold py-2 px-4 border border-blue-500 hover:border-transparent ${
            clicked.weekly
              ? isListComplete(todoListWeekly)
                ? "text-white bg-lime-500"
                : "text-white bg-blue-500"
              : isListComplete(todoListWeekly)
              ? "bg-transparent hover:bg-lime-500 text-lime-500 hover:text-white"
              : "bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white"
          }`}
          onClick={onChange}
        >
          Weekly
        </button>
        <button
          className={`w-full font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded-tr ${
            clicked.monthly
              ? isListComplete(todoListMonthly)
                ? "text-white bg-lime-500"
                : "text-white bg-blue-500"
              : isListComplete(todoListMonthly)
              ? "bg-transparent hover:bg-lime-500 text-lime-500 hover:text-white"
              : "bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white"
          }`}
          onClick={onChange}
        >
          Monthly
        </button>
      </div>
      <TodoList todoList={listSelected} completeTodo={completeTodo} />
      <Link href="/dashboard/createTask"> CREATE TASK </Link>
    </div>
  );
}
