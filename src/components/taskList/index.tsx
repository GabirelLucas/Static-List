import { useState } from "react";
import { CheckCircle, Circle } from "phosphor-react";

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Ler um artigo",
    description: "Ler um artigo sobre React",
    completed: false,
  },
  {
    id: 2,
    title: "Estudar TypeScript",
    description: "Focar em tipagens avançadas",
    completed: true,
  },
  {
    id: 3,
    title: "Revisar Git",
    description: "Rever comandos básicos e branches",
    completed: false,
  },
  {
    id: 4,
    title: "Praticar CSS Grid",
    description: "Fazer um layout com grid",
    completed: false,
  },
  {
    id: 5,
    title: "Documentar projeto",
    description: "Atualizar o README do repositório",
    completed: true,
  },
];

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="flex flex-col gap-[16px] ">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`flex items-center bg-[#0D0D0D] p-[1rem] rounded-[6px] gap-[1rem]`}
        >
          <button
            onClick={() => toggleTask(task.id)}
            className={`bg-transparent border-none ${task.completed ? "text-[#5E60CE]" : "text-[#8284FA]"} cursor-pointer`}
          >
            {task.completed ? (
              <CheckCircle size={24} weight="fill" className="text-purple" />
            ) : (
              <Circle size={24} className="text-purple" />
            )}
          </button>

          <div className="flex flex-col">
            <strong className="text-[#F2F2F2] font-bold">{task.title}</strong>
            <span className="text-[#808080]">{task.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
