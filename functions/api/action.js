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

export async function onRequestOptions() {
  return new Response(null, { headers: JSON_HEADERS });
}

export async function onRequestPost({ request, env }) {
  if (!env.DB) {
    return new Response(JSON.stringify({ ok: false, error: 'D1 binding DB is missing.' }), { status: 500, headers: JSON_HEADERS });
  }
  await ensureSchema(env.DB);
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'Invalid JSON body.' }), { status: 400, headers: JSON_HEADERS });
  }
  const student = body.student || 'evans';
  const items = Array.isArray(body.batch) ? body.batch : [{ key: body.key, value: body.value }];
  const stmt = env.DB.prepare(`
    INSERT INTO kv_store (student, key, value, updated_at)
    VALUES (?, ?, ?, datetime('now'))
    ON CONFLICT(student, key) DO UPDATE SET
      value = excluded.value,
      updated_at = datetime('now')
  `);
  const batch = [];
  for (const item of items) {
    if (!item || typeof item.key !== 'string' || !item.key) continue;
    batch.push(stmt.bind(student, item.key, JSON.stringify(item.value ?? null)));
  }
  if (!batch.length) {
    return new Response(JSON.stringify({ ok: false, error: 'No valid key/value item supplied.' }), { status: 400, headers: JSON_HEADERS });
  }
  await env.DB.batch(batch);
  return new Response(JSON.stringify({ ok: true, student, saved: batch.length, serverTime: new Date().toISOString() }), { headers: JSON_HEADERS });
}
