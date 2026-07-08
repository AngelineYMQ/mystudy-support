-- EduStation Student HQ v41 Cloudflare D1 schema
-- Bind this D1 database to Cloudflare Pages as: DB

CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'parent',
  students TEXT NOT NULL DEFAULT '[]',
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS kv_store (
  student TEXT NOT NULL,
  key TEXT NOT NULL,
  value TEXT NOT NULL,
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  PRIMARY KEY (student, key)
);

INSERT OR IGNORE INTO users (id, name, email, password, role, students) VALUES
('admin', 'EduStation Admin', 'admin@edustation.com.sg', 'admin123', 'admin', '["evans"]'),
('parent-evans', 'Evans Parent', 'parent.evans@example.com', 'parent123', 'parent', '["evans"]'),
('student-evans', 'Evans', 'evans@student.local', 'student123', 'student', '["evans"]'),
('teacher', 'Teacher', 'teacher@edustation.com.sg', 'teacher123', 'teacher', '["evans"]');
