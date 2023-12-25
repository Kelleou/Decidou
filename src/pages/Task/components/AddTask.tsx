import React from "react";
import { useEffect, useState } from "react";
import { useTasks } from "../../../hooks/useTasks.tsx";

export function AddTask(): JSX.Element {
  const [formOpened, setFormOpened] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDate] = useState(new Date());
  const [type, setType] = useState("");
  const addTask = useTasks((store) => store.addTask);

  const handleSubmit = () => {
    addTask({
      title,
      description,
      dueDate,
      type,
    });
    setFormOpened(false);
  };
  return (
    <>
      <button className='btns' onClick={() => setFormOpened(true)}>Add New Task</button>
      {formOpened ? (
        <div className="bg-slate-200 w-96 h-96 p-10 m-5 relative">
          <div
            className="CROSS-ICON absolute top-0 right-0 p-5"
            onClick={() => setFormOpened(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <form className="flex flex-col items-center justify-between min-h-[250px]">
            <input
              type="text"
              placeholder="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              type="date"
              placeholder="Title"
              value={dueDate.toISOString().split("T")[0]}
              onChange={(e) => setDate(new Date(e.target.value))}
            />

            <button onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
