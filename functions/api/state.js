const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store'
};

async function ensureSchema(db) {
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

function safeParse(value) {
  try { return JSON.parse(value); } catch { return value; }
}

export async function onRequestGet({ request, env }) {
  if (!env.DB) {
    return new Response(JSON.stringify({ ok: false, error: 'D1 binding DB is missing.' }), { status: 500, headers: JSON_HEADERS });
  }
  const url = new URL(request.url);
  const student = url.searchParams.get('student') || 'evans';
  await ensureSchema(env.DB);
  const result = await env.DB.prepare(
    'SELECT key, value, updated_at FROM kv_store WHERE student = ?'
  ).bind(student).all();
  const state = {};
  const updatedAt = {};
  for (const row of result.results || []) {
    state[row.key] = safeParse(row.value);
    updatedAt[row.key] = row.updated_at;
  }
  return new Response(JSON.stringify({ ok: true, student, state, updatedAt, serverTime: new Date().toISOString() }), { headers: JSON_HEADERS });
}
