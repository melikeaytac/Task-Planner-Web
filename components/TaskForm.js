'use client'
import { useState } from 'react'

export default function TaskForm({ onAdd }) {
  const [form, setForm] = useState({ title: '', description: '', dueDate: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify(form)
    })
    const newTask = await res.json()
    onAdd(newTask)
    setForm({ title: '', description: '', dueDate: '' })
  }

  return (
<form onSubmit={handleSubmit} className="task-form">
  <div className="input-group">
    <input
      type="text"
      name="title"
      value={form.title}
      onChange={handleChange}
      placeholder="Başlık"
      required
    />
    <input
      type="text"
      name="description"
      value={form.description}
      onChange={handleChange}
      placeholder="Açıklama"
    />
    <input
      type="date"
      name="dueDate"
      value={form.dueDate}
      onChange={handleChange}
      required
    />
  </div>
  <button type="submit">Ekle</button>
</form>



  )
}
