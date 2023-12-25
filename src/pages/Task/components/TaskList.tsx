import React from "react";
import { useEffect, useState } from "react";
import { useTasks } from "../../../hooks/useTasks.tsx";
import { TaskItem } from "./TaskItem.tsx";

export function TaskList(): JSX.Element {
    const tasks = useTasks((store) => store.tasks);
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {tasks.map((task) => (
            <TaskItem task={task}/>
          ))}
        </div>
    )
}