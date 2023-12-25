import React from "react";
import { AddTask } from "./components/AddTask.tsx";
import { TaskList } from "./components/TaskList.tsx";
export function TaskPage(): JSX.Element {
  return (
    <div className="container md:container md:mx-auto text-center">
      <h2 className="text-center"> Tasks page</h2>
      <div className="grid grid-cols-5  gap-0">
        <span className="col-span-4 p-2">
          <TaskList />
        </span>
        <span className="col-2 p-2">
          <AddTask />
        </span>
      </div>
    </div>
  );
}
