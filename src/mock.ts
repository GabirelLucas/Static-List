import { Task } from "./interfaces";

export const initialTasks: Task[] = [
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