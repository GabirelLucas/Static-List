import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const taskSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
});

type TaskFormData = z.infer<typeof taskSchema>;

interface TaskFormProps {
  onAddTask: (title: string, description: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data: TaskFormData) => {
    onAddTask(data.title, data.description);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 mb-4"
    >
      <input
        type="text"
        placeholder="Título da tarefa"
        {...register("title")}
        className="p-2 rounded bg-zinc-900 text-white placeholder:text-gray-400"
      />
      {errors.title && (
        <span className="text-red-500 text-sm">{errors.title.message}</span>
      )}

      <input
        type="text"
        placeholder="Descrição"
        {...register("description")}
        className="p-2 rounded bg-zinc-900 text-white placeholder:text-gray-400"
      />
      {errors.description && (
        <span className="text-red-500 text-sm">
          {errors.description.message}
        </span>
      )}

      <button
        type="submit"
        className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Adicionar Tarefa
      </button>
    </form>
  );
};

export default TaskForm;
