import React from "react";
import { AddTask } from "./components/AddTask.tsx";
export function TaskPage(): JSX.Element {
    return (<div>
        <h2> Tasks page</h2>
        <AddTask/>
    </div>);
};