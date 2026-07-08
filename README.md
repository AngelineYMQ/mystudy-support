# EduStation Student HQ v41

This version keeps the approved Evans Study HQ interface, but upgrades the product direction for real external testing.

## What changed in v41

- Added Cloudflare Pages Functions for cloud login and cloud registration.
- Added Cloudflare D1 schema for persistent cloud storage.
- Added **Create family trial account** on the login page.
- Added **Settings** page.
- Parents can enter and update:
  - Child name
  - School
  - Class
  - Academic year
- Header and dashboard now update from the student profile.
- Student settings are saved under the currently logged-in student only.
- Existing Schedule / CCA / Assessments upload workflows are kept.
- Local browser fallback is still available if D1 is not connected, so the file can still be opened for preview.

## Important

For friends to use this on different devices, you must deploy to Cloudflare Pages and bind a D1 database named `DB`.

If D1 is not connected, the top-right status will show browser fallback and the data will only stay in the current browser.

## Cloudflare setup

1. Upload this folder to GitHub.
2. In Cloudflare Pages, connect the GitHub repository.
3. Create a D1 database, for example: `edustation-student-hq`.
4. In Pages project settings, add D1 binding:
   - Variable name / binding name: `DB`
   - Database: your D1 database
5. Deploy again.
6. Open the website and login.

The Pages Functions will create tables automatically, but you can also run `schema.sql` manually in D1.

## Test accounts

Admin: admin@edustation.com.sg / admin123  
Evans Parent: parent.evans@example.com / parent123  
Evans Student: evans@student.local / student123  
Teacher: teacher@edustation.com.sg / teacher123

## Trial accounts

Friends can click **Create a family trial account** on the login page. Each account gets its own student ID and cloud storage space once D1 is connected.

## Security note

This is still an MVP. Passwords are stored in plain text for trial testing only. Before paid customer launch, replace this with proper authentication such as Cloudflare Access, Supabase Auth, Firebase Auth, or a secure password-hashing backend.
