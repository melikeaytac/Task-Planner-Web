'use client'
import { useEffect, useState } from 'react'
import TaskForm from '@/components/TaskForm'

export default function Home() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('/api/tasks')
      .then(res => res.json())
      .then(setTasks)
  }, [])

  const handleToggle = async (id, completed) => {
    await fetch(`/api/tasks/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ completed })
    })
    setTasks(tasks.map(t => t.id === id ? { ...t, completed } : t))
  }

  const handleDelete = async (id) => {
    await fetch(`/api/tasks/${id}`, { method: 'DELETE' })
    setTasks(tasks.filter(t => t.id !== id))
  }

  const handleAdd = (task) => {
    setTasks([...tasks, task])
  }

  return (
<main>
  <h1>📝 Görevlerim</h1>

  <TaskForm onAdd={handleAdd} />

  <ul className="task-list">
    {tasks.map((task) => (
      <li key={task.id} className="task-card">
        <p className="task-title">{task.title}</p>
        <p className="task-desc">{task.description}</p>
        <p className="task-date">Son tarih: {task.dueDate}</p>
        <p className={`task-status ${task.completed ? 'done' : 'active'}`}>
          {task.completed ? '✅ Tamamlandı' : '🕒 Aktif'}
        </p>
        <div className="task-actions">
          <button
            onClick={() => handleToggle(task.id, !task.completed)}
            className={task.completed ? 'undo' : 'toggle'}
          >
            {task.completed ? 'Geri Al' : 'Tamamla'}
          </button>
          <button onClick={() => handleDelete(task.id)} className="delete">
            Sil
          </button>
        </div>
      </li>
    ))}
  </ul>
</main>


  )
}
