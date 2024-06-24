"use client";

import { Todo } from "@/app/lib/definitions";
import Modal from "@/app/ui/modal";
import { ChangeEvent, useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { todoListDaily, todoListMonthly, todoListWeekly } from "../../../page";

const initialState: Todo = {
  id: "",
  status: "pending",
  title: "",
  description: "",
};

const combinedLists = [...todoListDaily, ...todoListWeekly, ...todoListMonthly];

export default function Page() {
  const [data, setData] = useState<Todo>(initialState);
  const params = useParams<{ taskId: string }>();

  useEffect(() => {
    const fetchTask = (): Todo => {
      for (let i = 0; i < combinedLists.length; i++) {
        if (combinedLists[i].id === params.taskId) {
          return combinedLists[i];
        }
      }
      return initialState;
    };

    setData(fetchTask());
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;

    setData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  return (
    <Modal>
      THIS IS EDIT TASK
      <form className="flex gap-2 items-center">
        <input
          type="text"
          id="title"
          name="title"
          value={data.title}
          onChange={handleChange}
          placeholder="New Todo"
          className="text-xl p-1 rounded-lg"
          autoFocus
        />

        <button
          type="submit"
          className="p-2 text-xl rounded-2xl text-black border-solid border-black border-2 max-w-xs bg-green-500 hover:cursor-pointer hover:bg-green-400"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
}
