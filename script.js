const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];
const STORAGE_KEY = 'mystudy_support_v6_working_signup';
const demoFamily = {
  parentName: 'Demo Parent', email: 'parent@email.com', familyName: 'Demo Family', familyCode: 'DEMO24',
  children: [
    { id:'student-a', name:'Student A', level:'Sec 1', school:'Secondary School', streak:5, progress:68, tasksDone:3, tasksTotal:4 },
    { id:'student-b', name:'Student B', level:'P4', school:'Primary School', streak:3, progress:54, tasksDone:2, tasksTotal:3 }
  ],
  buddies: [
    { name:'Study Buddy 1', streak:7, progress:72, checkedIn:true },
    { name:'Study Buddy 2', streak:2, progress:45, checkedIn:false }
  ]
};
let state = loadState();
let currentChildId = state.children?.[0]?.id || null;
function loadState(){ try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || structuredClone(demoFamily); } catch { return structuredClone(demoFamily); } }
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); toast('Saved'); }
function toast(msg){ const el=$('#toast'); el.textContent=msg; el.classList.remove('hidden'); setTimeout(()=>el.classList.add('hidden'),1400); }
function showView(id){ $$('.view').forEach(v=>v.classList.remove('active')); $('#' + id)?.classList.add('active'); window.location.hash = id === 'home' ? '' : id; window.scrollTo({top:0, behavior:'smooth'}); if(id==='parentDashboard') renderParent(); if(id==='studentDashboard') renderStudent(); }
function code(){ return Math.random().toString(36).slice(2,8).toUpperCase(); }
function slug(str){ return str.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'') || 'student'; }
document.addEventListener('click', (e)=>{ const btn=e.target.closest('[data-view]'); if(btn){ e.preventDefault(); showView(btn.dataset.view); }});
$$('.brand').forEach(b=>b.addEventListener('click',()=>showView('home')));
$$('[data-tab]').forEach(btn=>btn.addEventListener('click',()=>{ $$('.tab').forEach(t=>t.classList.remove('active')); btn.classList.add('active'); $$('.tab-panel').forEach(p=>p.classList.remove('active')); $('#' + btn.dataset.tab).classList.add('active'); }));
$('#signupForm').addEventListener('submit', e=>{ e.preventDefault(); state={ parentName:$('#signupParentName').value.trim(), email:$('#signupEmail').value.trim(), familyName:$('#signupFamilyName').value.trim(), familyCode: code(), children:[], buddies:[] }; saveState(); showView('parentDashboard'); });
$('#parentLoginForm').addEventListener('submit', e=>{ e.preventDefault(); showView('parentDashboard'); });
$('#studentLoginForm').addEventListener('submit', e=>{ e.preventDefault(); const codeVal=$('#studentFamilyCode').value.trim().toUpperCase(); const name=$('#studentLoginName').value.trim().toLowerCase(); if(codeVal!==state.familyCode) return toast('Family code not found'); const child=state.children.find(c=>c.name.toLowerCase()===name); if(!child) return toast('Student not found. Parent can add child first.'); currentChildId=child.id; showView('studentDashboard'); });
$('#joinForm').addEventListener('submit', e=>{ e.preventDefault(); const codeVal=$('#joinCode').value.trim().toUpperCase(); const name=$('#joinName').value.trim(); if(codeVal!==state.familyCode) return toast('Family code not found'); let child=state.children.find(c=>c.name.toLowerCase()===name.toLowerCase()); if(!child){ child={ id:slug(name)+'-'+Date.now().toString().slice(-4), name, level:'Student', school:'', streak:0, progress:0, tasksDone:0, tasksTotal:3 }; state.children.push(child); saveState(); } currentChildId=child.id; showView('studentDashboard'); });
$('#toggleAddChild').addEventListener('click',()=>$('#addChildPanel').classList.toggle('hidden'));
$('#copyCodeBtn').addEventListener('click', async()=>{ await navigator.clipboard?.writeText(state.familyCode); toast('Family code copied'); });
$('#logoutParent').addEventListener('click',()=>showView('home'));
$('#logoutStudent').addEventListener('click',()=>showView('home'));
$('#addChildForm').addEventListener('submit', e=>{ e.preventDefault(); const name=$('#childName').value.trim(); state.children.push({ id:slug(name)+'-'+Date.now().toString().slice(-4), name, level:$('#childLevel').value.trim(), school:$('#childSchool').value.trim(), streak:0, progress:0, tasksDone:0, tasksTotal:3 }); e.target.reset(); saveState(); renderParent(); });
$('#loadDemoBtn').addEventListener('click',()=>{ state=structuredClone(demoFamily); currentChildId=state.children[0].id; saveState(); showView('parentDashboard'); });
$('#checkInBtn').addEventListener('click',()=>{ const child=currentChild(); if(!child) return; child.streak += 1; child.progress=Math.min(100, child.progress+5); saveState(); renderStudent(); });
$('#completeTaskBtn').addEventListener('click',()=>{ const child=currentChild(); if(!child) return; child.tasksDone=Math.min(child.tasksTotal, child.tasksDone+1); child.progress=Math.min(100, child.progress+8); saveState(); renderStudent(); });
$('#buddyForm').addEventListener('submit', e=>{ e.preventDefault(); const name=$('#buddyName').value.trim(); if(!name) return; state.buddies.push({ name, streak:Number($('#buddyStreak').value||0), progress:Math.floor(Math.random()*45)+35, checkedIn:Math.random()>.4 }); e.target.reset(); saveState(); renderStudent(); });
function currentChild(){ return state.children.find(c=>c.id===currentChildId) || state.children[0]; }
function renderParent(){ $('#parentTitle').textContent=`${state.familyName || 'My Family'} · ${state.parentName || 'Parent'}`; $('#familyCodeLine').textContent=`Family Code: ${state.familyCode} · Share this code with your child to join.`; $('#childrenGrid').innerHTML=state.children.map(c=>`<div class="child-card"><h3>${c.name}</h3><p class="muted">${c.level}${c.school ? ' · '+c.school : ''}</p><div class="child-stats"><div class="stat"><b>${c.streak}</b><span>streak</span></div><div class="stat"><b>${c.tasksDone}/${c.tasksTotal}</b><span>today</span></div><div class="stat"><b>${c.progress}%</b><span>week</span></div></div><button class="primary wide" onclick="openChild('${c.id}')">Open child dashboard</button></div>`).join('') || `<div class="card"><h3>No children yet</h3><p class="muted">Add your first child to create their dashboard.</p></div>`; renderFamilyProgress($('#familyProgress')); }
window.openChild=(id)=>{ currentChildId=id; showView('studentDashboard'); };
function renderStudent(){ const c=currentChild(); if(!c) return showView('join'); currentChildId=c.id; $('#studentTitle').textContent=`Hi ${c.name} 👋`; $('#streakNumber').textContent=c.streak; $('#taskList').innerHTML=['Check homework due tomorrow','Complete one homework task','Do one short revision round'].map((task,i)=>`<label class="task"><input type="checkbox" ${i<c.tasksDone?'checked':''} disabled><span>${task}</span></label>`).join(''); renderFamilyProgress($('#studentFamilyProgress'), c.id); $('#buddyList').innerHTML=state.buddies.map(b=>`<div class="buddy"><h3>${b.name}</h3><p>🔥 ${b.streak}-day streak</p><p>${b.checkedIn ? 'Checked in today' : 'Not checked in yet'}</p><div class="bar"><i style="width:${b.progress}%"></i></div><p class="muted">${b.progress}% weekly progress</p><button class="primary wide" onclick="toast('Encouragement sent')">Send encouragement</button></div>`).join('') || `<p class="muted">No buddies yet. Add a study buddy to see safe streaks.</p>`; }
function renderFamilyProgress(target, currentId){ target.innerHTML=state.children.map(c=>`<div class="progress-row ${c.id===currentId?'highlight':''}"><b>${c.name}</b><div><div class="bar"><i style="width:${c.progress}%"></i></div><small>${c.tasksDone}/${c.tasksTotal} tasks today · 🔥 ${c.streak}-day streak</small></div><strong>${c.progress}%</strong></div>`).join('') || `<p class="muted">No child profiles yet.</p>`; }
const initialHash = location.hash.replace('#',''); if(initialHash && $('#' + initialHash)) showView(initialHash);
