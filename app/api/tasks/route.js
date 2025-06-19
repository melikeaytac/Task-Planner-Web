import { getAllTasks, createTask } from '@/models/task'

export async function GET() {
  const tasks = getAllTasks()
  return Response.json(tasks)
}

export async function POST(request) {
  const data = await request.json()
  const task = createTask(data)
  return Response.json(task, { status: 201 })
}
