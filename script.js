const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const defaultFamily = {
  parentName: 'Demo Parent',
  email: 'parent@email.com',
  familyName: 'Demo Family',
  familyCode: 'DEMO24',
  children: [
    { id: 'student-a', name: 'Student A', level: 'Sec 1', school: 'Secondary School', streak: 5, progress: 68, tasksDone: 3, tasksTotal: 4 },
    { id: 'student-b', name: 'Student B', level: 'P4', school: 'Primary School', streak: 3, progress: 54, tasksDone: 2, tasksTotal: 3 }
  ],
  buddies: [
    { name: 'Study Buddy 1', streak: 7, progress: 72, checkedIn: true },
    { name: 'Study Buddy 2', streak: 2, progress: 45, checkedIn: false }
  ]
};

let state = loadState();
let currentChildId = state.children[0]?.id || null;

function loadState() {
  const saved = localStorage.getItem('mystudy_support_demo_v4_neutral');
  if (saved) return JSON.parse(saved);
  localStorage.setItem('mystudy_support_demo_v4_neutral', JSON.stringify(defaultFamily));
  return structuredClone(defaultFamily);
}
function saveState() {
  localStorage.setItem('mystudy_support_demo_v4_neutral', JSON.stringify(state));
  toast('Saved');
}
function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.remove('hidden');
  setTimeout(() => el.classList.add('hidden'), 1300);
}
function showView(id) {
  $$('.view').forEach(v => v.classList.remove('active'));
  $('#' + id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (id === 'parentDashboard') renderParent();
  if (id === 'studentDashboard') renderStudent();
}

document.addEventListener('click', e => {
  const viewBtn = e.target.closest('[data-view]');
  if (viewBtn) {
    e.preventDefault();
    showView(viewBtn.dataset.view);
  }
  if (e.target.matches('[data-demo-login]')) {
    currentChildId = state.children[0]?.id || null;
    showView('parentDashboard');
  }
});

$$('[data-auth-tab]').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    $$('.auth-form').forEach(f => f.classList.remove('active'));
    $('#' + btn.dataset.authTab).classList.add('active');
  });
});

$('#signupForm').addEventListener('submit', e => {
  e.preventDefault();
  state = {
    parentName: $('#signupParentName').value.trim(),
    email: $('#signupEmail').value.trim(),
    familyName: $('#signupFamilyName').value.trim(),
    familyCode: makeCode(),
    children: [],
    buddies: []
  };
  saveState();
  showView('parentDashboard');
});

$('#parentLogin').addEventListener('submit', e => {
  e.preventDefault();
  showView('parentDashboard');
});

$('#studentLogin').addEventListener('submit', e => {
  e.preventDefault();
  const code = $('#studentFamilyCode').value.trim().toUpperCase();
  const name = $('#studentName').value.trim().toLowerCase();
  if (code !== state.familyCode) return toast('Family code not found');
  const child = state.children.find(c => c.name.toLowerCase() === name);
  if (!child) return toast('Student not found. Parent can add child first.');
  currentChildId = child.id;
  showView('studentDashboard');
});

$('#joinForm').addEventListener('submit', e => {
  e.preventDefault();
  const code = $('#joinCode').value.trim().toUpperCase();
  const name = $('#joinName').value.trim();
  if (code !== state.familyCode) return toast('Family code not found');
  let child = state.children.find(c => c.name.toLowerCase() === name.toLowerCase());
  if (!child) {
    child = { id: slug(name), name, level: 'Student', school: '', streak: 0, progress: 0, tasksDone: 0, tasksTotal: 3 };
    state.children.push(child);
    saveState();
  }
  currentChildId = child.id;
  showView('studentDashboard');
});

$('#showAddChild').addEventListener('click', () => $('#addChildPanel').classList.toggle('hidden'));
$('#copyFamilyCode').addEventListener('click', async () => {
  await navigator.clipboard?.writeText(state.familyCode);
  toast('Family code copied: ' + state.familyCode);
});
$('#logoutParent').addEventListener('click', () => showView('landing'));
$('#logoutStudent').addEventListener('click', () => showView('landing'));

$('#addChildForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('#childName').value.trim();
  state.children.push({
    id: slug(name) + '-' + Date.now().toString().slice(-4),
    name,
    level: $('#childLevel').value.trim(),
    school: $('#childSchool').value.trim(),
    streak: 0,
    progress: 0,
    tasksDone: 0,
    tasksTotal: 3
  });
  e.target.reset();
  saveState();
  renderParent();
});

$('#studentCheckin').addEventListener('click', () => {
  const child = state.children.find(c => c.id === currentChildId);
  if (!child) return;
  child.streak += 1;
  child.progress = Math.min(100, child.progress + 5);
  saveState();
  renderStudent();
});
$('#completeTask').addEventListener('click', () => {
  const child = state.children.find(c => c.id === currentChildId);
  if (!child) return;
  child.tasksDone = Math.min(child.tasksTotal, child.tasksDone + 1);
  child.progress = Math.min(100, child.progress + 8);
  if (child.tasksDone === child.tasksTotal) child.streak += 1;
  saveState();
  renderStudent();
});
$('#buddyForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('#buddyName').value.trim();
  if (!name) return;
  state.buddies.push({ name, streak: Number($('#buddyStreak').value || 0), progress: Math.floor(Math.random() * 50) + 30, checkedIn: Math.random() > .4 });
  e.target.reset();
  saveState();
  renderStudent();
});

function renderParent() {
  $('#parentTitle').textContent = `${state.familyName || 'My Family'} · ${state.parentName || 'Parent'}`;
  $('#familyCodeLine').textContent = `Family Code: ${state.familyCode} · Share this code with your child to join.`;
  $('#childrenGrid').innerHTML = state.children.map(child => `
    <div class="child-card">
      <h3>${child.name}</h3>
      <p class="muted">${child.level}${child.school ? ' · ' + child.school : ''}</p>
      <div class="child-stats">
        <div class="stat"><b>${child.streak}</b><span>streak</span></div>
        <div class="stat"><b>${child.tasksDone}/${child.tasksTotal}</b><span>today</span></div>
        <div class="stat"><b>${child.progress}%</b><span>week</span></div>
      </div>
      <button class="secondary wide" onclick="openChild('${child.id}')">Open child dashboard</button>
    </div>`).join('') || `<div class="card"><h3>No children yet</h3><p>Add your first child to create their dashboard.</p></div>`;
  renderFamilyProgress($('#familyProgress'));
}
window.openChild = id => { currentChildId = id; showView('studentDashboard'); };

function renderStudent() {
  const child = state.children.find(c => c.id === currentChildId) || state.children[0];
  if (!child) return showView('join');
  currentChildId = child.id;
  $('#studentTitle').textContent = `Hi ${child.name} 👋`;
  $('#studentStreak').textContent = child.streak;
  $('#studentTasks').innerHTML = [
    'Check homework due tomorrow',
    'Complete one homework task',
    'Do one short revision round'
  ].map((task, i) => `<label class="task"><input type="checkbox" ${i < child.tasksDone ? 'checked' : ''} disabled><span>${task}</span></label>`).join('');
  renderFamilyProgress($('#studentFamilyProgress'), child.id);
  $('#buddyList').innerHTML = state.buddies.map(b => `
    <div class="buddy">
      <h4>${b.name}</h4>
      <p>🔥 ${b.streak}-day streak</p>
      <p>${b.checkedIn ? 'Checked in today' : 'Not checked in yet'}</p>
      <div class="bar"><i style="width:${b.progress}%"></i></div>
      <p class="muted">${b.progress}% weekly progress</p>
      <button class="secondary wide" onclick="toast('Encouragement sent to ${b.name}')">Send encouragement</button>
    </div>`).join('') || `<p class="muted">No buddies yet. Add a study buddy to see safe streaks.</p>`;
}

function renderFamilyProgress(target, currentId) {
  target.innerHTML = state.children.map(c => `
    <div class="progress-row ${c.id === currentId ? 'highlight' : ''}">
      <b>${c.name}</b>
      <div>
        <div class="bar"><i style="width:${c.progress}%"></i></div>
        <small>${c.tasksDone}/${c.tasksTotal} tasks today · 🔥 ${c.streak}-day streak</small>
      </div>
      <strong>${c.progress}%</strong>
    </div>`).join('') || `<p class="muted">No child profiles yet.</p>`;
}
function makeCode() { return Math.random().toString(36).slice(2, 8).toUpperCase(); }
function slug(str) { return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
