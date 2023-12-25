import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Task } from "../../../hooks/types";
import { format } from "date-fns";
import { useTasks } from "../../../hooks/useTasks.tsx";

export function TaskItem(task): JSX.Element {
  const removeTask = useTasks((store) => store.removeTask);

  const handleDelete = () => {
    removeTask(task);
  };
  return (
    <Card
      variant="outlined"
      sx={{ width: "225px", borderColor: "var(--blue)", borderWidth: "3px" }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="#E97451" gutterBottom>
          Due {format(task.task.dueDate, "MMMM do, yyyy")}
        </Typography>
        <Typography variant="h5" color="#6082B6" component="div">
          {task.task.title}
        </Typography>
        <Typography variant="body2" color="#6F8FAF">
          {task.task.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{
            ":hover": {
              bgcolor: "var(--blue)", 
              color: "white",
            },
            color: "#6082B6"
          }}
        >
          Edit Task
        </Button>
        <Button size="small" onClick={handleDelete} sx={{
            ":hover": {
              bgcolor: "#E97451", 
              color: "white",
            },
            color: "#6082B6"
          }}>
          Delete Task
        </Button>
      </CardActions>
    </Card>
  );
}
