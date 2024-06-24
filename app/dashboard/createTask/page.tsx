"use client";

import { Todo } from "@/app/lib/definitions";
import { ChangeEvent, useState } from "react";

const initialState: Todo = {
  id: "1",
  status: "pending",
  title: "",
  description: "",
};

export default function Page() {
  const [data, setData] = useState<Todo>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;

    setData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  return (
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
  );
}
