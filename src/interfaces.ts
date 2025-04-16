export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
  }

export interface TaskFormProps {
    onAddTask: (title: string, description: string) => void;
  }

export interface SortableItemProps {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  isVisible: boolean
}