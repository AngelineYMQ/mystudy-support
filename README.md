# EduStation Student HQ v36 — Login Preserves Original Evans UI

This version is based directly on `evans-study-hq-v34-month-navigation.zip`.

## What changed

- Added a visible Logout button in the original topbar. Login still only acts as a gate; after login the Evans v34 page remains the main experience.

- Added a login screen before the Study HQ.
- After login, the app opens into the original Evans Study HQ page.
- The post-login Dashboard, navigation, cards, colors and workflow are preserved.
- Student data is separated behind the scenes by the logged-in student account.
- Evans keeps the original v34 localStorage keys so existing Evans state is preserved.

## Test accounts

Admin: `admin@edustation.com.sg` / `admin123`

Evans parent: `parent.evans@example.com` / `parent123`

Evans student: `evans@student.local` / `student123`

Teacher: `teacher@edustation.com.sg` / `teacher123`

## Open

Unzip the folder and open `index.html` in a browser.

## Logout

To keep the Evans interface exactly unchanged after login, there is no visible logout button in the header. Use `the visible Logout button, or Ctrl + Shift + L` to log out during testing.

## Important

This is still a front-end/localStorage implementation. It is good for product testing and GitHub Pages preview. Before selling to real customers, connect proper backend authentication and database storage.
