import React from "react";
import { useNavigate } from "react-router-dom";
import { AddTask } from "./components/AddTask.tsx";
import { TaskList } from "./components/TaskList.tsx";
export function TaskPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="container md:container md:mx-auto text-center">
      <h2 className="text-center"> Tasks page</h2>
      <div className="flex items-center justify-center">
      <div className="grid grid-cols-3 m-5 content-center gap-4 md:grid-cols-4">
        <span className=" col-span-2 md:col-span-3 ml-5">
          <TaskList />
        </span>
        <span className="col-1">
          <AddTask />
          <button className='btns task-btns' onClick={() => navigate("/task/schedule")}> Schedule </button>
        </span>
      </div></div>
    </div>
  );
}
