-- Evans Study HQ Cloudflare D1 schema
-- Run this once in Cloudflare D1 Console if you want to create the table manually.
-- The Pages Functions also create this table automatically when the site is first opened.

CREATE TABLE IF NOT EXISTS kv_store (
  student TEXT NOT NULL,
  key TEXT NOT NULL,
  value TEXT NOT NULL,
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  PRIMARY KEY (student, key)
);
