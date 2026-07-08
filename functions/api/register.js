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
}
function slugify(value) {
  return String(value || 'student').toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 38) || 'student';
}
function publicUser(row) {
  return { id: row.id, name: row.name, email: row.email, role: row.role, students: JSON.parse(row.students || '[]') };
}
export async function onRequestPost({ request, env }) {
  if (!env.DB) return new Response(JSON.stringify({ ok: false, error: 'Cloud database is not connected. Bind D1 as DB.' }), { status: 500, headers: JSON_HEADERS });
  await ensureSchema(env.DB);
  let body;
  try { body = await request.json(); } catch { return new Response(JSON.stringify({ ok: false, error: 'Invalid JSON body.' }), { status: 400, headers: JSON_HEADERS }); }
  const email = String(body.email || '').trim().toLowerCase();
  const password = String(body.password || '');
  const parentName = String(body.parentName || 'Parent').trim() || 'Parent';
  const studentName = String(body.studentName || '').trim();
  const school = String(body.school || '').trim();
  const className = String(body.className || '').trim();
  if (!email || !password || !studentName) return new Response(JSON.stringify({ ok: false, error: 'Parent email, password and child name are required.' }), { status: 400, headers: JSON_HEADERS });
  const existing = await env.DB.prepare('SELECT id FROM users WHERE lower(email) = lower(?)').bind(email).first();
  if (existing) return new Response(JSON.stringify({ ok: false, error: 'This email already has an account. Please login instead.' }), { status: 409, headers: JSON_HEADERS });
  const base = slugify(email.split('@')[0] + '_' + studentName);
  const studentId = base + '_' + Math.random().toString(36).slice(2, 7);
  const userId = 'parent_' + studentId;
  const students = JSON.stringify([studentId]);
  await env.DB.prepare('INSERT INTO users (id, name, email, password, role, students) VALUES (?, ?, ?, ?, ?, ?)').bind(userId, parentName, email, password, 'parent', students).run();
  const profile = { studentName, school, className, academicYear: '2026' };
  await env.DB.prepare(`
    INSERT INTO kv_store (student, key, value, updated_at)
    VALUES (?, ?, ?, datetime('now'))
    ON CONFLICT(student, key) DO UPDATE SET value = excluded.value, updated_at = datetime('now')
  `).bind(studentId, `eshq_v36_${studentId}_eshq_v41_student_profile`, JSON.stringify(profile)).run();
  const row = await env.DB.prepare('SELECT * FROM users WHERE id = ?').bind(userId).first();
  return new Response(JSON.stringify({ ok: true, user: publicUser(row), studentId }), { headers: JSON_HEADERS });
}
