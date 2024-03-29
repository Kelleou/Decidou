import React from "react";
import { exportComponentAsPDF } from "react-component-export-image";
import { useRef } from "react";
import { useTasks } from "../../../hooks/useTasks.tsx";
import { Task } from "../../../hooks/types.tsx";
import { ScheduleItem } from "./ScheduleItem.tsx";
import figure from "../../../assets/Images/figure.jpg";

export function ScheduledTaskPage(): JSX.Element {
  const tasks = useTasks((store) => store.tasks);
  const componentRef = useRef(null);

  tasks.sort(function (a: Task, b: Task) {
    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
  });

  return (
    <div className="container md:container md:mx-auto ">
      <h2 className="text-center">
        {" "}
        Prioritize Tasks with Earliest Due Date!
      </h2>
      <div className="flex items-center justify-center">
        <button
          className="btns text-sm"
          onClick={() =>
            exportComponentAsPDF(componentRef, {
              fileName: "task-list",
              pdfOptions: { w: 150, h: 200, x: 30 },
            })
          }
        >
          Export Schedule
        </button>
      </div>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div
          className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg relative"
          ref={componentRef}
        >
          <div className="mb-4">
            <h1 className="text-grey-darkest">Task List</h1>
          </div>
          <div>
            {tasks.map((task) => (
              <ScheduleItem task={task} />
            ))}
          </div>
          <img src={figure} alt="sticker" className="figure-sticker" />
        </div>
      </div>
    </div>
  );
}
