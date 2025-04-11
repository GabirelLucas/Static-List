import React from "react";
import TaskList from "./components/taskList";

const App: React.FC = () => {
  return (
    <div className="max-w-xl my-16 mx-auto p-8 bg-neutral-800 rounded-lg">
      <h1 className="text-blue-400 text-4xl font-bold text-center mb-8 ">
        Lista de Tarefas
      </h1>
      <TaskList />
    </div>
  );
};

export default App;
