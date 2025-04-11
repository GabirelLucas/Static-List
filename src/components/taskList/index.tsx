import { useState } from "react";
import { CheckCircle, Circle } from "phosphor-react";
import { Task } from "../../interfaces";
import { initialTasks } from "../../mock";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="flex flex-col gap-4 ">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`flex items-center bg-zinc-950 p-4 rounded-2 gap-4`}
        >
          <button
            onClick={() => toggleTask(task.id)}
            className={`bg-transparent border-none ${task.completed ? "text-violet-500" : "text-purple-400"} cursor-pointer`}
          >
            {task.completed ? (
              <CheckCircle
                size={24}
                weight="fill"
                className="text-violet-500"
              />
            ) : (
              <Circle size={24} className="text-violet-500" />
            )}
          </button>

          <div className="flex flex-col">
            <strong className="text-slate-100 font-bold">{task.title}</strong>
            <span className="text-neutral-500">{task.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
