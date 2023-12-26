import { Task } from './types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TasksStore = {
    tasks: Task[];
    addTask: (newTask: Task) => void;
    removeTask: (task: Task) => void;
    setTasks: (tasks: Task[]) => void;
}

export const useTasks = create<TasksStore>()(
    persist(
      (set) => ({
        tasks: [],
        setTasks: (tasks) => set(() => ({ tasks: [...tasks] })),
        addTask: (newTask) =>
        set(({ tasks }) => {
            return { tasks: [...tasks, newTask] };
          }),
          removeTask: (task) => {
            set((state) => {
                const newTasks = [...state.tasks];
                const index = newTasks.findIndex((t) => t.title === task.title);
              newTasks.splice(index, 1);
              return { tasks: newTasks };
            });
          },
      }),
      {
        name: 'local-tasks',
      }
    )
  );