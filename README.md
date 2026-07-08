# EduStation Student HQ v38

This version keeps the Evans Study HQ v34/v37 post-login interface and adds productisation features for real client use.

## What changed in v38

- Login + visible Logout retained.
- Original Evans Study HQ layout is preserved after login.
- `WA3 Board` is now presented as `Assessments`.
- Assessments support WA1, WA2, WA3, End-of-Year Exam, Mock Exam, Class Test, Diagnostic Test, AEIS Mock, PSLE Prelim, O-Level Prelim, and Other.
- Parents can manually enter assessment details.
- Parents can upload assessment schedule files as PDF / JPG / PNG / CSV / TXT.
- Uploads do not overwrite data directly. They create a preview where possible, then require Confirm & Save.
- Schedule page now includes a parent-editable CCA Schedule panel.
- Parents can manually enter CCA time, location, coach and term.
- Parents can upload CCA files as PDF / JPG / PNG / CSV / TXT.
- Each student's data remains separated by the existing login/student storage logic.
- Assessment records can create basic linked revision tasks in Weekly Plan.

## Important limitation

This is still a static MVP. CSV and pasted text can be parsed into preview rows. Text-based PDFs have a basic experimental text extraction attempt. JPG/PNG and scanned PDFs are stored as uploaded file references and require manual entry or pasted text. A production version should connect to a backend OCR/AI service for reliable PDF/JPG recognition.

## Test accounts

Admin:
admin@edustation.com.sg / admin123

Evans Parent:
parent.evans@example.com / parent123

Evans Student:
evans@student.local / student123

Teacher:
teacher@edustation.com.sg / teacher123
