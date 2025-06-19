import Database from 'better-sqlite3'
import path from 'path'

const db = new Database(path.join(process.cwd(), 'tasks.db'))

db.prepare(`
  CREATE TABLE IF NOT EXISTS tasks (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    dueDate TEXT NOT NULL,
    completed INTEGER DEFAULT 0
  )
`).run()

export default db
