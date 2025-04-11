import { CheckCircle, Circle, DotsSixVertical, Trash } from "phosphor-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Task } from "../../interfaces";

interface SortableItemProps {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const SortableItem: React.FC<SortableItemProps> = ({
  task,
  toggleTask,
  deleteTask,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="flex items-center bg-zinc-950 p-4 rounded-2 gap-4"
    >
      <div {...listeners} className="cursor-grab text-neutral-500">
        <DotsSixVertical size={24} />
      </div>

      <button
        onClick={() => toggleTask(task.id)}
        className={`bg-transparent border-none ${task.completed ? "text-violet-500" : "text-purple-400"} cursor-pointer`}
      >
        {task.completed ? (
          <CheckCircle size={24} weight="fill" className="text-violet-500" />
        ) : (
          <Circle size={24} className="text-violet-500" />
        )}
      </button>

      <div className="flex flex-col">
        <strong className="text-slate-100 font-bold">{task.title}</strong>
        <span className="text-neutral-500">{task.description}</span>
      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="ml-auto text-red-500 hover:text-red-400"
        title="Excluir tarefa"
      >
        <Trash size={20} />
      </button>
    </div>
  );
};

export default SortableItem;
