import React from "react";
import { format } from "date-fns";
import { useTasks } from "../../../hooks/useTasks.tsx";

export function ScheduleItem({task}): JSX.Element {
  return (
    <div className="flex mb-4 items-center">
      <p className="w-full text-grey-darkest w-full list-task-title">
        {task.title} <p className="text-grey-darkest w-full list-task-date">
        {format(task.dueDate, "MMMM do, yyyy")}
      </p>
      </p>
     
      <div className="text-grey-darkest w-full list-task-description">
        {task.description}
      </div>
      <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">
      </button>
    </div>
  );
}
