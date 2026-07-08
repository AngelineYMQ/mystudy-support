# EduStation Student HQ v39

This version preserves the approved Evans Study HQ v34 interface, login/logout flow, and page experience.

## What changed in v39

- Added a clear **School Timetable** upload section inside Schedule.
- School timetable now supports PDF / JPG / PNG / CSV / TXT file attachment.
- CSV / pasted text can be parsed into timetable rows for preview.
- PDF text extraction is attempted in-browser; scanned PDFs and images are kept as file references and require manual entry.
- Added manual school timetable entry: Day, Start Time, End Time, Subject, Teacher, Venue.
- Confirmed timetable rows replace the school timetable for the current logged-in student only.
- Added reset button to restore the original Evans timetable.
- Fixed upload preview flow so preview rows remain visible for confirmation.
- Retained v38 features: Assessments, WA1/WA2/WA3/EOY, CCA schedule, upload workflows, manual entry, and basic revision task generation.

## Test accounts

Admin: admin@edustation.com.sg / admin123  
Evans Parent: parent.evans@example.com / parent123  
Evans Student: evans@student.local / student123  
Teacher: teacher@edustation.com.sg / teacher123

## Notes

This is still a static MVP. It can demonstrate the product workflow and scoped student data in the browser. For real customer sales, the next production step is a secure backend database, real authentication, and OCR/AI document parsing for scanned PDFs and images.
