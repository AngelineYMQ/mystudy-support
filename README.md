# EduStation Student HQ · Complete Local MVP

This zip is a complete multi-user, multi-student Student HQ web app for testing the commercial product flow.

## What is included

- Login page
- Role-based access:
  - Admin: view and manage all students/users
  - Parent: view assigned child only
  - Student: view own dashboard and mark tasks done
  - Teacher / Consultant: view assigned students and update tasks/notes/exams/schedule
- Admin student management
- User creation and student assignment
- Per-student dashboard
- Per-student tasks, exams, schedule, subjects, notes and reports
- Parent-ready weekly report generator
- Print / Save as PDF support
- Local data persistence using browser localStorage

## Test accounts

Admin:
- admin@edustation.com.sg / admin123

Consultant:
- consultant@edustation.com.sg / consultant123

Teacher:
- teacher@nanyang.edu.sg / teacher123

Parent:
- parent.evans@example.com / parent123

Student:
- evans@example.com / student123

## How to open

Open `index.html` directly in a browser.

## Important production note

This is a complete working local MVP, but it stores data in the browser with localStorage. That is fine for testing the product and sales flow, but not secure enough for real paying clients.

Before selling to real families, connect it to a real backend such as:

- Supabase Auth + Postgres
- Firebase Auth + Firestore
- Cloudflare Pages + D1 + Access/Auth
- A custom Node/Next.js backend

## Suggested next production step

Replace the localStorage adapter in `app.js` with an API layer. Keep the UI and data model, but move users/students/tasks/exams/schedules/notes/reports into a database.
