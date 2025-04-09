import { TaskList } from "./components/taskList";

export function App() {
  return (
    <div className="max-w-[37.5rem]  my-[4rem] mx-auto p-[2rem] bg-[#262626] rounded-[0.5rem]">
      <h1 className="text-[#4EA8DE] text-center mb-[2rem] revert">
        Lista de Tarefas
      </h1>
      <TaskList />
    </div>
  );
}
