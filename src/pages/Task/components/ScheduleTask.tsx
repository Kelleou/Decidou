import React from "react";
import { useEffect, useState } from "react";
import { useTasks } from "../../../hooks/useTasks.tsx";
import { Task } from "../../../hooks/types.tsx";
import { ScheduleItem } from "./ScheduleItem.tsx";

export function ScheduledTaskPage(): JSX.Element {
  const tasks = useTasks((store) => store.tasks);
  const setTasks = useTasks((store) => store.setTasks);

  tasks.sort(function (a: Task, b: Task) {
    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
  });

  return (
    <div className="container md:container md:mx-auto ">
      <h2 className="text-center"> Prioritizing Tasks with Earliest Due Date</h2>
      <div className="flex items-center justify-center"> <button className="btns text-sm">Export Schedule </button></div>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Task List</h1>
          </div>
          <div>
            {tasks.map((task) => (
              <ScheduleItem task={task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
