import db from '@/lib/db'
import { v4 as uuidv4 } from 'uuid'

export function getAllTasks() {
  return db.prepare('SELECT * FROM tasks ORDER BY dueDate ASC').all()
}

export function createTask({ title, description, dueDate }) {
  const id = uuidv4()
  db.prepare('INSERT INTO tasks (id, title, description, dueDate) VALUES (?, ?, ?, ?)')
    .run(id, title, description, dueDate)
  return { id, title, description, dueDate, completed: 0 }
}

export function updateTask(id, completed) {
  const completedValue = completed ? 1 : 0
  db.prepare('UPDATE tasks SET completed = ? WHERE id = ?').run(completedValue, id)
}

export async function DELETE(request, { params }) {
  const id = params?.id
  if (!id || typeof id !== 'string') {
    return new Response('Geçersiz ID', { status: 400 })
  }

  await deleteTask(id)

  return Response.json({ success: true })
}
