-- Production database schema draft for EduStation Student HQ

CREATE TABLE users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT,
  role TEXT NOT NULL CHECK (role IN ('admin','parent','student','teacher','consultant')),
  status TEXT NOT NULL DEFAULT 'active',
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE students (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  dob TEXT,
  school TEXT,
  grade TEXT,
  target_exam TEXT,
  target_school TEXT,
  programme TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  start_date TEXT,
  package_end TEXT,
  notes TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE enrolments (
  user_id TEXT NOT NULL,
  student_id TEXT NOT NULL,
  relationship TEXT,
  PRIMARY KEY (user_id, student_id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (student_id) REFERENCES students(id)
);

CREATE TABLE subjects (
  id TEXT PRIMARY KEY,
  student_id TEXT NOT NULL,
  name TEXT NOT NULL,
  current TEXT,
  target TEXT,
  FOREIGN KEY (student_id) REFERENCES students(id)
);

CREATE TABLE tasks (
  id TEXT PRIMARY KEY,
  student_id TEXT NOT NULL,
  title TEXT NOT NULL,
  subject TEXT,
  due_date TEXT,
  priority TEXT,
  status TEXT DEFAULT 'pending',
  owner TEXT,
  notes TEXT,
  created_by TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (created_by) REFERENCES users(id)
);

CREATE TABLE exams (
  id TEXT PRIMARY KEY,
  student_id TEXT NOT NULL,
  name TEXT NOT NULL,
  subject TEXT,
  date TEXT,
  target_score TEXT,
  actual_score TEXT,
  status TEXT DEFAULT 'upcoming',
  FOREIGN KEY (student_id) REFERENCES students(id)
);

CREATE TABLE schedules (
  id TEXT PRIMARY KEY,
  student_id TEXT NOT NULL,
  day TEXT,
  start TEXT,
  end TEXT,
  activity TEXT,
  location TEXT,
  FOREIGN KEY (student_id) REFERENCES students(id)
);

CREATE TABLE notes (
  id TEXT PRIMARY KEY,
  student_id TEXT NOT NULL,
  date TEXT,
  title TEXT,
  body TEXT,
  visibility TEXT,
  created_by TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (created_by) REFERENCES users(id)
);

CREATE TABLE reports (
  id TEXT PRIMARY KEY,
  student_id TEXT NOT NULL,
  date TEXT,
  body TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (student_id) REFERENCES students(id)
);
