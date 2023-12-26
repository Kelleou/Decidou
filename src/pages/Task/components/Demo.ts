import { Task } from "../../../hooks/types";
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export const randomTasks: Task[] = [
  {
    title: "Math Test",
    description: "Calculus term test",
    dueDate: randomDate(new Date(2023, 0, 1), new Date()),
  },
  {
    title: "Interview",
    description: "Important job interview, DON'T FORGET!",
    dueDate: randomDate(new Date(2023, 0, 1), new Date()),
  },
  {
    title: "Shopping",
    description: "Grocery Shopping, need fresh vegetables",
    dueDate: randomDate(new Date(2023, 0, 1), new Date()),
  },
  {
    title: "Assignment 3",
    description: "Complete and submit assignment 3",
    dueDate: randomDate(new Date(2023, 0, 1), new Date()),
  },
  {
    title: "Room Clean Up",
    description: "Room is a mess, time to clean up!",
    dueDate: randomDate(new Date(2023, 0, 1), new Date()),
  },
];
