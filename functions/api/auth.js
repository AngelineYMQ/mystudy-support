const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store'
};

async function ensureSchema(db) {
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'parent',
      students TEXT NOT NULL DEFAULT '[]',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `).run();
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS kv_store (
      student TEXT NOT NULL,
      key TEXT NOT NULL,
      value TEXT NOT NULL,
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      PRIMARY KEY (student, key)
    )
  `).run();
  const count = await db.prepare('SELECT COUNT(*) AS count FROM users').first();
  if (!count || Number(count.count || 0) === 0) {
    const defaults = [
      ['admin', 'EduStation Admin', 'admin@edustation.com.sg', 'admin123', 'admin', JSON.stringify(['evans'])],
      ['parent-evans', 'Evans Parent', 'parent.evans@example.com', 'parent123', 'parent', JSON.stringify(['evans'])],
      ['student-evans', 'Evans', 'evans@student.local', 'student123', 'student', JSON.stringify(['evans'])],
      ['teacher', 'Teacher', 'teacher@edustation.com.sg', 'teacher123', 'teacher', JSON.stringify(['evans'])]
    ];
    const stmt = db.prepare('INSERT OR IGNORE INTO users (id, name, email, password, role, students) VALUES (?, ?, ?, ?, ?, ?)');
    await db.batch(defaults.map(row => stmt.bind(...row)));
  }
}
function publicUser(row) {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    role: row.role,
    students: JSON.parse(row.students || '[]')
  };
}
export async function onRequestPost({ request, env }) {
  if (!env.DB) return new Response(JSON.stringify({ ok: false, error: 'Cloud database is not connected. Bind D1 as DB.' }), { status: 500, headers: JSON_HEADERS });
  await ensureSchema(env.DB);
  let body;
  try { body = await request.json(); } catch { return new Response(JSON.stringify({ ok: false, error: 'Invalid JSON body.' }), { status: 400, headers: JSON_HEADERS }); }
  const email = String(body.email || '').trim().toLowerCase();
  const password = String(body.password || '');
  if (!email || !password) return new Response(JSON.stringify({ ok: false, error: 'Email and password are required.' }), { status: 400, headers: JSON_HEADERS });
  const row = await env.DB.prepare('SELECT * FROM users WHERE lower(email) = lower(?) AND password = ?').bind(email, password).first();
  if (!row) return new Response(JSON.stringify({ ok: false, error: 'Wrong email or password.' }), { status: 401, headers: JSON_HEADERS });
  return new Response(JSON.stringify({ ok: true, user: publicUser(row) }), { headers: JSON_HEADERS });
}
