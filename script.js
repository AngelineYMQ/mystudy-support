const WA3_TASKS = [
  { id: 'math-stage3', subject: 'Mathematics', title: 'IPW Stage 3 Submission', date: '2026-07-07', type: 'submission', duration: '9 weeks', marks: '14 marks · 70% of Math IPW component', detail: 'Task given in Term 2 Week 3.' },
  { id: 'sci-prototype', subject: 'Science', title: 'Water Prototype Testing', date: '', type: 'project', duration: '9 weeks', marks: '50% of Science IPW', detail: 'Teacher will inform according to laboratory session.' },
  { id: 'math-stage78', subject: 'Mathematics', title: 'IPW Stage 7 & 8 Submission', date: '2026-07-17', type: 'submission', duration: '2 weeks', marks: '6 marks · 30% of Math IPW component', detail: 'Task given in Term 3 Week 1.' },
  { id: 'sci-report', subject: 'Science', title: 'IPW Report Submission', date: '2026-07-17', type: 'submission', duration: '10 weeks', marks: '50% of Science IPW', detail: 'Task given in Term 2 Week 3.' },
  { id: 'english-written', subject: 'English Language', title: 'Written Test', date: '2026-07-20', altDate: '2026-07-21', type: 'test', duration: '30 min', marks: '30 marks', detail: '20 Jul: 1 Int, 1 Hum, 1, 1 Per, 1 Res, 1 Inn, 1 Exc. 21 Jul: 1 Sin, 1 Gra.' },
  { id: 'history-investigation', subject: 'History', title: 'Historical Investigation Group Task', date: '2026-07-29', type: 'project', duration: '7 weeks', marks: '15 marks', detail: 'Task given in Term 2 Week 10.' },
  { id: 'fce-presentation', subject: 'Food & Consumer Education', title: 'Nutrients Presentation & PowerPoint Slides', date: '2026-07-31', type: 'presentation', duration: '5 weeks', marks: '30 marks', detail: 'Task given in Term 3 Week 1.' },
  { id: 'art-mindmap', subject: 'Art', title: 'Performance Task: Visual Mindmap', date: '2026-07-31', type: 'project', duration: '5 weeks', marks: '15 marks', detail: 'Theme: There is no Planet B. Task given in Term 3 Week 1.' },
  { id: 'lit-little-prince', subject: 'English Literature', title: 'Alternative Assessment', date: '2026-08-05', type: 'submission', duration: '4 weeks', marks: '25 marks', detail: 'Topic: The Little Prince. Format: Character Cards. Task given in Week 2.' },
  { id: 'hcl-written', subject: 'Higher Chinese', title: 'Written Test', date: '2026-08-14', type: 'test', duration: '75 min', marks: '40 marks', detail: 'Topic: 情境记叙文写作. Format: Situational Narrative Essay Writing.' },
  { id: 'hcl-performance', subject: 'Higher Chinese', title: 'Performance Task Submission', date: '2026-08-14', type: 'submission', duration: 'Given in Term 1', marks: '', detail: 'Performance Task submission will be on 14 August too.' },
  { id: 'msp-written', subject: 'MSP', title: 'Written Test', date: '2026-08-25', type: 'test', duration: '50 min', marks: '30 marks', detail: 'Topic: Unit 1–4 Grammar. Format: SLS Quiz. Basic sentence and blog writing.' }
];


const TIMETABLE_DAYS = ['Day 1','Day 2','Day 3','Day 4','Day 5','Day 6','Day 7','Day 8','Day 9','Day 10'];
const TIMETABLE = {
  'Day 1': [
    { time: '7:40–8:00', subject: 'DEAR time', teacher: '', venue: '' },
    { time: '8:00–8:40', subject: 'CCE', teacher: 'Maizurah / Su Mei', venue: '' },
    { time: '8:40–9:20', subject: 'Music', teacher: 'Gladys', venue: 'Music' },
    { time: '9:20–10:00', subject: 'PE (LS)', teacher: 'Andrew', venue: 'School Hall 1' },
    { time: '10:00–10:40', subject: 'Recess', teacher: '', venue: '' },
    { time: '10:40–11:20', subject: 'HCL', teacher: 'JiW', venue: '' },
    { time: '11:20–12:00', subject: 'Science', teacher: 'LeowSH', venue: '' },
    { time: '12:00–12:40', subject: 'Mathematics', teacher: 'TohML', venue: '' },
    { time: '12:40–13:40', subject: 'History', teacher: 'NeoCW', venue: '' },
    { time: '13:40–14:20', subject: 'Lunch', teacher: '', venue: '' }
  ],
  'Day 2': [
    { time: '7:40–8:00', subject: 'DEAR time', teacher: '', venue: '' },
    { time: '8:00–8:40', subject: 'HCL', teacher: 'JiW', venue: '' },
    { time: '8:40–10:00', subject: 'FCE', teacher: 'LowZY / ChuaXF', venue: 'FN1' },
    { time: '10:00–10:40', subject: 'Recess', teacher: '', venue: '' },
    { time: '10:40–11:20', subject: 'Mathematics', teacher: 'TohML', venue: '' },
    { time: '11:20–12:40', subject: 'Science', teacher: 'LeowSH', venue: '' },
    { time: '12:40–13:40', subject: 'English', teacher: 'Su Mei', venue: '' },
    { time: '13:40–14:20', subject: 'Lunch', teacher: '', venue: '' },
    { time: '15:00–17:20', subject: 'MSP', teacher: 'Maizurah', venue: '' }
  ],
  'Day 3': [
    { time: '7:40–8:00', subject: 'DEAR time', teacher: '', venue: '' },
    { time: '8:00–8:40', subject: 'AS', teacher: 'Maizurah / Su Mei', venue: '' },
    { time: '8:40–9:20', subject: 'Mathematics', teacher: 'TohML', venue: '' },
    { time: '9:20–10:00', subject: 'History', teacher: 'NeoCW', venue: '' },
    { time: '10:00–10:40', subject: 'Recess', teacher: '', venue: '' },
    { time: '10:40–12:00', subject: 'HCL', teacher: 'JiW', venue: '' },
    { time: '12:00–13:20', subject: 'English', teacher: 'Su Mei', venue: '' },
    { time: '13:20–14:00', subject: 'Art', teacher: 'Faizal / Insyirah', venue: 'ART2' },
    { time: '13:40–14:20', subject: 'Lunch', teacher: '', venue: '' }
  ],
  'Day 4': [
    { time: '7:40–8:00', subject: 'DEAR time', teacher: '', venue: '' },
    { time: '8:00–8:40', subject: 'Mathematics', teacher: 'TohML', venue: '' },
    { time: '8:40–10:00', subject: 'CI', teacher: 'LiuZB', venue: '' },
    { time: '10:00–10:40', subject: 'Recess', teacher: '', venue: '' },
    { time: '10:40–11:20', subject: 'Geography', teacher: 'LokLM', venue: '' },
    { time: '11:20–12:00', subject: 'HCL', teacher: 'JiW', venue: '' },
    { time: '12:00–12:40', subject: 'PE (LS)', teacher: 'Andrew', venue: 'ISH L2' },
    { time: '12:40–13:40', subject: 'English', teacher: 'Su Mei', venue: '' },
    { time: '13:40–14:20', subject: 'Lunch', teacher: '', venue: '' }
  ],
  'Day 5': [
    { time: '7:40–8:00', subject: 'S/Love My Sch', teacher: '', venue: '' },
    { time: '8:00–8:40', subject: 'TSI', teacher: 'Maizurah / Su Mei', venue: '' },
    { time: '8:40–9:20', subject: 'MASSP', teacher: 'ChooSY / YarRM / Raffi / Andrew / CheanKX / TanYB', venue: 'ISH L1 / ISH L2' },
    { time: '9:20–10:00', subject: 'HCL', teacher: 'JiW', venue: '' },
    { time: '10:00–10:40', subject: 'Recess', teacher: '', venue: '' },
    { time: '10:40–12:00', subject: 'Science', teacher: 'LeowSH', venue: 'BI2' },
    { time: '12:00–13:20', subject: 'Literature', teacher: 'Shahnaaz', venue: '' },
    { time: '13:20–13:40', subject: 'Mathematics', teacher: 'TohML', venue: '' },
    { time: '13:40–14:20', subject: 'Lunch', teacher: '', venue: '' }
  ],
  'Day 6': [
    { time: '7:40–8:00', subject: 'DEAR time', teacher: '', venue: '' },
    { time: '8:00–8:40', subject: 'CCE', teacher: 'Maizurah / Su Mei', venue: '' },
    { time: '8:40–9:20', subject: 'PE (LS)', teacher: 'Andrew', venue: 'School Hall 1' },
    { time: '9:20–10:00', subject: 'HCL', teacher: 'JiW', venue: '' },
    { time: '10:00–10:40', subject: 'Mathematics', teacher: 'TohML', venue: '' },
    { time: '10:40–11:20', subject: 'Recess', teacher: '', venue: '' },
    { time: '11:20–12:40', subject: 'English', teacher: 'Su Mei', venue: '' },
    { time: '12:40–13:20', subject: 'Science', teacher: 'LeowSH', venue: '' },
    { time: '13:20–13:40', subject: 'Geography', teacher: 'LokLM', venue: '' },
    { time: '13:40–14:20', subject: 'Lunch', teacher: '', venue: '' }
  ],
  'Day 7': [
    { time: '7:40–8:00', subject: 'DEAR time', teacher: '', venue: '' },
    { time: '8:00–8:40', subject: 'Literature', teacher: 'Shahnaaz', venue: '' },
    { time: '8:40–10:00', subject: 'FCE', teacher: 'LowZY / ChuaXF', venue: 'FN2' },
    { time: '10:00–10:40', subject: 'Recess', teacher: '', venue: '' },
    { time: '10:40–11:20', subject: 'Mathematics', teacher: 'TohML', venue: '' },
    { time: '11:20–12:40', subject: 'Geography', teacher: 'LokLM', venue: '' },
    { time: '12:40–13:40', subject: 'English', teacher: 'Su Mei', venue: '' },
    { time: '13:40–14:20', subject: 'Lunch', teacher: '', venue: '' },
    { time: '15:00–17:20', subject: 'MSP', teacher: 'Maizurah', venue: '' }
  ],
  'Day 8': [
    { time: '7:40–8:00', subject: 'DEAR time', teacher: '', venue: '' },
    { time: '8:00–8:40', subject: 'AS', teacher: 'Maizurah / Su Mei', venue: '' },
    { time: '8:40–9:20', subject: 'CI', teacher: 'LiuZB', venue: '' },
    { time: '9:20–10:00', subject: 'Music', teacher: 'Gladys', venue: 'Music' },
    { time: '10:00–10:40', subject: 'MASSP', teacher: 'ChooSY / YarRM / Raffi / Andrew / CheanKX / TanYB', venue: 'ISH L1 / School Hall 1' },
    { time: '10:40–11:20', subject: 'Recess', teacher: '', venue: '' },
    { time: '11:20–12:40', subject: 'ALP1', teacher: 'LeowSH / ALP', venue: 'LAB1' },
    { time: '12:40–13:40', subject: 'HCL', teacher: 'JiW', venue: '' },
    { time: '13:40–14:20', subject: 'Lunch', teacher: '', venue: '' }
  ],
  'Day 9': [
    { time: '7:40–8:00', subject: 'DEAR time', teacher: '', venue: '' },
    { time: '8:00–8:40', subject: 'CI', teacher: 'LiuZB', venue: '' },
    { time: '8:40–9:20', subject: 'Mathematics', teacher: 'TohML', venue: '' },
    { time: '9:20–10:00', subject: 'PE (LS)', teacher: 'Andrew', venue: 'School Field' },
    { time: '10:00–10:40', subject: 'Science', teacher: 'LeowSH', venue: '' },
    { time: '10:40–11:20', subject: 'Recess', teacher: '', venue: '' },
    { time: '11:20–12:40', subject: 'Art', teacher: 'Faizal / Insyirah', venue: 'ART2' },
    { time: '12:40–13:20', subject: 'Literature', teacher: 'Shahnaaz', venue: '' },
    { time: '13:20–13:40', subject: 'HCL', teacher: 'JiW', venue: '' },
    { time: '13:40–14:20', subject: 'Lunch', teacher: '', venue: '' }
  ],
  'Day 10': [
    { time: '7:40–8:00', subject: 'S/Love My Sch', teacher: '', venue: '' },
    { time: '8:00–8:40', subject: 'TSI', teacher: 'Maizurah / Su Mei', venue: '' },
    { time: '8:40–10:00', subject: 'English', teacher: 'Su Mei', venue: '' },
    { time: '10:00–10:40', subject: 'Recess', teacher: '', venue: '' },
    { time: '10:40–12:00', subject: 'Science', teacher: 'LeowSH', venue: 'BI2' },
    { time: '12:00–12:40', subject: 'HCL', teacher: 'JiW', venue: '' },
    { time: '12:40–13:20', subject: 'Mathematics', teacher: 'TohML', venue: '' },
    { time: '13:20–13:40', subject: 'History', teacher: 'NeoCW', venue: '' },
    { time: '13:40–14:20', subject: 'Lunch', teacher: '', venue: '' }
  ]
};

const CCA_SCHEDULE = [
  { id: 'cca-2026-06-29', type: 'CCA', title: 'Chinese Orchestra Training', date: '2026-06-29', day: 'Monday', time: '3:00–6:00 pm', teacher: 'Ms Ong', venue: 'Music Room', notes: '' },
  { id: 'cca-2026-07-08', type: 'CCA', title: 'Chinese Orchestra Training', date: '2026-07-08', day: 'Wednesday', time: '3:00–6:00 pm', teacher: 'Mdm Tang / Mrs Tan', venue: 'Music Room', notes: 'No CCA for Week 3 due to O Level.' },
  { id: 'cca-2026-07-10', type: 'CCA', title: 'Chinese Orchestra Training', date: '2026-07-10', day: 'Friday', time: '3:00–5:00 pm', teacher: 'Mr Chen', venue: 'Music Room', notes: 'TD Performers' },
  { id: 'cca-2026-07-20', type: 'CCA', title: 'Chinese Orchestra Training', date: '2026-07-20', day: 'Monday', time: '3:00–6:00 pm', teacher: 'Ms Ong', venue: 'Sectional Rooms', notes: '' },
  { id: 'cca-2026-07-22', type: 'CCA', title: 'Chinese Orchestra Training', date: '2026-07-22', day: 'Wednesday', time: '3:00–6:00 pm', teacher: 'ALL', venue: 'Music Room', notes: 'DSA audition: selected student helpers' },
  { id: 'cca-2026-07-24', type: 'CCA', title: 'Chinese Orchestra Training', date: '2026-07-24', day: 'Friday', time: '3:00–5:00 pm', teacher: 'Mrs Tan', venue: 'Music Room', notes: 'TD Performers' },
  { id: 'cca-2026-07-27', type: 'CCA', title: 'Chinese Orchestra Training', date: '2026-07-27', day: 'Monday', time: '3:00–6:00 pm', teacher: 'Mdm Tang', venue: 'Sectional Rooms', notes: '' },
  { id: 'cca-2026-07-29', type: 'CCA', title: 'Chinese Orchestra Training', date: '2026-07-29', day: 'Wednesday', time: '3:00–6:00 pm', teacher: 'Mr Chen', venue: 'Music Room', notes: '' },
  { id: 'cca-2026-08-03', type: 'CCA', title: 'Chinese Orchestra Training', date: '2026-08-03', day: 'Monday', time: '3:00–6:00 pm', teacher: 'Ms Ong', venue: 'Sectional Rooms', notes: '' },
  { id: 'cca-2026-08-05', type: 'CCA', title: 'Chinese Orchestra Training', date: '2026-08-05', day: 'Wednesday', time: '3:00–6:00 pm', teacher: 'Mdm Tang', venue: 'Music Room', notes: '' },
  { id: 'cca-2026-08-12', type: 'CCA', title: 'Chinese Orchestra Training', date: '2026-08-12', day: 'Wednesday', time: '3:00–6:00 pm', teacher: 'Mr Chen', venue: 'Music Room', notes: '' },
  { id: 'cca-2026-08-14', type: 'CCA', title: 'Chinese Orchestra Training', date: '2026-08-14', day: 'Friday', time: '3:00–5:00 pm', teacher: 'Mdm Tang', venue: 'Music Room', notes: 'TD Performers' },
  { id: 'cca-2026-08-17', type: 'CCA', title: 'Chinese Orchestra Training', date: '2026-08-17', day: 'Monday', time: '3:00–6:00 pm', teacher: 'Ms Ong', venue: 'Sectional Rooms', notes: '' },
  { id: 'cca-2026-08-19', type: 'CCA', title: 'Chinese Orchestra Training', date: '2026-08-19', day: 'Wednesday', time: '3:00–6:00 pm', teacher: 'Mrs Tan', venue: 'Music Room', notes: '' },
  { id: 'cca-2026-08-21', type: 'CCA', title: 'Chinese Orchestra Training', date: '2026-08-21', day: 'Friday', time: '3:00–5:00 pm', teacher: 'Ms Ong', venue: 'Music Room', notes: 'TD Performers' },
  { id: 'cca-2026-08-24', type: 'CCA', title: 'Chinese Orchestra Training', date: '2026-08-24', day: 'Monday', time: '3:00–6:00 pm', teacher: 'Mrs Tan', venue: 'Sectional Rooms', notes: '' },
  { id: 'cca-2026-08-26', type: 'CCA', title: 'Chinese Orchestra Training', date: '2026-08-26', day: 'Wednesday', time: '3:00–6:00 pm', teacher: 'Mr Chen', venue: 'Music Room', notes: '' },
  { id: 'cca-2026-08-31', type: 'CCA', title: 'Chinese Orchestra Training', date: '2026-08-31', day: 'Monday', time: '3:00–6:00 pm', teacher: 'Mdm Tang', venue: 'Sectional Rooms', notes: '' },
  { id: 'cca-2026-09-02', type: 'CCA', title: 'Chinese Orchestra Training', date: '2026-09-02', day: 'Wednesday', time: '3:00–6:00 pm', teacher: 'Mr Chen', venue: 'Music Room', notes: '' }
];


// Recurring weekend and tuition activities for Evans. These are fixed personal schedule items
// and are shown alongside school CCA in Schedule and Dashboard.
const RECURRING_ACTIVITIES = [
  { idPrefix: 'tuition-math-sat', type: 'Tuition', title: 'Math Tuition', weekday: 6, time: '11:30 am–1:00 pm', venue: 'KINEX', notes: 'Weekly Saturday Math tuition' },
  { idPrefix: 'taekwondo-sun', type: 'Taekwondo', title: 'Taekwondo Training', weekday: 0, time: '11:00 am–1:00 pm', venue: 'Beauty World Centre', notes: 'Weekly Sunday taekwondo' },
  { idPrefix: 'tuition-english-sun', type: 'Tuition', title: 'English Tuition', weekday: 0, time: '3:00–5:00 pm', venue: 'Clementi', notes: 'Weekly Sunday English tuition' }
];
const SPECIAL_ACTIVITIES = [
  {
    id: 'taekwondo-grading-2026-07-18',
    type: 'Taekwondo',
    title: 'Taekwondo Grading — Black Tip / 1st Poom',
    date: '2026-07-18',
    day: 'Saturday',
    time: '1:00–2:00 pm',
    venue: 'Beauty World Centre',
    notes: 'External & internal grading day. Wear full uniform. No T-shirt under uniform. Arrive before 1pm. Bring/wear arm gear, shin gear and groin gear.'
  }
];



const SCHOOL_NOTICES = [
  {
    id: 'hbl-bcd-2026-07-13',
    type: 'HBL / BCD',
    title: 'Home-Based Learning / Beyond Classroom Day',
    date: '2026-07-13',
    endDate: '2026-07-17',
    priority: 'urgent',
    audience: 'Sec 1–3 students',
    detail: 'Sec 1–3 students do not report to school. Complete work assigned by subject teachers based on the class timetable. Prepare for SIL presentation on 19 Aug.'
  },
  {
    id: 'national-day-celebration-2026-08-07',
    type: 'School Event',
    title: 'National Day Celebration',
    date: '2026-08-07',
    priority: 'normal',
    audience: 'All students',
    detail: 'School event from 7:30am to 11:00am.'
  },
  {
    id: 'national-day-off-2026-08-10',
    type: 'Holiday',
    title: 'National Day off-in-lieu',
    date: '2026-08-10',
    priority: 'normal',
    audience: 'All students',
    detail: 'School holiday.'
  },
  {
    id: 'teachers-day-celebration-2026-09-03',
    type: 'School Event',
    title: 'Teachers’ Day Celebration',
    date: '2026-09-03',
    priority: 'normal',
    audience: 'All students',
    detail: 'Celebration from 7:30am to 10:30am.'
  },
  {
    id: 'teachers-day-holiday-2026-09-04',
    type: 'Holiday',
    title: 'Teachers’ Day school holiday',
    date: '2026-09-04',
    priority: 'normal',
    audience: 'All students',
    detail: 'School holiday.'
  },
  {
    id: 'sec1-eoy-2026-09-30',
    type: 'Exam Period',
    title: 'Sec 1 & 2 End-of-Year Examination',
    date: '2026-09-30',
    endDate: '2026-10-08',
    priority: 'urgent',
    audience: 'Sec 1 & 2 students',
    detail: 'EOY examination period. Assessment timetables will be uploaded on the school website. No re-test or re-examination for missed assessments unless valid medical certificate applies.'
  },
  {
    id: 'shhk-learning-journey-1excellence-2026-10-16',
    type: 'Learning Journey',
    title: 'Sec 1 SHHK Learning Journey',
    date: '2026-10-16',
    priority: 'normal',
    audience: '1 Innovation & 1 Excellence',
    detail: 'Scheduled from 2:45pm to 5:45pm for 1 Innovation and 1 Excellence.'
  },
  {
    id: 'mtp-registration-2026-09-28',
    type: 'Parent Action',
    title: 'MTP registration window',
    date: '2026-09-28',
    endDate: '2026-10-02',
    priority: 'normal',
    audience: 'Parents of Sec 1–3 students',
    detail: 'Parents who wish to meet Form Teachers should register for one 15-minute slot via Parents Gateway invitation.'
  },
  {
    id: 'mtp-session-2026-10-22',
    type: 'Parent Event',
    title: 'Meet-the-Parents Session',
    date: '2026-10-22',
    endDate: '2026-10-23',
    priority: 'normal',
    audience: 'Sec 1–3 parents',
    detail: 'MTP is scheduled from 8:00am to 12:00 noon on both days. Mode will be shared by Form Teachers nearer the date.'
  },
  {
    id: 'pld-dma-reminder',
    type: 'Important',
    title: 'PLD DMA reminder',
    date: '2026-07-08',
    priority: 'normal',
    audience: 'Students using PLD',
    detail: 'Keep DMA enabled on the PLD. Contact school ICT support if there are issues. Do not disable or bypass DMA.'
  }
];

// MOE / school-calendar holidays relevant to Evans' 2026 Semester 2 planning.
// These are shown in Schedule timeline and Month View as non-school / special days.
const MOE_SCHOOL_HOLIDAYS = [
  { id: 'moe-national-day-off-2026-08-10', type: 'Holiday', title: 'National Day off-in-lieu', date: '2026-08-10', detail: 'MOE school holiday / public holiday.' },
  { id: 'moe-teachers-day-2026-09-04', type: 'Holiday', title: "Teachers’ Day school holiday", date: '2026-09-04', detail: 'MOE scheduled school holiday.' },
  { id: 'moe-sept-holiday-2026', type: 'School Holiday', title: 'September School Holiday', date: '2026-09-05', endDate: '2026-09-13', detail: 'Between Terms III and IV.' },
  { id: 'moe-year-end-holiday-2026', type: 'School Holiday', title: 'Year-end School Holiday', date: '2026-11-21', endDate: '2026-12-31', detail: 'End-of-year school vacation.' }
];


const PACK_ITEMS = {
  'DEAR time': ['reading book'],
  'HCL': ['Higher Chinese textbook / file'],
  'English': ['English file / worksheet'],
  'Mathematics': ['Math textbook / worksheet', 'calculator', 'geometry set if needed'],
  'Science': ['Science file / notes', 'lab book if needed'],
  'History': ['History file'],
  'Geography': ['Geography file'],
  'Literature': ['Literature book / file'],
  'FCE': ['FCE file', 'materials teacher requested'],
  'Art': ['Art materials', 'visual journal / sketchbook'],
  'Music': ['Music file / materials'],
  'PE (LS)': ['PE attire', 'water bottle'],
  'MASSP': ['sports attire', 'water bottle'],
  'MSP': ['MSP file / worksheet'],
  'ALP1': ['ALP notes / worksheet'],
  'CI': ['CI file / materials'],
  'CCE': ['school diary'],
  'AS': ['AS materials if assigned'],
  'TSI': ['TSI materials if assigned']
};

const QUESTION_BANK = {
  "Mathematics": {
    "Numbers & Ratio": [
      {
        "q": "A value increases from 80 to 100. What is the percentage increase?",
        "options": [
          "25%",
          "20%",
          "30%",
          "40%"
        ],
        "answer": "25%",
        "explain": "The correct answer is 25%."
      },
      {
        "q": "Share $72 in the ratio 5:7. What is the larger share?",
        "options": [
          "$42",
          "$30",
          "$36",
          "$48"
        ],
        "answer": "$42",
        "explain": "The correct answer is $42."
      },
      {
        "q": "Write 0.00056 in standard form.",
        "options": [
          "5.6 × 10⁻⁴",
          "5.6 × 10⁻³",
          "56 × 10⁻⁵",
          "0.56 × 10⁻³"
        ],
        "answer": "5.6 × 10⁻⁴",
        "explain": "The correct answer is 5.6 × 10⁻⁴."
      },
      {
        "q": "Simplify: a³ × a⁵",
        "options": [
          "a⁸",
          "a¹⁵",
          "2a⁸",
          "a²"
        ],
        "answer": "a⁸",
        "explain": "The correct answer is a⁸."
      },
      {
        "q": "A cyclist travels 24 km in 1.5 h. Find the speed.",
        "options": [
          "16 km/h",
          "12 km/h",
          "18 km/h",
          "24 km/h"
        ],
        "answer": "16 km/h",
        "explain": "The correct answer is 16 km/h."
      }
    ],
    "Algebra": [
      {
        "q": "Simplify: 3x + 5x - 2x",
        "options": [
          "6x",
          "8x",
          "10x",
          "6x²"
        ],
        "answer": "6x",
        "explain": "The correct answer is 6x."
      },
      {
        "q": "Expand: 4(2x - 3)",
        "options": [
          "8x - 12",
          "8x - 3",
          "6x - 12",
          "8x + 12"
        ],
        "answer": "8x - 12",
        "explain": "The correct answer is 8x - 12."
      },
      {
        "q": "Factorise: 6x + 9",
        "options": [
          "3(2x + 3)",
          "6(x + 3)",
          "9(x + 1)",
          "3(2x + 9)"
        ],
        "answer": "3(2x + 3)",
        "explain": "The correct answer is 3(2x + 3)."
      },
      {
        "q": "Solve: 5x - 7 = 18",
        "options": [
          "5",
          "3",
          "4",
          "6"
        ],
        "answer": "5",
        "explain": "The correct answer is 5."
      },
      {
        "q": "Solve: 2x + 3 > 11",
        "options": [
          "x > 4",
          "x < 4",
          "x > 7",
          "x < 7"
        ],
        "answer": "x > 4",
        "explain": "The correct answer is x > 4."
      }
    ],
    "Functions & Graphs": [
      {
        "q": "For y = 3x - 2, find y when x = 5.",
        "options": [
          "13",
          "11",
          "15",
          "17"
        ],
        "answer": "13",
        "explain": "The correct answer is 13."
      },
      {
        "q": "What is the gradient of the line y = 4x + 7?",
        "options": [
          "4",
          "7",
          "11",
          "-4"
        ],
        "answer": "4",
        "explain": "The correct answer is 4."
      },
      {
        "q": "Which point lies on y = 2x + 1?",
        "options": [
          "(2, 5)",
          "(1, 2)",
          "(3, 5)",
          "(4, 7)"
        ],
        "answer": "(2, 5)",
        "explain": "The correct answer is (2, 5)."
      },
      {
        "q": "The graph y = x² - 4 cuts the y-axis at which point?",
        "options": [
          "(0, -4)",
          "(0, 4)",
          "(-4, 0)",
          "(4, 0)"
        ],
        "answer": "(0, -4)",
        "explain": "The correct answer is (0, -4)."
      },
      {
        "q": "Distance between (0,0) and (3,4) is:",
        "options": [
          "5",
          "3",
          "4",
          "7"
        ],
        "answer": "5",
        "explain": "The correct answer is 5."
      }
    ],
    "Geometry & Measurement": [
      {
        "q": "Angles on a straight line add up to:",
        "options": [
          "180°",
          "90°",
          "270°",
          "360°"
        ],
        "answer": "180°",
        "explain": "The correct answer is 180°."
      },
      {
        "q": "Each interior angle of a regular hexagon is:",
        "options": [
          "120°",
          "90°",
          "108°",
          "135°"
        ],
        "answer": "120°",
        "explain": "The correct answer is 120°."
      },
      {
        "q": "A right triangle has shorter sides 6 cm and 8 cm. Find the hypotenuse.",
        "options": [
          "10 cm",
          "12 cm",
          "14 cm",
          "16 cm"
        ],
        "answer": "10 cm",
        "explain": "The correct answer is 10 cm."
      },
      {
        "q": "Two similar figures have scale factor 3. Their area ratio is:",
        "options": [
          "1:9",
          "1:3",
          "1:6",
          "3:1"
        ],
        "answer": "1:9",
        "explain": "The correct answer is 1:9."
      },
      {
        "q": "Volume of a cylinder is:",
        "options": [
          "πr²h",
          "2πrh",
          "πrh²",
          "4/3πr³"
        ],
        "answer": "πr²h",
        "explain": "The correct answer is πr²h."
      }
    ],
    "Statistics & Probability": [
      {
        "q": "The mean of 2, 4, 6, 8 is:",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "answer": "5",
        "explain": "The correct answer is 5."
      },
      {
        "q": "Which measure is most affected by an extreme outlier?",
        "options": [
          "Mean",
          "Median",
          "Mode",
          "Range only"
        ],
        "answer": "Mean",
        "explain": "The correct answer is Mean."
      },
      {
        "q": "A fair die is rolled. Probability of getting an even number is:",
        "options": [
          "1/2",
          "1/6",
          "1/3",
          "2/3"
        ],
        "answer": "1/2",
        "explain": "The correct answer is 1/2."
      },
      {
        "q": "Two fair coins are tossed. Probability of two heads is:",
        "options": [
          "1/4",
          "1/2",
          "1/3",
          "1/8"
        ],
        "answer": "1/4",
        "explain": "The correct answer is 1/4."
      },
      {
        "q": "If A = {1,2,3} and B = {3,4}, what is A ∩ B?",
        "options": [
          "{3}",
          "{1,2}",
          "{1,2,3,4}",
          "∅"
        ],
        "answer": "{3}",
        "explain": "The correct answer is {3}."
      }
    ]
  },
  "Science": {
    "Scientific Endeavour": [
      {
        "q": "Which attitude means checking ideas using evidence instead of guessing?",
        "options": [
          "Objectivity",
          "Creativity",
          "Speed",
          "Volume"
        ],
        "answer": "Objectivity",
        "explain": "The correct answer is Objectivity."
      },
      {
        "q": "A fair test should change:",
        "options": [
          "only one variable at a time",
          "all variables at once",
          "no variables",
          "the result after recording"
        ],
        "answer": "only one variable at a time",
        "explain": "The correct answer is only one variable at a time."
      },
      {
        "q": "A hypothesis is best described as:",
        "options": [
          "a testable explanation",
          "a final proven fact",
          "a random guess",
          "a measurement unit"
        ],
        "answer": "a testable explanation",
        "explain": "The correct answer is a testable explanation."
      },
      {
        "q": "Why should scientists repeat experiments?",
        "options": [
          "To improve reliability",
          "To make results look nicer",
          "To avoid data",
          "To change the hypothesis"
        ],
        "answer": "To improve reliability",
        "explain": "The correct answer is To improve reliability."
      },
      {
        "q": "Which value means reporting results honestly?",
        "options": [
          "Integrity",
          "Pitch",
          "Texture",
          "Discount"
        ],
        "answer": "Integrity",
        "explain": "The correct answer is Integrity."
      }
    ],
    "Diversity of Matter": [
      {
        "q": "Which property is best used to separate iron filings from sand?",
        "options": [
          "Magnetic attraction",
          "Evaporation",
          "Distillation",
          "Chromatography"
        ],
        "answer": "Magnetic attraction",
        "explain": "The correct answer is Magnetic attraction."
      },
      {
        "q": "Which separation method is suitable for separating an insoluble solid from a liquid?",
        "options": [
          "Filtration",
          "Melting",
          "Freezing",
          "Condensation"
        ],
        "answer": "Filtration",
        "explain": "The correct answer is Filtration."
      },
      {
        "q": "Which technique can separate coloured dyes in ink?",
        "options": [
          "Paper chromatography",
          "Magnetism",
          "Decanting",
          "Boiling"
        ],
        "answer": "Paper chromatography",
        "explain": "The correct answer is Paper chromatography."
      },
      {
        "q": "A pure substance has:",
        "options": [
          "a fixed composition",
          "many random components",
          "no particles",
          "no melting point"
        ],
        "answer": "a fixed composition",
        "explain": "The correct answer is a fixed composition."
      },
      {
        "q": "Which is a chemical change?",
        "options": [
          "Burning paper",
          "Melting ice",
          "Boiling water",
          "Dissolving sugar"
        ],
        "answer": "Burning paper",
        "explain": "The correct answer is Burning paper."
      }
    ],
    "Models & Cells": [
      {
        "q": "Which structure controls what enters and leaves a cell?",
        "options": [
          "Cell membrane",
          "Cell wall",
          "Nucleus",
          "Vacuole"
        ],
        "answer": "Cell membrane",
        "explain": "The correct answer is Cell membrane."
      },
      {
        "q": "Which cell structure contains genetic material?",
        "options": [
          "Nucleus",
          "Cytoplasm",
          "Cell wall",
          "Chloroplast"
        ],
        "answer": "Nucleus",
        "explain": "The correct answer is Nucleus."
      },
      {
        "q": "A model is useful because it helps us:",
        "options": [
          "represent and explain ideas",
          "avoid evidence",
          "replace all experiments",
          "make facts disappear"
        ],
        "answer": "represent and explain ideas",
        "explain": "The correct answer is represent and explain ideas."
      },
      {
        "q": "Which is found in plant cells but not animal cells?",
        "options": [
          "Cell wall",
          "Cell membrane",
          "Cytoplasm",
          "Nucleus"
        ],
        "answer": "Cell wall",
        "explain": "The correct answer is Cell wall."
      },
      {
        "q": "The cytoplasm is where many cell activities:",
        "options": [
          "take place",
          "are erased",
          "become solid",
          "stop forever"
        ],
        "answer": "take place",
        "explain": "The correct answer is take place."
      }
    ],
    "Interactions": [
      {
        "q": "Which gas is needed for burning?",
        "options": [
          "Oxygen",
          "Carbon dioxide",
          "Nitrogen",
          "Hydrogen"
        ],
        "answer": "Oxygen",
        "explain": "The correct answer is Oxygen."
      },
      {
        "q": "A force can change an object's:",
        "options": [
          "motion or shape",
          "mass only",
          "colour only",
          "name only"
        ],
        "answer": "motion or shape",
        "explain": "The correct answer is motion or shape."
      },
      {
        "q": "What is the SI unit of force?",
        "options": [
          "Newton",
          "Joule",
          "Watt",
          "Pascal"
        ],
        "answer": "Newton",
        "explain": "The correct answer is Newton."
      },
      {
        "q": "Friction usually acts:",
        "options": [
          "opposite to motion",
          "with gravity only",
          "in the same direction always",
          "only upward"
        ],
        "answer": "opposite to motion",
        "explain": "The correct answer is opposite to motion."
      },
      {
        "q": "A magnet attracts:",
        "options": [
          "iron",
          "plastic",
          "wood",
          "glass"
        ],
        "answer": "iron",
        "explain": "The correct answer is iron."
      }
    ],
    "Systems & Energy": [
      {
        "q": "Which organ system mainly transports oxygen around the body?",
        "options": [
          "Circulatory system",
          "Digestive system",
          "Skeletal system",
          "Nervous system"
        ],
        "answer": "Circulatory system",
        "explain": "The correct answer is Circulatory system."
      },
      {
        "q": "Energy cannot be created or destroyed. It can only be:",
        "options": [
          "converted from one form to another",
          "lost forever",
          "made from nothing",
          "measured only in grams"
        ],
        "answer": "converted from one form to another",
        "explain": "The correct answer is converted from one form to another."
      },
      {
        "q": "Which system breaks down food?",
        "options": [
          "Digestive system",
          "Respiratory system",
          "Muscular system",
          "Reproductive system"
        ],
        "answer": "Digestive system",
        "explain": "The correct answer is Digestive system."
      },
      {
        "q": "Which energy store is linked to height above ground?",
        "options": [
          "Gravitational potential energy",
          "Chemical energy",
          "Sound energy",
          "Thermal energy only"
        ],
        "answer": "Gravitational potential energy",
        "explain": "The correct answer is Gravitational potential energy."
      },
      {
        "q": "In a food chain, arrows show:",
        "options": [
          "direction of energy transfer",
          "the largest animal",
          "where water flows",
          "the oldest organism"
        ],
        "answer": "direction of energy transfer",
        "explain": "The correct answer is direction of energy transfer."
      }
    ]
  },
  "English Language": {
    "Grammar": [
      {
        "q": "Choose the correct sentence.",
        "options": [
          "Neither of the boys is ready.",
          "Neither of the boys are ready.",
          "Neither the boys is ready.",
          "Neither boys is ready."
        ],
        "answer": "Neither of the boys is ready.",
        "explain": "The correct answer is Neither of the boys is ready.."
      },
      {
        "q": "Which word is an adverb in: She spoke softly.",
        "options": [
          "softly",
          "She",
          "spoke",
          "the sentence has no adverb"
        ],
        "answer": "softly",
        "explain": "The correct answer is softly."
      },
      {
        "q": "Choose the correct verb: The list of items ___ on the table.",
        "options": [
          "is",
          "are",
          "were",
          "be"
        ],
        "answer": "is",
        "explain": "The correct answer is is."
      },
      {
        "q": "Which sentence uses the correct tense?",
        "options": [
          "Evans has completed his homework.",
          "Evans have completed his homework.",
          "Evans completed has his homework.",
          "Evans completing his homework."
        ],
        "answer": "Evans has completed his homework.",
        "explain": "The correct answer is Evans has completed his homework.."
      },
      {
        "q": "Which is a conjunction?",
        "options": [
          "although",
          "quickly",
          "blue",
          "table"
        ],
        "answer": "although",
        "explain": "The correct answer is although."
      }
    ],
    "Vocabulary": [
      {
        "q": "Which word is closest in meaning to 'evaluate'?",
        "options": [
          "assess",
          "ignore",
          "decorate",
          "repeat"
        ],
        "answer": "assess",
        "explain": "The correct answer is assess."
      },
      {
        "q": "Which word means 'able to change to suit new conditions'?",
        "options": [
          "adaptable",
          "fragile",
          "ordinary",
          "visible"
        ],
        "answer": "adaptable",
        "explain": "The correct answer is adaptable."
      },
      {
        "q": "Which word is closest to 'credible'?",
        "options": [
          "trustworthy",
          "colourful",
          "silent",
          "temporary"
        ],
        "answer": "trustworthy",
        "explain": "The correct answer is trustworthy."
      },
      {
        "q": "Which word is opposite of 'scarce'?",
        "options": [
          "abundant",
          "rare",
          "limited",
          "insufficient"
        ],
        "answer": "abundant",
        "explain": "The correct answer is abundant."
      },
      {
        "q": "Which phrase means 'to support with evidence'?",
        "options": [
          "substantiate",
          "contradict",
          "decorate",
          "interrupt"
        ],
        "answer": "substantiate",
        "explain": "The correct answer is substantiate."
      }
    ],
    "Reading & Viewing": [
      {
        "q": "The main idea of a paragraph is usually:",
        "options": [
          "the central point",
          "a random detail",
          "the longest word",
          "the final punctuation mark"
        ],
        "answer": "the central point",
        "explain": "The correct answer is the central point."
      },
      {
        "q": "An inference is:",
        "options": [
          "a conclusion based on clues",
          "a copied sentence",
          "a spelling rule",
          "a title"
        ],
        "answer": "a conclusion based on clues",
        "explain": "The correct answer is a conclusion based on clues."
      },
      {
        "q": "Tone means:",
        "options": [
          "the writer's attitude or feeling",
          "the number of words",
          "the page size",
          "the font colour"
        ],
        "answer": "the writer's attitude or feeling",
        "explain": "The correct answer is the writer's attitude or feeling."
      },
      {
        "q": "A visual text may use images, layout and colour to:",
        "options": [
          "create meaning",
          "remove meaning",
          "avoid communication",
          "replace all language"
        ],
        "answer": "create meaning",
        "explain": "The correct answer is create meaning."
      },
      {
        "q": "A fact is different from an opinion because a fact can be:",
        "options": [
          "verified",
          "felt only",
          "always emotional",
          "never checked"
        ],
        "answer": "verified",
        "explain": "The correct answer is verified."
      }
    ],
    "Writing": [
      {
        "q": "A formal email should usually begin with:",
        "options": [
          "Dear Sir/Madam,",
          "Yo,",
          "Hey bro,",
          "What's up?"
        ],
        "answer": "Dear Sir/Madam,",
        "explain": "The correct answer is Dear Sir/Madam,."
      },
      {
        "q": "A good summary should be:",
        "options": [
          "concise and focused on key points",
          "longer than the original",
          "full of personal opinions",
          "only copied phrases"
        ],
        "answer": "concise and focused on key points",
        "explain": "The correct answer is concise and focused on key points."
      },
      {
        "q": "A persuasive essay aims to:",
        "options": [
          "convince the reader",
          "list random words",
          "avoid a viewpoint",
          "describe only colours"
        ],
        "answer": "convince the reader",
        "explain": "The correct answer is convince the reader."
      },
      {
        "q": "A topic sentence usually introduces:",
        "options": [
          "the main idea of a paragraph",
          "the page number",
          "the author's age",
          "the font used"
        ],
        "answer": "the main idea of a paragraph",
        "explain": "The correct answer is the main idea of a paragraph."
      },
      {
        "q": "Using paragraphing helps the reader follow:",
        "options": [
          "organised ideas",
          "spelling errors",
          "random jumps",
          "unrelated facts"
        ],
        "answer": "organised ideas",
        "explain": "The correct answer is organised ideas."
      }
    ],
    "Editing": [
      {
        "q": "Which sentence uses punctuation correctly?",
        "options": [
          "After school, Evans revised his notes.",
          "After school Evans, revised his notes.",
          "After, school Evans revised his notes.",
          "After school Evans revised, his notes."
        ],
        "answer": "After school, Evans revised his notes.",
        "explain": "The correct answer is After school, Evans revised his notes.."
      },
      {
        "q": "Which sentence is more concise?",
        "options": [
          "The test was difficult.",
          "The test was of a difficult nature.",
          "It was a test and it was difficult.",
          "The test, which was a test, was difficult."
        ],
        "answer": "The test was difficult.",
        "explain": "The correct answer is The test was difficult.."
      },
      {
        "q": "Which word best replaces 'very big'?",
        "options": [
          "huge",
          "tiny",
          "slow",
          "weak"
        ],
        "answer": "huge",
        "explain": "The correct answer is huge."
      },
      {
        "q": "Which sentence avoids repetition?",
        "options": [
          "Cyrus enjoyed the game because it was exciting.",
          "Cyrus enjoyed the game because the game was exciting.",
          "Cyrus enjoyed because game exciting.",
          "Game Cyrus enjoyed game exciting."
        ],
        "answer": "Cyrus enjoyed the game because it was exciting.",
        "explain": "The correct answer is Cyrus enjoyed the game because it was exciting.."
      },
      {
        "q": "Which is the correct spelling?",
        "options": [
          "necessary",
          "neccessary",
          "necessery",
          "necesary"
        ],
        "answer": "necessary",
        "explain": "The correct answer is necessary."
      }
    ]
  },
  "Food & Consumer Education": {
    "Nutrition & Health": [
      {
        "q": "Which nutrient is the body's main source of energy?",
        "options": [
          "Carbohydrate",
          "Vitamin C",
          "Calcium",
          "Water"
        ],
        "answer": "Carbohydrate",
        "explain": "The correct answer is Carbohydrate."
      },
      {
        "q": "Protein is important mainly for:",
        "options": [
          "growth and repair",
          "keeping food cold",
          "making food sweet",
          "removing bacteria"
        ],
        "answer": "growth and repair",
        "explain": "The correct answer is growth and repair."
      },
      {
        "q": "Too much sugar intake may increase the risk of:",
        "options": [
          "diet-related health problems",
          "stronger bones only",
          "better eyesight only",
          "more sleep only"
        ],
        "answer": "diet-related health problems",
        "explain": "The correct answer is diet-related health problems."
      },
      {
        "q": "My Healthy Plate encourages eating more:",
        "options": [
          "fruit and vegetables",
          "fried snacks",
          "sugary drinks",
          "processed meat only"
        ],
        "answer": "fruit and vegetables",
        "explain": "The correct answer is fruit and vegetables."
      },
      {
        "q": "Calcium is important for:",
        "options": [
          "strong bones and teeth",
          "food colour",
          "sweetness",
          "washing hands"
        ],
        "answer": "strong bones and teeth",
        "explain": "The correct answer is strong bones and teeth."
      }
    ],
    "Meal Planning": [
      {
        "q": "A balanced meal should include:",
        "options": [
          "a variety of food groups",
          "only fried food",
          "only sweet drinks",
          "only snacks"
        ],
        "answer": "a variety of food groups",
        "explain": "The correct answer is a variety of food groups."
      },
      {
        "q": "Meal planning should consider:",
        "options": [
          "dietary needs and budget",
          "packaging colour only",
          "advertisement only",
          "random choices"
        ],
        "answer": "dietary needs and budget",
        "explain": "The correct answer is dietary needs and budget."
      },
      {
        "q": "A healthier cooking method is:",
        "options": [
          "steaming",
          "deep-frying daily",
          "burning food",
          "adding excessive oil"
        ],
        "answer": "steaming",
        "explain": "The correct answer is steaming."
      },
      {
        "q": "Modifying a meal means:",
        "options": [
          "making changes to better meet needs",
          "throwing it away",
          "removing all nutrients",
          "ignoring the eater"
        ],
        "answer": "making changes to better meet needs",
        "explain": "The correct answer is making changes to better meet needs."
      },
      {
        "q": "A target group could refer to:",
        "options": [
          "people with specific needs",
          "only one brand",
          "a cooking pot",
          "a receipt"
        ],
        "answer": "people with specific needs",
        "explain": "The correct answer is people with specific needs."
      }
    ],
    "Food Safety": [
      {
        "q": "Which practice reduces the risk of food poisoning?",
        "options": [
          "Wash hands before handling food",
          "Leave cooked food overnight",
          "Use same board for raw chicken and salad",
          "Taste expired food"
        ],
        "answer": "Wash hands before handling food",
        "explain": "The correct answer is Wash hands before handling food."
      },
      {
        "q": "Perishable food should usually be stored:",
        "options": [
          "in the refrigerator",
          "under the sun",
          "beside cleaning chemicals",
          "open on the table"
        ],
        "answer": "in the refrigerator",
        "explain": "The correct answer is in the refrigerator."
      },
      {
        "q": "Raw and cooked food should be kept separate to prevent:",
        "options": [
          "cross-contamination",
          "evaporation",
          "interest rates",
          "tone colour"
        ],
        "answer": "cross-contamination",
        "explain": "The correct answer is cross-contamination."
      },
      {
        "q": "The danger zone for bacterial growth is linked to:",
        "options": [
          "unsafe food temperatures",
          "musical pitch",
          "visual rhythm",
          "algebra"
        ],
        "answer": "unsafe food temperatures",
        "explain": "The correct answer is unsafe food temperatures."
      },
      {
        "q": "Before using canned food, check for:",
        "options": [
          "expiry date and dents",
          "font style only",
          "price only",
          "colour only"
        ],
        "answer": "expiry date and dents",
        "explain": "The correct answer is expiry date and dents."
      }
    ],
    "Consumer Literacy": [
      {
        "q": "A product label can help consumers check:",
        "options": [
          "nutrition and ingredients",
          "only the cashier's name",
          "the weather",
          "the shop music"
        ],
        "answer": "nutrition and ingredients",
        "explain": "The correct answer is nutrition and ingredients."
      },
      {
        "q": "A need is different from a want because a need is:",
        "options": [
          "essential",
          "always expensive",
          "always fun",
          "optional"
        ],
        "answer": "essential",
        "explain": "The correct answer is essential."
      },
      {
        "q": "A budget helps a person:",
        "options": [
          "manage money and spending",
          "spend without thinking",
          "avoid saving",
          "buy everything online"
        ],
        "answer": "manage money and spending",
        "explain": "The correct answer is manage money and spending."
      },
      {
        "q": "Using credit responsibly means:",
        "options": [
          "borrowing only what can be repaid",
          "borrowing without limits",
          "ignoring bills",
          "sharing passwords"
        ],
        "answer": "borrowing only what can be repaid",
        "explain": "The correct answer is borrowing only what can be repaid."
      },
      {
        "q": "A discerning consumer should compare products by:",
        "options": [
          "reading labels and checking needs",
          "choosing only bright packaging",
          "buying most expensive item",
          "ignoring price"
        ],
        "answer": "reading labels and checking needs",
        "explain": "The correct answer is reading labels and checking needs."
      }
    ],
    "Sustainability & Food Culture": [
      {
        "q": "Which choice supports sustainable consumption?",
        "options": [
          "Reduce food waste",
          "Throw away leftovers immediately",
          "Buy more than needed",
          "Avoid planning meals"
        ],
        "answer": "Reduce food waste",
        "explain": "The correct answer is Reduce food waste."
      },
      {
        "q": "Food culture refers to:",
        "options": [
          "food practices linked to people and traditions",
          "only food prices",
          "only kitchen tools",
          "only spelling"
        ],
        "answer": "food practices linked to people and traditions",
        "explain": "The correct answer is food practices linked to people and traditions."
      },
      {
        "q": "Choosing seasonal or local produce may help:",
        "options": [
          "reduce environmental impact",
          "increase waste always",
          "remove nutrition",
          "avoid budgeting"
        ],
        "answer": "reduce environmental impact",
        "explain": "The correct answer is reduce environmental impact."
      },
      {
        "q": "A reusable container helps reduce:",
        "options": [
          "single-use waste",
          "food safety",
          "nutrients",
          "savings"
        ],
        "answer": "single-use waste",
        "explain": "The correct answer is single-use waste."
      },
      {
        "q": "Appreciating Singapore's food culture means respecting:",
        "options": [
          "diverse food traditions",
          "only one cuisine",
          "only imported food",
          "only fast food"
        ],
        "answer": "diverse food traditions",
        "explain": "The correct answer is diverse food traditions."
      }
    ]
  },
  "Art": {
    "Visual Qualities": [
      {
        "q": "Which is a visual element in art?",
        "options": [
          "Line",
          "Boiling",
          "Gravity",
          "Adverb"
        ],
        "answer": "Line",
        "explain": "The correct answer is Line."
      },
      {
        "q": "Warm colours include:",
        "options": [
          "red and orange",
          "blue and green",
          "black and white",
          "grey and silver only"
        ],
        "answer": "red and orange",
        "explain": "The correct answer is red and orange."
      },
      {
        "q": "Texture in art refers to:",
        "options": [
          "surface quality",
          "food temperature",
          "grammar tense",
          "musical speed"
        ],
        "answer": "surface quality",
        "explain": "The correct answer is surface quality."
      },
      {
        "q": "Contrast helps to:",
        "options": [
          "create visual difference",
          "remove all focus",
          "make everything identical",
          "replace meaning"
        ],
        "answer": "create visual difference",
        "explain": "The correct answer is create visual difference."
      },
      {
        "q": "Composition refers to:",
        "options": [
          "how visual elements are arranged",
          "how food is cooked",
          "how force is measured",
          "how words rhyme only"
        ],
        "answer": "how visual elements are arranged",
        "explain": "The correct answer is how visual elements are arranged."
      }
    ],
    "Art Forms & Media": [
      {
        "q": "A sculpture is usually:",
        "options": [
          "three-dimensional",
          "only a paragraph",
          "always a sound",
          "only a flat graph"
        ],
        "answer": "three-dimensional",
        "explain": "The correct answer is three-dimensional."
      },
      {
        "q": "Watercolour is an example of:",
        "options": [
          "a painting medium",
          "a musical instrument",
          "a food nutrient",
          "a grammar rule"
        ],
        "answer": "a painting medium",
        "explain": "The correct answer is a painting medium."
      },
      {
        "q": "Digital art uses:",
        "options": [
          "digital tools or technology",
          "only clay",
          "only boiling",
          "only algebra"
        ],
        "answer": "digital tools or technology",
        "explain": "The correct answer is digital tools or technology."
      },
      {
        "q": "A collage is made by:",
        "options": [
          "combining different materials or images",
          "measuring speed",
          "cooking rice",
          "writing equations only"
        ],
        "answer": "combining different materials or images",
        "explain": "The correct answer is combining different materials or images."
      },
      {
        "q": "Printmaking often involves:",
        "options": [
          "transferring an image from a surface",
          "storing food",
          "singing a melody",
          "solving for x"
        ],
        "answer": "transferring an image from a surface",
        "explain": "The correct answer is transferring an image from a surface."
      }
    ],
    "Artistic Processes": [
      {
        "q": "Ideation means:",
        "options": [
          "generating and developing ideas",
          "cleaning brushes only",
          "copying answers",
          "framing a work only"
        ],
        "answer": "generating and developing ideas",
        "explain": "The correct answer is generating and developing ideas."
      },
      {
        "q": "Close observation helps an artist:",
        "options": [
          "notice details",
          "avoid looking",
          "remove meaning",
          "stop improving"
        ],
        "answer": "notice details",
        "explain": "The correct answer is notice details."
      },
      {
        "q": "An art portfolio usually shows:",
        "options": [
          "process and development",
          "only final exam marks",
          "only lunch choices",
          "only equations"
        ],
        "answer": "process and development",
        "explain": "The correct answer is process and development."
      },
      {
        "q": "Experimenting with media helps artists:",
        "options": [
          "explore possibilities",
          "avoid creativity",
          "remove all choices",
          "skip thinking"
        ],
        "answer": "explore possibilities",
        "explain": "The correct answer is explore possibilities."
      },
      {
        "q": "Reflecting on artwork helps students:",
        "options": [
          "improve and explain choices",
          "hide mistakes",
          "avoid feedback",
          "stop experimenting"
        ],
        "answer": "improve and explain choices",
        "explain": "The correct answer is improve and explain choices."
      }
    ],
    "Context & Meaning": [
      {
        "q": "Art can help students connect with:",
        "options": [
          "society and culture",
          "only multiplication",
          "only food labels",
          "only cell walls"
        ],
        "answer": "society and culture",
        "explain": "The correct answer is society and culture."
      },
      {
        "q": "Context in art helps us understand:",
        "options": [
          "meaning and background",
          "only the price",
          "only the size",
          "only the spelling"
        ],
        "answer": "meaning and background",
        "explain": "The correct answer is meaning and background."
      },
      {
        "q": "Art can communicate:",
        "options": [
          "ideas, values and emotions",
          "only numbers",
          "only nutrients",
          "only force units"
        ],
        "answer": "ideas, values and emotions",
        "explain": "The correct answer is ideas, values and emotions."
      },
      {
        "q": "An informed audience tries to:",
        "options": [
          "interpret artwork thoughtfully",
          "ignore evidence",
          "avoid looking",
          "guess only price"
        ],
        "answer": "interpret artwork thoughtfully",
        "explain": "The correct answer is interpret artwork thoughtfully."
      },
      {
        "q": "Cultural context can shape:",
        "options": [
          "how art is made and understood",
          "only paper size",
          "only spelling",
          "only calculator use"
        ],
        "answer": "how art is made and understood",
        "explain": "The correct answer is how art is made and understood."
      }
    ]
  },
  "Music": {
    "Listening": [
      {
        "q": "Listening in music involves identifying:",
        "options": [
          "musical elements and meaning",
          "only spelling errors",
          "only food labels",
          "only angles"
        ],
        "answer": "musical elements and meaning",
        "explain": "The correct answer is musical elements and meaning."
      },
      {
        "q": "A listener can describe music by noticing:",
        "options": [
          "tempo, pitch and dynamics",
          "discounts only",
          "cell walls only",
          "grammar only"
        ],
        "answer": "tempo, pitch and dynamics",
        "explain": "The correct answer is tempo, pitch and dynamics."
      },
      {
        "q": "Music can evoke:",
        "options": [
          "feelings and emotions",
          "only numbers",
          "only food labels",
          "only force units"
        ],
        "answer": "feelings and emotions",
        "explain": "The correct answer is feelings and emotions."
      },
      {
        "q": "Critical listening means:",
        "options": [
          "listening carefully and making thoughtful comments",
          "ignoring sound",
          "guessing randomly",
          "copying only"
        ],
        "answer": "listening carefully and making thoughtful comments",
        "explain": "The correct answer is listening carefully and making thoughtful comments."
      },
      {
        "q": "A repeated musical idea may be called:",
        "options": [
          "a motif",
          "a receipt",
          "a polygon",
          "a nutrient"
        ],
        "answer": "a motif",
        "explain": "The correct answer is a motif."
      }
    ],
    "Creating": [
      {
        "q": "Creating music can include:",
        "options": [
          "composing or arranging sounds",
          "boiling water",
          "solving equations only",
          "drawing polygons only"
        ],
        "answer": "composing or arranging sounds",
        "explain": "The correct answer is composing or arranging sounds."
      },
      {
        "q": "A composer uses musical elements to:",
        "options": [
          "communicate ideas or feelings",
          "make food safer",
          "measure area only",
          "avoid expression"
        ],
        "answer": "communicate ideas or feelings",
        "explain": "The correct answer is communicate ideas or feelings."
      },
      {
        "q": "Improvisation means:",
        "options": [
          "creating music spontaneously",
          "copying silently",
          "freezing sound",
          "reading a food label"
        ],
        "answer": "creating music spontaneously",
        "explain": "The correct answer is creating music spontaneously."
      },
      {
        "q": "A good musical idea can be developed by:",
        "options": [
          "repetition and variation",
          "removing all rhythm",
          "avoiding listening",
          "using only silence"
        ],
        "answer": "repetition and variation",
        "explain": "The correct answer is repetition and variation."
      },
      {
        "q": "When creating music in a group, students should:",
        "options": [
          "collaborate and listen to one another",
          "ignore others",
          "play louder always",
          "avoid feedback"
        ],
        "answer": "collaborate and listen to one another",
        "explain": "The correct answer is collaborate and listen to one another."
      }
    ],
    "Performing": [
      {
        "q": "Performing music usually involves:",
        "options": [
          "presenting music to an audience",
          "separating mixtures",
          "writing a receipt",
          "measuring temperature"
        ],
        "answer": "presenting music to an audience",
        "explain": "The correct answer is presenting music to an audience."
      },
      {
        "q": "Playing in an ensemble develops:",
        "options": [
          "collaboration",
          "food poisoning",
          "evaporation",
          "punctuation only"
        ],
        "answer": "collaboration",
        "explain": "The correct answer is collaboration."
      },
      {
        "q": "A performer should consider:",
        "options": [
          "accuracy and expression",
          "food expiry dates only",
          "GST only",
          "cell membranes only"
        ],
        "answer": "accuracy and expression",
        "explain": "The correct answer is accuracy and expression."
      },
      {
        "q": "Practice helps a performer build:",
        "options": [
          "confidence and fluency",
          "random errors",
          "less control",
          "no rhythm"
        ],
        "answer": "confidence and fluency",
        "explain": "The correct answer is confidence and fluency."
      },
      {
        "q": "Stage presence refers to:",
        "options": [
          "how a performer presents themselves",
          "how to calculate mean",
          "how to store meat",
          "how to draw a graph only"
        ],
        "answer": "how a performer presents themselves",
        "explain": "The correct answer is how a performer presents themselves."
      }
    ],
    "Musical Elements": [
      {
        "q": "Which is a musical element?",
        "options": [
          "Rhythm",
          "Protein",
          "Gradient",
          "Chromatography"
        ],
        "answer": "Rhythm",
        "explain": "The correct answer is Rhythm."
      },
      {
        "q": "Pitch refers to:",
        "options": [
          "how high or low a sound is",
          "how heavy a sound is",
          "how spicy a sound is",
          "how square a sound is"
        ],
        "answer": "how high or low a sound is",
        "explain": "The correct answer is how high or low a sound is."
      },
      {
        "q": "Tempo means:",
        "options": [
          "speed of music",
          "colour of music",
          "height of music",
          "food safety rule"
        ],
        "answer": "speed of music",
        "explain": "The correct answer is speed of music."
      },
      {
        "q": "Dynamics refer to:",
        "options": [
          "loudness or softness",
          "area and perimeter",
          "nutrients",
          "visual symmetry"
        ],
        "answer": "loudness or softness",
        "explain": "The correct answer is loudness or softness."
      },
      {
        "q": "Timbre refers to:",
        "options": [
          "tone colour or sound quality",
          "GST",
          "cell division",
          "punctuation"
        ],
        "answer": "tone colour or sound quality",
        "explain": "The correct answer is tone colour or sound quality."
      }
    ],
    "Context & Culture": [
      {
        "q": "Music can help people understand:",
        "options": [
          "local and global cultures",
          "only multiplication",
          "only discounts",
          "only cell membranes"
        ],
        "answer": "local and global cultures",
        "explain": "The correct answer is local and global cultures."
      },
      {
        "q": "Music is shaped by:",
        "options": [
          "historical, social and cultural contexts",
          "only calculator brands",
          "only food prices",
          "only grammar rules"
        ],
        "answer": "historical, social and cultural contexts",
        "explain": "The correct answer is historical, social and cultural contexts."
      },
      {
        "q": "Knowing the context of music can affect:",
        "options": [
          "how it is experienced and understood",
          "its boiling point",
          "its angle sum",
          "its spelling only"
        ],
        "answer": "how it is experienced and understood",
        "explain": "The correct answer is how it is experienced and understood."
      },
      {
        "q": "Music can build community by:",
        "options": [
          "connecting people through shared experiences",
          "removing teamwork",
          "stopping communication",
          "avoiding culture"
        ],
        "answer": "connecting people through shared experiences",
        "explain": "The correct answer is connecting people through shared experiences."
      },
      {
        "q": "After a performance, reflection helps students:",
        "options": [
          "improve musical decisions",
          "avoid listening",
          "remove rhythm",
          "ignore feedback"
        ],
        "answer": "improve musical decisions",
        "explain": "The correct answer is improve musical decisions."
      }
    ]
  },
  "History": {
    "Historical Concepts": [
      {
        "q": "Chronology in History refers to:",
        "options": [
          "putting events in time order",
          "guessing why people acted",
          "drawing a map",
          "writing only opinions"
        ],
        "answer": "putting events in time order",
        "explain": "The correct answer is putting events in time order."
      },
      {
        "q": "Historical evidence is usually derived from:",
        "options": [
          "historical sources",
          "random guesses",
          "modern advertisements only",
          "personal feelings only"
        ],
        "answer": "historical sources",
        "explain": "The correct answer is historical sources."
      },
      {
        "q": "Causation in History helps us understand:",
        "options": [
          "why and how events happened",
          "the colour of old books",
          "only exact dates",
          "only geography maps"
        ],
        "answer": "why and how events happened",
        "explain": "The correct answer is why and how events happened."
      },
      {
        "q": "Change and continuity means studying:",
        "options": [
          "what changed and what stayed the same over time",
          "only what happened yesterday",
          "only one person's opinion",
          "only future events"
        ],
        "answer": "what changed and what stayed the same over time",
        "explain": "The correct answer is what changed and what stayed the same over time."
      },
      {
        "q": "Historical significance asks:",
        "options": [
          "why an event, person or idea mattered",
          "how heavy a source is",
          "how many pages a textbook has",
          "whether a picture is colourful"
        ],
        "answer": "why an event, person or idea mattered",
        "explain": "The correct answer is why an event, person or idea mattered."
      }
    ],
    "Source Skills": [
      {
        "q": "When examining a source, historians should consider its origin, nature, purpose and:",
        "options": [
          "content",
          "font size",
          "price",
          "weather"
        ],
        "answer": "content",
        "explain": "The correct answer is content."
      },
      {
        "q": "A biased source is one that may:",
        "options": [
          "show a particular point of view",
          "be automatically useless",
          "have no words",
          "always be from the future"
        ],
        "answer": "show a particular point of view",
        "explain": "The correct answer is show a particular point of view."
      },
      {
        "q": "Corroboration means:",
        "options": [
          "checking one source against other sources",
          "copying one source exactly",
          "ignoring evidence",
          "changing the date"
        ],
        "answer": "checking one source against other sources",
        "explain": "The correct answer is checking one source against other sources."
      },
      {
        "q": "A source's purpose refers to:",
        "options": [
          "why it was created",
          "how expensive it is",
          "how long it is",
          "where it is stored only"
        ],
        "answer": "why it was created",
        "explain": "The correct answer is why it was created."
      },
      {
        "q": "A reliable historical answer should be supported by:",
        "options": [
          "evidence",
          "guesswork",
          "the longest paragraph only",
          "a random picture"
        ],
        "answer": "evidence",
        "explain": "The correct answer is evidence."
      }
    ],
    "Historical Inquiry": [
      {
        "q": "Historical inquiry begins with:",
        "options": [
          "asking useful questions",
          "memorising every word",
          "drawing only cartoons",
          "ignoring sources"
        ],
        "answer": "asking useful questions",
        "explain": "The correct answer is asking useful questions."
      },
      {
        "q": "A good historical question should be:",
        "options": [
          "focused and investigable",
          "impossible to answer",
          "unrelated to the past",
          "based only on feelings"
        ],
        "answer": "focused and investigable",
        "explain": "The correct answer is focused and investigable."
      },
      {
        "q": "A reasoned historical interpretation should be:",
        "options": [
          "based on substantiated arguments",
          "based on the loudest opinion",
          "copied from one sentence",
          "without evidence"
        ],
        "answer": "based on substantiated arguments",
        "explain": "The correct answer is based on substantiated arguments."
      },
      {
        "q": "Historical empathy means:",
        "options": [
          "understanding people in the context of their time",
          "judging the past only by today's norms",
          "agreeing with everyone",
          "pretending sources are fake"
        ],
        "answer": "understanding people in the context of their time",
        "explain": "The correct answer is understanding people in the context of their time."
      },
      {
        "q": "A balanced answer should:",
        "options": [
          "consider different viewpoints",
          "use only one viewpoint",
          "avoid all evidence",
          "ignore the question"
        ],
        "answer": "consider different viewpoints",
        "explain": "The correct answer is consider different viewpoints."
      }
    ],
    "Singapore's Past": [
      {
        "q": "Lower Secondary History studies Singapore's past in relation to:",
        "options": [
          "regional and global forces",
          "only sports results",
          "only weather",
          "only modern shopping malls"
        ],
        "answer": "regional and global forces",
        "explain": "The correct answer is regional and global forces."
      },
      {
        "q": "Singapore's past helps students understand:",
        "options": [
          "how the present was shaped",
          "why exams are cancelled",
          "how to cook rice",
          "only future inventions"
        ],
        "answer": "how the present was shaped",
        "explain": "The correct answer is how the present was shaped."
      },
      {
        "q": "The study of Singapore history includes shifts in:",
        "options": [
          "political status",
          "musical pitch",
          "cell structure",
          "food labels"
        ],
        "answer": "political status",
        "explain": "The correct answer is political status."
      },
      {
        "q": "Understanding past challenges helps citizens:",
        "options": [
          "make connections between past and present",
          "avoid civic responsibility",
          "ignore national identity",
          "forget evidence"
        ],
        "answer": "make connections between past and present",
        "explain": "The correct answer is make connections between past and present."
      },
      {
        "q": "National Education in History helps students understand Singapore's:",
        "options": [
          "journey and context",
          "shopping discounts",
          "restaurant menus",
          "music tempo"
        ],
        "answer": "journey and context",
        "explain": "The correct answer is journey and context."
      }
    ]
  },
  "Geography": {
    "Introduction to Geography": [
      {
        "q": "Geography studies phenomena in:",
        "options": [
          "physical and built environments",
          "only grammar",
          "only music",
          "only food recipes"
        ],
        "answer": "physical and built environments",
        "explain": "The correct answer is physical and built environments."
      },
      {
        "q": "Space in Geography refers to:",
        "options": [
          "a physical area on Earth's surface",
          "a paragraph",
          "a musical note",
          "a cooking method"
        ],
        "answer": "a physical area on Earth's surface",
        "explain": "The correct answer is a physical area on Earth's surface."
      },
      {
        "q": "Place refers to an area that has:",
        "options": [
          "meaning to people",
          "only numbers",
          "only punctuation",
          "only mass"
        ],
        "answer": "meaning to people",
        "explain": "The correct answer is meaning to people."
      },
      {
        "q": "Scale can refer to local, national, regional and:",
        "options": [
          "global levels",
          "musical levels",
          "grammar levels",
          "kitchen levels"
        ],
        "answer": "global levels",
        "explain": "The correct answer is global levels."
      },
      {
        "q": "Geographers often use maps to study:",
        "options": [
          "location and patterns",
          "sentence tense only",
          "food nutrients only",
          "historical empathy only"
        ],
        "answer": "location and patterns",
        "explain": "The correct answer is location and patterns."
      }
    ],
    "Geographical Inquiry": [
      {
        "q": "Interpreting geographical data helps students recognise:",
        "options": [
          "patterns and relationships",
          "only punctuation",
          "only melody",
          "only cell walls"
        ],
        "answer": "patterns and relationships",
        "explain": "The correct answer is patterns and relationships."
      },
      {
        "q": "Geographical inquiry starts by posing:",
        "options": [
          "geographical questions",
          "random answers",
          "only recipes",
          "only spelling lists"
        ],
        "answer": "geographical questions",
        "explain": "The correct answer is geographical questions."
      },
      {
        "q": "Fieldwork helps geographers collect:",
        "options": [
          "primary data",
          "fictional characters",
          "musical rhythm",
          "grammar rules"
        ],
        "answer": "primary data",
        "explain": "The correct answer is primary data."
      },
      {
        "q": "GIS stands for:",
        "options": [
          "Geographic Information Systems",
          "General Internet Score",
          "Global Instrument Sound",
          "Graphical Ink Style"
        ],
        "answer": "Geographic Information Systems",
        "explain": "The correct answer is Geographic Information Systems."
      },
      {
        "q": "A geographical investigation should be based on:",
        "options": [
          "evidence and data",
          "guessing only",
          "copying blindly",
          "ignoring places"
        ],
        "answer": "evidence and data",
        "explain": "The correct answer is evidence and data."
      }
    ],
    "Water": [
      {
        "q": "Water is considered a natural resource because people:",
        "options": [
          "depend on it for life and activities",
          "use it only for art",
          "cannot measure it",
          "do not need it"
        ],
        "answer": "depend on it for life and activities",
        "explain": "The correct answer is depend on it for life and activities."
      },
      {
        "q": "One strategy to improve water quality is:",
        "options": [
          "anti-pollution laws",
          "adding more waste",
          "using more plastic",
          "ignoring rivers"
        ],
        "answer": "anti-pollution laws",
        "explain": "The correct answer is anti-pollution laws."
      },
      {
        "q": "Desalination refers to:",
        "options": [
          "removing salt from seawater",
          "freezing land",
          "cutting forests",
          "building roads only"
        ],
        "answer": "removing salt from seawater",
        "explain": "The correct answer is removing salt from seawater."
      },
      {
        "q": "Water conservation aims to:",
        "options": [
          "reduce water consumption",
          "increase wastage",
          "pollute reservoirs",
          "remove all technology"
        ],
        "answer": "reduce water consumption",
        "explain": "The correct answer is reduce water consumption."
      },
      {
        "q": "Importing water may involve:",
        "options": [
          "international agreements",
          "musical performances",
          "food labels",
          "grammar tests"
        ],
        "answer": "international agreements",
        "explain": "The correct answer is international agreements."
      }
    ],
    "Tropical Rainforests & Mangroves": [
      {
        "q": "Tropical rainforests are important because they support:",
        "options": [
          "biodiversity",
          "only traffic",
          "only grammar",
          "only shopping"
        ],
        "answer": "biodiversity",
        "explain": "The correct answer is biodiversity."
      },
      {
        "q": "Mangroves are commonly found in:",
        "options": [
          "coastal environments",
          "deserts only",
          "mountaintops only",
          "indoor classrooms only"
        ],
        "answer": "coastal environments",
        "explain": "The correct answer is coastal environments."
      },
      {
        "q": "Deforestation can lead to:",
        "options": [
          "habitat loss",
          "more forest cover immediately",
          "less erosion always",
          "more biodiversity always"
        ],
        "answer": "habitat loss",
        "explain": "The correct answer is habitat loss."
      },
      {
        "q": "Sustainable forest management aims to balance human needs and:",
        "options": [
          "environmental protection",
          "food packaging",
          "music tempo",
          "punctuation"
        ],
        "answer": "environmental protection",
        "explain": "The correct answer is environmental protection."
      },
      {
        "q": "Mangroves can help protect coasts by:",
        "options": [
          "reducing wave energy",
          "increasing storm damage",
          "removing all animals",
          "creating deserts"
        ],
        "answer": "reducing wave energy",
        "explain": "The correct answer is reducing wave energy."
      }
    ],
    "Housing & Transport": [
      {
        "q": "Built environment refers to places:",
        "options": [
          "constructed and managed by people",
          "formed only by natural processes",
          "without human activity",
          "only in forests"
        ],
        "answer": "constructed and managed by people",
        "explain": "The correct answer is constructed and managed by people."
      },
      {
        "q": "A sustainable city should consider:",
        "options": [
          "people, environment and resources",
          "only car speed",
          "only building height",
          "only shopping choices"
        ],
        "answer": "people, environment and resources",
        "explain": "The correct answer is people, environment and resources."
      },
      {
        "q": "Public transport can help reduce:",
        "options": [
          "traffic congestion and emissions",
          "all walking",
          "all maps",
          "all weather"
        ],
        "answer": "traffic congestion and emissions",
        "explain": "The correct answer is traffic congestion and emissions."
      },
      {
        "q": "Housing is a geographical issue because it involves:",
        "options": [
          "land use and people's needs",
          "only spelling",
          "only musical pitch",
          "only cell membranes"
        ],
        "answer": "land use and people's needs",
        "explain": "The correct answer is land use and people's needs."
      },
      {
        "q": "Transport systems connect people to:",
        "options": [
          "places and opportunities",
          "grammar only",
          "food storage only",
          "historical dates only"
        ],
        "answer": "places and opportunities",
        "explain": "The correct answer is places and opportunities."
      }
    ]
  },
  "Social Studies / Humanities": {
    "Citizenship": [
      {
        "q": "Social Studies aims to develop students as informed, concerned and:",
        "options": [
          "participative citizens",
          "silent citizens",
          "random citizens",
          "uninterested citizens"
        ],
        "answer": "participative citizens",
        "explain": "The correct answer is participative citizens."
      },
      {
        "q": "A concerned citizen should show care for:",
        "options": [
          "society and the world",
          "only test scores",
          "only fashion",
          "only phone games"
        ],
        "answer": "society and the world",
        "explain": "The correct answer is society and the world."
      },
      {
        "q": "Responsible decision-making means considering:",
        "options": [
          "consequences and different perspectives",
          "only personal benefit",
          "only speed",
          "only rumours"
        ],
        "answer": "consequences and different perspectives",
        "explain": "The correct answer is consequences and different perspectives."
      },
      {
        "q": "Civic identity is connected to:",
        "options": [
          "belonging and responsibility",
          "food labels",
          "musical tempo",
          "cell walls"
        ],
        "answer": "belonging and responsibility",
        "explain": "The correct answer is belonging and responsibility."
      },
      {
        "q": "An active contributor should be willing to:",
        "options": [
          "take responsible action",
          "avoid all issues",
          "ignore others",
          "refuse teamwork"
        ],
        "answer": "take responsible action",
        "explain": "The correct answer is take responsible action."
      }
    ],
    "Real-world Issues": [
      {
        "q": "An inquiry into real-world issues should begin with:",
        "options": [
          "questions",
          "answers first",
          "random drawings",
          "ignoring evidence"
        ],
        "answer": "questions",
        "explain": "The correct answer is questions."
      },
      {
        "q": "A complex issue usually has:",
        "options": [
          "multiple perspectives",
          "only one simple answer",
          "no evidence",
          "no stakeholders"
        ],
        "answer": "multiple perspectives",
        "explain": "The correct answer is multiple perspectives."
      },
      {
        "q": "To understand an issue well, students should evaluate:",
        "options": [
          "different sources",
          "only one rumour",
          "the shortest sentence",
          "font colour only"
        ],
        "answer": "different sources",
        "explain": "The correct answer is different sources."
      },
      {
        "q": "Reflective thinking helps students:",
        "options": [
          "make more considered decisions",
          "avoid responsibility",
          "ignore feedback",
          "guess quickly"
        ],
        "answer": "make more considered decisions",
        "explain": "The correct answer is make more considered decisions."
      },
      {
        "q": "A well-reasoned response should be supported by:",
        "options": [
          "evidence and explanation",
          "volume",
          "rhythm",
          "random emotion only"
        ],
        "answer": "evidence and explanation",
        "explain": "The correct answer is evidence and explanation."
      }
    ],
    "Environment & Society": [
      {
        "q": "Protecting the environment may involve:",
        "options": [
          "reducing waste",
          "using more single-use items",
          "dumping rubbish",
          "ignoring conservation"
        ],
        "answer": "reducing waste",
        "explain": "The correct answer is reducing waste."
      },
      {
        "q": "People are dependent on the environment for:",
        "options": [
          "resources and quality of life",
          "only spelling",
          "only music",
          "only algebra"
        ],
        "answer": "resources and quality of life",
        "explain": "The correct answer is resources and quality of life."
      },
      {
        "q": "Human activities can affect the environment through:",
        "options": [
          "pollution and resource use",
          "better punctuation",
          "fewer maps",
          "more adverbs"
        ],
        "answer": "pollution and resource use",
        "explain": "The correct answer is pollution and resource use."
      },
      {
        "q": "Sustainable action means meeting needs without:",
        "options": [
          "harming future generations",
          "asking questions",
          "using maps",
          "reading sources"
        ],
        "answer": "harming future generations",
        "explain": "The correct answer is harming future generations."
      },
      {
        "q": "Community action can help address:",
        "options": [
          "societal concerns",
          "only private entertainment",
          "only grammar",
          "only calculator use"
        ],
        "answer": "societal concerns",
        "explain": "The correct answer is societal concerns."
      }
    ],
    "Humanities Exposure": [
      {
        "q": "The Humanities Exposure Modules include Geography, History and:",
        "options": [
          "Literature in English",
          "Chemistry only",
          "Food Science only",
          "Physical Education only"
        ],
        "answer": "Literature in English",
        "explain": "The correct answer is Literature in English."
      },
      {
        "q": "Humanities helps students understand relationships with self, society and:",
        "options": [
          "the environment",
          "only calculators",
          "only recipes",
          "only musical instruments"
        ],
        "answer": "the environment",
        "explain": "The correct answer is the environment."
      },
      {
        "q": "Considering context and perspectives helps students:",
        "options": [
          "understand issues more deeply",
          "avoid thinking",
          "remove meaning",
          "copy without reason"
        ],
        "answer": "understand issues more deeply",
        "explain": "The correct answer is understand issues more deeply."
      },
      {
        "q": "Empathy in Humanities means trying to understand:",
        "options": [
          "people's experiences and viewpoints",
          "only one's own answer",
          "only dates",
          "only maps"
        ],
        "answer": "people's experiences and viewpoints",
        "explain": "The correct answer is people's experiences and viewpoints."
      },
      {
        "q": "Humanities learning often uses texts, images and:",
        "options": [
          "maps",
          "food labels only",
          "laboratory beakers only",
          "musical notes only"
        ],
        "answer": "maps",
        "explain": "The correct answer is maps."
      }
    ]
  },
  "华文 / Mother Tongue Chinese": {
    "词语理解": [
      {
        "q": "“评估”最接近以下哪个意思？",
        "options": [
          "判断和分析",
          "重复一遍",
          "随便猜测",
          "完全忽略"
        ],
        "answer": "判断和分析",
        "explain": "The correct answer is 判断和分析."
      },
      {
        "q": "“适应”最接近以下哪个意思？",
        "options": [
          "根据情况作出调整",
          "马上放弃",
          "完全不变",
          "只看表面"
        ],
        "answer": "根据情况作出调整",
        "explain": "The correct answer is 根据情况作出调整."
      },
      {
        "q": "“可靠”的意思是：",
        "options": [
          "可以信任",
          "很漂亮",
          "很快速",
          "很昂贵"
        ],
        "answer": "可以信任",
        "explain": "The correct answer is 可以信任."
      },
      {
        "q": "“珍惜”的意思是：",
        "options": [
          "重视并好好对待",
          "随手丢掉",
          "故意破坏",
          "完全忘记"
        ],
        "answer": "重视并好好对待",
        "explain": "The correct answer is 重视并好好对待."
      },
      {
        "q": "“沟通”的意思是：",
        "options": [
          "交流想法和信息",
          "独自睡觉",
          "画一幅画",
          "做一道数学题"
        ],
        "answer": "交流想法和信息",
        "explain": "The correct answer is 交流想法和信息."
      }
    ],
    "语法与句子": [
      {
        "q": "下面哪个句子最通顺？",
        "options": [
          "因为下雨，所以比赛取消了。",
          "因为下雨，但是比赛取消了。",
          "下雨所以因为比赛取消。",
          "比赛因为所以取消下雨。"
        ],
        "answer": "因为下雨，所以比赛取消了。",
        "explain": "The correct answer is 因为下雨，所以比赛取消了。."
      },
      {
        "q": "“他一边听音乐，一边做功课。”这个句子表示：",
        "options": [
          "两个动作同时进行",
          "两个动作完全相反",
          "一个动作发生在昨天",
          "没有动作"
        ],
        "answer": "两个动作同时进行",
        "explain": "The correct answer is 两个动作同时进行."
      },
      {
        "q": "“虽然……但是……”通常表示：",
        "options": [
          "转折关系",
          "因果关系",
          "并列关系",
          "选择关系"
        ],
        "answer": "转折关系",
        "explain": "The correct answer is 转折关系."
      },
      {
        "q": "下面哪个词语适合填空：他学习很努力，成绩____进步。",
        "options": [
          "逐渐",
          "突然地红色",
          "非常桌子",
          "正在如果"
        ],
        "answer": "逐渐",
        "explain": "The correct answer is 逐渐."
      },
      {
        "q": "“不仅……还……”表示：",
        "options": [
          "递进关系",
          "否定关系",
          "时间关系",
          "地点关系"
        ],
        "answer": "递进关系",
        "explain": "The correct answer is 递进关系."
      }
    ],
    "阅读理解": [
      {
        "q": "阅读文章时，找中心思想主要是找：",
        "options": [
          "文章最主要的意思",
          "最长的句子",
          "第一个标点",
          "所有生字"
        ],
        "answer": "文章最主要的意思",
        "explain": "The correct answer is 文章最主要的意思."
      },
      {
        "q": "根据线索推断人物想法，属于：",
        "options": [
          "推论能力",
          "抄写能力",
          "画图能力",
          "计算能力"
        ],
        "answer": "推论能力",
        "explain": "The correct answer is 推论能力."
      },
      {
        "q": "作者的语气可以帮助我们理解：",
        "options": [
          "作者的态度和感情",
          "纸张的重量",
          "字体大小",
          "页码"
        ],
        "answer": "作者的态度和感情",
        "explain": "The correct answer is 作者的态度和感情."
      },
      {
        "q": "如果题目问“为什么”，答案通常需要说明：",
        "options": [
          "原因",
          "颜色",
          "价格",
          "字数"
        ],
        "answer": "原因",
        "explain": "The correct answer is 原因."
      },
      {
        "q": "概括段落内容时，应该：",
        "options": [
          "抓住重点，简洁表达",
          "越长越好",
          "加入无关意见",
          "只抄一个字"
        ],
        "answer": "抓住重点，简洁表达",
        "explain": "The correct answer is 抓住重点，简洁表达."
      }
    ],
    "写作与表达": [
      {
        "q": "一封正式电邮开头通常应使用：",
        "options": [
          "尊敬的老师：",
          "喂！",
          "哈哈哈",
          "你干嘛"
        ],
        "answer": "尊敬的老师：",
        "explain": "The correct answer is 尊敬的老师：."
      },
      {
        "q": "写说明文时，内容应该：",
        "options": [
          "清楚、有条理",
          "完全随意",
          "只写表情符号",
          "没有重点"
        ],
        "answer": "清楚、有条理",
        "explain": "The correct answer is 清楚、有条理."
      },
      {
        "q": "写作文时分段的作用是：",
        "options": [
          "让内容更有层次",
          "增加错别字",
          "减少意思",
          "隐藏主题"
        ],
        "answer": "让内容更有层次",
        "explain": "The correct answer is 让内容更有层次."
      },
      {
        "q": "表达个人看法时，最好加上：",
        "options": [
          "理由和例子",
          "无关图片",
          "随机数字",
          "空白段落"
        ],
        "answer": "理由和例子",
        "explain": "The correct answer is 理由和例子."
      },
      {
        "q": "修改文章时，应检查：",
        "options": [
          "错别字、标点和语句是否通顺",
          "鞋子颜色",
          "天气预报",
          "游戏分数"
        ],
        "answer": "错别字、标点和语句是否通顺",
        "explain": "The correct answer is 错别字、标点和语句是否通顺."
      }
    ],
    "文化与价值观": [
      {
        "q": "学习华文也帮助学生了解：",
        "options": [
          "文化和价值观",
          "只了解数学公式",
          "只了解交通规则",
          "只了解天气"
        ],
        "answer": "文化和价值观",
        "explain": "The correct answer is 文化和价值观."
      },
      {
        "q": "“尊老爱幼”强调的是：",
        "options": [
          "尊敬长辈，爱护年幼者",
          "只照顾自己",
          "不理别人",
          "只看成绩"
        ],
        "answer": "尊敬长辈，爱护年幼者",
        "explain": "The correct answer is 尊敬长辈，爱护年幼者."
      },
      {
        "q": "节日习俗可以反映一个族群的：",
        "options": [
          "文化传统",
          "计算速度",
          "运动成绩",
          "手机品牌"
        ],
        "answer": "文化传统",
        "explain": "The correct answer is 文化传统."
      },
      {
        "q": "跨文化理解可以帮助我们：",
        "options": [
          "尊重不同背景的人",
          "只坚持一种看法",
          "拒绝沟通",
          "忽略他人"
        ],
        "answer": "尊重不同背景的人",
        "explain": "The correct answer is 尊重不同背景的人."
      },
      {
        "q": "学习母语的目的之一是：",
        "options": [
          "更好地沟通与连接文化",
          "完全不用说话",
          "只为了背答案",
          "避免阅读"
        ],
        "answer": "更好地沟通与连接文化",
        "explain": "The correct answer is 更好地沟通与连接文化."
      }
    ]
  },
  "Malay Special Programme": {
    "Basic Communication": [
      {
        "q": "In Malay, 'Selamat pagi' means:",
        "options": [
          "Good morning",
          "Good night",
          "Thank you",
          "Excuse me"
        ],
        "answer": "Good morning",
        "explain": "The correct answer is Good morning."
      },
      {
        "q": "In Malay, 'Terima kasih' means:",
        "options": [
          "Thank you",
          "Goodbye",
          "Please sit",
          "I am hungry"
        ],
        "answer": "Thank you",
        "explain": "The correct answer is Thank you."
      },
      {
        "q": "In Malay, 'Apa khabar?' is used to ask:",
        "options": [
          "How are you?",
          "What time is it?",
          "Where is school?",
          "How much is it?"
        ],
        "answer": "How are you?",
        "explain": "The correct answer is How are you?."
      },
      {
        "q": "A learner says 'Nama saya Evans.' This means:",
        "options": [
          "My name is Evans.",
          "I live in Evans.",
          "Evans is hungry.",
          "Evans is a teacher."
        ],
        "answer": "My name is Evans.",
        "explain": "The correct answer is My name is Evans.."
      },
      {
        "q": "In Malay, 'maaf' means:",
        "options": [
          "sorry",
          "water",
          "book",
          "table"
        ],
        "answer": "sorry",
        "explain": "The correct answer is sorry."
      }
    ],
    "Vocabulary": [
      {
        "q": "In Malay, 'buku' means:",
        "options": [
          "book",
          "chair",
          "food",
          "house"
        ],
        "answer": "book",
        "explain": "The correct answer is book."
      },
      {
        "q": "In Malay, 'sekolah' means:",
        "options": [
          "school",
          "market",
          "river",
          "forest"
        ],
        "answer": "school",
        "explain": "The correct answer is school."
      },
      {
        "q": "In Malay, 'makan' means:",
        "options": [
          "to eat",
          "to sleep",
          "to read",
          "to run"
        ],
        "answer": "to eat",
        "explain": "The correct answer is to eat."
      },
      {
        "q": "In Malay, 'air' means:",
        "options": [
          "water",
          "fire",
          "wind",
          "tree"
        ],
        "answer": "water",
        "explain": "The correct answer is water."
      },
      {
        "q": "In Malay, 'kawan' means:",
        "options": [
          "friend",
          "teacher",
          "parent",
          "shop"
        ],
        "answer": "friend",
        "explain": "The correct answer is friend."
      }
    ],
    "Grammar": [
      {
        "q": "Malay generally does not mark tense by changing:",
        "options": [
          "the verb form",
          "the topic",
          "the meaning",
          "the speaker"
        ],
        "answer": "the verb form",
        "explain": "The correct answer is the verb form."
      },
      {
        "q": "The prefix 'ber-' often indicates:",
        "options": [
          "an action or state",
          "a number only",
          "a colour only",
          "a punctuation mark"
        ],
        "answer": "an action or state",
        "explain": "The correct answer is an action or state."
      },
      {
        "q": "The word 'saya' means:",
        "options": [
          "I / me",
          "you",
          "he",
          "they"
        ],
        "answer": "I / me",
        "explain": "The correct answer is I / me."
      },
      {
        "q": "The word 'dia' means:",
        "options": [
          "he / she",
          "we",
          "I",
          "you plural"
        ],
        "answer": "he / she",
        "explain": "The correct answer is he / she."
      },
      {
        "q": "A simple Malay sentence often follows:",
        "options": [
          "subject + predicate",
          "predicate only",
          "object only",
          "random order always"
        ],
        "answer": "subject + predicate",
        "explain": "The correct answer is subject + predicate."
      }
    ],
    "Culture & Connection": [
      {
        "q": "Malay Special Programme helps non-native learners understand:",
        "options": [
          "Malay language and culture",
          "only mathematics",
          "only traffic",
          "only weather"
        ],
        "answer": "Malay language and culture",
        "explain": "The correct answer is Malay language and culture."
      },
      {
        "q": "Learning Malay supports communication with communities in:",
        "options": [
          "Singapore and the region",
          "only one classroom",
          "only outer space",
          "only Antarctica"
        ],
        "answer": "Singapore and the region",
        "explain": "The correct answer is Singapore and the region."
      },
      {
        "q": "Cultural awareness means being sensitive to:",
        "options": [
          "different languages and cultures",
          "only one's own habits",
          "only exam marks",
          "only food prices"
        ],
        "answer": "different languages and cultures",
        "explain": "The correct answer is different languages and cultures."
      },
      {
        "q": "Malay culture can include adat, arts, literature and:",
        "options": [
          "history",
          "algebra",
          "cell walls",
          "force units"
        ],
        "answer": "history",
        "explain": "The correct answer is history."
      },
      {
        "q": "Learning a third language can strengthen:",
        "options": [
          "cross-cultural understanding",
          "less communication",
          "fewer perspectives",
          "no interaction"
        ],
        "answer": "cross-cultural understanding",
        "explain": "The correct answer is cross-cultural understanding."
      }
    ]
  }
};


/* v36 Multi-user login gate. This only controls access and data separation.
   After login the original Evans Study HQ interface is shown unchanged. */
const ESHQ_AUTH = {
  sessionKey: 'eshq_v36_session',
  userKey: 'eshq_v36_users',
  currentUser: null,
  activeStudent: 'evans'
};
const ESHQ_DEFAULT_USERS = [
  { id: 'admin', name: 'EduStation Admin', email: 'admin@edustation.com.sg', password: 'admin123', role: 'admin', students: ['evans','sophie','ryan'] },
  { id: 'parent-evans', name: 'Evans Parent', email: 'parent.evans@example.com', password: 'parent123', role: 'parent', students: ['evans'] },
  { id: 'student-evans', name: 'Evans', email: 'evans@student.local', password: 'student123', role: 'student', students: ['evans'] },
  { id: 'teacher', name: 'Teacher', email: 'teacher@edustation.com.sg', password: 'teacher123', role: 'teacher', students: ['evans','sophie'] }
];
function eshqReadUsers() {
  try {
    const existing = JSON.parse(localStorage.getItem(ESHQ_AUTH.userKey));
    if (Array.isArray(existing) && existing.length) return existing;
  } catch {}
  localStorage.setItem(ESHQ_AUTH.userKey, JSON.stringify(ESHQ_DEFAULT_USERS));
  return ESHQ_DEFAULT_USERS;
}
function eshqReadSession() {
  try { return JSON.parse(localStorage.getItem(ESHQ_AUTH.sessionKey)); } catch { return null; }
}
function eshqSetSession(user) {
  ESHQ_AUTH.currentUser = user;
  ESHQ_AUTH.activeStudent = (user.students && user.students[0]) || 'evans';
  localStorage.setItem(ESHQ_AUTH.sessionKey, JSON.stringify({ userId: user.id, activeStudent: ESHQ_AUTH.activeStudent }));
  if (typeof CLOUD_SYNC !== 'undefined') CLOUD_SYNC.student = ESHQ_AUTH.activeStudent;
}
function eshqClearSession() {
  localStorage.removeItem(ESHQ_AUTH.sessionKey);
  location.reload();
}
function eshqStorageKey(key) {
  const student = ESHQ_AUTH.activeStudent || 'evans';
  // Keep Evans on the original v34 keys so the page state remains exactly the same when upgrading.
  if (student === 'evans') return key;
  return `eshq_v36_${student}_${key}`;
}
function eshqApplyLoginState() {
  const app = document.getElementById('appShell');
  const login = document.getElementById('loginScreen');
  if (ESHQ_AUTH.currentUser) {
    if (login) login.classList.add('auth-hidden');
    if (app) app.classList.remove('auth-hidden');
  } else {
    if (login) login.classList.remove('auth-hidden');
    if (app) app.classList.add('auth-hidden');
  }
}
function eshqTryRestoreSession() {
  const session = eshqReadSession();
  if (!session) return false;
  const users = eshqReadUsers();
  const user = users.find(u => u.id === session.userId);
  if (!user) return false;
  ESHQ_AUTH.currentUser = user;
  ESHQ_AUTH.activeStudent = (user.students && user.students.includes(session.activeStudent)) ? session.activeStudent : ((user.students && user.students[0]) || 'evans');
  if (typeof CLOUD_SYNC !== 'undefined') CLOUD_SYNC.student = ESHQ_AUTH.activeStudent;
  return true;
}
function eshqSetupLogin() {
  eshqReadUsers();
  const form = document.getElementById('loginForm');
  const error = document.getElementById('loginError');
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      eshqClearSession();
    });
  }
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const email = (document.getElementById('loginEmail')?.value || '').trim().toLowerCase();
      const password = document.getElementById('loginPassword')?.value || '';
      const user = eshqReadUsers().find(u => u.email.toLowerCase() === email && u.password === password);
      if (!user) {
        if (error) error.textContent = 'Wrong email or password.';
        return;
      }
      eshqSetSession(user);
      eshqApplyLoginState();
      init();
    });
  }
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const LS = {
  wa3Done: 'eshq_v2_wa3_done',
  wa3Notes: 'eshq_v2_wa3_notes',
  focusDone: 'eshq_v2_focus_done',
  planner: 'eshq_v2_planner',
  mistakes: 'eshq_v2_mistakes',
  mastered: 'eshq_v2_mastered',
  history: 'eshq_v2_history',
  streak: 'eshq_v2_streak',
  cycleDay: 'eshq_v23_cycle_day_manual',
  audit: 'eshq_v5_audit',
  evidence: 'eshq_v5_evidence',
  lastOpen: 'eshq_v5_last_open',
  previousOpen: 'eshq_v5_previous_open',
  packDone: 'eshq_v20_pack_done'
};

const state = {
  currentFilter: 'all',
  practiceRound: null,
  currentQuestionIndex: 0,
  score: 0
};

const CLOUD_SYNC = {
  enabled: false,
  ready: false,
  state: {},
  student: 'evans',
  pending: 0,
  lastError: ''
};

function cloudKeys() {
  return Array.from(new Set(Object.values(LS).filter(Boolean).map(eshqStorageKey)));
}

function setSyncStatus(text, mode = 'neutral') {
  const el = document.getElementById('syncStatusPill');
  if (!el) return;
  el.textContent = text;
  el.dataset.mode = mode;
}

function applyCloudState(state) {
  CLOUD_SYNC.state = state || {};
  Object.entries(CLOUD_SYNC.state).forEach(([key, value]) => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  });
}

async function fetchCloudState(silent = false) {
  if (!silent) setSyncStatus('Syncing…');
  const res = await fetch(`/api/state?student=${encodeURIComponent(CLOUD_SYNC.student)}&t=${Date.now()}`, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Cloud state failed: ${res.status}`);
  const data = await res.json();
  applyCloudState(data.state || {});
  CLOUD_SYNC.enabled = true;
  CLOUD_SYNC.ready = true;
  if (!silent) setSyncStatus('Saved to cloud', 'ok');
  return data;
}

async function refreshFromCloud(silent = true) {
  if (!CLOUD_SYNC.enabled && CLOUD_SYNC.ready) return;
  try {
    await fetchCloudState(silent);
    renderAll();
  } catch (err) {
    CLOUD_SYNC.lastError = err?.message || String(err);
    console.warn('Cloud refresh failed.', err);
    if (!silent) setSyncStatus('Refresh failed', 'error');
  }
}

async function initCloudSync() {
  setSyncStatus('Syncing…');
  try {
    await fetchCloudState(true);

    // First-time migration: if the cloud has no value for a key but this browser has one, upload it.
    for (const key of cloudKeys()) {
      if (Object.prototype.hasOwnProperty.call(CLOUD_SYNC.state, key)) continue;
      const raw = localStorage.getItem(key);
      if (raw == null) continue;
      try {
        const value = JSON.parse(raw);
        CLOUD_SYNC.state[key] = value;
        cloudSave(key, value);
      } catch {}
    }
    setSyncStatus('Saved to cloud', 'ok');
  } catch (err) {
    CLOUD_SYNC.enabled = false;
    CLOUD_SYNC.ready = true;
    CLOUD_SYNC.lastError = err?.message || String(err);
    console.warn('Cloud sync unavailable; using this browser only.', err);
    setSyncStatus('Local only', 'warn');
  }
}

async function cloudSave(key, value) {
  if (!CLOUD_SYNC.enabled) return;
  CLOUD_SYNC.pending += 1;
  setSyncStatus('Saving…');
  try {
    const res = await fetch('/api/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ student: CLOUD_SYNC.student, key, value })
    });
    if (!res.ok) throw new Error(`Cloud save failed: ${res.status}`);
    setSyncStatus('Saved to cloud', 'ok');
  } catch (err) {
    CLOUD_SYNC.lastError = err?.message || String(err);
    console.warn('Cloud save failed; value kept locally.', err);
    setSyncStatus('Save failed', 'error');
  } finally {
    CLOUD_SYNC.pending = Math.max(0, CLOUD_SYNC.pending - 1);
  }
}

function load(key, fallback) {
  const scopedKey = eshqStorageKey(key);
  if (CLOUD_SYNC.ready && Object.prototype.hasOwnProperty.call(CLOUD_SYNC.state, scopedKey)) {
    return CLOUD_SYNC.state[scopedKey] ?? fallback;
  }
  try { return JSON.parse(localStorage.getItem(scopedKey)) ?? fallback; } catch { return fallback; }
}
function save(key, value) {
  const scopedKey = eshqStorageKey(key);
  try { localStorage.setItem(scopedKey, JSON.stringify(value)); } catch {}
  if (CLOUD_SYNC.ready) {
    CLOUD_SYNC.state[scopedKey] = value;
    cloudSave(scopedKey, value);
  }
}
function getSingaporeDateParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Singapore',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(date).reduce((acc, part) => {
    if (part.type !== 'literal') acc[part.type] = Number(part.value);
    return acc;
  }, {});
  return parts;
}
function todayDate() {
  const { year, month, day } = getSingaporeDateParts();
  return new Date(year, month - 1, day);
}
function singaporeNowLabel(options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) {
  return new Date().toLocaleDateString('en-SG', { timeZone: 'Asia/Singapore', ...options });
}
function parseDate(dateStr) {
  if (!dateStr) return null;
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d);
}
function daysUntil(dateStr) {
  const d = parseDate(dateStr);
  if (!d) return null;
  return Math.ceil((d - todayDate()) / 86400000);
}
function formatDate(dateStr) {
  if (!dateStr) return 'TBC';
  const d = parseDate(dateStr);
  return d.toLocaleDateString('en-SG', { day: 'numeric', month: 'short' });
}
function formatLongDate(dateStr) {
  if (!dateStr) return 'Teacher will inform';
  const d = parseDate(dateStr);
  return d.toLocaleDateString('en-SG', { weekday: 'short', day: 'numeric', month: 'short' });
}

function formatShortDate(dateStr) {
  if (!dateStr) return 'TBC';
  const d = parseDate(dateStr);
  return d.toLocaleDateString('en-SG', { weekday: 'short', day: 'numeric', month: 'short' });
}

function formatDateTime(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleString('en-SG', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
}
function shortTime(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleString('en-SG', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
}
function markVisit() {
  const now = new Date().toISOString();
  const last = load(LS.lastOpen, '');
  if (last) save(LS.previousOpen, last);
  save(LS.lastOpen, now);
}
function getAudit() { return load(LS.audit, []); }
function setAudit(list) { save(LS.audit, list.slice(-80)); }
function getEvidence() { return load(LS.evidence, {}); }
function setEvidence(obj) { save(LS.evidence, obj); }
function recordAudit(entry) {
  const list = getAudit();
  list.push({ ...entry, ts: new Date().toISOString() });
  setAudit(list);
}
function evidenceKey(type, id) { return `${type}:${id}`; }
function saveEvidence(type, id, text) {
  const ev = getEvidence();
  ev[evidenceKey(type, id)] = { text, ts: new Date().toISOString() };
  setEvidence(ev);
}
function getEvidenceItem(type, id) {
  return getEvidence()[evidenceKey(type, id)] || null;
}
function requestEvidence(label) {
  const text = prompt(`Quick proof check\n\nWhat did you actually do for:\n${label}\n\nWrite 2–8 words, e.g. "finished Q1-Q6" or "packed PE shirt".`);
  if (!text || !text.trim()) return null;
  return text.trim().slice(0, 120);
}
function completionMeta(type, id) {
  const ev = getEvidenceItem(type, id);
  if (!ev) return '<span class="proof-missing">Proof needed when completed</span>';
  return `<span class="proof-line">✓ ${ev.text}</span><span class="time-line">Completed ${shortTime(ev.ts)}</span>`;
}
function getRecentAudit(limit = 6) {
  return getAudit().slice().reverse().slice(0, limit);
}
function auditWarning() {
  const recent = getRecentAudit(8);
  if (!recent.length) return 'No checked tasks yet. Complete one task with proof to start the audit trail.';
  const last = recent[0];
  const tenMins = 10 * 60 * 1000;
  const now = new Date(last.ts).getTime();
  const burst = recent.filter(a => now - new Date(a.ts).getTime() <= tenMins && a.checked).length;
  if (burst >= 3) return `Heads up: ${burst} tasks were ticked within 10 minutes. Check the proof if needed.`;
  return `Latest proof: ${last.label || last.id} · ${shortTime(last.ts)}`;
}

function getWa3Done() { return load(LS.wa3Done, {}); }
function setWa3Done(obj) { save(LS.wa3Done, obj); }
function getWa3Notes() { return load(LS.wa3Notes, {}); }
function setWa3Notes(obj) { save(LS.wa3Notes, obj); }
function getPlanner() {
  const defaultPlanner = {
    Monday: [{ id: 'mon-pack', text: 'Check school diary and pack files for tomorrow', type: 'Pack', done: false }],
    Tuesday: [{ id: 'tue-wa3', text: 'Check the next WA3 deadline', type: 'Project', done: false }],
    Wednesday: [{ id: 'wed-revision', text: 'Complete one Revision Lab practice round', type: 'Revision', done: false }],
    Thursday: [{ id: 'thu-mistake', text: 'Review one mistake from Mistake Book', type: 'Revision', done: false }],
    Friday: [{ id: 'fri-week', text: 'Plan next week and clear unfinished tasks', type: 'Homework', done: false }],
    Saturday: [{ id: 'sat-wa3', text: 'Work on one WA3 project or submission', type: 'Project', done: false }],
    Sunday: [{ id: 'sun-pack', text: 'Pack bag and files for Monday', type: 'Pack', done: false }]
  };
  return load(LS.planner, defaultPlanner);
}
function setPlanner(planner) { save(LS.planner, planner); }
function getMistakes() { return load(LS.mistakes, []); }
function setMistakes(list) { save(LS.mistakes, list); }
function getMastered() { return load(LS.mastered, []); }
function setMastered(list) { save(LS.mastered, list); }
function getHistory() { return load(LS.history, []); }
function setHistory(list) { save(LS.history, list); }
function getFocusTasks() {
  const upcoming = getUpcomingIncomplete()[0];
  const title = upcoming ? `Complete next WA3 task: ${upcoming.subject} — ${upcoming.title}` : 'Check the WA3 Board';
  return [
    {
      id: upcoming ? `focus-deadline-${upcoming.id}` : 'focus-deadline-clear',
      text: title,
      sub: upcoming ? `Due ${formatLongDate(upcoming.date)}` : 'Everything is loaded',
      wa3Id: upcoming ? upcoming.id : ''
    },
    { id: 'focus-practice', text: 'Complete one short Revision Lab round', sub: '5 questions is enough to start' },
    { id: 'focus-pack', text: 'Pack files for tomorrow', sub: `Use Timetable: ${getNextCycleDay(getSelectedCycleDay())}` }
  ];
}
function getUpcomingIncomplete() {
  const done = getWa3Done();
  return WA3_TASKS
    .filter(t => !done[t.id])
    .sort((a, b) => {
      const da = parseDate(a.date)?.getTime() ?? Infinity;
      const db = parseDate(b.date)?.getTime() ?? Infinity;
      return da - db;
    });
}
function toast(message) {
  const el = document.getElementById('toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
}

const SECTION_ROUTES = {
  dashboard: '/dashboard',
  homework: '/homework',
  timetable: '/schedule',
  wa3: '/wa3-board',
  planner: '/weekly-plan',
  revision: '/revision-lab',
  progress: '/progress'
};
const ROUTE_SECTIONS = {
  '/': 'dashboard',
  '/dashboard': 'dashboard',
  '/homework': 'homework',
  '/schedule': 'timetable',
  '/timetable': 'timetable',
  '/wa3': 'wa3',
  '/wa3-board': 'wa3',
  '/weekly-plan': 'planner',
  '/planner': 'planner',
  '/revision-lab': 'revision',
  '/revision': 'revision',
  '/mistake-book': 'revision',
  '/mistakes': 'revision',
  '/progress': 'progress'
};
const SECTION_TITLES = {
  dashboard: 'Dashboard',
  homework: 'Homework',
  timetable: 'Schedule',
  wa3: 'WA3 Board',
  planner: 'Weekly Plan',
  revision: 'Revision Lab',
  progress: 'Progress'
};
function normalisePath(pathname) {
  let path = pathname || '/';
  path = path.replace(/\/+$/, '') || '/';
  return path.toLowerCase();
}
function getSectionFromRoute() {
  const hash = (window.location.hash || '').replace('#', '').replace(/^\/+/, '');
  if (hash && ROUTE_SECTIONS['/' + hash]) return ROUTE_SECTIONS['/' + hash];
  return ROUTE_SECTIONS[normalisePath(window.location.pathname)] || 'dashboard';
}
function updateUrlForSection(id, replace = false) {
  const route = SECTION_ROUTES[id] || '/dashboard';
  const current = normalisePath(window.location.pathname);
  if (current === route && !window.location.hash) return;
  const nextUrl = route + window.location.search;
  if (replace) history.replaceState({ section: id }, '', nextUrl);
  else history.pushState({ section: id }, '', nextUrl);
}
function updateDocumentTitle(id) {
  const title = SECTION_TITLES[id] || 'Dashboard';
  document.title = `Evans Study HQ · ${title}`;
}
function switchSection(id, options = {}) {
  if (id === 'mistakes') id = 'revision';
  if (!SECTION_ROUTES[id]) id = 'dashboard';
  document.querySelectorAll('.section').forEach(s => s.classList.toggle('active-section', s.id === id));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.section === id));
  if (!options.skipUrl) updateUrlForSection(id, !!options.replaceUrl);
  updateDocumentTitle(id);
  if (!options.noScroll) window.scrollTo({ top: 0, behavior: options.instant ? 'auto' : 'smooth' });
  renderAll();
}
function routeToCurrentUrl(options = {}) {
  switchSection(getSectionFromRoute(), { skipUrl: true, instant: true, noScroll: !!options.noScroll });
}

function renderDashboard() {
  document.getElementById('todayLabel').textContent = singaporeNowLabel();
  renderFocus();
  renderNextDeadline();
  renderWa3ProgressMini();
  renderUpcomingDeadlines();
  renderParentSummary();
  renderWeekPreview();
  renderTimetableDashboard();
  renderSchoolNoticesDashboard();
  renderAuditStatus();
}

function renderFocus() {
  const focusDone = load(LS.focusDone, {});
  const tasks = getFocusTasks();
  const list = document.getElementById('todayFocusList');
  list.innerHTML = tasks.map(t => `
    <label class="task-row ${focusDone[t.id] ? 'done' : ''}">
      <input type="checkbox" data-focus-id="${t.id}" ${t.wa3Id ? `data-focus-wa3-id="${t.wa3Id}"` : ''} ${focusDone[t.id] ? 'checked' : ''} />
      <span class="task-text"><strong>${t.text}</strong><span>${t.sub}</span></span>
    </label>
  `).join('');
  const count = tasks.filter(t => focusDone[t.id]).length;
  document.getElementById('focusCountBadge').textContent = `${count}/3`;
}

function renderNextDeadline() {
  const upcoming = getUpcomingIncomplete()[0];
  const card = document.getElementById('nextDeadlineCard');
  const badge = document.getElementById('nextDeadlineUrgency');
  const bar = document.getElementById('deadlineTimeBar');
  if (!upcoming) {
    card.innerHTML = `<strong>All WA3 missions completed</strong><p>Great job. Keep reviewing mistakes and practising.</p><div class="days-left">Done</div>`;
    badge.textContent = 'Clear';
    badge.classList.remove('danger');
    bar.style.width = '100%';
    return;
  }
  const days = daysUntil(upcoming.date);
  let label = 'Soon';
  if (days === null) label = 'TBC';
  else if (days < 0) label = 'Overdue';
  else if (days <= 3) label = 'Urgent';
  else if (days <= 10) label = 'Soon';
  else label = 'Upcoming';
  badge.textContent = label;
  badge.classList.toggle('danger', days !== null && days <= 3);
  const daysText = days === null ? 'TBC' : days < 0 ? `${Math.abs(days)} days overdue` : days === 0 ? 'Due today' : `${days} days left`;
  card.innerHTML = `<strong>${formatLongDate(upcoming.date)}</strong><p>${upcoming.subject} · ${upcoming.title}</p><div class="days-left">${daysText}</div>`;
  const pct = days === null ? 25 : Math.max(8, Math.min(100, 100 - (days / 30) * 100));
  bar.style.width = `${pct}%`;
}

function renderWa3ProgressMini() {
  const done = getWa3Done();
  const completed = WA3_TASKS.filter(t => done[t.id]).length;
  const total = WA3_TASKS.length;
  const pct = Math.round((completed / total) * 100);
  document.getElementById('wa3ProgressText').textContent = `${completed} / ${total}`;
  document.getElementById('wa3PercentBadge').textContent = `${pct}%`;
  document.getElementById('wa3ProgressBar').style.width = `${pct}%`;
  document.getElementById('wa3Encouragement').textContent = completed === 0
    ? '12 missions are already loaded. Start with the next deadline.'
    : completed < total
      ? 'Keep going. Finish the next small mission first.'
      : 'All WA3 missions are complete. Well done.';
  document.getElementById('wa3HeaderCompleted').textContent = `${completed}/${total}`;
}

function renderUpcomingDeadlines() {
  const list = document.getElementById('upcomingDeadlines');
  const upcoming = getUpcomingIncomplete().filter(t => t.date).slice(0, 5);
  if (!upcoming.length) {
    list.innerHTML = `<div class="empty-state"><h3>No upcoming dated tasks</h3><p>Check teacher-announced items and keep practising.</p></div>`;
    return;
  }
  list.innerHTML = upcoming.map(t => {
    const days = daysUntil(t.date);
    const status = days === 0 ? 'Today' : days < 0 ? 'Overdue' : `${days}d left`;
    return `
      <div class="deadline-item">
        <div class="date-badge"><strong>${formatDate(t.date).split(' ')[0]}</strong><small>${formatDate(t.date).split(' ')[1] || ''}</small></div>
        <div class="deadline-title"><strong>${t.subject}</strong><span>${t.title}</span></div>
        <span class="status-badge">${status}</span>
      </div>
    `;
  }).join('');
}

function renderParentSummary() {
  const planner = getPlanner();
  const plannerTasks = DAYS.flatMap(day => planner[day] || []);
  const plannerDone = plannerTasks.filter(t => t.done).length;
  const done = getWa3Done();
  const wa3Done = WA3_TASKS.filter(t => done[t.id]).length;
  const recent = getRecentAudit(1)[0];
  const prevOpen = load(LS.previousOpen, '');
  document.getElementById('parentSummary').innerHTML = `
    <div class="summary-tile"><strong>${wa3Done}/${WA3_TASKS.length}</strong><span>WA3 completed</span></div>
    <div class="summary-tile"><strong>${plannerDone}/${plannerTasks.length}</strong><span>weekly tasks done</span></div>
    <div class="summary-tile"><strong>${prevOpen ? shortTime(prevOpen) : 'First visit'}</strong><span>previous open</span></div>
    <div class="summary-tile"><strong>${recent ? shortTime(recent.ts) : 'No proof yet'}</strong><span>latest task proof</span></div>
  `;
  const nudge = document.getElementById('auditNudge');
  if (nudge) nudge.textContent = auditWarning();
}

function renderAuditStatus() {
  const pill = document.getElementById('lastOpenedPill');
  if (pill) pill.textContent = `Last opened: ${formatDateTime(load(LS.lastOpen, ''))}`;
}

function renderWeekPreview() {
  const planner = getPlanner();
  document.getElementById('weekPreview').innerHTML = DAYS.map(day => {
    const tasks = (planner[day] || []).slice(0, 3);
    return `<div class="day-preview"><h4>${day.slice(0, 3)}</h4>${tasks.length ? tasks.map(t => `<p>${t.done ? '✅' : '□'} ${t.text}</p>`).join('') : '<p>No task yet</p>'}</div>`;
  }).join('');
}

function renderWa3Board() {
  renderWa3ProgressMini();
  const done = getWa3Done();
  const notes = getWa3Notes();
  const tasks = WA3_TASKS.filter(t => state.currentFilter === 'all' || t.type === state.currentFilter);
  document.getElementById('wa3TaskList').innerHTML = tasks.map(t => {
    const dateDisplay = formatDate(t.date);
    return `
      <article class="wa3-card ${done[t.id] ? 'done' : ''}">
        <div class="wa3-main">
          <div class="date-badge"><strong>${dateDisplay.split(' ')[0]}</strong><small>${dateDisplay.split(' ')[1] || ''}</small></div>
          <div>
            <h3>${t.subject}</h3>
            <div class="wa3-meta"><strong>${t.title}</strong><br>${[t.duration, t.marks].filter(Boolean).join(' · ')}</div>
            <span class="type-badge">${t.type}</span>
          </div>
          <label class="done-toggle"><input type="checkbox" data-wa3-id="${t.id}" ${done[t.id] ? 'checked' : ''}>Done</label>
        </div>
        <div class="wa3-meta" style="margin-top:10px;">${t.detail}</div>
        <div class="completion-meta">${done[t.id] ? completionMeta('wa3', t.id) : '<span class="proof-missing">When done, Evans must add quick proof.</span>'}</div>
        <details class="notes-box" ${notes[t.id] ? 'open' : ''}>
          <summary>Notes / things to remember</summary>
          <textarea data-note-id="${t.id}" placeholder="Add teacher instructions, materials to bring, links, or reminders...">${notes[t.id] || ''}</textarea>
        </details>
      </article>
    `;
  }).join('');
}

function plannerDayName(offset = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toLocaleDateString('en-US', { weekday: 'long' });
}
function plannerDayShort(day) {
  return day.slice(0, 3);
}
function renderPlannerTask(task, day, options = {}) {
  const meta = task.done ? completionMeta('planner', task.id) : '<span class="proof-chip">Proof needed</span>';
  const typeClass = (task.type || 'Task').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return `
    <div class="planner-list-item ${task.done ? 'done' : ''} ${options.compact ? 'compact' : ''}">
      <input type="checkbox" data-plan-day="${day}" data-plan-id="${task.id}" ${task.done ? 'checked' : ''} aria-label="Complete ${task.text}">
      <div class="planner-item-main">
        <div class="planner-item-title">${options.showDay ? `<span class="day-pill">${plannerDayShort(day)}</span>` : ''}<strong>${task.text}</strong></div>
        <div class="planner-item-meta"><span class="type-dot ${typeClass}">${task.type || 'Task'}</span>${meta}</div>
      </div>
      <div class="planner-item-actions">
        <button data-move-day="${day}" data-move-id="${task.id}">Move</button>
        <button data-delete-day="${day}" data-delete-id="${task.id}">Delete</button>
      </div>
    </div>
  `;
}
function renderPlannerGroup(title, subtitle, tasks, className, emptyText, options = {}) {
  return `
    <article class="planner-group ${className || ''}">
      <div class="planner-group-head">
        <div>
          <h3>${title}</h3>
          ${subtitle ? `<p>${subtitle}</p>` : ''}
        </div>
        <span class="group-count">${tasks.length}</span>
      </div>
      <div class="planner-list">
        ${tasks.length ? tasks.map(item => renderPlannerTask(item.task, item.day, options)).join('') : `<div class="empty-small">${emptyText}</div>`}
      </div>
    </article>
  `;
}
function renderPlanner() {
  const planner = getPlanner();
  const todayName = DAYS.includes(plannerDayName(0)) ? plannerDayName(0) : 'Monday';
  const tomorrowName = DAYS.includes(plannerDayName(1)) ? plannerDayName(1) : DAYS[(DAYS.indexOf(todayName) + 1) % DAYS.length];
  const todayTasks = (planner[todayName] || []).map(task => ({ day: todayName, task }));
  const tomorrowTasks = (planner[tomorrowName] || []).map(task => ({ day: tomorrowName, task }));
  const laterTasks = DAYS
    .filter(day => day !== todayName && day !== tomorrowName)
    .flatMap(day => (planner[day] || []).map(task => ({ day, task })));
  const allTasks = DAYS.flatMap(day => (planner[day] || []).map(task => ({ day, task })));
  const doneCount = allTasks.filter(item => item.task.done).length;

  document.getElementById('plannerGrid').innerHTML = `
    <div class="planner-summary-strip">
      <div><strong>${doneCount}/${allTasks.length}</strong><span>tasks completed this week</span></div>
      <div><strong>${todayTasks.length}</strong><span>today</span></div>
      <div><strong>${tomorrowTasks.length}</strong><span>tomorrow</span></div>
    </div>
    <div class="planner-flow">
      <div class="planner-priority-col">
        ${renderPlannerGroup(`Today · ${todayName}`, 'Do these first. Tick only after adding quick proof.', todayTasks, 'today-group', 'No tasks for today. Add one small task to get started.')}
        ${renderPlannerGroup(`Tomorrow · ${tomorrowName}`, 'Prepare early so it does not become last-minute.', tomorrowTasks, 'tomorrow-group', 'No tasks for tomorrow yet.')}
      </div>
      ${renderPlannerGroup('Later this week', 'Keep the rest visible, but not overwhelming.', laterTasks, 'later-group', 'No later tasks planned yet.', { showDay: true, compact: true })}
    </div>
  `;
}

function renderRevisionControls() {
  const subjectSelect = document.getElementById('subjectSelect');
  const currentSubject = subjectSelect.value || Object.keys(QUESTION_BANK)[0];
  subjectSelect.innerHTML = Object.keys(QUESTION_BANK).map(s => `<option value="${s}">${s}</option>`).join('');
  subjectSelect.value = QUESTION_BANK[currentSubject] ? currentSubject : Object.keys(QUESTION_BANK)[0];
  renderTopicOptions();
  renderPracticeHistoryMini();
}
function renderTopicOptions() {
  const subject = document.getElementById('subjectSelect').value;
  const topicSelect = document.getElementById('topicSelect');
  const topics = Object.keys(QUESTION_BANK[subject] || {});
  topicSelect.innerHTML = [`<option value="Mixed Practice">Mixed Practice</option>`]
    .concat(topics.map(t => `<option value="${t}">${t}</option>`))
    .join('');
}

function getQuestionPool(subject, topic, count) {
  const subjectBank = QUESTION_BANK[subject] || {};
  const topics = Object.keys(subjectBank);
  let primary = topic === 'Mixed Practice'
    ? topics.flatMap(t => subjectBank[t].map(q => ({ ...q, topic: t })))
    : (subjectBank[topic] || []).map(q => ({ ...q, topic }));
  let pool = [...primary];

  // If a topic has fewer questions than requested, fill from other topics in the same subject.
  // This prevents a 5-question round from becoming only 2 or 3 questions.
  if (pool.length < count) {
    const seen = new Set(pool.map(q => q.q));
    const extras = topics
      .filter(t => t !== topic)
      .flatMap(t => subjectBank[t].map(q => ({ ...q, topic: t })))
      .filter(q => !seen.has(q.q));
    pool = pool.concat(extras);
  }
  return pool;
}
function renderPracticeHistoryMini() {
  const history = getHistory();
  const last = history[history.length - 1];
  document.getElementById('lastScoreLabel').textContent = last ? `${last.score}/${last.total}` : '—';
  document.getElementById('practiceHistoryMini').innerHTML = last ? `
    <strong>Last round</strong><br>${last.subject} · ${last.topic}<br>Score: ${last.score}/${last.total}<br>${new Date(last.date).toLocaleDateString('en-SG')}
  ` : `<strong>No practice history yet.</strong><br>Start one short round to unlock your first score.`;
}
function startPracticeRound() {
  const subject = document.getElementById('subjectSelect').value;
  const topic = document.getElementById('topicSelect').value;
  const count = Number(document.getElementById('questionCountSelect').value);
  const source = getQuestionPool(subject, topic, count);
  const questions = [...source]
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(count, source.length))
    .map(q => ({ ...q, options: [...q.options].sort(() => Math.random() - 0.5) }));
  state.practiceRound = { subject, topic, questions, answers: [] };
  state.currentQuestionIndex = 0;
  state.score = 0;
  renderQuestion();
}
function renderQuestion() {
  const round = state.practiceRound;
  const area = document.getElementById('questionArea');
  if (!round) return;
  if (state.currentQuestionIndex >= round.questions.length) {
    finishPracticeRound();
    return;
  }
  const q = round.questions[state.currentQuestionIndex];
  area.className = '';
  area.innerHTML = `
    <div class="question-top"><span class="mini-badge">Question ${state.currentQuestionIndex + 1}/${round.questions.length}</span><span class="mini-badge">Score ${state.score}</span></div>
    <div class="question-text">${q.q}</div>
    <div class="option-grid">${q.options.map(opt => `<button class="option-btn" data-answer="${encodeURIComponent(opt)}">${opt}</button>`).join('')}</div>
    <div id="questionFeedback"></div>
  `;
}
function answerQuestion(answer) {
  const round = state.practiceRound;
  const q = round.questions[state.currentQuestionIndex];
  const correct = answer === q.answer;
  if (correct) state.score += 1;
  else addMistake(round.subject, round.topic, q, answer);
  const feedback = document.getElementById('questionFeedback');
  feedback.innerHTML = `<div class="feedback ${correct ? 'correct' : 'wrong'}">${correct ? 'Correct ✅' : `Not yet. Correct answer: ${q.answer}`}<br><small>${q.explain}</small></div>`;
  document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
  setTimeout(() => { state.currentQuestionIndex += 1; renderQuestion(); }, 1300);
}
function finishPracticeRound() {
  const round = state.practiceRound;
  const history = getHistory();
  history.push({ subject: round.subject, topic: round.topic, score: state.score, total: round.questions.length, date: new Date().toISOString() });
  setHistory(history);
  document.getElementById('questionArea').innerHTML = `
    <div class="empty-state"><h3>Round complete</h3><p>Your score: <strong>${state.score}/${round.questions.length}</strong></p><p>Wrong answers have been saved to the Mistake Book.</p><button class="primary-action" id="practiceAgainBtn">Practise again</button></div>
  `;
  state.practiceRound = null;
  renderPracticeHistoryMini();
  renderParentSummary();
  toast('Practice round saved');
}
function addMistake(subject, topic, q, selected) {
  const mistakes = getMistakes();
  const exists = mistakes.find(m => m.q === q.q && m.subject === subject);
  if (exists) {
    exists.lastSelected = selected;
    exists.correctCount = 0;
    exists.updatedAt = new Date().toISOString();
  } else {
    mistakes.push({ id: `m-${Date.now()}-${Math.random().toString(16).slice(2)}`, subject, topic: q.topic || topic, q: q.q, options: q.options || [], answer: q.answer, explain: q.explain, lastSelected: selected, correctCount: 0, createdAt: new Date().toISOString() });
  }
  setMistakes(mistakes);
}

function renderMistakeBook() {
  const mistakes = getMistakes();
  const mastered = getMastered();
  const streak = load(LS.streak, { count: 0, lastDate: '' });
  document.getElementById('streakLabel').textContent = `🔥 ${streak.count || 0}`;
  document.getElementById('masteredCountLabel').textContent = mastered.length;
  const list = document.getElementById('mistakeList');
  if (!mistakes.length) {
    list.innerHTML = `<div class="empty-state"><h3>No active mistakes saved yet.</h3><p>Do a Revision Lab round. Questions Evans gets wrong will appear here for review.</p></div>`;
  } else {
    list.innerHTML = mistakes.map(m => `
      <article class="mistake-card">
        <strong>${m.subject} · ${m.topic}</strong>
        <p>${m.q}</p>
        <p>Correct answer: <strong>${m.answer}</strong></p>
        <p>${m.explain}</p>
        <p>Correct reviews: ${m.correctCount}/2</p>
        <div class="mistake-actions">
          <button data-review-correct="${m.id}">I got it correct</button>
          <button data-review-wrong="${m.id}">Still wrong</button>
          <button data-remove-mistake="${m.id}">Remove</button>
        </div>
      </article>
    `).join('');
  }
  document.getElementById('masteredList').innerHTML = mastered.length ? mastered.slice(-6).reverse().map(m => `
    <div class="mistake-card"><strong>${m.subject}</strong><p>${m.q}</p><p>Mastered ✅</p></div>
  `).join('') : `<div class="empty-small">Mastered mistakes will appear here after two correct reviews.</div>`;
}
function startMistakeReview() {
  const mistakes = getMistakes();
  if (!mistakes.length) {
    toast('No active mistakes yet');
    return;
  }
  const m = mistakes[0];
  const list = document.getElementById('mistakeList');
  const choices = (m.options && m.options.length ? [...m.options] : [m.answer, m.lastSelected].filter(Boolean))
    .filter((value, index, arr) => arr.indexOf(value) === index)
    .sort(() => Math.random() - 0.5);

  list.innerHTML = `
    <article class="mistake-review-card">
      <div class="question-top"><span class="mini-badge">Mistake Review</span><span class="mini-badge">${m.correctCount || 0}/2 correct</span></div>
      <div class="question-text">${m.q}</div>
      ${choices.length > 1 ? `<div class="option-grid">${choices.map(opt => `<button class="option-btn mistake-review-option" data-mistake-answer="${encodeURIComponent(opt)}" data-mistake-id="${m.id}">${opt}</button>`).join('')}</div>` : ''}
      <div class="review-answer-box"><strong>Correct answer:</strong> ${m.answer}<br><small>${m.explain || ''}</small></div>
      <div class="mistake-actions review-actions">
        <button data-review-correct="${m.id}">I got it correct</button>
        <button data-review-wrong="${m.id}">Still wrong</button>
        <button class="secondary-action" id="showAllMistakesBtn">Show all mistakes</button>
      </div>
    </article>
  `;
  list.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function updateReviewStreak() {
  const today = todayDate().toISOString().slice(0, 10);
  const streak = load(LS.streak, { count: 0, lastDate: '' });
  if (streak.lastDate !== today) {
    const yesterday = new Date(todayDate());
    yesterday.setDate(yesterday.getDate() - 1);
    const y = yesterday.toISOString().slice(0, 10);
    streak.count = streak.lastDate === y ? (streak.count || 0) + 1 : 1;
    streak.lastDate = today;
    save(LS.streak, streak);
  }
}

function renderProgress() {
  const done = getWa3Done();
  const wa3Done = WA3_TASKS.filter(t => done[t.id]).length;
  const planner = getPlanner();
  const plannerTasks = DAYS.flatMap(day => planner[day] || []);
  const plannerDone = plannerTasks.filter(t => t.done).length;
  const mistakes = getMistakes();
  const mastered = getMastered();
  const history = getHistory();
  const subjectCounts = history.reduce((acc, h) => { acc[h.subject] = (acc[h.subject] || 0) + 1; return acc; }, {});
  const subjectRows = Object.entries(subjectCounts).length ? Object.entries(subjectCounts).map(([s, n]) => `<div class="metric"><span>${s}</span><strong>${n} rounds</strong></div>`).join('') : `<p class="helper-text">Start one practice round to see subject history.</p>`;
  document.getElementById('progressDashboard').innerHTML = `
    <article class="progress-panel"><h3>Task Progress</h3><div class="metric"><span>WA3 completed</span><strong>${wa3Done}/${WA3_TASKS.length}</strong></div><div class="metric"><span>Weekly tasks done</span><strong>${plannerDone}/${plannerTasks.length}</strong></div><div class="metric"><span>Next deadline</span><strong>${getUpcomingIncomplete()[0] ? formatDate(getUpcomingIncomplete()[0].date) : 'Done'}</strong></div></article>
    <article class="progress-panel"><h3>Practice Progress</h3><div class="metric"><span>Practice rounds</span><strong>${history.length}</strong></div><div class="metric"><span>Last score</span><strong>${history.length ? `${history[history.length-1].score}/${history[history.length-1].total}` : '—'}</strong></div>${subjectRows}</article>
    <article class="progress-panel"><h3>Mistake Review</h3><div class="metric"><span>Active mistakes</span><strong>${mistakes.length}</strong></div><div class="metric"><span>Mastered mistakes</span><strong>${mastered.length}</strong></div><p class="helper-text">To unlock more progress: complete one WA3 task, finish one Revision Lab round, and review one mistake.</p></article>
    <article class="progress-panel"><h3>Usage Check</h3><div class="metric"><span>Last opened</span><strong>${shortTime(load(LS.lastOpen, '')) || '—'}</strong></div><div class="metric"><span>Recent proof records</span><strong>${getAudit().length}</strong></div><p class="helper-text">Self-check tasks now require a short proof note and store a timestamp.</p></article>
  `;
  const auditList = document.getElementById('auditLogList');
  if (auditList) {
    const recent = getRecentAudit(10);
    auditList.innerHTML = recent.length ? recent.map(a => `
      <div class="audit-row"><strong>${a.label || a.id}</strong><span>${a.checked ? 'Completed' : 'Reopened'} · ${shortTime(a.ts)}</span>${a.evidence ? `<em>${a.evidence}</em>` : ''}</div>
    `).join('') : '<div class="empty-small">No proof records yet. Complete one WA3 or Planner task to start.</div>';
  }
}


function getSelectedCycleDay() {
  return load(LS.cycleDay, getAutoCycleDay());
}
function localDateOnly(date = new Date()) {
  const { year, month, day } = getSingaporeDateParts(date);
  return new Date(year, month - 1, day);
}
function parseLocalDate(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}
function isSchoolDay(date) {
  // Use the computed Singapore calendar date. The returned Date object is created
  // from that calendar date, so getDay() follows the correct SG school day.
  const day = date.getDay();
  return day >= 1 && day <= 5;
}
function schoolDayOffset(anchorDate, targetDate) {
  const anchor = localDateOnly(anchorDate);
  const target = localDateOnly(targetDate);
  if (anchor.getTime() === target.getTime()) return 0;
  let cursor = new Date(anchor);
  let offset = 0;
  if (target > anchor) {
    while (cursor < target) {
      cursor.setDate(cursor.getDate() + 1);
      if (isSchoolDay(cursor)) offset += 1;
    }
  } else {
    while (cursor > target) {
      if (isSchoolDay(cursor)) offset -= 1;
      cursor.setDate(cursor.getDate() - 1);
    }
  }
  return offset;
}
function getAutoCycleDay(date = new Date()) {
  const anchor = parseLocalDate('2026-07-07'); // Tuesday 7 Jul 2026 is Day 7.
  const anchorIndex = 6; // Day 7 in zero-based TIMETABLE_DAYS.
  const offset = schoolDayOffset(anchor, date);
  const idx = ((anchorIndex + offset) % TIMETABLE_DAYS.length + TIMETABLE_DAYS.length) % TIMETABLE_DAYS.length;
  return TIMETABLE_DAYS[idx];
}
function isCycleManualOverride() {
  return Boolean(localStorage.getItem(LS.cycleDay));
}
function getNextCycleDay(day) {
  const idx = TIMETABLE_DAYS.indexOf(day);
  return TIMETABLE_DAYS[(idx + 1) % TIMETABLE_DAYS.length];
}
function nextSchoolDate(date = todayDate()) {
  const d = new Date(date);
  do {
    d.setDate(d.getDate() + 1);
  } while (!isSchoolDay(d));
  return d;
}
function timeTo24Hour(timeText = '') {
  const cleaned = String(timeText).trim().toLowerCase();
  const match = cleaned.match(/(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/);
  if (!match) return timeText;
  let hour = Number(match[1]);
  const minute = match[2] || '00';
  const meridiem = match[3];
  if (meridiem === 'pm' && hour < 12) hour += 12;
  if (meridiem === 'am' && hour === 12) hour = 0;
  return `${String(hour).padStart(2, '0')}:${minute}`;
}
function activityTimeToSchoolTime(timeText = '') {
  const parts = String(timeText).split(/[–-]/).map(p => p.trim()).filter(Boolean);
  if (parts.length < 2) return timeText;
  const endMeridiem = (parts[1].match(/\b(am|pm)\b/i) || [''])[0];
  const start = /\b(am|pm)\b/i.test(parts[0]) ? parts[0] : `${parts[0]} ${endMeridiem}`;
  return `${timeTo24Hour(start)}–${timeTo24Hour(parts[1])}`;
}
function fixedCcaForDate(dateStr) {
  return CCA_SCHEDULE.filter(a => a.date === dateStr);
}
function activityRowsForDate(dateStr) {
  const fixedCcaRows = fixedCcaForDate(dateStr).map(a => ({
    time: activityTimeToSchoolTime(a.time),
    subject: `CCA: ${a.title}`,
    teacher: a.teacher || '',
    venue: [a.venue, a.notes].filter(Boolean).join(' · '),
    isActivity: true
  }));
  const otherRows = getAllActivities()
    .filter(a => a.date === dateStr && !String(a.id || '').startsWith('cca-'))
    .map(a => ({
      time: activityTimeToSchoolTime(a.time || ''),
      subject: `${a.type}: ${a.title}`,
      teacher: '',
      venue: [a.venue, a.notes].filter(Boolean).join(' · '),
      isActivity: true
    }));
  return [...fixedCcaRows, ...otherRows];
}
function timeStartMinutes(timeText = '') {
  const start = String(timeText).split(/[–-]/)[0].trim();
  const match = start.match(/(\d{1,2})(?::(\d{2}))?/);
  if (!match) return 9999;
  return Number(match[1]) * 60 + Number(match[2] || '00');
}
function classesForDayWithDate(day, dateStr = '') {
  const base = [...(TIMETABLE[day] || [])];
  const activityRows = dateStr ? activityRowsForDate(dateStr) : [];
  // Weekends have no school cycle classes. Show only tuition, CCA, grading or activities.
  if (dateStr && !isSchoolDay(parseLocalDate(dateStr))) {
    return activityRows.sort((a, b) => timeStartMinutes(a.time) - timeStartMinutes(b.time));
  }
  return [...base, ...activityRows].sort((a, b) => timeStartMinutes(a.time) - timeStartMinutes(b.time));
}
function addActivityPackItems(items, activity) {
  const text = `${activity.type || ''} ${activity.title || ''}`.toLowerCase();
  if (text.includes('math tuition')) {
    items.add('Math tuition worksheet / file');
    items.add('calculator');
  }
  if (text.includes('english tuition')) {
    items.add('English tuition worksheet / file');
    items.add('reading book');
  }
  if (text.includes('taekwondo')) {
    items.add('taekwondo uniform');
    items.add('belt');
    items.add('water bottle');
  }
  if (text.includes('grading')) {
    items.add('arm gear');
    items.add('shin gear');
    items.add('groin gear');
  }
}
function getPackItemsForDay(day, dateStr = '') {
  const classes = classesForDayWithDate(day, dateStr);
  const items = new Set(['school diary', 'pencil case', 'water bottle']);
  classes.forEach(c => {
    (PACK_ITEMS[c.subject] || []).forEach(item => items.add(item));
    if (c.subject === 'Chinese Orchestra Training' || c.subject === 'CCA: Chinese Orchestra Training') {
      items.add('Chinese Orchestra file / scores');
      items.add('instrument / CCA materials if needed');
    }
  });
  if (dateStr) getAllActivities().filter(a => a.date === dateStr).forEach(a => addActivityPackItems(items, a));
  return [...items];
}
function getPackDone() {
  return load(LS.packDone, {});
}
function setPackDone(value) {
  save(LS.packDone, value);
}
function packDoneKey(day, item) {
  return `${day}::${item}`;
}
function renderPackItem(day, item) {
  const done = getPackDone();
  const key = packDoneKey(day, item);
  return `<label class="pack-item ${done[key] ? 'done' : ''}"><input type="checkbox" data-pack-day="${day}" data-pack-item="${encodeURIComponent(item)}" ${done[key] ? 'checked' : ''}> <span>${item}</span></label>`;
}
function classRow(c) {
  const extra = [c.teacher, c.venue].filter(Boolean).join(' · ');
  return `<div class="class-row ${c.isActivity ? 'activity-class-row' : ''}"><span class="class-time">${c.time}</span><div><strong>${c.subject}</strong>${extra ? `<span>${extra}</span>` : ''}</div></div>`;
}
function renderTimetableDashboard() {
  const day = getSelectedCycleDay();
  const todayStr = inputDateString(todayDate());
  const dateForSelected = day === getAutoCycleDay() ? todayStr : '';
  const classes = classesForDayWithDate(day, dateForSelected).filter(c => !['Lunch', 'Recess'].includes(c.subject));
  const nextDate = nextSchoolDate(todayDate());
  const nextDay = getAutoCycleDay(nextDate);
  const nextDateStr = inputDateString(nextDate);
  const preview = document.getElementById('dashboardTimetablePreview');
  const pack = document.getElementById('dashboardPackPreview');
  const badge = document.getElementById('tomorrowCycleBadge');
  if (badge) badge.textContent = nextDay;
  if (preview) {
    preview.innerHTML = `<div class="cycle-chip">${day}</div>` + classes.slice(0, 6).map(classRow).join('') + (classes.length > 6 ? `<button class="text-btn" data-section="timetable">View ${classes.length - 6} more</button>` : '');
  }
  if (pack) {
    pack.innerHTML = getPackItemsForDay(nextDay, nextDateStr).slice(0, 7).map(item => renderPackItem(nextDay, item)).join('');
  }
}
function renderTimetable() {
  const selector = document.getElementById('cycleDaySelect');
  if (!selector) return;
  const selected = getSelectedCycleDay();
  selector.innerHTML = TIMETABLE_DAYS.map(day => `<option value="${day}">${day}</option>`).join('');
  selector.value = selected;
  const todayStr = inputDateString(todayDate());
  const dateForSelected = selected === getAutoCycleDay() ? todayStr : '';
  const classes = classesForDayWithDate(selected, dateForSelected);
  const nextDate = nextSchoolDate(todayDate());
  const nextDay = getAutoCycleDay(nextDate);
  const nextDateStr = inputDateString(nextDate);
  const isWeekendView = dateForSelected && !isSchoolDay(parseLocalDate(dateForSelected));
  document.getElementById('selectedCycleTitle').textContent = isWeekendView ? 'Weekend Schedule' : `${selected} Classes`;
  const info = document.getElementById('cycleInfo');
  if (info) info.textContent = isCycleManualOverride() ? `Manual override is on. Auto today would be ${getAutoCycleDay()} using Singapore time.` : `Auto today: ${getAutoCycleDay()} · Singapore time · Anchor: 7 Jul 2026 = Day 7.`;
  document.getElementById('selectedClassCount').textContent = isWeekendView ? `${classes.length} activities` : `${classes.filter(c => !['Lunch', 'Recess'].includes(c.subject)).length} classes`;
  document.getElementById('selectedDayClasses').innerHTML = classes.map(classRow).join('');
  document.getElementById('packListTitle').textContent = `Pack for ${nextDay}`;
  document.getElementById('tomorrowPackList').innerHTML = getPackItemsForDay(nextDay, nextDateStr).map(item => renderPackItem(nextDay, item)).join('');
  document.getElementById('fullTimetableGrid').innerHTML = TIMETABLE_DAYS.map(day => {
    const dayClasses = (TIMETABLE[day] || []).filter(c => !['Lunch', 'Recess'].includes(c.subject));
    return `<article class="timetable-day ${day === selected ? 'active' : ''}"><h3>${day}</h3>${dayClasses.map(c => `<p><strong>${c.time}</strong> ${c.subject}${c.venue ? ` · ${c.venue}` : ''}</p>`).join('')}</article>`;
  }).join('');
}


function noticeEndDate(notice) {
  return notice.endDate || notice.date;
}
function isNoticeCurrentOrUpcoming(notice) {
  const end = noticeEndDate(notice);
  if (!end) return true;
  const today = inputDateString(todayDate());
  return end >= today;
}
function noticeSort(a, b) {
  const da = parseDate(a.date)?.getTime() ?? Infinity;
  const db = parseDate(b.date)?.getTime() ?? Infinity;
  return da - db;
}
function getUpcomingNotices(limit = 5) {
  return SCHOOL_NOTICES
    .filter(isNoticeCurrentOrUpcoming)
    .sort(noticeSort)
    .slice(0, limit);
}
function noticeDateLabel(notice) {
  if (!notice.date) return 'TBC';
  const start = formatLongDate(notice.date);
  if (notice.endDate && notice.endDate !== notice.date) return `${start} – ${formatLongDate(notice.endDate)}`;
  return start;
}
function renderSchoolNoticeItem(notice, compact = false) {
  const urgent = notice.priority === 'urgent';
  const dateText = noticeDateLabel(notice);
  const audience = notice.audience ? `<span class="notice-audience">${notice.audience}</span>` : '';
  return `
    <article class="notice-item ${urgent ? 'urgent' : ''} ${compact ? 'compact' : ''}">
      <div class="notice-date">${dateText}</div>
      <div class="notice-body">
        <div class="notice-title-row"><span class="type-badge">${notice.type}</span>${urgent ? '<span class="urgency-badge danger">Important</span>' : ''}</div>
        <strong>${notice.title}</strong>
        <p>${notice.detail}</p>
        ${audience}
      </div>
    </article>`;
}
function renderSchoolNoticesDashboard() {
  const el = document.getElementById('dashboardSchoolNoticesPreview');
  if (!el) return;
  const items = getUpcomingNotices(5);
  el.innerHTML = items.length
    ? items.map(n => renderSchoolNoticeItem(n, true)).join('')
    : '<div class="empty-small">No upcoming school notices.</div>';
}
function renderSchoolNotices() {
  const el = document.getElementById('schoolNoticeList');
  if (!el) return;
  const upcoming = SCHOOL_NOTICES.filter(isNoticeCurrentOrUpcoming).sort(noticeSort);
  const past = SCHOOL_NOTICES.filter(n => !isNoticeCurrentOrUpcoming(n)).sort(noticeSort).slice(-4);
  el.innerHTML = `
    <div class="notice-subheading">Upcoming / Still relevant</div>
    ${upcoming.length ? upcoming.map(n => renderSchoolNoticeItem(n)).join('') : '<div class="empty-small">No upcoming notices.</div>'}
    ${past.length ? `<div class="notice-subheading past">Recently passed</div>${past.map(n => renderSchoolNoticeItem(n, true)).join('')}` : ''}
  `;
}

function renderAll() {
  renderDashboard();
  renderWa3Board();
  renderPlanner();
  renderTimetable();
  renderSchoolNotices();
  renderRevisionControls();
  renderMistakeBook();
  renderProgress();
}

function setupEvents() {
  document.addEventListener('click', e => {
    if (e.target.id === 'autoCycleBtn') {
      localStorage.removeItem(LS.cycleDay);
      renderTimetable();
      renderTimetableDashboard();
      toast(`Auto cycle restored: ${getAutoCycleDay()}`);
      return;
    }
    const nav = e.target.closest('[data-section]');
    if (nav) switchSection(nav.dataset.section);

    if (e.target.id === 'startMissionBtn') {
      switchSection('planner');
      toast('Start with today’s top task');
    }
    if (e.target.id === 'addPlannerTaskBtn') openTaskModal();
    if (e.target.id === 'closeTaskModal') closeTaskModal();
    if (e.target.id === 'savePlannerTaskBtn') savePlannerTask();
    if (e.target.id === 'startPracticeBtn') startPracticeRound();
    if (e.target.id === 'practiceAgainBtn') startPracticeRound();
    if (e.target.classList.contains('option-btn')) answerQuestion(decodeURIComponent(e.target.dataset.answer));
    if (e.target.id === 'startMistakeReviewBtn') startMistakeReview();

    const moveBtn = e.target.closest('[data-move-id]');
    if (moveBtn) movePlannerTask(moveBtn.dataset.moveDay, moveBtn.dataset.moveId);
    const delBtn = e.target.closest('[data-delete-id]');
    if (delBtn) deletePlannerTask(delBtn.dataset.deleteDay, delBtn.dataset.deleteId);
    const mistakeOption = e.target.closest('[data-mistake-answer]');
    if (mistakeOption) {
      const mistakes = getMistakes();
      const m = mistakes.find(x => x.id === mistakeOption.dataset.mistakeId);
      if (m) reviewMistake(m.id, decodeURIComponent(mistakeOption.dataset.mistakeAnswer) === m.answer);
    }
    if (e.target.id === 'showAllMistakesBtn') renderMistakeBook();
    const correctBtn = e.target.closest('[data-review-correct]');
    if (correctBtn) reviewMistake(correctBtn.dataset.reviewCorrect, true);
    const wrongBtn = e.target.closest('[data-review-wrong]');
    if (wrongBtn) reviewMistake(wrongBtn.dataset.reviewWrong, false);
    const removeBtn = e.target.closest('[data-remove-mistake]');
    if (removeBtn) removeMistake(removeBtn.dataset.removeMistake);
  });

  document.addEventListener('change', e => {
    if (e.target.matches('[data-focus-id]')) {
      const done = load(LS.focusDone, {});
      const task = getFocusTasks().find(t => t.id === e.target.dataset.focusId);
      let proof = '';

      // The first focus card is the current next WA3 task.
      // Ticking it should complete the linked WA3 item too, so the deadline card moves on.
      if (e.target.dataset.focusWa3Id) {
        const wa3Task = WA3_TASKS.find(t => t.id === e.target.dataset.focusWa3Id);
        const wa3Done = getWa3Done();
        if (e.target.checked) {
          proof = requestEvidence(wa3Task ? `${wa3Task.subject} — ${wa3Task.title}` : 'WA3 task');
          if (!proof) { e.target.checked = false; toast('Add quick proof before ticking done'); return; }
          saveEvidence('wa3', e.target.dataset.focusWa3Id, proof);
        }
        wa3Done[e.target.dataset.focusWa3Id] = e.target.checked;
        setWa3Done(wa3Done);
        recordAudit({
          type: 'wa3',
          id: e.target.dataset.focusWa3Id,
          label: wa3Task ? `${wa3Task.subject}: ${wa3Task.title}` : 'WA3 task',
          checked: e.target.checked,
          evidence: proof
        });
      }

      done[e.target.dataset.focusId] = e.target.checked;
      save(LS.focusDone, done);
      recordAudit({ type: 'focus', id: e.target.dataset.focusId, label: task?.text || 'Focus task', checked: e.target.checked, evidence: proof });
      toast(e.target.checked ? 'Focus task done' : 'Focus task reopened');
      renderAll();
    }
    if (e.target.matches('[data-wa3-id]')) {
      const done = getWa3Done();
      const task = WA3_TASKS.find(t => t.id === e.target.dataset.wa3Id);
      let proof = '';
      if (e.target.checked) {
        proof = requestEvidence(task ? `${task.subject} — ${task.title}` : 'WA3 task');
        if (!proof) { e.target.checked = false; toast('Add quick proof before ticking done'); return; }
        saveEvidence('wa3', e.target.dataset.wa3Id, proof);
      }
      done[e.target.dataset.wa3Id] = e.target.checked;
      setWa3Done(done);
      recordAudit({ type: 'wa3', id: e.target.dataset.wa3Id, label: task ? `${task.subject}: ${task.title}` : 'WA3 task', checked: e.target.checked, evidence: proof });
      toast(e.target.checked ? 'WA3 mission completed with proof' : 'WA3 mission reopened');
      renderAll();
    }
    if (e.target.matches('[data-plan-id]')) {
      const planner = getPlanner();
      const task = planner[e.target.dataset.planDay].find(t => t.id === e.target.dataset.planId);
      let proof = '';
      if (task && e.target.checked) {
        proof = requestEvidence(task.text);
        if (!proof) { e.target.checked = false; toast('Add quick proof before ticking done'); return; }
        saveEvidence('planner', task.id, proof);
      }
      if (task) task.done = e.target.checked;
      setPlanner(planner);
      recordAudit({ type: 'planner', id: e.target.dataset.planId, label: task?.text || 'Planner task', checked: e.target.checked, evidence: proof });
      toast(e.target.checked ? 'Task completed with proof' : 'Task reopened');
      renderAll();
    }
    if (e.target.matches('[data-pack-day][data-pack-item]')) {
      const done = getPackDone();
      const day = e.target.dataset.packDay;
      const item = decodeURIComponent(e.target.dataset.packItem);
      const key = packDoneKey(day, item);
      done[key] = e.target.checked;
      setPackDone(done);
      recordAudit({ type: 'pack', id: key, label: `${day}: ${item}`, checked: e.target.checked, evidence: e.target.checked ? 'packed' : '' });
      toast(e.target.checked ? 'Packed item saved' : 'Packed item reopened');
      renderTimetableDashboard();
      renderTimetable();
      renderProgress();
      return;
    }
    if (e.target.id === 'subjectSelect') renderTopicOptions();
    if (e.target.id === 'cycleDaySelect') {
      save(LS.cycleDay, e.target.value);
      toast(`Timetable set to ${e.target.value}`);
      renderAll();
    }
  });

  document.addEventListener('input', e => {
    if (e.target.matches('[data-note-id]')) {
      const notes = getWa3Notes();
      notes[e.target.dataset.noteId] = e.target.value;
      setWa3Notes(notes);
    }
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentFilter = btn.dataset.filter;
      renderWa3Board();
    });
  });
}

function openTaskModal() {
  document.getElementById('modalDaySelect').innerHTML = DAYS.map(d => `<option value="${d}">${d}</option>`).join('');
  const todayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  if (DAYS.includes(todayName)) document.getElementById('modalDaySelect').value = todayName;
  document.getElementById('modalTaskInput').value = '';
  document.getElementById('taskModal').classList.add('open');
  document.getElementById('taskModal').setAttribute('aria-hidden', 'false');
  setTimeout(() => document.getElementById('modalTaskInput').focus(), 50);
}
function closeTaskModal() {
  document.getElementById('taskModal').classList.remove('open');
  document.getElementById('taskModal').setAttribute('aria-hidden', 'true');
}
function savePlannerTask() {
  const day = document.getElementById('modalDaySelect').value;
  const text = document.getElementById('modalTaskInput').value.trim();
  const type = document.getElementById('modalTaskType').value;
  if (!text) { toast('Please type a task first'); return; }
  const planner = getPlanner();
  planner[day] = planner[day] || [];
  planner[day].push({ id: `p-${Date.now()}`, text, type, done: false });
  setPlanner(planner);
  closeTaskModal();
  renderAll();
  toast('Task added');
}
function movePlannerTask(day, id) {
  const planner = getPlanner();
  const idx = DAYS.indexOf(day);
  const nextDay = DAYS[(idx + 1) % DAYS.length];
  const taskIndex = planner[day].findIndex(t => t.id === id);
  if (taskIndex === -1) return;
  const [task] = planner[day].splice(taskIndex, 1);
  task.done = false;
  planner[nextDay] = planner[nextDay] || [];
  planner[nextDay].push(task);
  setPlanner(planner);
  renderAll();
  toast(`Moved to ${nextDay}`);
}
function deletePlannerTask(day, id) {
  if (!confirm('Delete this task?')) return;
  const planner = getPlanner();
  planner[day] = planner[day].filter(t => t.id !== id);
  setPlanner(planner);
  renderAll();
  toast('Task deleted');
}
function reviewMistake(id, correct) {
  const mistakes = getMistakes();
  const mastered = getMastered();
  const m = mistakes.find(x => x.id === id);
  if (!m) return;
  updateReviewStreak();
  if (correct) {
    m.correctCount = (m.correctCount || 0) + 1;
    if (m.correctCount >= 2) {
      setMistakes(mistakes.filter(x => x.id !== id));
      mastered.push({ ...m, masteredAt: new Date().toISOString() });
      setMastered(mastered);
      toast('Mastered after 2 correct reviews');
    } else {
      setMistakes(mistakes);
      toast('Good. One more correct review to master it');
    }
  } else {
    m.correctCount = 0;
    setMistakes(mistakes);
    toast('Keep this in review');
  }
  renderAll();
}
function removeMistake(id) {
  if (!confirm('Remove this mistake from active review?')) return;
  setMistakes(getMistakes().filter(m => m.id !== id));
  renderAll();
  toast('Mistake removed');
}


// ===== v7 Daily Homework + Schedule additions =====
LS.homework = 'eshq_v7_homework';
LS.activities = 'eshq_v7_activities';

function inputDateString(date = new Date()) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
}
function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}
function getHomework() { return load(LS.homework, []); }
function setHomework(list) { save(LS.homework, list); }
function getActivities() { return load(LS.activities, []); }
function setActivities(list) { save(LS.activities, list); }
function dueLabel(dateStr) {
  if (!dateStr) return 'No date';
  const diff = Math.round((parseDate(dateStr) - todayDate()) / 86400000);
  const exact = parseDate(dateStr).toLocaleDateString('en-SG', { weekday: 'short', day: 'numeric', month: 'short' });
  if (diff === 0) return `Today · ${exact}`;
  if (diff === 1) return `Tomorrow · ${exact}`;
  if (diff === -1) return `Yesterday · ${exact}`;
  if (diff < 0) return `${Math.abs(diff)} days overdue · ${exact}`;
  if (diff <= 6) return `${exact}`;
  return exact;
}
function homeworkSort(a, b) {
  const da = parseDate(a.dueDate)?.getTime() ?? Infinity;
  const db = parseDate(b.dueDate)?.getTime() ?? Infinity;
  return da - db;
}
function homeworkGroups() {
  const hw = getHomework().slice().sort(homeworkSort);
  const today = inputDateString(todayDate());
  const tomorrow = inputDateString(addDays(todayDate(), 1));
  return {
    overdue: hw.filter(h => !h.done && h.dueDate && h.dueDate < today),
    today: hw.filter(h => !h.done && h.dueDate === today),
    tomorrow: hw.filter(h => !h.done && h.dueDate === tomorrow),
    upcoming: hw.filter(h => !h.done && h.dueDate && h.dueDate > tomorrow),
    nodate: hw.filter(h => !h.done && !h.dueDate),
    completed: hw.filter(h => h.done).sort((a, b) => (b.completedAt || '').localeCompare(a.completedAt || ''))
  };
}
function homeworkMeta(h) {
  if (h.done) return completionMeta('homework', h.id);
  const diff = h.dueDate ? Math.round((parseDate(h.dueDate) - todayDate()) / 86400000) : null;
  const urgent = diff !== null && diff <= 1;
  return `<span class="${urgent ? 'status-badge danger' : 'status-badge'}">${dueLabel(h.dueDate)}</span><span class="proof-chip">Proof needed</span>`;
}
function renderHomeworkItem(h, compact = false) {
  const typeClass = (h.subject || 'other').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return `
    <div class="homework-item ${h.done ? 'done' : ''} ${compact ? 'compact' : ''}">
      <input type="checkbox" data-hw-id="${h.id}" ${h.done ? 'checked' : ''} aria-label="Complete ${h.text}">
      <div class="homework-main">
        <div class="homework-title"><span class="subject-pill ${typeClass}">${h.subject || 'Other'}</span><strong>${h.text}</strong></div>
        <div class="homework-meta">${homeworkMeta(h)}</div>
      </div>
      <div class="planner-item-actions">
        <button data-hw-edit="${h.id}">Edit</button>
        <button data-hw-delete="${h.id}">Delete</button>
      </div>
    </div>`;
}
function renderHomeworkGroup(title, items, emptyText, className = '') {
  return `<article class="homework-group ${className}"><div class="planner-group-head"><div><h3>${title}</h3></div><span class="group-count">${items.length}</span></div><div class="homework-list">${items.length ? items.map(h => renderHomeworkItem(h)).join('') : `<div class="empty-small">${emptyText}</div>`}</div></article>`;
}
function renderHomeworkBoard() {
  const board = document.getElementById('homeworkBoard');
  if (!board) return;
  const g = homeworkGroups();
  const activeCount = g.overdue.length + g.today.length + g.tomorrow.length + g.upcoming.length + g.nodate.length;
  board.innerHTML = `
    <div class="homework-summary-strip">
      <div><strong>${activeCount}</strong><span>active homework</span></div>
      <div><strong>${g.today.length}</strong><span>due today</span></div>
      <div><strong>${g.tomorrow.length}</strong><span>due tomorrow</span></div>
      <div><strong>${g.completed.length}</strong><span>completed</span></div>
    </div>
    <div class="homework-grid">
      ${renderHomeworkGroup('Overdue', g.overdue, 'No overdue homework. Good.', 'overdue-group')}
      ${renderHomeworkGroup('Due Today', g.today, 'Nothing due today.', 'today-group')}
      ${renderHomeworkGroup('Due Tomorrow', g.tomorrow, 'Nothing due tomorrow yet.', 'tomorrow-group')}
      ${renderHomeworkGroup('Upcoming', g.upcoming.slice(0, 8), 'No upcoming homework.', 'upcoming-group')}
      ${renderHomeworkGroup('No Date Yet', g.nodate, 'No homework without date.', 'nodate-group')}
      ${renderHomeworkGroup('Completed', g.completed.slice(0, 8), 'Completed homework will appear here.', 'completed-group')}
    </div>`;
}
function renderDashboardHomework() {
  const el = document.getElementById('dashboardHomeworkPreview');
  if (!el) return;
  const g = homeworkGroups();
  const items = [...g.overdue, ...g.today, ...g.tomorrow, ...g.upcoming].slice(0, 4);
  if (!items.length) {
    el.innerHTML = `<div class="empty-small"><strong>No homework due soon.</strong><br>Add homework after school so tomorrow’s list is clear.</div>`;
    return;
  }
  el.innerHTML = items.map(h => renderHomeworkItem(h, true)).join('');
}
function openHomeworkModal(editId = '') {
  const modal = document.getElementById('homeworkModal');
  if (!modal) return;
  modal.dataset.editId = editId || '';
  const h = editId ? getHomework().find(x => x.id === editId) : null;
  document.getElementById('homeworkSubjectInput').value = h?.subject || 'Mathematics';
  document.getElementById('homeworkTextInput').value = h?.text || '';
  document.getElementById('homeworkDueInput').value = h?.dueDate || inputDateString(addDays(todayDate(), 1));
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  setTimeout(() => document.getElementById('homeworkTextInput').focus(), 50);
}
function closeHomeworkModal() {
  const modal = document.getElementById('homeworkModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}
function saveHomework() {
  const subject = document.getElementById('homeworkSubjectInput').value;
  const text = document.getElementById('homeworkTextInput').value.trim();
  const dueDate = document.getElementById('homeworkDueInput').value;
  if (!text) { toast('Please type the homework details'); return; }
  const list = getHomework();
  const editId = document.getElementById('homeworkModal').dataset.editId;
  if (editId) {
    const h = list.find(x => x.id === editId);
    if (h) Object.assign(h, { subject, text, dueDate, updatedAt: new Date().toISOString() });
  } else {
    list.push({ id: `hw-${Date.now()}`, subject, text, dueDate, done: false, createdAt: new Date().toISOString() });
  }
  setHomework(list);
  closeHomeworkModal();
  renderAll();
  toast(editId ? 'Homework updated' : 'Homework added');
}
function toggleHomework(id, checked) {
  const list = getHomework();
  const h = list.find(x => x.id === id);
  if (!h) return;
  let proof = '';
  if (checked) {
    proof = requestEvidence(`${h.subject} — ${h.text}`);
    if (!proof) { toast('Add quick proof before ticking done'); return false; }
    saveEvidence('homework', id, proof);
    h.completedAt = new Date().toISOString();
  } else {
    h.completedAt = '';
  }
  h.done = checked;
  setHomework(list);
  recordAudit({ type: 'homework', id, label: `${h.subject}: ${h.text}`, checked, evidence: proof });
  renderAll();
  toast(checked ? 'Homework completed with proof' : 'Homework reopened');
  return true;
}
function deleteHomework(id) {
  if (!confirm('Delete this homework?')) return;
  setHomework(getHomework().filter(h => h.id !== id));
  renderAll();
  toast('Homework deleted');
}
function clearCompletedHomework() {
  if (!confirm('Clear completed homework from the visible list?')) return;
  setHomework(getHomework().filter(h => !h.done));
  renderAll();
  toast('Completed homework cleared');
}
function activityDateKey(a) { return `${a.date || ''} ${a.time || ''}`; }
function normaliseCcaItem(a) {
  return { ...a, fixed: true, notes: [a.teacher, a.venue, a.notes].filter(Boolean).join(' · ') };
}
function getCcaActivities() {
  return CCA_SCHEDULE.map(normaliseCcaItem);
}
function recurringDatesForRule(rule, startDate = '2026-07-11', endDate = '2026-12-31') {
  const out = [];
  let d = parseLocalDate(startDate);
  const end = parseLocalDate(endDate);
  while (d <= end) {
    if (d.getDay() === rule.weekday) {
      const dateStr = inputDateString(d);
      out.push({
        id: `${rule.idPrefix}-${dateStr}`,
        type: rule.type,
        title: rule.title,
        date: dateStr,
        day: d.toLocaleDateString('en-SG', { weekday: 'long' }),
        time: rule.time,
        venue: rule.venue,
        notes: rule.notes,
        fixed: true,
        recurring: true
      });
    }
    d.setDate(d.getDate() + 1);
  }
  return out;
}
function getRecurringActivities() {
  return RECURRING_ACTIVITIES.flatMap(rule => recurringDatesForRule(rule));
}
function getSpecialActivities() {
  return SPECIAL_ACTIVITIES.map(a => ({ ...a, fixed: true, special: true }));
}
function getAllActivities() {
  return [...getActivities(), ...getCcaActivities(), ...getRecurringActivities(), ...getSpecialActivities()];
}
function getTodayActivities() {
  const today = inputDateString(todayDate());
  return getAllActivities().filter(a => a.date === today).sort((a,b)=>activityDateKey(a).localeCompare(activityDateKey(b)));
}
function getUpcomingActivities(limit = 8) {
  const today = inputDateString(todayDate());
  return getAllActivities().filter(a => !a.date || a.date >= today).sort((a,b)=>activityDateKey(a).localeCompare(activityDateKey(b))).slice(0, limit);
}
function getActivitiesBetween(startDateStr, endDateStr) {
  return getAllActivities()
    .filter(a => a.date && a.date >= startDateStr && a.date <= endDateStr)
    .sort((a,b)=>activityDateKey(a).localeCompare(activityDateKey(b)));
}
function getWeeklyRoutineRows() {
  return RECURRING_ACTIVITIES.map(rule => ({
    id: `routine-${rule.idPrefix}`,
    type: rule.type,
    title: rule.title,
    date: '',
    day: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][rule.weekday],
    time: rule.time,
    venue: rule.venue,
    notes: rule.notes,
    fixed: true,
    routine: true
  }));
}
function activityCategory(a) {
  const type = (a.type || '').toLowerCase();
  if (type.includes('cca') || type.includes('school event') || type.includes('learning journey')) return 'school';
  if (type.includes('tuition') || type.includes('taekwondo')) return 'external';
  if (type.includes('holiday')) return 'holiday';
  if (type.includes('hbl') || type.includes('bcd')) return 'hbl';
  if (type.includes('exam') || type.includes('wa') || type.includes('deadline') || type.includes('important') || type.includes('parent')) return 'important';
  return 'school';
}
function activityCategoryLabel(a) {
  const cat = activityCategory(a);
  if (cat === 'external') return 'External schedule';
  if (cat === 'holiday') return 'Holiday';
  if (cat === 'hbl') return 'HBL';
  if (cat === 'important') return 'Important';
  return 'School schedule';
}
function renderActivityItem(a, compact = false) {
  const category = activityCategory(a);
  const sourceLabel = a.fixed ? activityCategoryLabel(a) : 'Custom';
  const deleteBtn = a.fixed
    ? `<span class="locked-note ${category}">${sourceLabel}</span>`
    : `<button data-activity-delete="${a.id}">Delete</button>`;
  const dateText = a.date ? dueLabel(a.date) : 'No date';
  const detailBits = [a.time, a.venue, a.notes || a.detail].filter(Boolean);
  return `<div class="activity-item ${compact ? 'compact' : ''} ${a.fixed ? 'fixed' : ''} activity-${category}">
    <span class="type-badge ${category}">${a.type}</span>
    <div class="activity-date">${dateText}</div>
    <div class="activity-main"><strong>${a.title}</strong><span>${detailBits.join(' · ')}</span></div>
    ${deleteBtn}
  </div>`;
}
function renderActivitiesDashboard() {
  const el = document.getElementById('dashboardActivitiesPreview');
  if (!el) return;
  const today = getTodayActivities();
  const upcoming = getUpcomingActivities(3);
  const items = today.length ? today : upcoming;
  el.innerHTML = items.length ? items.map(a => renderActivityItem(a, true)).join('') : `<div class="empty-small"><strong>No after-school schedule added.</strong><br>Add tuition, taekwondo, CCA or reminders in Schedule.</div>`;
}
function renderActivityViewControls(activeView = 'list') {
  return `<div class="activity-view-controls">
    <button type="button" class="activity-view-btn ${activeView === 'list' ? 'active' : ''}" data-activity-view="list">List View</button>
    <button type="button" class="activity-view-btn ${activeView === 'month' ? 'active' : ''}" data-activity-view="month">Month View</button>
    <button type="button" class="activity-view-btn ${activeView === 'full' ? 'active' : ''}" data-activity-view="full">Full Schedule</button>
  </div>`;
}
function getActivityView() {
  return load('eshq_v31_activity_view', 'list');
}
function setActivityView(view) {
  save('eshq_v31_activity_view', view);
}
function activityTypeClass(type = '') {
  const t = type.toLowerCase();
  if (t.includes('school day')) return 'schoolday';
  if (t.includes('cca') || t.includes('msp') || t.includes('school event') || t.includes('learning journey')) return 'school';
  if (t.includes('tuition') || t.includes('taekwondo')) return 'external';
  if (t.includes('hbl') || t.includes('bcd')) return 'hbl';
  if (t.includes('holiday')) return 'holiday';
  if (t.includes('exam') || t.includes('grading') || t.includes('deadline') || t.includes('wa') || t.includes('important') || t.includes('parent')) return 'important';
  return 'school';
}
function daysBetweenInclusive(startStr, endStr) {
  const out = [];
  const d = parseLocalDate(startStr);
  const end = parseLocalDate(endStr || startStr);
  while (d <= end) {
    out.push(inputDateString(d));
    d.setDate(d.getDate() + 1);
  }
  return out;
}
function expandDatedItems(items) {
  return (items || []).flatMap(item => {
    if (!item.date) return [];
    return daysBetweenInclusive(item.date, item.endDate || item.date).map(date => ({
      ...item,
      id: `${item.id || item.title}-${date}`,
      date,
      fixed: true,
      expandedFromRange: Boolean(item.endDate && item.endDate !== item.date)
    }));
  });
}
function getNoticeEventsBetween(start, end) {
  const notices = expandDatedItems(typeof SCHOOL_NOTICES !== 'undefined' ? SCHOOL_NOTICES : [])
    .map(n => ({ ...n, type: n.type || 'Important', notes: n.detail || n.description || n.notes || '', fixed: true }));
  const holidays = expandDatedItems(typeof MOE_SCHOOL_HOLIDAYS !== 'undefined' ? MOE_SCHOOL_HOLIDAYS : [])
    .map(n => ({ ...n, type: n.type || 'Holiday', notes: n.detail || n.notes || '', fixed: true }));
  return [...notices, ...holidays].filter(n => n.date >= start && n.date <= end);
}
function getWaEventsBetween(start, end) {
  return (typeof WA3_TASKS !== 'undefined' ? WA3_TASKS : [])
    .filter(t => t.date && t.date >= start && t.date <= end)
    .map(t => ({
      id: `wa-${t.id || t.subject}-${t.date}`,
      type: 'WA / Deadline',
      title: `${t.subject}: ${t.title}`,
      date: t.date,
      time: t.time || '',
      venue: '',
      notes: [t.taskType || t.type, t.marks, t.duration].filter(Boolean).join(' · '),
      fixed: true
    }));
}
function isHolidayDate(dateStr) {
  return getNoticeEventsBetween(dateStr, dateStr).some(e => activityCategory(e) === 'holiday');
}
function isHblDate(dateStr) {
  return getNoticeEventsBetween(dateStr, dateStr).some(e => activityCategory(e) === 'hbl');
}
function isTermSchoolDate(dateStr) {
  const d = parseLocalDate(dateStr);
  const day = d.getDay();
  if (day === 0 || day === 6) return false;
  const inTerm3 = dateStr >= '2026-06-29' && dateStr <= '2026-09-04';
  const inTerm4 = dateStr >= '2026-09-14' && dateStr <= '2026-11-20';
  return (inTerm3 || inTerm4) && !isHolidayDate(dateStr) && !isHblDate(dateStr);
}
function getScheduleTimelineItems(start, end) {
  return [
    ...getActivitiesBetween(start, end),
    ...getNoticeEventsBetween(start, end),
    ...getWaEventsBetween(start, end)
  ].sort((a, b) => activityDateKey(a).localeCompare(activityDateKey(b)));
}

function getMspEventsBetween(start, end) {
  const out = [];
  const d = parseLocalDate(start);
  const finish = parseLocalDate(end);
  while (d <= finish) {
    const dateStr = inputDateString(d);
    if (isTermSchoolDate(dateStr)) {
      const dayLabel = `Day ${getAutoCycleDay(d)}`;
      const msp = (TIMETABLE[dayLabel] || []).find(item => String(item.subject || '').toUpperCase() === 'MSP');
      if (msp) {
        out.push({
          id: `msp-${dateStr}`,
          type: 'MSP',
          title: 'MSP after-school lesson',
          date: dateStr,
          time: msp.time || '15:00–17:20',
          venue: msp.venue || '',
          notes: msp.teacher || '',
          fixed: true
        });
      }
    }
    d.setDate(d.getDate() + 1);
  }
  return out;
}
function monthEventLabel(a) {
  const type = String(a.type || '').toLowerCase();
  const title = String(a.title || '').toLowerCase();
  if (type.includes('school day')) return a.label || 'School Day';
  if (type.includes('cca')) return 'CCA';
  if (type.includes('msp') || title.includes('msp')) return 'MSP';
  if (type.includes('tuition')) return 'Tuition';
  if (type.includes('taekwondo') && title.includes('grading')) return 'TKD Grading';
  if (type.includes('taekwondo')) return 'Taekwondo';
  if (type.includes('hbl') || type.includes('bcd')) return 'HBL / BCD';
  if (type.includes('holiday')) return 'Holiday';
  if (type.includes('wa') || type.includes('deadline')) return 'WA';
  if (title.includes('pld') || title.includes('dma')) return 'PLD DMA';
  if (type.includes('school event')) return 'School Event';
  if (type.includes('learning journey')) return 'Learning Journey';
  if (type.includes('parent')) return 'Parent';
  if (type.includes('important')) return 'Important';
  return a.type || a.title || 'Event';
}

function getMonthActivityEvents(monthDate = todayDate()) {
  const y = monthDate.getFullYear();
  const m = monthDate.getMonth();
  const first = new Date(y, m, 1);
  const last = new Date(y, m + 1, 0);
  const start = inputDateString(first);
  const end = inputDateString(last);
  const scheduled = [...getScheduleTimelineItems(start, end), ...getMspEventsBetween(start, end)].map(a => ({
    date: a.date,
    label: monthEventLabel(a),
    className: activityTypeClass(a.type),
    title: [a.title, a.time].filter(Boolean).join(' · ')
  }));
  const schoolDays = [];
  let d = new Date(first);
  while (d <= last) {
    const dateStr = inputDateString(d);
    if (isTermSchoolDate(dateStr)) {
      const dayNum = getAutoCycleDay(d);
      schoolDays.push({ date: dateStr, label: `School Day ${dayNum}`, className: 'schoolday', title: `School Day ${dayNum}` });
    }
    d.setDate(d.getDate() + 1);
  }
  // Put school-day marker first, then events.
  return [...schoolDays, ...scheduled];
}

function getCalendarMonthOffset() {
  return Number(load('eshq_v34_calendar_month_offset', 0)) || 0;
}
function setCalendarMonthOffset(offset) {
  save('eshq_v34_calendar_month_offset', Number(offset) || 0);
}
function changeCalendarMonth(delta) {
  setCalendarMonthOffset(getCalendarMonthOffset() + delta);
  renderActivities();
}
function getVisibleCalendarMonth() {
  const base = todayDate();
  return new Date(base.getFullYear(), base.getMonth() + getCalendarMonthOffset(), 1);
}
function renderMonthCalendar(monthDate = todayDate()) {
  const y = monthDate.getFullYear();
  const m = monthDate.getMonth();
  const first = new Date(y, m, 1);
  const last = new Date(y, m + 1, 0);
  const startPad = first.getDay();
  const totalCells = Math.ceil((startPad + last.getDate()) / 7) * 7;
  const events = getMonthActivityEvents(monthDate);
  const todayStr = inputDateString(todayDate());
  let cells = '';
  for (let i = 0; i < totalCells; i++) {
    const dayNum = i - startPad + 1;
    const inMonth = dayNum >= 1 && dayNum <= last.getDate();
    if (!inMonth) {
      cells += `<div class="calendar-cell muted-cell"></div>`;
      continue;
    }
    const d = new Date(y, m, dayNum);
    const dateStr = inputDateString(d);
    const dayEvents = events.filter(e => e.date === dateStr).slice(0, 5);
    const more = events.filter(e => e.date === dateStr).length - dayEvents.length;
    cells += `<div class="calendar-cell ${dateStr === todayStr ? 'today-cell' : ''}">
      <div class="calendar-day-number">${dayNum}</div>
      <div class="calendar-events">${dayEvents.map(e => `<span class="cal-event ${e.className}" title="${e.title}">${e.label}</span>`).join('')}${more > 0 ? `<span class="cal-more">+${more}</span>` : ''}</div>
    </div>`;
  }
  const title = monthDate.toLocaleDateString('en-SG', { month: 'long', year: 'numeric' });
  const offset = getCalendarMonthOffset();
  return `<section class="month-calendar-wrap">
    <div class="mini-legend"><span><i class="legend-schoolday"></i>School Day</span><span><i class="legend-school"></i>CCA / MSP</span><span><i class="legend-external"></i>Tuition / Taekwondo</span><span><i class="legend-hbl"></i>HBL / Holiday</span><span><i class="legend-important"></i>Important</span></div>
    <div class="calendar-month-header">
      <button type="button" class="calendar-nav-btn" data-month-nav="-1" aria-label="Previous month">‹</button>
      <div>
        <h3>${title}</h3>
        ${offset !== 0 ? `<button type="button" class="calendar-today-btn" data-month-nav="today">Back to current month</button>` : ''}
      </div>
      <button type="button" class="calendar-nav-btn" data-month-nav="1" aria-label="Next month">›</button>
    </div>
    <div class="calendar-weekdays"><span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span></div>
    <div class="calendar-grid">${cells}</div>
  </section>`;
}
function renderWeeklyRoutine() {
  const rows = getWeeklyRoutineRows();
  return `<section class="activity-routine-panel">
    <div class="activity-day-head"><h3>Weekly Routine</h3><span>${rows.length} recurring</span></div>
    <div class="activity-group-list compact-routine">${rows.map(a => renderActivityItem(a)).join('')}</div>
  </section>`;
}
function renderSpecialDates() {
  const today = inputDateString(todayDate());
  const rows = [...getSpecialActivities(), ...(typeof SCHOOL_NOTICES !== 'undefined' ? SCHOOL_NOTICES.filter(n => n.date && n.date >= today).map(n => ({ id:`notice-${n.id}`, type:'Important', title:n.title, date:n.date, time:n.time || '', venue:'', notes:n.detail || n.description || '', fixed:true, special:true })) : [])]
    .filter(a => a.date >= today)
    .sort((a,b)=>activityDateKey(a).localeCompare(activityDateKey(b)))
    .slice(0, 6);
  if (!rows.length) return '';
  return `<section class="activity-special-panel">
    <div class="activity-day-head"><h3>Special Dates</h3><span>${rows.length} shown</span></div>
    <div class="activity-group-list">${rows.map(a => renderActivityItem(a)).join('')}</div>
  </section>`;
}
function renderActivities() {
  const el = document.getElementById('activityList');
  if (!el) return;
  const view = getActivityView();
  const today = todayDate();
  const start = inputDateString(today);
  const listEnd = inputDateString(addDays(today, 14));
  const fullEnd = inputDateString(addDays(today, 90));
  if (view === 'month') {
    el.innerHTML = `${renderActivityViewControls(view)}${renderMonthCalendar(getVisibleCalendarMonth())}`;
    return;
  }
  const allItems = view === 'full' ? getScheduleTimelineItems(start, fullEnd) : getScheduleTimelineItems(start, listEnd);
  if (!allItems.length) {
    const text = view === 'full' ? 'No future schedule items found.' : 'No schedule items in the next two weeks.';
    el.innerHTML = `${renderActivityViewControls(view)}<div class="empty-state"><h3>${text}</h3><p>Add tuition, taekwondo, CCA or reminders if needed.</p></div>`;
    return;
  }
  const byDate = new Map();
  allItems.forEach(a => {
    const key = a.date || 'No date';
    if (!byDate.has(key)) byDate.set(key, []);
    byDate.get(key).push(a);
  });
  const todayStr = inputDateString(todayDate());
  const tomorrow = inputDateString(addDays(todayDate(), 1));
  const dateHeading = (key) => {
    if (key === 'No date') return 'No date set';
    if (key === todayStr) return `Today · ${formatShortDate(key)}`;
    if (key === tomorrow) return `Tomorrow · ${formatShortDate(key)}`;
    return formatShortDate(key);
  };
  const listHtml = [...byDate.entries()].map(([date, rows]) => `
    <section class="activity-day-group">
      <div class="activity-day-head"><h3>${dateHeading(date)}</h3><span>${rows.length} item${rows.length > 1 ? 's' : ''}</span></div>
      <div class="activity-group-list">${rows.map(a => renderActivityItem(a)).join('')}</div>
    </section>`).join('');
  const intro = view === 'full'
    ? `<p class="helper-text activity-view-note">Showing the next 90 days in date order. Switch to List View for the shorter two-week view.</p>`
    : `<p class="helper-text activity-view-note">Showing the next two weeks in date order so Evans can follow the timeline without missing anything.</p>`;
  el.innerHTML = `${renderActivityViewControls(view)}${intro}${listHtml}`;
}
function openActivityModal() {
  const modal = document.getElementById('activityModal');
  if (!modal) return;
  document.getElementById('activityTypeInput').value = 'Tuition';
  document.getElementById('activityTitleInput').value = '';
  document.getElementById('activityDateInput').value = inputDateString(todayDate());
  document.getElementById('activityTimeInput').value = '';
  document.getElementById('activityNotesInput').value = '';
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
}
function closeActivityModal() {
  const modal = document.getElementById('activityModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}
function saveActivity() {
  const type = document.getElementById('activityTypeInput').value;
  const title = document.getElementById('activityTitleInput').value.trim();
  const date = document.getElementById('activityDateInput').value;
  const time = document.getElementById('activityTimeInput').value;
  const notes = document.getElementById('activityNotesInput').value.trim();
  if (!title) { toast('Please type the schedule title'); return; }
  const list = getActivities();
  list.push({ id: `act-${Date.now()}`, type, title, date, time, notes, createdAt: new Date().toISOString() });
  setActivities(list);
  closeActivityModal();
  renderAll();
  toast('Schedule item added');
}
function deleteActivity(id) {
  if (!confirm('Delete this schedule item?')) return;
  setActivities(getActivities().filter(a => a.id !== id));
  renderAll();
  toast('Schedule item deleted');
}

// Override focus, dashboard, planner and progress for v7
function getFocusTasks() {
  const g = homeworkGroups();
  const firstHomework = [...g.overdue, ...g.today, ...g.tomorrow][0];
  const upcoming = getUpcomingIncomplete()[0];
  const primary = firstHomework
    ? { text: `Finish homework: ${firstHomework.subject} — ${firstHomework.text}`, sub: `Due ${dueLabel(firstHomework.dueDate)}` }
    : upcoming
      ? { text: `Work on: ${upcoming.subject} — ${upcoming.title}`, sub: `Due ${formatLongDate(upcoming.date)}` }
      : { text: 'Check homework after school', sub: 'Add new homework before starting games or rest' };
  return [
    { id: 'focus-primary', text: primary.text, sub: primary.sub },
    { id: 'focus-pack', text: 'Check tomorrow’s pack list', sub: `Use Schedule: ${getNextCycleDay(getSelectedCycleDay())}` },
    { id: 'focus-practice', text: 'Complete one short Revision Lab round', sub: '5 questions is enough to start' }
  ];
}
function getPlanner() {
  const defaultPlanner = {
    Monday: [{ id: 'mon-plan', text: 'Set this week’s main study focus', type: 'Study', done: false }],
    Tuesday: [{ id: 'tue-activity', text: 'Check activity or tuition schedule for the week', type: 'Reminder', done: false }],
    Wednesday: [{ id: 'wed-project', text: 'Work on one long project or WA3 item', type: 'Project', done: false }],
    Thursday: [{ id: 'thu-review', text: 'Review weak topic before the weekend', type: 'Study', done: false }],
    Friday: [{ id: 'fri-clear', text: 'Clear unfinished homework before weekend', type: 'Reminder', done: false }],
    Saturday: [{ id: 'sat-long', text: 'Longer study block or activity practice', type: 'Study', done: false }],
    Sunday: [{ id: 'sun-prepare', text: 'Prepare for next school week', type: 'Family', done: false }]
  };
  return load(LS.planner, defaultPlanner);
}
function renderDashboard() {
  document.getElementById('todayLabel').textContent = `${new Date().toLocaleDateString('en-SG', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} · ${getSelectedCycleDay()}`;
  renderFocus();
  renderDashboardHomework();
  renderActivitiesDashboard();
  renderNextDeadline();
  renderWa3ProgressMini();
  renderUpcomingDeadlines();
  renderParentSummary();
  renderWeekPreview();
  renderTimetableDashboard();
  renderSchoolNoticesDashboard();
  renderAuditStatus();
}
function renderParentSummary() {
  const planner = getPlanner();
  const plannerTasks = DAYS.flatMap(day => planner[day] || []);
  const plannerDone = plannerTasks.filter(t => t.done).length;
  const hw = getHomework();
  const activeHw = hw.filter(h => !h.done).length;
  const done = getWa3Done();
  const wa3Done = WA3_TASKS.filter(t => done[t.id]).length;
  const recent = getRecentAudit(1)[0];
  const prevOpen = load(LS.previousOpen, '');
  document.getElementById('parentSummary').innerHTML = `
    <div class="summary-tile"><strong>${activeHw}</strong><span>active homework</span></div>
    <div class="summary-tile"><strong>${wa3Done}/${WA3_TASKS.length}</strong><span>WA3 completed</span></div>
    <div class="summary-tile"><strong>${plannerDone}/${plannerTasks.length}</strong><span>weekly plans done</span></div>
    <div class="summary-tile"><strong>${recent ? shortTime(recent.ts) : 'No proof yet'}</strong><span>latest proof</span></div>
    <div class="summary-tile"><strong>${prevOpen ? shortTime(prevOpen) : 'First visit'}</strong><span>previous open</span></div>
  `;
  const nudge = document.getElementById('auditNudge');
  if (nudge) nudge.textContent = auditWarning();
}
function renderWeekPreview() {
  const planner = getPlanner();
  document.getElementById('weekPreview').innerHTML = DAYS.map(day => {
    const tasks = (planner[day] || []).slice(0, 2);
    return `<div class="day-preview"><h4>${day.slice(0, 3)}</h4>${tasks.length ? tasks.map(t => `<p>${t.done ? '✅' : '□'} ${t.type}: ${t.text}</p>`).join('') : '<p>No plan yet</p>'}</div>`;
  }).join('');
}
function renderPlanner() {
  const planner = getPlanner();
  const todayName = DAYS.includes(plannerDayName(0)) ? plannerDayName(0) : 'Monday';
  const tomorrowName = DAYS.includes(plannerDayName(1)) ? plannerDayName(1) : DAYS[(DAYS.indexOf(todayName) + 1) % DAYS.length];
  const todayTasks = (planner[todayName] || []).map(task => ({ day: todayName, task }));
  const tomorrowTasks = (planner[tomorrowName] || []).map(task => ({ day: tomorrowName, task }));
  const laterTasks = DAYS.filter(day => day !== todayName && day !== tomorrowName).flatMap(day => (planner[day] || []).map(task => ({ day, task })));
  const allTasks = DAYS.flatMap(day => (planner[day] || []).map(task => ({ day, task })));
  const doneCount = allTasks.filter(item => item.task.done).length;
  document.getElementById('plannerGrid').innerHTML = `
    <div class="planner-summary-strip">
      <div><strong>${doneCount}/${allTasks.length}</strong><span>long-term plans done</span></div>
      <div><strong>${todayTasks.length}</strong><span>today</span></div>
      <div><strong>${tomorrowTasks.length}</strong><span>tomorrow</span></div>
    </div>
    <div class="planner-flow">
      <div class="planner-priority-col">
        ${renderPlannerGroup(`Today · ${todayName}`, 'Longer plan, not daily homework. Use Homework Log for school assignments.', todayTasks, 'today-group', 'No longer plan for today. Add tuition, activity, project or revision plan.')}
        ${renderPlannerGroup(`Tomorrow · ${tomorrowName}`, 'Prepare any activity, tuition or project work early.', tomorrowTasks, 'tomorrow-group', 'No plan for tomorrow yet.')}
      </div>
      ${renderPlannerGroup('Later this week', 'Activities, exam prep and longer projects stay visible here.', laterTasks, 'later-group', 'No later plans yet.', { showDay: true, compact: true })}
    </div>`;
}
function renderProgress() {
  const done = getWa3Done();
  const wa3Done = WA3_TASKS.filter(t => done[t.id]).length;
  const hw = getHomework();
  const hwDone = hw.filter(h => h.done).length;
  const planner = getPlanner();
  const plannerTasks = DAYS.flatMap(day => planner[day] || []);
  const plannerDone = plannerTasks.filter(t => t.done).length;
  const mistakes = getMistakes();
  const mastered = getMastered();
  const history = getHistory();
  const subjectCounts = history.reduce((acc, h) => { acc[h.subject] = (acc[h.subject] || 0) + 1; return acc; }, {});
  const subjectRows = Object.entries(subjectCounts).length ? Object.entries(subjectCounts).map(([s, n]) => `<div class="metric"><span>${s}</span><strong>${n} rounds</strong></div>`).join('') : `<p class="helper-text">Start one practice round to see subject history.</p>`;
  document.getElementById('progressDashboard').innerHTML = `
    <article class="progress-panel"><h3>Daily Work</h3><div class="metric"><span>Homework completed</span><strong>${hwDone}/${hw.length}</strong></div><div class="metric"><span>Active homework</span><strong>${hw.filter(h=>!h.done).length}</strong></div><div class="metric"><span>Custom schedule items</span><strong>${getActivities().length}</strong></div></article>
    <article class="progress-panel"><h3>Assessment & Plans</h3><div class="metric"><span>WA3 completed</span><strong>${wa3Done}/${WA3_TASKS.length}</strong></div><div class="metric"><span>Weekly plans done</span><strong>${plannerDone}/${plannerTasks.length}</strong></div><div class="metric"><span>Next deadline</span><strong>${getUpcomingIncomplete()[0] ? formatDate(getUpcomingIncomplete()[0].date) : 'Done'}</strong></div></article>
    <article class="progress-panel"><h3>Practice Progress</h3><div class="metric"><span>Practice rounds</span><strong>${history.length}</strong></div><div class="metric"><span>Last score</span><strong>${history.length ? `${history[history.length-1].score}/${history[history.length-1].total}` : '—'}</strong></div>${subjectRows}</article>
    <article class="progress-panel"><h3>Mistake Review</h3><div class="metric"><span>Active mistakes</span><strong>${mistakes.length}</strong></div><div class="metric"><span>Mastered mistakes</span><strong>${mastered.length}</strong></div><p class="helper-text">Finish homework, practise one round, then review mistakes.</p></article>
  `;
  const auditList = document.getElementById('auditLogList');
  if (auditList) {
    const recent = getRecentAudit(10);
    auditList.innerHTML = recent.length ? recent.map(a => `<div class="audit-row"><strong>${a.label || a.id}</strong><span>${a.checked ? 'Completed' : 'Reopened'} · ${shortTime(a.ts)}</span>${a.evidence ? `<em>${a.evidence}</em>` : ''}</div>`).join('') : '<div class="empty-small">No proof records yet. Complete one Homework, WA3 or Plan task to start.</div>';
  }
}

function noticeEndDate(notice) {
  return notice.endDate || notice.date;
}
function isNoticeCurrentOrUpcoming(notice) {
  const end = noticeEndDate(notice);
  if (!end) return true;
  const today = inputDateString(todayDate());
  return end >= today;
}
function noticeSort(a, b) {
  const da = parseDate(a.date)?.getTime() ?? Infinity;
  const db = parseDate(b.date)?.getTime() ?? Infinity;
  return da - db;
}
function getUpcomingNotices(limit = 5) {
  return SCHOOL_NOTICES
    .filter(isNoticeCurrentOrUpcoming)
    .sort(noticeSort)
    .slice(0, limit);
}
function noticeDateLabel(notice) {
  if (!notice.date) return 'TBC';
  const start = formatLongDate(notice.date);
  if (notice.endDate && notice.endDate !== notice.date) return `${start} – ${formatLongDate(notice.endDate)}`;
  return start;
}
function renderSchoolNoticeItem(notice, compact = false) {
  const urgent = notice.priority === 'urgent';
  const dateText = noticeDateLabel(notice);
  const audience = notice.audience ? `<span class="notice-audience">${notice.audience}</span>` : '';
  return `
    <article class="notice-item ${urgent ? 'urgent' : ''} ${compact ? 'compact' : ''}">
      <div class="notice-date">${dateText}</div>
      <div class="notice-body">
        <div class="notice-title-row"><span class="type-badge">${notice.type}</span>${urgent ? '<span class="urgency-badge danger">Important</span>' : ''}</div>
        <strong>${notice.title}</strong>
        <p>${notice.detail}</p>
        ${audience}
      </div>
    </article>`;
}
function renderSchoolNoticesDashboard() {
  const el = document.getElementById('dashboardSchoolNoticesPreview');
  if (!el) return;
  const items = getUpcomingNotices(5);
  el.innerHTML = items.length
    ? items.map(n => renderSchoolNoticeItem(n, true)).join('')
    : '<div class="empty-small">No upcoming school notices.</div>';
}
function renderSchoolNotices() {
  const el = document.getElementById('schoolNoticeList');
  if (!el) return;
  const upcoming = SCHOOL_NOTICES.filter(isNoticeCurrentOrUpcoming).sort(noticeSort);
  const past = SCHOOL_NOTICES.filter(n => !isNoticeCurrentOrUpcoming(n)).sort(noticeSort).slice(-4);
  el.innerHTML = `
    <div class="notice-subheading">Upcoming / Still relevant</div>
    ${upcoming.length ? upcoming.map(n => renderSchoolNoticeItem(n)).join('') : '<div class="empty-small">No upcoming notices.</div>'}
    ${past.length ? `<div class="notice-subheading past">Recently passed</div>${past.map(n => renderSchoolNoticeItem(n, true)).join('')}` : ''}
  `;
}

function renderAll() {
  renderDashboard();
  renderHomeworkBoard();
  renderWa3Board();
  renderPlanner();
  renderTimetable();
  renderActivities();
  renderSchoolNotices();
  renderRevisionControls();
  renderMistakeBook();
  renderProgress();
}
function setupExtraEvents() {
  document.addEventListener('click', e => {
    if (e.target.id === 'startMissionBtn') switchSection('homework');
    if (e.target.id === 'addHomeworkBtn' || e.target.id === 'quickAddHomeworkBtn') openHomeworkModal();
    if (e.target.id === 'closeHomeworkModal') closeHomeworkModal();
    if (e.target.id === 'saveHomeworkBtn') saveHomework();
    if (e.target.id === 'clearCompletedHomeworkBtn') clearCompletedHomework();
    const hwEdit = e.target.closest('[data-hw-edit]');
    if (hwEdit) openHomeworkModal(hwEdit.dataset.hwEdit);
    const hwDel = e.target.closest('[data-hw-delete]');
    if (hwDel) deleteHomework(hwDel.dataset.hwDelete);
    if (e.target.id === 'addActivityBtn') openActivityModal();
    if (e.target.id === 'closeActivityModal') closeActivityModal();
    if (e.target.id === 'saveActivityBtn') saveActivity();
    const actDel = e.target.closest('[data-activity-delete]');
    if (actDel) deleteActivity(actDel.dataset.activityDelete);
    const monthNavBtn = e.target.closest('[data-month-nav]');
    if (monthNavBtn) {
      const value = monthNavBtn.dataset.monthNav;
      if (value === 'today') setCalendarMonthOffset(0);
      else changeCalendarMonth(Number(value));
      renderActivities();
    }
    const activityViewBtn = e.target.closest('[data-activity-view]');
    if (activityViewBtn) {
      setActivityView(activityViewBtn.dataset.activityView);
      renderActivities();
    }
  });
  document.addEventListener('change', e => {
    if (e.target.matches('[data-hw-id]')) {
      const ok = toggleHomework(e.target.dataset.hwId, e.target.checked);
      if (!ok) e.target.checked = false;
    }
  });
}
async function init() {
  if (init.started) return;
  init.started = true;
  setupEvents();
  setupExtraEvents();
  window.addEventListener('popstate', () => routeToCurrentUrl());
  await initCloudSync();
  markVisit();
  routeToCurrentUrl({ noScroll: true });
  // Keep Mum's computer / Evans's phone in sync without needing a manual refresh.
  setInterval(() => refreshFromCloud(true), 12000);
  window.addEventListener('focus', () => refreshFromCloud(true));
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) refreshFromCloud(true);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  eshqSetupLogin();
  if (eshqTryRestoreSession()) {
    eshqApplyLoginState();
    init();
  } else {
    eshqApplyLoginState();
  }
});


/* v8 Daily streak - Duolingo-style habit check */
LS.dailyCheckins = 'eshq_v8_daily_checkins';
LS.bestStreak = 'eshq_v8_best_streak';

function localDateKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}
function addDays(date, days) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  d.setDate(d.getDate() + days);
  return d;
}
function getDailyCheckins() {
  return load(LS.dailyCheckins, []);
}
function setDailyCheckins(list) {
  save(LS.dailyCheckins, Array.from(new Set(list)).sort().slice(-120));
}
function streakStats() {
  const dates = new Set(getDailyCheckins());
  const today = todayDate();
  const todayKey = localDateKey(today);
  const checkedToday = dates.has(todayKey);
  let cursor = checkedToday ? today : addDays(today, -1);
  let current = 0;
  while (dates.has(localDateKey(cursor))) {
    current += 1;
    cursor = addDays(cursor, -1);
  }
  let best = Number(load(LS.bestStreak, 0)) || 0;
  if (current > best) {
    best = current;
    save(LS.bestStreak, best);
  }
  return { current, best, checkedToday, todayKey };
}
function recordDailyCheckin(reason = 'manual') {
  const list = getDailyCheckins();
  const key = localDateKey();
  if (!list.includes(key)) {
    list.push(key);
    setDailyCheckins(list);
  }
  save('eshq_v8_last_checkin_reason', reason);
  return streakStats();
}
function renderStreakCard() {
  const card = document.querySelector('.streak-card');
  if (!card) return;
  const stats = streakStats();
  const count = document.getElementById('streakCount');
  const badge = document.getElementById('streakStatusBadge');
  const helper = document.getElementById('streakHelper');
  const btn = document.getElementById('dailyCheckinBtn');
  const dots = document.getElementById('streakWeekDots');
  if (count) count.textContent = stats.current;
  if (badge) badge.textContent = stats.checkedToday ? 'Done today' : 'Not yet';
  if (helper) helper.textContent = stats.checkedToday
    ? `Checked in today. Best streak: ${stats.best} day${stats.best === 1 ? '' : 's'}.`
    : 'Do one real action, then check in to keep the streak alive.';
  if (btn) btn.textContent = stats.checkedToday ? 'Checked in today ✓' : 'Check in today';
  card.classList.toggle('checked-in', stats.checkedToday);
  if (dots) {
    const dates = new Set(getDailyCheckins());
    const labels = ['M','T','W','T','F','S','S'];
    const today = todayDate();
    const start = addDays(today, -6);
    let html = '';
    for (let i = 0; i < 7; i += 1) {
      const d = addDays(start, i);
      const key = localDateKey(d);
      const isToday = key === stats.todayKey;
      html += `<span class="streak-dot ${dates.has(key) ? 'done' : ''} ${isToday ? 'today' : ''}" title="${d.toLocaleDateString('en-SG', { weekday: 'short', day: 'numeric', month: 'short' })}">${labels[d.getDay() === 0 ? 6 : d.getDay() - 1]}</span>`;
    }
    dots.innerHTML = html;
  }
}

const v7RecordAudit = recordAudit;
recordAudit = function(entry) {
  v7RecordAudit(entry);
  if (entry && entry.checked) recordDailyCheckin(entry.type || 'task');
};

const v7FinishPracticeRound = finishPracticeRound;
finishPracticeRound = function() {
  v7FinishPracticeRound();
  recordDailyCheckin('practice');
  renderStreakCard();
};

const v7RenderDashboard = renderDashboard;
renderDashboard = function() {
  v7RenderDashboard();
  renderStreakCard();
};

const v7RenderProgress = renderProgress;
renderProgress = function() {
  v7RenderProgress();
  const dash = document.getElementById('progressDashboard');
  if (!dash) return;
  const stats = streakStats();
  const panel = document.createElement('article');
  panel.className = 'progress-panel';
  panel.innerHTML = `<h3>Daily Streak</h3><div class="metric"><span>Current streak</span><strong>${stats.current} day${stats.current === 1 ? '' : 's'}</strong></div><div class="metric"><span>Best streak</span><strong>${stats.best} day${stats.best === 1 ? '' : 's'}</strong></div><div class="metric"><span>Today</span><strong>${stats.checkedToday ? 'Checked in' : 'Not yet'}</strong></div><p class="helper-text">Completing homework, WA3, weekly plans or a practice round also keeps the streak alive.</p>`;
  dash.prepend(panel);
};

document.addEventListener('click', e => {
  if (e.target.id === 'dailyCheckinBtn') {
    const stats = streakStats();
    if (!stats.checkedToday) {
      recordDailyCheckin('manual');
      toast('Daily streak updated 🔥');
    } else {
      toast('Already checked in today');
    }
    renderAll();
  }
});

/* v11 bilingual language toggle */
const ESHQ_LANG_KEY = 'eshq_v11_language';
const ZH_TEXT = new Map(Object.entries({
  'Dashboard': '首页', 'Homework': '功课', 'Schedule': '日程', 'WA3 Board': 'WA3任务', 'Weekly Plan': '周计划', 'Revision Lab': '练习室', 'Mistake Book': '错题本', 'Progress': '进度',
  'Evans Study HQ': 'Evans 学习总部', 'Daily Study Dashboard': '每日学习看板', 'Last opened:': '上次打开：', 'Open this first': '先看这里', 'Hi Evans 👋': 'Hi Evans 👋',
  'Check today’s mission, finish one task, then practise or review mistakes.': '先看今天任务，完成一件事，再做练习或复习错题。',
  "Today's Mission": '今天任务', "Start Today’s Mission": '开始今天任务', 'Focus': '今日重点', "Today’s Top 3": '今天最重要的3件事', "Today's Top 3": '今天最重要的3件事',
  'Tick one small task at a time. Progress is saved on this device.': '一次完成一个小任务，进度会保存在这台设备上。',
  'Deadline': '截止日期', 'Next Deadline': '下一个截止日期', 'WA3': 'WA3', 'Daily habit': '每日习惯', 'Study Streak': '学习连续打卡', 'Ready': '准备好', 'days': '天', 'day': '天',
  'Check in once a day after doing one real action.': '每天完成一个真实动作后打卡一次。', 'Do one real action, then check in to keep the streak alive.': '完成一个真实动作后再打卡，保持连续记录。',
  'Check in today': '今天打卡', 'Checked in today ✓': '今天已打卡 ✓', 'Done today': '今天已打卡', 'Not yet': '还没打卡', 'Checked in': '已打卡',
  'Quick Start': '快速开始', 'What do you need now?': '现在要做什么？', 'Daily Homework': '每日功课', 'Homework Due Soon': '近期要交的功课',
  'Record daily homework and due dates': '记录每天功课和截止日期', 'School, tuition and activities': '学校、补习和活动', 'Track tests, projects and submissions': '追踪考试、项目和提交',
  'Longer plans, activities and projects': '长期计划、活动和项目', 'Practise questions by topic': '按知识点练习题目', 'Review mistakes until mastered': '复习错题直到掌握', 'See what is improving': '查看进步情况',
  'Open homework': '打开功课', '+ Add homework': '+ 添加功课', '+ Add task': '+ 添加任务', '+ Add plan': '+ 添加计划', '+ Add activity': '+ 添加日程', 'Next 5': '最近5项', 'Upcoming Deadlines': '即将到来的截止日期', 'View all': '查看全部',
  'Today': '今天', 'Tomorrow': '明天', 'After-school Schedule': '课后日程', 'Open schedule': '打开日程', 'Mum Check': '妈妈检查', 'Proof & Activity': '完成证明与使用记录',
  'School day': '学校日', "Today’s Classes": '今天课程', "Today's Classes": '今天课程', 'Open timetable': '打开课表', 'Pack List': '书包检查清单', 'Tomorrow Pack List': '明日书包清单',
  'Timeline': '时间线', 'This Week Timeline': '本周时间线', 'Edit week': '编辑本周', 'Daily homework': '每日功课', 'Homework Log': '功课记录', 'Clear completed': '清除已完成',
  'NCHS Sec 1 · Term 3': '南侨中一 · 第三学期', 'WA3 Mission Board': 'WA3任务板', 'completed': '已完成', 'Completed': '已完成',
  'All': '全部', 'Tests': '考试', 'Submissions': '提交', 'Projects': '项目', 'Presentation': '演讲', 'Longer plan': '长期计划', 'School + after-school': '学校 + 课后', 'Tuition': '补习', 'Taekwondo': '跆拳道',
  'Today is': '今天是', 'Use auto': '自动计算', 'Auto cycle is on.': '已开启自动循环计算。', 'Selected day': '选中的日子', 'Bag check': '书包检查', 'Pack for Tomorrow': '准备明天书包',
  'After school': '课后', 'Tuition, CCA & Activities': '补习、CCA和活动', '10-day cycle': '10天循环', 'School Timetable': '学校课表', 'My Timetable': '我的课表',
  'Practice': '练习', 'last score': '上次分数', 'Subject': '科目', 'Topic': '知识点', 'Number of questions': '题目数量', '5 questions': '5题', '10 questions': '10题', 'Start Practice Round': '开始一轮练习',
  'Ready for a short round?': '准备好做一小轮了吗？', 'Question': '题目', 'Choose the best answer.': '选择最佳答案。', 'Review loop': '复习闭环', 'review streak': '复习连续记录',
  'Active Mistakes': '正在复习的错题', 'Start Review': '开始复习', 'Mastered': '已掌握', 'Evidence': '完成证明', 'Progress Dashboard': '进度看板', 'Audit trail': '记录轨迹', 'Recent Task Evidence': '最近完成证明',
  'Add a Weekly Plan': '添加周计划', 'Day': '日期', 'Task': '任务', 'Type': '类别', 'Study': '学习', 'Project': '项目', 'Tuition': '补习', 'Taekwondo': '跆拳道', 'Exam': '考试', 'Family': '家庭', 'Reminder': '提醒', 'Save plan': '保存计划',
  'Add Homework': '添加功课', 'Homework details': '功课内容', 'Due date': '截止日期', 'Save homework': '保存功课', 'Add Schedule Item': '添加日程', 'Title': '标题', 'Date': '日期', 'Time': '时间', 'Notes': '备注', 'Save schedule item': '保存日程',
  'Mathematics': '数学', 'Science': '科学', 'English Language': '英文', 'English': '英文', 'Higher Chinese': '高级华文', 'History': '历史', 'Geography': '地理', 'English Literature': '英文文学', 'Literature': '文学', 'Food & Consumer Education': 'FCE家政', 'Art': '美术', 'Music': '音乐', 'Chinese Orchestra Training': '华乐团训练', 'CCA: Chinese Orchestra Training': 'CCA：华乐团训练', 'CCA': 'CCA', 'Taekwondo Training': '跆拳道训练', 'Taekwondo Grading — Black Tip / 1st Poom': '跆拳道考级 — Black Tip / 1st Poom', 'Math Tuition': '数学补习', 'English Tuition': '英文补习', 'PE (LS)': '体育', 'Recess': '课间休息', 'Lunch': '午餐', 'DEAR time': 'DEAR阅读时间',
  'Pack': '整理书包', 'Revision': '复习', 'Other': '其他', 'No homework due soon.': '近期没有要交的功课。', 'No activities added yet.': '还没有添加课后日程。', 'No proof yet': '暂无证明', 'First visit': '第一次打开',
  'Daily Streak': '每日连续打卡', 'Current streak': '当前连续天数', 'Best streak': '最高连续天数', 'Homework completed': '已完成功课', 'Active homework': '待完成功课', 'Schedule items': '日程项目', 'Assessment & Plans': '评估与计划',
  'WA3 completed': 'WA3已完成', 'Weekly plans done': '周计划已完成', 'Next deadline': '下一个截止日期', 'Practice Progress': '练习进度', 'Practice rounds': '练习轮数', 'Last score': '上次分数', 'Mistake Review': '错题复习', 'Active mistakes': '待复习错题', 'Mastered mistakes': '已掌握错题',
  'Usage Check': '使用检查', 'Recent proof records': '最近证明记录', 'No proof records yet. Complete one Homework, WA3 or Plan task to start.': '还没有完成证明。完成一项功课、WA3或计划任务后，这里会开始记录。',
  'Proof needed': '需要证明', 'Proof needed when completed': '完成时需要填写证明', 'Move': '移到明天', 'Move to tomorrow': '移到明天', 'Delete': '删除', 'Edit': '编辑', 'Done': '完成',
  'Soon': '即将到来', 'Urgent': '紧急', 'Upcoming': '即将到来', 'Overdue': '已逾期', 'TBC': '待确认', 'Clear': '完成', 'No task yet': '还没有任务', 'No Date Yet': '还没有日期', 'Due Today': '今天要交', 'Due Tomorrow': '明天要交',
  'Overdue': '已逾期', 'No overdue homework. Good.': '没有逾期功课，很好。', 'Nothing due today.': '今天没有要交的功课。', 'Nothing due tomorrow yet.': '明天暂时没有要交的功课。', 'No upcoming homework.': '没有之后的功课。', 'No homework without date.': '没有未填日期的功课。', 'Completed homework will appear here.': '完成的功课会显示在这里。'
}));
const ZH_REVERSE = new Map(Array.from(ZH_TEXT.entries()).map(([en, zh]) => [zh, en]));
const ORIGINAL_TEXT = new WeakMap();
const ORIGINAL_ATTR = new WeakMap();

function getLang() { return localStorage.getItem(ESHQ_LANG_KEY) || 'en'; }
function setLang(lang) { localStorage.setItem(ESHQ_LANG_KEY, lang); applyLanguage(); }
function translateTextValue(value) {
  if (!value || typeof value !== 'string') return value;

  // Handle mixed dynamic phrases before dictionary replacement.
  // This prevents the generic word "day" from turning "today" into "to天".
  let out = value
    .replace(/(\d+) days left/g, '还剩 $1 天')
    .replace(/(\d+) day left/g, '还剩 $1 天')
    .replace(/(\d+) days overdue/g, '已逾期 $1 天')
    .replace(/(\d+) day overdue/g, '已逾期 $1 天')
    .replace(/(\d+)d left/g, '还剩 $1 天')
    .replace(/Due today/g, '今天截止')
    .replace(/Due tomorrow/g, '明天截止')
    .replace(/Due ([^·\n]+)/g, '截止：$1')
    .replace(/Question (\d+)\/(\d+)/g, '第 $1/$2 题')
    .replace(/Score (\d+)/g, '分数 $1')
    .replace(/Correct answer:/g, '正确答案：')
    .replace(/Correct reviews:/g, '答对复习次数：')
    .replace(/(\d+) rounds/g, '$1 轮')
    .replace(/(\d+) classes/g, '$1 节课')
    .replace(/(\d+) class/g, '$1 节课');

  Array.from(ZH_TEXT.entries()).sort((a,b)=>b[0].length-a[0].length).forEach(([en, zh]) => {
    if (en === 'day' || en === 'days') return;
    out = out.split(en).join(zh);
  });
  return out;
}
function shouldSkipTranslation(parent) {
  return !parent || ['SCRIPT','STYLE','TEXTAREA','INPUT','OPTION'].includes(parent.tagName) || parent.closest('.language-switch');
}
function applyLanguage(root = document.body) {
  const lang = getLang();
  document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en';
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', (btn.id === 'langZhBtn') === (lang === 'zh')));
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (shouldSkipTranslation(parent)) return NodeFilter.FILTER_REJECT;
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    const text = node.nodeValue;
    if (!ORIGINAL_TEXT.has(node) || (lang === 'zh' && ZH_TEXT.has(text.trim()))) ORIGINAL_TEXT.set(node, text);
    const original = ORIGINAL_TEXT.get(node) || text;
    if (lang === 'zh') {
      node.nodeValue = translateTextValue(original);
    } else {
      if (ZH_REVERSE.has(text.trim()) || ORIGINAL_TEXT.has(node)) node.nodeValue = original;
    }
  });
  document.querySelectorAll('input[placeholder], textarea[placeholder], button[aria-label], [title]').forEach(el => {
    let store = ORIGINAL_ATTR.get(el);
    if (!store) { store = {}; ORIGINAL_ATTR.set(el, store); }
    ['placeholder','aria-label','title'].forEach(attr => {
      const current = attr === 'placeholder' ? el.placeholder : el.getAttribute(attr);
      if (!current) return;
      if (!store[attr]) store[attr] = current;
      const original = store[attr];
      if (lang === 'zh') {
        if (attr === 'placeholder') el.placeholder = translateTextValue(original);
        else el.setAttribute(attr, translateTextValue(original));
      } else {
        if (attr === 'placeholder') el.placeholder = original;
        else el.setAttribute(attr, original);
      }
    });
  });
}

const v11RenderAll = renderAll;
renderAll = function() { v11RenderAll(); applyLanguage(); };
const v11Toast = toast;
toast = function(message) { v11Toast(getLang() === 'zh' ? translateTextValue(message) : message); };
const v11RequestEvidence = requestEvidence;
requestEvidence = function(label) {
  if (getLang() !== 'zh') return v11RequestEvidence(label);
  const text = prompt(`完成证明\n\n你实际完成了什么：\n${translateTextValue(label)}\n\n写2–8个词，例如：“完成Q1-Q6” 或 “已带PE衣服”。`);
  if (!text || !text.trim()) return null;
  return text.trim().slice(0, 120);
};

document.addEventListener('DOMContentLoaded', () => {
  const enBtn = document.getElementById('langEnBtn');
  const zhBtn = document.getElementById('langZhBtn');
  if (enBtn) enBtn.addEventListener('click', () => { setLang('en'); toast('Language set to English'); });
  if (zhBtn) zhBtn.addEventListener('click', () => { setLang('zh'); toast('语言已切换为中文'); });
  applyLanguage();
});


// Keyboard shortcut is kept as a fallback, but the visible Logout button is the normal way to sign out.
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'l') eshqClearSession();
});

/* v38 Productisation extension: parent-managed CCA, timetable files and assessments.
   This preserves the Evans v34 UI and adds editable/upload sections inside Schedule and Assessments. */
LS.assessments = 'eshq_v38_assessments';
LS.uploadFiles = 'eshq_v38_uploaded_files';

const ASSESSMENT_TYPES = ['WA1', 'WA2', 'WA3', 'End-of-Year Exam', 'Mock Exam', 'Class Test', 'Diagnostic Test', 'AEIS Mock', 'PSLE Prelim', 'O-Level Prelim', 'Other'];
const CCA_DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

function v38Escape(value = '') {
  return String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
}
function v38Id(prefix) { return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`; }
function getAssessments() { return load(LS.assessments, []); }
function setAssessments(list) { save(LS.assessments, list); }
function getUploadedFiles() { return load(LS.uploadFiles, []); }
function setUploadedFiles(list) { save(LS.uploadFiles, list); }
function addUploadedFile(file, category) {
  if (!file) return null;
  const record = {
    id: v38Id('file'),
    category,
    name: file.name,
    type: file.type || 'unknown',
    size: file.size || 0,
    uploadedAt: new Date().toISOString()
  };
  const files = getUploadedFiles();
  files.unshift(record);
  setUploadedFiles(files.slice(0, 50));
  return record;
}
function fileSizeLabel(bytes = 0) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function dateValueForAssessment(a) { return a.date || a.assessmentDate || ''; }
function assessmentSort(a, b) {
  const da = dateValueForAssessment(a) || '9999-99-99';
  const db = dateValueForAssessment(b) || '9999-99-99';
  return da.localeCompare(db);
}
function normaliseAssessment(row = {}) {
  return {
    id: row.id || v38Id('asmt'),
    type: row.type || row.assessmentType || 'WA1',
    subject: row.subject || 'General',
    name: row.name || row.assessmentName || row.title || '',
    date: row.date || row.assessmentDate || '',
    startTime: row.startTime || row.time || '',
    endTime: row.endTime || '',
    scope: row.scope || row.topics || row.notes || '',
    weightage: row.weightage || '',
    targetScore: row.targetScore || '',
    actualScore: row.actualScore || '',
    status: row.status || row.revisionStatus || 'Not started',
    notes: row.notes || '',
    fileId: row.fileId || '',
    createdAt: row.createdAt || new Date().toISOString()
  };
}
function normaliseCca(row = {}) {
  const date = row.date || '';
  return {
    id: row.id || v38Id('cca'),
    type: 'CCA',
    title: row.title || row.ccaName || row.name || '',
    day: row.day || '',
    date,
    time: row.time || [row.startTime, row.endTime].filter(Boolean).join('–'),
    venue: row.venue || row.location || '',
    notes: row.notes || [row.coach ? `Coach: ${row.coach}` : '', row.term ? `Term: ${row.term}` : ''].filter(Boolean).join(' · '),
    fileId: row.fileId || '',
    createdAt: row.createdAt || new Date().toISOString()
  };
}
function getCcaCustomRecords() {
  return getActivities().filter(a => a.type === 'CCA' && !String(a.id || '').startsWith('cca-'));
}
function setCcaCustomRecords(nextCcaRecords) {
  const other = getActivities().filter(a => a.type !== 'CCA' || String(a.id || '').startsWith('cca-'));
  setActivities([...other, ...nextCcaRecords]);
}
function deleteAssessment(id) {
  if (!confirm('Delete this assessment?')) return;
  setAssessments(getAssessments().filter(a => a.id !== id));
  renderAll();
  toast('Assessment deleted');
}
function deleteCcaRecord(id) {
  if (!confirm('Delete this CCA record?')) return;
  setCcaCustomRecords(getCcaCustomRecords().filter(a => a.id !== id));
  renderAll();
  toast('CCA deleted');
}
function createRevisionTasksForAssessment(id) {
  const a = getAssessments().find(x => x.id === id);
  if (!a) return;
  const topics = String(a.scope || '').split(/[,;\n]/).map(t => t.trim()).filter(Boolean).slice(0, 6);
  const planner = getPlanner();
  const day = DAYS.includes(plannerDayName(0)) ? plannerDayName(0) : 'Monday';
  const baseTitle = `${a.subject} ${a.type} revision`;
  planner[day] = planner[day] || [];
  planner[day].push({ id: v38Id('revplan'), text: `${baseTitle}: ${a.name || a.scope || 'review scope'}`, type: 'Study', done: false });
  topics.forEach(topic => planner[day].push({ id: v38Id('revtopic'), text: `${a.subject}: revise ${topic}`, type: 'Study', done: false }));
  setPlanner(planner);
  toast('Revision tasks created in Weekly Plan');
  switchSection('planner');
}
function parseLooseRows(text = '', mode = 'assessment', fileId = '') {
  const cleaned = String(text || '').replace(/\r/g, '').trim();
  if (!cleaned) return [];
  const lines = cleaned.split(/\n+/).map(l => l.trim()).filter(Boolean).slice(0, 80);
  const rows = [];
  lines.forEach(line => {
    const csv = line.includes(',') ? line.split(',').map(x => x.trim()) : null;
    const dateMatch = line.match(/(20\d{2}[-\/]\d{1,2}[-\/]\d{1,2}|\d{1,2}[-\/]\d{1,2}[-\/]20\d{2}|\d{1,2}\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+20\d{2})/i);
    const timeMatch = line.match(/(\d{1,2}:\d{2}\s*(?:am|pm)?|\d{1,2}\s*(?:am|pm))/i);
    if (mode === 'cca') {
      if (csv && csv.length >= 4) {
        rows.push(normaliseCca({ day: csv[0], time: `${csv[1]}–${csv[2]}`, title: csv[3], venue: csv[4] || '', notes: csv.slice(5).join(' · '), fileId }));
      } else {
        const day = (line.match(/\b(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)\b/i) || [''])[0];
        rows.push(normaliseCca({ title: line.replace(dateMatch?.[0] || '', '').trim().slice(0, 80), day, date: dateMatch ? standardiseDate(dateMatch[0]) : '', time: timeMatch ? timeMatch[0] : '', fileId }));
      }
    } else {
      if (csv && csv.length >= 4) {
        rows.push(normaliseAssessment({ type: csv[0], subject: csv[1], name: csv[2], date: standardiseDate(csv[3]), startTime: csv[4] || '', endTime: csv[5] || '', scope: csv.slice(6).join(' · '), fileId }));
      } else {
        const type = (line.match(/\b(WA1|WA2|WA3|WA4|End[- ]?of[- ]?Year|EOY|Mock|Class Test|Diagnostic)\b/i) || ['WA'])[0];
        const subject = guessSubject(line);
        rows.push(normaliseAssessment({ type: type.toUpperCase() === 'EOY' ? 'End-of-Year Exam' : type.replace(/end[- ]?of[- ]?year/i, 'End-of-Year Exam'), subject, name: line.slice(0, 90), date: dateMatch ? standardiseDate(dateMatch[0]) : '', startTime: timeMatch ? timeMatch[0] : '', fileId }));
      }
    }
  });
  return rows.filter(r => mode === 'cca' ? r.title : (r.subject || r.name));
}
function standardiseDate(raw = '') {
  const text = String(raw || '').trim();
  if (!text) return '';
  const direct = text.match(/^(20\d{2})[-\/](\d{1,2})[-\/](\d{1,2})$/);
  if (direct) return `${direct[1]}-${String(direct[2]).padStart(2,'0')}-${String(direct[3]).padStart(2,'0')}`;
  const sg = text.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](20\d{2})$/);
  if (sg) return `${sg[3]}-${String(sg[2]).padStart(2,'0')}-${String(sg[1]).padStart(2,'0')}`;
  const parsed = new Date(text);
  if (!Number.isNaN(parsed.getTime())) return inputDateString(parsed);
  return text;
}
function guessSubject(line = '') {
  const subjects = ['Mathematics','Math','English','Science','Higher Chinese','Chinese','History','Geography','Literature','Art','Music','FCE','MSP'];
  const found = subjects.find(s => new RegExp(`\\b${s}\\b`, 'i').test(line));
  if (!found) return 'General';
  return found === 'Math' ? 'Mathematics' : found;
}
async function readUploadText(file) {
  if (!file) return '';
  const lower = file.name.toLowerCase();
  if (lower.endsWith('.csv') || lower.endsWith('.txt')) return await file.text();
  if (lower.endsWith('.pdf')) {
    try {
      const buffer = await file.arrayBuffer();
      const decoded = new TextDecoder('latin1').decode(buffer);
      return decoded.replace(/\(([^)]{2,80})\)/g, '\n$1\n').replace(/<([0-9A-Fa-f]{4,})>/g, ' ').replace(/[^\x09\x0A\x0D\x20-\x7E]+/g, ' ');
    } catch { return ''; }
  }
  return '';
}
function assessmentTypeOptions(selected = '') {
  return ASSESSMENT_TYPES.map(t => `<option ${t === selected ? 'selected' : ''}>${t}</option>`).join('');
}
function dayOptions(selected = '') {
  return CCA_DAYS.map(d => `<option ${d === selected ? 'selected' : ''}>${d}</option>`).join('');
}
function renderUploadedFiles(category) {
  const files = getUploadedFiles().filter(f => f.category === category).slice(0, 5);
  if (!files.length) return '<div class="empty-small">No uploaded files yet.</div>';
  return files.map(f => `<div class="upload-file-row"><strong>${v38Escape(f.name)}</strong><span>${fileSizeLabel(f.size)} · ${new Date(f.uploadedAt).toLocaleDateString('en-SG')}</span></div>`).join('');
}
function renderAssessmentRow(a) {
  const dateText = a.date ? dueLabel(a.date) : 'No date';
  const scope = [a.scope, a.weightage ? `Weightage: ${a.weightage}` : '', a.targetScore ? `Target: ${a.targetScore}` : '', a.actualScore ? `Actual: ${a.actualScore}` : ''].filter(Boolean).join(' · ');
  return `<article class="assessment-row">
    <div class="date-badge"><strong>${v38Escape((a.date || 'TBC').slice(5,7) || 'TBC')}</strong><small>${v38Escape((a.date || '').slice(8,10))}</small></div>
    <div class="assessment-main"><div><span class="type-badge important">${v38Escape(a.type)}</span> <strong>${v38Escape(a.subject)}</strong></div><h3>${v38Escape(a.name || a.scope || 'Assessment')}</h3><p>${v38Escape([dateText, a.startTime, a.endTime].filter(Boolean).join(' · '))}</p>${scope ? `<p>${v38Escape(scope)}</p>` : ''}${a.notes ? `<p>${v38Escape(a.notes)}</p>` : ''}</div>
    <div class="assessment-actions"><span class="mini-badge">${v38Escape(a.status || 'Not started')}</span><button class="text-btn" data-create-revision="${a.id}">Create Revision Tasks</button><button class="text-btn danger" data-delete-assessment="${a.id}">Delete</button></div>
  </article>`;
}
function renderCcaRow(a) {
  const details = [a.day, a.date ? dueLabel(a.date) : '', a.time, a.venue, a.notes].filter(Boolean).join(' · ');
  return `<div class="cca-row"><span class="type-badge school">CCA</span><div><strong>${v38Escape(a.title)}</strong><p>${v38Escape(details || 'No time set')}</p></div><button class="text-btn danger" data-delete-cca="${a.id}">Delete</button></div>`;
}
function renderParsePreview(mode, rows) {
  const target = document.getElementById(mode === 'cca' ? 'ccaParsePreview' : 'assessmentParsePreview');
  if (!target) return;
  if (!rows.length) { target.innerHTML = '<div class="empty-small">No structured rows detected. Please use the manual entry form below.</div>'; return; }
  if (mode === 'cca') {
    target.innerHTML = `<div class="preview-table">${rows.map((r, i) => `<div class="preview-row"><span>${i+1}</span><input data-preview-cca-index="${i}" data-field="title" value="${v38Escape(r.title)}"><input data-preview-cca-index="${i}" data-field="day" value="${v38Escape(r.day || '')}"><input data-preview-cca-index="${i}" data-field="time" value="${v38Escape(r.time || '')}"><input data-preview-cca-index="${i}" data-field="venue" value="${v38Escape(r.venue || '')}"></div>`).join('')}</div><button class="primary-action small" data-save-preview="cca">Confirm & Save CCA Rows</button>`;
  } else {
    target.innerHTML = `<div class="preview-table">${rows.map((r, i) => `<div class="preview-row assessment"><span>${i+1}</span><input data-preview-assessment-index="${i}" data-field="type" value="${v38Escape(r.type)}"><input data-preview-assessment-index="${i}" data-field="subject" value="${v38Escape(r.subject)}"><input data-preview-assessment-index="${i}" data-field="name" value="${v38Escape(r.name)}"><input data-preview-assessment-index="${i}" data-field="date" value="${v38Escape(r.date)}"><input data-preview-assessment-index="${i}" data-field="scope" value="${v38Escape(r.scope || '')}"></div>`).join('')}</div><button class="primary-action small" data-save-preview="assessment">Confirm & Save Assessment Rows</button>`;
  }
  window.ESHQ_V38_PREVIEW = window.ESHQ_V38_PREVIEW || {};
  window.ESHQ_V38_PREVIEW[mode] = rows;
}
function collectPreviewRows(mode) {
  const base = (window.ESHQ_V38_PREVIEW && window.ESHQ_V38_PREVIEW[mode]) || [];
  const rows = base.map(r => ({ ...r }));
  const selector = mode === 'cca' ? '[data-preview-cca-index]' : '[data-preview-assessment-index]';
  document.querySelectorAll(selector).forEach(input => {
    const idx = Number(input.dataset.previewCcaIndex ?? input.dataset.previewAssessmentIndex);
    const field = input.dataset.field;
    if (rows[idx]) rows[idx][field] = input.value.trim();
  });
  return rows;
}
function buildAssessmentPanel() {
  const custom = getAssessments().slice().sort(assessmentSort);
  const counts = ASSESSMENT_TYPES.map(t => `${t}: ${custom.filter(a => a.type === t).length}`).join(' · ');
  return `<section id="assessmentManagementPanel" class="card product-panel">
    <div class="section-title-row"><div><p class="eyebrow">Parent editable</p><h3>Assessments: WA1 / WA2 / WA3 / EOY</h3><p class="helper-text">Upload school PDF/JPG/PNG as the source file, then confirm or manually enter the assessment details. Nothing overwrites the board until you click save.</p></div></div>
    <div class="product-grid two-cols">
      <div class="upload-box"><h4>Upload assessment schedule</h4><input id="assessmentFileInput" type="file" accept=".pdf,.jpg,.jpeg,.png,.csv,.txt"><textarea id="assessmentPasteInput" placeholder="Optional: paste text from the school assessment schedule here for faster parsing."></textarea><button id="parseAssessmentUploadBtn" class="secondary-action full-width">Parse / Preview</button><div id="assessmentParsePreview" class="parse-preview"></div></div>
      <div class="manual-box"><h4>Manual assessment entry</h4><div class="compact-form"><select id="manualAssessmentType">${assessmentTypeOptions('WA1')}</select><input id="manualAssessmentSubject" placeholder="Subject"><input id="manualAssessmentName" placeholder="Assessment name"><input id="manualAssessmentDate" type="date"><input id="manualAssessmentStart" type="time"><input id="manualAssessmentEnd" type="time"><input id="manualAssessmentScope" placeholder="Scope / topics"><input id="manualAssessmentTarget" placeholder="Target score"><button id="saveManualAssessmentBtn" class="primary-action full-width">Save assessment</button></div></div>
    </div>
    <div class="upload-history"><h4>Uploaded assessment files</h4>${renderUploadedFiles('assessment')}</div>
    <div class="assessment-counts">${v38Escape(counts)}</div>
    <div id="customAssessmentList" class="assessment-list">${custom.length ? custom.map(renderAssessmentRow).join('') : '<div class="empty-state"><h3>No custom assessments yet</h3><p>Add WA1, WA2, WA3, End-of-Year or mock exams here.</p></div>'}</div>
  </section>`;
}
function buildCcaPanel() {
  const cca = getCcaCustomRecords().slice().sort((a,b)=>(a.day || '').localeCompare(b.day || '') || (a.time || '').localeCompare(b.time || ''));
  return `<section id="ccaManagementPanel" class="card product-panel">
    <div class="section-title-row"><div><p class="eyebrow">Parent editable</p><h3>CCA Schedule</h3><p class="helper-text">Upload the school CCA PDF/JPG/PNG as a reference, then confirm detected rows or add the CCA manually.</p></div></div>
    <div class="product-grid two-cols">
      <div class="upload-box"><h4>Upload CCA schedule</h4><input id="ccaFileInput" type="file" accept=".pdf,.jpg,.jpeg,.png,.csv,.txt"><textarea id="ccaPasteInput" placeholder="Optional: paste CCA text here. Example: Wednesday, 15:00, 17:00, Chinese Orchestra, Music Room"></textarea><button id="parseCcaUploadBtn" class="secondary-action full-width">Parse / Preview</button><div id="ccaParsePreview" class="parse-preview"></div></div>
      <div class="manual-box"><h4>Manual CCA entry</h4><div class="compact-form"><input id="manualCcaName" placeholder="CCA name"><select id="manualCcaDay">${dayOptions('Wednesday')}</select><input id="manualCcaDate" type="date"><input id="manualCcaStart" type="time"><input id="manualCcaEnd" type="time"><input id="manualCcaLocation" placeholder="Location"><input id="manualCcaCoach" placeholder="Teacher / Coach"><input id="manualCcaTerm" placeholder="Term / date range"><button id="saveManualCcaBtn" class="primary-action full-width">Save CCA</button></div></div>
    </div>
    <div class="upload-history"><h4>Uploaded CCA files</h4>${renderUploadedFiles('cca')}</div>
    <div class="cca-list">${cca.length ? cca.map(renderCcaRow).join('') : '<div class="empty-small">No manually added CCA yet.</div>'}</div>
  </section>`;
}
function injectV38Panels() {
  const waSection = document.getElementById('wa3');
  if (waSection) {
    const h2 = waSection.querySelector('.page-header h2');
    const eyebrow = waSection.querySelector('.page-header .eyebrow');
    const muted = waSection.querySelector('.page-header .muted');
    if (h2) h2.textContent = 'Assessments';
    if (eyebrow) eyebrow.textContent = 'WA1 · WA2 · WA3 · End-of-Year';
    if (muted) muted.textContent = 'Track all school assessments, uploaded schedules, revision scope and results.';
    const existing = document.getElementById('assessmentManagementPanel');
    const anchor = document.getElementById('wa3TaskList');
    if (anchor) {
      if (existing) existing.outerHTML = buildAssessmentPanel();
      else anchor.insertAdjacentHTML('beforebegin', buildAssessmentPanel());
    }
  }
  const scheduleSection = document.getElementById('timetable');
  if (scheduleSection) {
    const afterSchoolCard = document.querySelector('#timetable #activityList')?.closest('.card');
    if (afterSchoolCard) {
      const existing = document.getElementById('ccaManagementPanel');
      if (existing) existing.outerHTML = buildCcaPanel();
      else afterSchoolCard.insertAdjacentHTML('beforebegin', buildCcaPanel());
    }
  }
  document.querySelectorAll('[data-section="wa3"]').forEach(el => {
    if (el.matches('button.nav-btn')) el.textContent = 'Assessments';
    const strong = el.querySelector('strong'); if (strong && strong.textContent.includes('WA3')) strong.textContent = 'Assessments';
  });
}
const v38RenderWa3Board = renderWa3Board;
renderWa3Board = function() { v38RenderWa3Board(); injectV38Panels(); };
const v38RenderAll = renderAll;
renderAll = function() { v38RenderAll(); injectV38Panels(); };

async function handleParseUpload(mode) {
  const fileInput = document.getElementById(mode === 'cca' ? 'ccaFileInput' : 'assessmentFileInput');
  const pasteInput = document.getElementById(mode === 'cca' ? 'ccaPasteInput' : 'assessmentPasteInput');
  const file = fileInput && fileInput.files && fileInput.files[0] ? fileInput.files[0] : null;
  const fileRecord = file ? addUploadedFile(file, mode === 'cca' ? 'cca' : 'assessment') : null;
  let text = pasteInput ? pasteInput.value.trim() : '';
  if (!text && file) text = await readUploadText(file);
  const rows = parseLooseRows(text, mode, fileRecord ? fileRecord.id : '');
  renderParsePreview(mode, rows);
  if (file && !rows.length && !text) toast('File attached. JPG/PNG and scanned PDFs need manual entry or pasted text.');
  else if (!rows.length) toast('No rows detected. Please enter manually.');
  else toast(`${rows.length} row(s) ready for review`);
  injectV38Panels();
}
function savePreviewRows(mode) {
  const rows = collectPreviewRows(mode);
  if (!rows.length) { toast('No preview rows to save'); return; }
  if (mode === 'cca') {
    const existing = getCcaCustomRecords();
    setCcaCustomRecords([...existing, ...rows.map(normaliseCca)]);
    toast('CCA rows saved');
  } else {
    setAssessments([...getAssessments(), ...rows.map(normaliseAssessment)]);
    toast('Assessment rows saved');
  }
  renderAll();
}
function saveManualAssessment() {
  const row = normaliseAssessment({
    type: document.getElementById('manualAssessmentType')?.value || 'WA1',
    subject: document.getElementById('manualAssessmentSubject')?.value.trim() || 'General',
    name: document.getElementById('manualAssessmentName')?.value.trim() || '',
    date: document.getElementById('manualAssessmentDate')?.value || '',
    startTime: document.getElementById('manualAssessmentStart')?.value || '',
    endTime: document.getElementById('manualAssessmentEnd')?.value || '',
    scope: document.getElementById('manualAssessmentScope')?.value.trim() || '',
    targetScore: document.getElementById('manualAssessmentTarget')?.value.trim() || ''
  });
  if (!row.subject && !row.name) { toast('Please add subject or assessment name'); return; }
  setAssessments([...getAssessments(), row]);
  renderAll();
  toast('Assessment saved');
}
function saveManualCca() {
  const name = document.getElementById('manualCcaName')?.value.trim() || '';
  if (!name) { toast('Please add CCA name'); return; }
  const row = normaliseCca({
    title: name,
    day: document.getElementById('manualCcaDay')?.value || '',
    date: document.getElementById('manualCcaDate')?.value || '',
    startTime: document.getElementById('manualCcaStart')?.value || '',
    endTime: document.getElementById('manualCcaEnd')?.value || '',
    venue: document.getElementById('manualCcaLocation')?.value.trim() || '',
    coach: document.getElementById('manualCcaCoach')?.value.trim() || '',
    term: document.getElementById('manualCcaTerm')?.value.trim() || ''
  });
  setCcaCustomRecords([...getCcaCustomRecords(), row]);
  renderAll();
  toast('CCA saved');
}
document.addEventListener('click', e => {
  if (e.target.id === 'parseAssessmentUploadBtn') handleParseUpload('assessment');
  if (e.target.id === 'parseCcaUploadBtn') handleParseUpload('cca');
  if (e.target.id === 'saveManualAssessmentBtn') saveManualAssessment();
  if (e.target.id === 'saveManualCcaBtn') saveManualCca();
  const savePreview = e.target.closest('[data-save-preview]');
  if (savePreview) savePreviewRows(savePreview.dataset.savePreview);
  const delAsmt = e.target.closest('[data-delete-assessment]');
  if (delAsmt) deleteAssessment(delAsmt.dataset.deleteAssessment);
  const delCca = e.target.closest('[data-delete-cca]');
  if (delCca) deleteCcaRecord(delCca.dataset.deleteCca);
  const revisionBtn = e.target.closest('[data-create-revision]');
  if (revisionBtn) createRevisionTasksForAssessment(revisionBtn.dataset.createRevision);
});
document.addEventListener('DOMContentLoaded', () => setTimeout(injectV38Panels, 100));
