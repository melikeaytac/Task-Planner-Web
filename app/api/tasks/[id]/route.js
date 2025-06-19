import { updateTask } from '@/models/task'

export async function PATCH(request, context) {
  const { params } = context;
  const { completed } = await request.json();

  const id = params?.id;
  if (!id || typeof id !== 'string') {
    return new Response('Geçersiz ID', { status: 400 });
  }

  await updateTask(id, completed);

  return Response.json({ success: true });
}

