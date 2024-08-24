import React from "react";
import { useEffect, useState } from "react";
import { useDecisions } from "../../hooks/useTasks.tsx";
import "./style.css"

export function AddSide(): JSX.Element {
  const [formOpened, setFormOpened] = useState(false);
  const [description, setDescription] = useState("");
  const addChoice= useDecisions((store) => store.addChoice);

  const handleSubmit = () => {
    addChoice({
      description
    });
    clear();
    setFormOpened(false);
  };

  const clear = () => {
    setDescription("");
  }
  return (
    <>
      <button className='btns task-btns' onClick={() => setFormOpened(true)}>Add Choice</button>
      {formOpened ? (
        <div className="bg-slate-200 pt-10 m-5 relative add-form">
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
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className="btns text-sm" onClick={handleSubmit}>Add</button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
