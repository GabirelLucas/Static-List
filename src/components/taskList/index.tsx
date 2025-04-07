import { useState } from "react"
import { CheckCircle, Circle } from "phosphor-react"
import "./style.css"

interface Task {
  id: number
  title: string
  description: string
  completed: boolean
}

export function TaskList() {

  const [tasks, setTasks] = useState<Task[]>([
     { id: 1, title: 'Ler um artigo', description: 'Ler um artigo sobre React', completed: false },
     { id: 2, title: 'Estudar TypeScript', description: 'Focar em tipagens avançadas', completed: true },
     { id: 3, title: 'Revisar Git', description: 'Rever comandos básicos e branchs', completed: false },
     { id: 4, title: 'Praticar CSS Grid', description: 'Fazer um layout com grid', completed: false },
     { id: 5, title: 'Documentar projeto', description: 'Atualizar o README do repositório', completed: true },
   ])

   function toggleTask(id: number) {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
    setTasks(updated)
  }

  return (
    <>
      <div className="task-list">
        {tasks.map(task => (
          <div key={task.id} className={`task ${task.completed ? 'done' : ''}`}>
            <button onClick={() => toggleTask(task.id)}>
              {task.completed ? (
                <CheckCircle size={24} weight="fill" />
              ) : (
                <Circle size={24} />
              )}
            </button>
            <div className="content">
              <strong>{task.title}</strong>
              <span>{task.description}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}