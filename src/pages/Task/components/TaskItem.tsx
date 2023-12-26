import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import s1 from "../../../assets/Images/face1.jpg";
import s2 from "../../../assets/Images/face2.jpg";
import s3 from "../../../assets/Images/face3.jpg";
import s4 from "../../../assets/Images/face4.jpg";
import s5 from "../../../assets/Images/face5.jpg";
import s6 from "../../../assets/Images/face6.jpg";
import s7 from "../../../assets/Images/face7.jpg";
import s8 from "../../../assets/Images/face8.jpg";
import { format } from "date-fns";
import { useTasks } from "../../../hooks/useTasks.tsx";
import "../style.css"

export function TaskItem({task}): JSX.Element {
  const removeTask = useTasks((store) => store.removeTask);
  const stickers = {
    1: s1,
    2: s2,
    3: s3,
    4: s4,
    5: s5,
    6: s6,
    7: s7,
    8: s8
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  const handleDelete = () => {
    removeTask(task);
  };
  return (
    <Card
      variant="outlined"
      sx={{ width: "225px", borderColor: "var(--blue)", borderWidth: "3px", ":hover" : {
        boxShadow:"10px 10px 7px rgba(0,0,0,.5)",
        transform: "scale3d(1.20, 1.20, 1)",
      }, }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="#E97451" gutterBottom>
          Due {format(task.dueDate, "MMMM do, yyyy")}
        </Typography>
        <Typography variant="h5" color="#6082B6" component="div">
          {task.title}
        </Typography>
        <Typography variant="body2" color="#6F8FAF">
          {task.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleDelete} sx={{
            ":hover": {
              bgcolor: "#E97451", 
              color: "white",
            },
            color: "#6082B6"
          }}>
          Delete Task
        </Button>
        <img src={stickers[getRandomInt(8)]} alt="sticker" className="sticker" />
      </CardActions>
    </Card>
  );
}
