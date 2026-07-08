/* EduStation Student HQ · Complete local MVP
   - Role-based login: admin, parent, student, teacher/consultant
   - Multi-student data isolation
   - Admin can create users, families, students, tasks, exams, schedules, notes, reports
   - Uses localStorage for an installable demo. Replace storage adapter with API for production.
*/
const STORE_KEY = 'edustation_student_hq_complete_v1';
const SESSION_KEY = 'edustation_student_hq_session_v1';

const uid = (prefix='id') => `${prefix}_${Math.random().toString(36).slice(2, 9)}_${Date.now().toString(36)}`;
const todayISO = () => new Date().toISOString().slice(0, 10);
const fmt = (date) => date ? new Date(date + 'T00:00:00').toLocaleDateString('en-SG', { day: '2-digit', month: 'short', year: 'numeric' }) : '—';
const daysUntil = (date) => {
  const a = new Date(todayISO() + 'T00:00:00');
  const b = new Date(date + 'T00:00:00');
  return Math.ceil((b - a) / 86400000);
};
const safe = (s='') => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

const seedData = () => {
  const adminId = 'u_admin';
  const consultantId = 'u_consultant';
  const teacherId = 'u_teacher';
  const parent1 = 'u_parent_evans';
  const studentUser1 = 'u_student_evans';
  const parent2 = 'u_parent_sophie';
  const studentUser2 = 'u_student_sophie';
  const s1 = 'stu_evans';
  const s2 = 'stu_sophie';
  return {
    settings: { organisationName: 'EduStation', productName: 'Student HQ', currency: 'SGD' },
    users: [
      { id: adminId, name: 'Angeline Yang', email: 'admin@edustation.com.sg', password: 'admin123', role: 'admin', status: 'active' },
      { id: consultantId, name: 'EduStation Consultant', email: 'consultant@edustation.com.sg', password: 'consultant123', role: 'consultant', status: 'active' },
      { id: teacherId, name: 'NANYANG Teacher', email: 'teacher@nanyang.edu.sg', password: 'teacher123', role: 'teacher', status: 'active' },
      { id: parent1, name: 'Evans Parent', email: 'parent.evans@example.com', password: 'parent123', role: 'parent', status: 'active' },
      { id: studentUser1, name: 'Evans Lee', email: 'evans@example.com', password: 'student123', role: 'student', status: 'active' },
      { id: parent2, name: 'Sophie Parent', email: 'parent.sophie@example.com', password: 'parent123', role: 'parent', status: 'active' },
      { id: studentUser2, name: 'Sophie Zhang', email: 'sophie@example.com', password: 'student123', role: 'student', status: 'active' }
    ],
    students: [
      { id: s1, name: 'Evans Lee', school: 'Singapore Government School', grade: 'Primary 6', dob: '2013-10-27', targetExam: 'DSA / PSLE', targetSchool: 'NUS High / Science track', programme: 'Premium Study HQ', status: 'active', startDate: todayISO(), packageEnd: '2026-12-31', notes: 'Science and Math focus. Needs daily revision rhythm.' },
      { id: s2, name: 'Sophie Zhang', school: 'Transition / International School', grade: 'Sec 1 Prep', dob: '2012-09-12', targetExam: 'AEIS / S-AEIS', targetSchool: 'Singapore Government Secondary School', programme: 'AEIS Sprint HQ', status: 'active', startDate: todayISO(), packageEnd: '2026-12-31', notes: 'English vocabulary and math speed are the two key areas.' }
    ],
    enrolments: [
      { userId: parent1, studentId: s1, relationship: 'mother' },
      { userId: studentUser1, studentId: s1, relationship: 'self' },
      { userId: parent2, studentId: s2, relationship: 'mother' },
      { userId: studentUser2, studentId: s2, relationship: 'self' },
      { userId: consultantId, studentId: s1, relationship: 'consultant' },
      { userId: consultantId, studentId: s2, relationship: 'consultant' },
      { userId: teacherId, studentId: s1, relationship: 'teacher' },
      { userId: teacherId, studentId: s2, relationship: 'teacher' }
    ],
    subjects: [
      { id: 'sub_eng', studentId: s1, name: 'English', target: 'AL2', current: 'AL3' },
      { id: 'sub_math', studentId: s1, name: 'Math', target: 'AL1', current: 'AL2' },
      { id: 'sub_sci', studentId: s1, name: 'Science', target: 'AL1', current: 'AL2' },
      { id: 'sub_eng2', studentId: s2, name: 'English', target: 'AEIS ready', current: 'Needs vocabulary' },
      { id: 'sub_math2', studentId: s2, name: 'Math', target: 'AEIS ready', current: 'Good basics' }
    ],
    tasks: [
      { id: uid('task'), studentId: s1, title: 'Complete Science water cycle revision', subject: 'Science', dueDate: addDays(1), priority: 'High', status: 'pending', owner: 'student', notes: 'Review mistakes from last quiz.', createdBy: teacherId },
      { id: uid('task'), studentId: s1, title: 'Math speed drill: 20 questions', subject: 'Math', dueDate: addDays(2), priority: 'Medium', status: 'pending', owner: 'student', notes: 'Target under 25 minutes.', createdBy: teacherId },
      { id: uid('task'), studentId: s2, title: 'AEIS vocabulary set A1-A3', subject: 'English', dueDate: addDays(1), priority: 'High', status: 'pending', owner: 'student', notes: 'Use in 5 example sentences.', createdBy: consultantId },
      { id: uid('task'), studentId: s2, title: 'Algebra worksheet correction', subject: 'Math', dueDate: addDays(3), priority: 'Medium', status: 'pending', owner: 'student', notes: 'Focus on careless errors.', createdBy: teacherId }
    ],
    exams: [
      { id: uid('exam'), studentId: s1, name: 'PSLE Oral', subject: 'English', date: '2026-08-13', targetScore: 'Strong oral performance', actualScore: '', status: 'upcoming' },
      { id: uid('exam'), studentId: s1, name: 'PSLE Written Papers', subject: 'All', date: '2026-09-25', targetScore: 'AL1-2 range', actualScore: '', status: 'upcoming' },
      { id: uid('exam'), studentId: s2, name: 'S-AEIS Diagnostic', subject: 'English + Math', date: '2026-08-15', targetScore: 'Pass internal benchmark', actualScore: '', status: 'upcoming' }
    ],
    schedules: [
      { id: uid('sch'), studentId: s1, day: 'Monday', start: '16:00', end: '17:30', activity: 'Math tuition', location: 'NANYANG' },
      { id: uid('sch'), studentId: s1, day: 'Wednesday', start: '16:30', end: '18:00', activity: 'Science revision', location: 'Home' },
      { id: uid('sch'), studentId: s2, day: 'Tuesday', start: '15:30', end: '17:30', activity: 'AEIS English class', location: 'EduStation' },
      { id: uid('sch'), studentId: s2, day: 'Thursday', start: '15:30', end: '17:00', activity: 'AEIS Math class', location: 'EduStation' }
    ],
    notes: [
      { id: uid('note'), studentId: s1, date: todayISO(), title: 'Weekly observation', body: 'Good effort in Science. Need tighter timing for Math word problems.', visibility: 'parent', createdBy: consultantId },
      { id: uid('note'), studentId: s2, date: todayISO(), title: 'AEIS focus', body: 'Vocabulary recall is improving. Next step: sentence accuracy and comprehension timing.', visibility: 'parent', createdBy: consultantId }
    ],
    reports: []
  };
};
function addDays(n) { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0,10); }

let db = loadDB();
let session = loadSession();
let state = { section: 'dashboard', selectedStudentId: null, drawer: null };

function loadDB() {
  const raw = localStorage.getItem(STORE_KEY);
  if (!raw) { const data = seedData(); localStorage.setItem(STORE_KEY, JSON.stringify(data)); return data; }
  try { return JSON.parse(raw); } catch { const data = seedData(); localStorage.setItem(STORE_KEY, JSON.stringify(data)); return data; }
}
function saveDB() { localStorage.setItem(STORE_KEY, JSON.stringify(db)); }
function loadSession() { try { return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null'); } catch { return null; } }
function saveSession() { session ? localStorage.setItem(SESSION_KEY, JSON.stringify(session)) : localStorage.removeItem(SESSION_KEY); }
function currentUser() { return session ? db.users.find(u => u.id === session.userId) : null; }
function isStaff(u=currentUser()) { return ['admin','consultant','teacher'].includes(u?.role); }
function canEdit(u=currentUser()) { return ['admin','consultant','teacher'].includes(u?.role); }
function visibleStudents(u=currentUser()) {
  if (!u) return [];
  if (u.role === 'admin') return db.students;
  const ids = db.enrolments.filter(e => e.userId === u.id).map(e => e.studentId);
  return db.students.filter(s => ids.includes(s.id));
}
function selectedStudent() {
  const students = visibleStudents();
  if (!state.selectedStudentId || !students.some(s => s.id === state.selectedStudentId)) state.selectedStudentId = students[0]?.id || null;
  return students.find(s => s.id === state.selectedStudentId) || null;
}
function studentData(studentId) {
  return {
    subjects: db.subjects.filter(x => x.studentId === studentId),
    tasks: db.tasks.filter(x => x.studentId === studentId),
    exams: db.exams.filter(x => x.studentId === studentId),
    schedules: db.schedules.filter(x => x.studentId === studentId),
    notes: db.notes.filter(x => x.studentId === studentId),
    reports: db.reports.filter(x => x.studentId === studentId)
  };
}

function render() {
  const app = document.getElementById('app');
  const u = currentUser();
  if (!u) { app.innerHTML = renderLogin(); bindLogin(); return; }
  const s = selectedStudent();
  app.innerHTML = renderShell(u, s);
  bindShell();
}

function renderLogin() {
  return `
  <div class="login-screen">
    <div class="login-card">
      <div class="login-hero">
        <div class="brand-row"><div class="brand-mark">E</div><div><strong>EduStation</strong><br><span class="muted">Student HQ</span></div></div>
        <h1>Private learning command centre for every student.</h1>
        <p>独立账号、角色权限、学生资料隔离、任务/考试/时间表/顾问备注/每周报告。这个版本不是单个 Evans 页面，而是可以管理真实客户的完整本地 MVP。</p>
        <div class="feature-pills">
          <span class="pill">Admin dashboard</span><span class="pill">Parent portal</span><span class="pill">Student portal</span><span class="pill">Teacher / consultant access</span><span class="pill">Multi-student structure</span>
        </div>
      </div>
      <div class="login-form-wrap">
        <h2>Sign in</h2>
        <p class="helper-text">Use one of the seeded accounts below, or create more users after logging in as Admin.</p>
        <form id="loginForm" class="form-grid">
          <label>Email<input id="loginEmail" type="email" required value="admin@edustation.com.sg"></label>
          <label>Password<input id="loginPassword" type="password" required value="admin123"></label>
          <button class="primary-btn" type="submit">Login</button>
          <div id="loginError" class="notice hidden"></div>
        </form>
        <div class="demo-logins">
          ${[
            ['Admin','admin@edustation.com.sg','admin123'],['Consultant','consultant@edustation.com.sg','consultant123'],['Teacher','teacher@nanyang.edu.sg','teacher123'],['Parent','parent.evans@example.com','parent123'],['Student','evans@example.com','student123']
          ].map(([r,e,p]) => `<button class="demo-login" data-email="${e}" data-password="${p}"><strong>${r}</strong>${e} / ${p}</button>`).join('')}
        </div>
      </div>
    </div>
  </div>`;
}
function bindLogin() {
  document.querySelectorAll('.demo-login').forEach(btn => btn.onclick = () => {
    document.getElementById('loginEmail').value = btn.dataset.email;
    document.getElementById('loginPassword').value = btn.dataset.password;
  });
  document.getElementById('loginForm').onsubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    const password = document.getElementById('loginPassword').value;
    const user = db.users.find(u => u.email.toLowerCase() === email && u.password === password && u.status === 'active');
    if (!user) { document.getElementById('loginError').classList.remove('hidden'); document.getElementById('loginError').textContent = 'Login failed. Check email/password.'; return; }
    session = { userId: user.id, loginAt: new Date().toISOString() }; saveSession(); state.selectedStudentId = null; render();
  };
}

function renderShell(u, s) {
  const students = visibleStudents(u);
  const studentOptions = students.map(st => `<option value="${st.id}" ${st.id === s?.id ? 'selected' : ''}>${safe(st.name)} · ${safe(st.grade)}</option>`).join('');
  const nav = [
    ['dashboard','Dashboard'], ['students','Students'], ['tasks','Tasks'], ['exams','Exams'], ['schedule','Schedule'], ['notes','Notes'], ['reports','Reports'], ['users','Users'], ['settings','Settings']
  ].filter(([id]) => id !== 'users' || u.role === 'admin').filter(([id]) => id !== 'students' || isStaff(u));
  return `
  <div class="app-shell">
    <header class="topbar">
      <div class="brand-block"><div class="brand-mark">E</div><div><h1>EduStation Student HQ</h1><p>${safe(u.name)} · ${safe(u.role)}</p></div></div>
      <nav class="nav-tabs">${nav.map(([id,label]) => `<button class="nav-btn ${state.section===id?'active':''}" data-section="${id}">${label}</button>`).join('')}</nav>
      <div class="user-menu">
        ${students.length ? `<select id="studentSwitcher" class="student-switcher">${studentOptions}</select>` : ''}
        <span class="role-badge">${safe(u.role.toUpperCase())}</span>
        <div class="avatar">${safe(u.name[0] || 'U')}</div>
        <button id="logoutBtn" class="ghost-btn">Logout</button>
      </div>
    </header>
    <main>${renderSection(u, s)}</main>
  </div>
  ${renderDrawer()}`;
}
function bindShell() {
  document.querySelectorAll('[data-section]').forEach(btn => btn.onclick = () => { state.section = btn.dataset.section; render(); });
  const sw = document.getElementById('studentSwitcher'); if (sw) sw.onchange = e => { state.selectedStudentId = e.target.value; render(); };
  document.getElementById('logoutBtn').onclick = () => { session = null; saveSession(); render(); };
  document.querySelectorAll('[data-action]').forEach(el => el.onclick = () => handleAction(el.dataset.action, el.dataset));
  const drawer = document.querySelector('.drawer'); if (drawer) drawer.onclick = e => { if (e.target.classList.contains('drawer')) { state.drawer = null; render(); } };
  document.querySelectorAll('form[data-form]').forEach(form => form.onsubmit = submitForm);
}
function renderSection(u, s) {
  if (!s && state.section !== 'users' && state.section !== 'settings') return `<div class="notice">No student is assigned to this account yet.</div>`;
  switch(state.section) {
    case 'students': return renderStudents(u);
    case 'tasks': return renderTasks(u, s);
    case 'exams': return renderExams(u, s);
    case 'schedule': return renderSchedule(u, s);
    case 'notes': return renderNotes(u, s);
    case 'reports': return renderReports(u, s);
    case 'users': return renderUsers(u);
    case 'settings': return renderSettings(u);
    default: return renderDashboard(u, s);
  }
}
function renderDashboard(u, s) {
  const d = studentData(s.id);
  const pending = d.tasks.filter(t => t.status !== 'done');
  const overdue = pending.filter(t => daysUntil(t.dueDate) < 0);
  const nextExam = d.exams.filter(e => e.date).sort((a,b)=>a.date.localeCompare(b.date))[0];
  const done = d.tasks.filter(t => t.status === 'done').length;
  const progress = d.tasks.length ? Math.round(done / d.tasks.length * 100) : 0;
  const todayTasks = pending.sort((a,b)=>a.dueDate.localeCompare(b.dueDate)).slice(0,3);
  return `
    <section class="hero-card">
      <div><p class="eyebrow">Private Student Space</p><h2>${safe(s.name)} Study HQ</h2><p class="muted">${safe(s.school)} · ${safe(s.grade)} · Target: ${safe(s.targetExam)} / ${safe(s.targetSchool)}</p></div>
      <div class="actions">${canEdit(u) ? `<button class="primary-btn" data-action="openStudentForm" data-id="${s.id}">Edit student</button>` : ''}<button class="secondary-btn" onclick="window.print()">Print / Save PDF</button></div>
    </section>
    <section class="grid-4">
      ${statCard('Pending tasks', pending.length, overdue.length ? `${overdue.length} overdue` : 'On track', overdue.length ? 'overdue' : 'active')}
      ${statCard('Next exam', nextExam ? `${daysUntil(nextExam.date)}d` : '—', nextExam ? `${safe(nextExam.name)} · ${fmt(nextExam.date)}` : 'No exam loaded', 'info')}
      ${statCard('Progress', `${progress}%`, `${done}/${d.tasks.length} tasks done`, 'active')}
      ${statCard('Package', s.packageEnd ? `${daysUntil(s.packageEnd)}d` : '—', `Ends ${fmt(s.packageEnd)}`, 'pending')}
    </section>
    <section class="grid-2">
      <div class="card"><div class="card-head"><div><p class="eyebrow">Today</p><h3>Top Priority</h3></div><button class="secondary-btn" data-section="tasks">Open tasks</button></div>${listTasks(todayTasks, u)}</div>
      <div class="card"><div class="card-head"><div><p class="eyebrow">Subjects</p><h3>Academic Snapshot</h3></div>${canEdit(u)?`<button class="secondary-btn" data-action="openSubjectForm">Add subject</button>`:''}</div>${renderSubjects(d.subjects)}</div>
    </section>
    <section class="grid-2">
      <div class="card"><div class="card-head"><div><p class="eyebrow">Upcoming</p><h3>Exam Timeline</h3></div><button class="secondary-btn" data-section="exams">Open exams</button></div>${timeline(d.exams)}</div>
      <div class="card"><div class="card-head"><div><p class="eyebrow">Parent View</p><h3>Latest Consultant Notes</h3></div><button class="secondary-btn" data-section="notes">Open notes</button></div>${renderNotesList(d.notes.slice(-3).reverse(), u)}</div>
    </section>`;
}
function statCard(title, number, helper, status) { return `<article class="card kpi-card"><p class="eyebrow">${title}</p><div class="stat-number">${number}</div><span class="status ${status}">${helper}</span></article>`; }
function renderSubjects(subjects) {
  if (!subjects.length) return `<div class="empty">No subjects yet.</div>`;
  return `<div class="list">${subjects.map(x => `<div class="list-item"><div><h4>${safe(x.name)}</h4><p class="muted">Current: ${safe(x.current)} · Target: ${safe(x.target)}</p></div></div>`).join('')}</div>`;
}
function listTasks(tasks, u) {
  if (!tasks.length) return `<div class="empty">No tasks yet.</div>`;
  return `<div class="list">${tasks.map(t => `<div class="list-item"><div><h4>${safe(t.title)}</h4><p class="muted">${safe(t.subject)} · due ${fmt(t.dueDate)} · ${safe(t.priority)}</p><p class="muted">${safe(t.notes || '')}</p></div><div class="actions"><span class="status ${t.status==='done'?'done':daysUntil(t.dueDate)<0?'overdue':'pending'}">${safe(t.status)}</span>${u.role==='student'||canEdit(u)?`<button class="secondary-btn" data-action="toggleTask" data-id="${t.id}">${t.status==='done'?'Undo':'Done'}</button>`:''}</div></div>`).join('')}</div>`;
}
function timeline(items) {
  if (!items.length) return `<div class="empty">No exams yet.</div>`;
  return `<div class="timeline">${items.sort((a,b)=>a.date.localeCompare(b.date)).map(e => `<div class="timeline-item"><strong>${fmt(e.date)}</strong><div><h4>${safe(e.name)}</h4><p class="muted">${safe(e.subject)} · Target: ${safe(e.targetScore || '—')} ${e.actualScore ? `· Actual: ${safe(e.actualScore)}` : ''}</p></div><span class="status ${daysUntil(e.date)<0?'done':'info'}">${daysUntil(e.date)} days</span></div>`).join('')}</div>`;
}
function renderTasks(u, s) {
  const tasks = studentData(s.id).tasks.sort((a,b)=>a.dueDate.localeCompare(b.dueDate));
  return `<section class="hero-card"><div><p class="eyebrow">Task Management</p><h2>${safe(s.name)} Tasks</h2><p class="muted">Homework, revision, application checklist and follow-up actions.</p></div>${canEdit(u)?`<button class="primary-btn" data-action="openTaskForm">Add task</button>`:''}</section><section class="card">${listTasks(tasks, u)}</section>`;
}
function renderExams(u, s) { const exams = studentData(s.id).exams; return `<section class="hero-card"><div><p class="eyebrow">Assessment Timeline</p><h2>Exams & Milestones</h2><p class="muted">Track official exams, internal diagnostics and school milestones.</p></div>${canEdit(u)?`<button class="primary-btn" data-action="openExamForm">Add exam</button>`:''}</section><section class="card">${timeline(exams)}</section>`; }
function renderSchedule(u, s) { const items = studentData(s.id).schedules; return `<section class="hero-card"><div><p class="eyebrow">Weekly Rhythm</p><h2>Schedule</h2><p class="muted">School, tuition, CCA, self-study and consultation slots.</p></div>${canEdit(u)?`<button class="primary-btn" data-action="openScheduleForm">Add schedule</button>`:''}</section><section class="card"><div class="table-wrap"><table><thead><tr><th>Day</th><th>Time</th><th>Activity</th><th>Location</th></tr></thead><tbody>${items.map(x=>`<tr><td>${safe(x.day)}</td><td>${safe(x.start)}-${safe(x.end)}</td><td>${safe(x.activity)}</td><td>${safe(x.location)}</td></tr>`).join('')}</tbody></table></div></section>`; }
function renderNotes(u, s) { const notes = studentData(s.id).notes.slice().reverse(); return `<section class="hero-card"><div><p class="eyebrow">Communication Record</p><h2>Notes</h2><p class="muted">Consultant/teacher observations visible to the right people.</p></div>${canEdit(u)?`<button class="primary-btn" data-action="openNoteForm">Add note</button>`:''}</section><section class="card">${renderNotesList(notes, u)}</section>`; }
function renderNotesList(notes, u) { if (!notes.length) return `<div class="empty">No notes yet.</div>`; return `<div class="list">${notes.map(n=>`<div class="list-item"><div><h4>${safe(n.title)}</h4><p class="muted">${fmt(n.date)} · visibility: ${safe(n.visibility)}</p><p>${safe(n.body)}</p></div></div>`).join('')}</div>`; }
function renderReports(u, s) { const d = studentData(s.id); const latest = buildReport(s, d); return `<section class="hero-card"><div><p class="eyebrow">Weekly Report</p><h2>Parent-ready Summary</h2><p class="muted">Generate a clean update that can be copied to WhatsApp, email or saved as PDF.</p></div><div class="actions"><button class="primary-btn" data-action="saveReport">Save report</button><button class="secondary-btn" data-action="copyReport">Copy text</button></div></section><section class="card"><div id="reportText" class="report-box">${safe(latest)}</div></section><section class="card"><div class="card-head"><div><p class="eyebrow">History</p><h3>Saved Reports</h3></div></div>${d.reports.length ? d.reports.slice().reverse().map(r=>`<div class="report-box">${safe(r.body)}</div>`).join('<br>') : '<div class="empty">No saved reports yet.</div>'}</section>`; }
function buildReport(s, d) { const pending = d.tasks.filter(t=>t.status!=='done'); const done = d.tasks.filter(t=>t.status==='done'); const nextExam = d.exams.sort((a,b)=>a.date.localeCompare(b.date))[0]; return `EduStation Student HQ Weekly Update\n\nStudent: ${s.name}\nSchool / Grade: ${s.school} · ${s.grade}\nTarget: ${s.targetExam} / ${s.targetSchool}\n\n1. Progress\n- Completed tasks: ${done.length}\n- Pending tasks: ${pending.length}\n- Main focus now: ${pending[0]?.title || 'No pending task'}\n\n2. Upcoming Milestone\n- ${nextExam ? `${nextExam.name} on ${fmt(nextExam.date)} (${daysUntil(nextExam.date)} days left)` : 'No exam loaded'}\n\n3. Consultant / Teacher Notes\n${d.notes.slice(-2).map(n=>`- ${n.title}: ${n.body}`).join('\n') || '- No notes yet'}\n\n4. Next Step\n- Keep the weekly rhythm updated. Complete overdue tasks first, then focus on the next exam milestone.`; }
function renderStudents(u) { return `<section class="hero-card"><div><p class="eyebrow">Admin / Staff</p><h2>Student Management</h2><p class="muted">Create and manage real customer student spaces.</p></div>${u.role==='admin'?`<button class="primary-btn" data-action="openStudentForm">Add student</button>`:''}</section><section class="card"><div class="table-wrap"><table><thead><tr><th>Name</th><th>School / Grade</th><th>Target</th><th>Package</th><th>Status</th><th></th></tr></thead><tbody>${visibleStudents(u).map(s=>`<tr><td><strong>${safe(s.name)}</strong><br><span class="muted">DOB ${fmt(s.dob)}</span></td><td>${safe(s.school)}<br><span class="muted">${safe(s.grade)}</span></td><td>${safe(s.targetExam)}<br><span class="muted">${safe(s.targetSchool)}</span></td><td>${safe(s.programme)}<br><span class="muted">Ends ${fmt(s.packageEnd)}</span></td><td><span class="status active">${safe(s.status)}</span></td><td><button class="secondary-btn" data-action="selectStudent" data-id="${s.id}">Open</button></td></tr>`).join('')}</tbody></table></div></section>`; }
function renderUsers(u) { if (u.role !== 'admin') return `<div class="notice">Admin only.</div>`; return `<section class="hero-card"><div><p class="eyebrow">Access Control</p><h2>Users & Permissions</h2><p class="muted">Create parent, student, teacher and consultant logins. Assign them to students.</p></div><div class="actions"><button class="primary-btn" data-action="openUserForm">Add user</button><button class="secondary-btn" data-action="openAssignForm">Assign user to student</button></div></section><section class="card"><div class="table-wrap"><table><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Assigned students</th><th>Status</th></tr></thead><tbody>${db.users.map(user=>`<tr><td><strong>${safe(user.name)}</strong></td><td>${safe(user.email)}</td><td><span class="role-badge">${safe(user.role)}</span></td><td>${db.enrolments.filter(e=>e.userId===user.id).map(e=>safe(db.students.find(s=>s.id===e.studentId)?.name || '')).join(', ') || '—'}</td><td><span class="status ${user.status==='active'?'active':'pending'}">${safe(user.status)}</span></td></tr>`).join('')}</tbody></table></div></section>`; }
function renderSettings(u) { return `<section class="hero-card"><div><p class="eyebrow">System</p><h2>Settings</h2><p class="muted">Local MVP settings. For production, connect Supabase/Firebase/Cloudflare D1 and secure authentication.</p></div><button class="danger-btn" data-action="resetData">Reset seed data</button></section><section class="card"><div class="notice"><strong>Important:</strong> This zip is a complete working local version for testing the product flow. Browser localStorage is not secure enough for real clients. Before taking payment or storing real student data, connect it to a proper backend login system.</div></section>`; }

function renderDrawer() {
  if (!state.drawer) return '';
  const s = selectedStudent();
  const usersOptions = db.users.map(u=>`<option value="${u.id}">${safe(u.name)} · ${safe(u.role)}</option>`).join('');
  const studentsOptions = db.students.map(st=>`<option value="${st.id}">${safe(st.name)}</option>`).join('');
  const commonHead = (title) => `<div class="drawer open"><div class="drawer-panel"><div class="drawer-head"><h3>${title}</h3><button class="ghost-btn" data-action="closeDrawer">Close</button></div>`;
  const end = `</div></div>`;
  if (state.drawer.type === 'student') {
    const st = state.drawer.id ? db.students.find(x=>x.id===state.drawer.id) : {};
    return commonHead(st?.id?'Edit Student':'Add Student') + `<form data-form="student" class="form-2"><input type="hidden" name="id" value="${safe(st.id||'')}">${input('name','Student name',st.name)}${input('dob','Date of birth',st.dob,'date')}${input('school','School',st.school)}${input('grade','Grade',st.grade)}${input('targetExam','Target exam',st.targetExam)}${input('targetSchool','Target school',st.targetSchool)}${input('programme','Package / programme',st.programme)}${input('packageEnd','Package end',st.packageEnd,'date')}<label class="full">Notes<textarea name="notes">${safe(st.notes||'')}</textarea></label><button class="primary-btn full" type="submit">Save student</button></form>` + end;
  }
  if (state.drawer.type === 'task') return commonHead('Add Task') + `<form data-form="task" class="form-2">${input('title','Task title')} ${input('subject','Subject')} ${input('dueDate','Due date','date','date')} ${select('priority','Priority',['High','Medium','Low'])}${select('owner','Owner',['student','parent','teacher','consultant'])}<label class="full">Notes<textarea name="notes"></textarea></label><button class="primary-btn full" type="submit">Save task</button></form>` + end;
  if (state.drawer.type === 'exam') return commonHead('Add Exam / Milestone') + `<form data-form="exam" class="form-2">${input('name','Exam name')} ${input('subject','Subject')} ${input('date','Date','date','date')} ${input('targetScore','Target score')} ${input('actualScore','Actual score')}<button class="primary-btn full" type="submit">Save exam</button></form>` + end;
  if (state.drawer.type === 'schedule') return commonHead('Add Schedule') + `<form data-form="schedule" class="form-2">${select('day','Day',['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'])}${input('start','Start time','16:00','time')}${input('end','End time','17:00','time')}${input('activity','Activity')}${input('location','Location')}<button class="primary-btn full" type="submit">Save schedule</button></form>` + end;
  if (state.drawer.type === 'note') return commonHead('Add Note') + `<form data-form="note" class="form-2">${input('title','Title')}${input('date','Date',todayISO(),'date')}${select('visibility','Visibility',['parent','internal','student'])}<label class="full">Note<textarea name="body"></textarea></label><button class="primary-btn full" type="submit">Save note</button></form>` + end;
  if (state.drawer.type === 'subject') return commonHead('Add Subject') + `<form data-form="subject" class="form-2">${input('name','Subject name')}${input('current','Current level')}${input('target','Target level')}<button class="primary-btn full" type="submit">Save subject</button></form>` + end;
  if (state.drawer.type === 'user') return commonHead('Add User') + `<form data-form="user" class="form-2">${input('name','Name')}${input('email','Email','','email')}${input('password','Password','changeme123','text')}${select('role','Role',['parent','student','teacher','consultant','admin'])}<button class="primary-btn full" type="submit">Save user</button></form>` + end;
  if (state.drawer.type === 'assign') return commonHead('Assign User to Student') + `<form data-form="assign" class="form-2"><label>User<select name="userId">${usersOptions}</select></label><label>Student<select name="studentId">${studentsOptions}</select></label>${input('relationship','Relationship / role','parent')}<button class="primary-btn full" type="submit">Assign</button></form>` + end;
  return '';
}
function input(name,label,value='',type='text') { return `<label>${label}<input name="${name}" type="${type}" value="${safe(value || '')}" ${['name','title','email'].includes(name)?'required':''}></label>`; }
function select(name,label,opts) { return `<label>${label}<select name="${name}">${opts.map(o=>`<option value="${safe(o)}">${safe(o)}</option>`).join('')}</select></label>`; }

function handleAction(action, data) {
  const s = selectedStudent();
  if (action === 'closeDrawer') { state.drawer = null; render(); }
  if (action === 'selectStudent') { state.selectedStudentId = data.id; state.section = 'dashboard'; render(); }
  if (action === 'openStudentForm') { state.drawer = { type: 'student', id: data.id || null }; render(); }
  if (action === 'openTaskForm') { state.drawer = { type: 'task' }; render(); }
  if (action === 'openExamForm') { state.drawer = { type: 'exam' }; render(); }
  if (action === 'openScheduleForm') { state.drawer = { type: 'schedule' }; render(); }
  if (action === 'openNoteForm') { state.drawer = { type: 'note' }; render(); }
  if (action === 'openSubjectForm') { state.drawer = { type: 'subject' }; render(); }
  if (action === 'openUserForm') { state.drawer = { type: 'user' }; render(); }
  if (action === 'openAssignForm') { state.drawer = { type: 'assign' }; render(); }
  if (action === 'toggleTask') { const t = db.tasks.find(x=>x.id===data.id); if(t){ t.status = t.status === 'done' ? 'pending' : 'done'; saveDB(); render(); } }
  if (action === 'saveReport') { db.reports.push({ id: uid('report'), studentId: s.id, date: todayISO(), body: document.getElementById('reportText')?.textContent || '' }); saveDB(); render(); }
  if (action === 'copyReport') { navigator.clipboard?.writeText(document.getElementById('reportText')?.textContent || ''); alert('Report copied.'); }
  if (action === 'resetData') { if(confirm('Reset all local data to seed data?')){ db = seedData(); saveDB(); state.section='dashboard'; state.selectedStudentId=null; render(); } }
}
function submitForm(e) {
  e.preventDefault();
  const fd = Object.fromEntries(new FormData(e.target).entries());
  const type = e.target.dataset.form;
  const s = selectedStudent(); const u = currentUser();
  if (type === 'student') {
    if (fd.id) Object.assign(db.students.find(x=>x.id===fd.id), fd);
    else { const id = uid('stu'); db.students.push({ id, ...fd, status: 'active', startDate: todayISO() }); state.selectedStudentId = id; }
  }
  if (type === 'task') db.tasks.push({ id: uid('task'), studentId: s.id, ...fd, status: 'pending', createdBy: u.id });
  if (type === 'exam') db.exams.push({ id: uid('exam'), studentId: s.id, ...fd, status: 'upcoming' });
  if (type === 'schedule') db.schedules.push({ id: uid('sch'), studentId: s.id, ...fd });
  if (type === 'note') db.notes.push({ id: uid('note'), studentId: s.id, ...fd, createdBy: u.id });
  if (type === 'subject') db.subjects.push({ id: uid('sub'), studentId: s.id, ...fd });
  if (type === 'user') db.users.push({ id: uid('u'), ...fd, status: 'active' });
  if (type === 'assign') { if(!db.enrolments.some(x=>x.userId===fd.userId && x.studentId===fd.studentId)) db.enrolments.push(fd); }
  saveDB(); state.drawer = null; render();
}

render();
