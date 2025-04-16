import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Task } from "../../interfaces";
import { initialTasks } from "../../mock";
import TaskForm from "../taskForm";
import SortableItem from "../sortableItem";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [visibleTasks, setVisibleTasks] = useState<Task[]>(initialTasks);

  const toggleTask = (id: number) => {
    setTasks((state) =>
      state.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = (title: string, description: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    setTasks((state) => [newTask, ...state]);
    setTimeout(() => {
      setVisibleTasks((state) => [newTask, ...state]);
    }, 300);
  };

  const deleteTask = (id: number) => {
    setVisibleTasks((state) => state.filter((task) => task.id !== id));
    setTimeout(() => {
      setTasks((state) => state.filter((task) => task.id !== id));
    }, 300);
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = tasks.findIndex((task) => task.id === active.id);
      const newIndex = tasks.findIndex((task) => task.id === over.id);
      setTasks((state) => arrayMove(state, oldIndex, newIndex));
      setVisibleTasks((state) => arrayMove(state, oldIndex, newIndex));
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={tasks.map((task) => task.id)}
          strategy={verticalListSortingStrategy}
        >
          {tasks.map((task) => (
            <SortableItem
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
              isVisible={visibleTasks.some((t) => t.id === task.id)}
            />
          ))}
        </SortableContext>
      </DndContext>
      <TaskForm onAddTask={handleAddTask} />
    </div>
  );
};

export default TaskList;

/*import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Task } from "../../interfaces";
import { initialTasks } from "../../mock";
import TaskForm from "../taskForm";
import SortableItem from "../sortableItem";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleTask = (id: number) => {
    setTasks((state) =>
      state.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = (title: string, description: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      description,
      completed: false,
    };
    setTasks((state) => [newTask, ...state]);
  };

  const deleteTask = (id: number) => {
    setTasks((state) => state.filter((task) => task.id !== id));
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = tasks.findIndex((task) => task.id === active.id);
      const newIndex = tasks.findIndex((task) => task.id === over.id);
      setTasks((state) => arrayMove(state, oldIndex, newIndex));
    }
  };

  return (
    <div className="flex flex-col gap-4 ">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={tasks.map((task) => task.id)}
          strategy={verticalListSortingStrategy}
        >
          {tasks.map((task) => (
            <SortableItem
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))}
        </SortableContext>
      </DndContext>
      <TaskForm onAddTask={handleAddTask} />
    </div>
  );
};

export default TaskList;*/
