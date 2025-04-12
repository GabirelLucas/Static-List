import { CheckCircle, Circle, Trash } from "phosphor-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SortableItemProps } from "../../interfaces";

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
      className="flex items-center bg-zinc-950 p-4 rounded-2 gap-4 relative group"
    >
      {/* Invisible draggable layer */}
      <div {...attributes} {...listeners} className="absolute inset-0 z-0" />

      <button
        onClick={() => toggleTask(task.id)}
        className={`bg-transparent border-none ${task.completed ? "text-violet-500" : "text-purple-400"} cursor-pointer z-10`}
      >
        {task.completed ? (
          <CheckCircle size={24} weight="fill" className="text-violet-500" />
        ) : (
          <Circle size={24} className="text-violet-500" />
        )}
      </button>

      <div className="flex flex-col z-10">
        <strong className="text-slate-100 font-bold">{task.title}</strong>
        <span className="text-neutral-500">{task.description}</span>
      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="ml-auto rounded-2xl p-1 text-red-500 hover:text-red-400 hover:bg-neutral-700 hover:rounded-2xl hover:p-1 active:scale-95 cursor-pointer select-none transition-transform z-10"
        title="Excluir tarefa"
      >
        <Trash size={20} />
      </button>
    </div>
  );
};

export default SortableItem;
