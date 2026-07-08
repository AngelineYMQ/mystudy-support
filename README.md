# EduStation Student HQ v35 — Preserved Evans Interface + Client Login

This package keeps the original Evans Study HQ v34 interface, navigation, cards, timetable and study workflow, but adds a client-account layer for selling the product to multiple families.

## How to open

Unzip the package and double-click `index.html`.

## Test accounts

- Admin: `admin@edustation.com.sg` / `admin123`
- Evans Parent: `parent.evans@example.com` / `parent123`
- Evans Student: `evans@student.local` / `student123`
- Teacher: `teacher@edustation.com.sg` / `teacher123`

## What changed from the original Evans ZIP

- Preserved original UI, tabs and layout.
- Added login page.
- Added role-based access model.
- Added Admin Console.
- Added student switcher for Admin / Teacher.
- Added multiple student spaces.
- Added student-scoped storage: homework, check-ins, planner, notes and progress are separated per student.
- Replaced visible student name in the header dynamically.

## Important production note

This is still a front-end MVP. It is enough to test the product flow and show clients, but real paid customer use needs a server-side backend, encrypted authentication and a real database.

Recommended production stack:

- Cloudflare Pages for frontend
- Cloudflare Workers for API
- Cloudflare D1 or Supabase/Postgres for database
- Auth.js / Clerk / Supabase Auth for secure login

## Files

- `index.html` — original interface + login/admin modals
- `style.css` — original style + account layer CSS
- `script.js` — original Evans Study HQ logic
- `auth-guard.js` — storage scoping and auth seed data
- `auth-ui.js` — login, logout, admin console and student switcher
- `schema.sql` — original database schema reference
