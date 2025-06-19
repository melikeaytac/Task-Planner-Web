import TaskActions from './TaskActions'

export default function TaskCard({ task, onToggle, onDelete }) {
  return (
    <li className="mb-3 p-3 border rounded">
      <p className="font-medium">{task.title}</p>
      <p className="text-sm">{task.description}</p>
      <p className="text-xs text-gray-500">Son tarih: {task.dueDate}</p>
      <p className="text-xs text-blue-600">
        {task.completed ? "✅ Tamamlandı" : "🕒 Aktif"}
      </p>
      <TaskActions task={task} onToggle={onToggle} onDelete={onDelete} />
    </li>
  )
}
