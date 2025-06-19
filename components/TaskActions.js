'use client'

export default function TaskActions({ task, onToggle, onDelete }) {
  return (
    <div className="flex gap-2 mt-2">
      <button onClick={() => onToggle(task.id, !task.completed)} className="text-sm bg-green-200 px-2 py-1 rounded">
        {task.completed ? 'Geri Al' : 'Tamamla'}
      </button>
      <button onClick={() => onDelete(task.id)} className="text-sm bg-red-200 px-2 py-1 rounded">
        Sil
      </button>
    </div>
  )
}
