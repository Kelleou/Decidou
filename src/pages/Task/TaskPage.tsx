import React from "react";
import { AddTask } from "./components/AddTask.tsx";
import { TaskList } from "./components/TaskList.tsx";
export function TaskPage(): JSX.Element {
  return (
    <div className="container md:container md:mx-auto text-center">
      <h2 className="text-center"> Tasks page</h2>
      <div className="grid grid-cols-4 m-5 content-center">
        <span className="col-span-3 m-5">
          <TaskList />
        </span>
        <span className="col-1">
          <AddTask />
        </span>
      </div>
    </div>
  );
}
