const $ = (q, root=document) => root.querySelector(q);
const $$ = (q, root=document) => [...root.querySelectorAll(q)];
const defaultState = {
  parentName: 'Angeline',
  familyName: 'Yang Family',
  familyCode: 'MYSTUDY-2468',
  children: [
    { id:'evans', name:'Evans', level:'Sec 1', school:'Nan Chiau High School', streak:5, progress:72, todayDone:3, todayTotal:4 },
    { id:'cyrus', name:'Cyrus', level:'P4', school:'Primary School', streak:3, progress:55, todayDone:2, todayTotal:3 }
  ],
  buddies: [
    { name:'Jayden', code:'JAYDEN-4821', streak:7, progress:80, checkedIn:true },
    { name:'Lucas', code:'LUCAS-1620', streak:2, progress:42, checkedIn:false }
  ],
  student:{ name:'Evans', streak:0, checkedInDates:[] }
};
let state = JSON.parse(localStorage.getItem('mystudyDemo') || 'null') || defaultState;
function save(){ localStorage.setItem('mystudyDemo', JSON.stringify(state)); render(); }
function openView(id){ $$('.view').forEach(v=>v.classList.toggle('active', v.id===id)); $$('.nav-btn').forEach(b=>b.classList.toggle('active', b.dataset.view===id)); window.scrollTo({top:0,behavior:'smooth'}); }
$$('.nav-btn').forEach(b=>b.addEventListener('click',()=>openView(b.dataset.view)));
$$('[data-open]').forEach(b=>b.addEventListener('click',()=>openView(b.dataset.open)));
$('#saveFamilyBtn').addEventListener('click',()=>{ state.parentName=$('#parentName').value||state.parentName; state.familyName=$('#familyName').value||state.familyName; save(); });
$('#addChildBtn').addEventListener('click',()=>$('#childDialog').showModal());
$('#confirmAddChild').addEventListener('click',(e)=>{ e.preventDefault(); const name=$('#newChildName').value.trim(); if(!name) return; state.children.push({id:name.toLowerCase().replace(/\W+/g,'-'), name, level:$('#newChildLevel').value||'Student', school:$('#newChildSchool').value||'School', streak:0, progress:0, todayDone:0, todayTotal:3}); $('#childDialog').close(); $('#newChildName').value=''; $('#newChildLevel').value=''; $('#newChildSchool').value=''; save(); });
$('#joinBtn').addEventListener('click',()=>{ if($('#joinCode').value.trim()!==state.familyCode){ alert('Family code does not match this demo.'); return;} state.student.name=$('#studentName').value.trim()||state.student.name; save(); openView('student'); });
$('#checkInBtn').addEventListener('click',()=>{ const today = new Date().toISOString().slice(0,10); if(!state.student.checkedInDates.includes(today)) state.student.checkedInDates.push(today); state.student.streak = Math.max(state.student.streak, state.student.checkedInDates.length); save(); });
$$('.demoTask').forEach(cb=>cb.addEventListener('change',()=>{ const done=$$('.demoTask').filter(x=>x.checked).length; $('#todoCount').textContent=`${done}/3`; if(done>0){ const today=new Date().toISOString().slice(0,10); if(!state.student.checkedInDates.includes(today)) state.student.checkedInDates.push(today); state.student.streak = Math.max(state.student.streak, state.student.checkedInDates.length); } save(); }));
$('#addBuddyBtn').addEventListener('click',()=>{ const code=$('#buddyCode').value.trim(); if(!code) return; const name=code.split('-')[0].toLowerCase().replace(/^./,c=>c.toUpperCase()); state.buddies.push({name, code, streak:1, progress:20, checkedIn:false}); $('#buddyCode').value=''; save(); });
function render(){
  $('#parentName').value=state.parentName; $('#familyName').value=state.familyName; $('#familyCode').textContent=state.familyCode;
  $('#childrenList').innerHTML = state.children.map(c=>`<div class="card child-card"><span class="pill">${c.level}</span><h3>${c.name}</h3><p class="muted">${c.school}</p><div class="mini-row"><span>Streak</span><b>🔥 ${c.streak} days</b><small>${c.progress}%</small></div><div class="small-bar"><span style="width:${c.progress}%"></span></div><p class="muted">Today: ${c.todayDone}/${c.todayTotal} tasks done</p></div>`).join('');
  $('#streakText').textContent=`🔥 ${state.student.streak || state.student.checkedInDates.length} days`;
  const days=['M','T','W','T','F','S','S']; $('#streakDots').innerHTML = days.map((d,i)=>`<span class="dot ${i<state.student.checkedInDates.length?'on':''}">${d}</span>`).join('');
  $('#familyProgress').innerHTML = state.children.map(c=>`<div class="family-progress-item"><strong>${c.name}</strong><span>🔥 ${c.streak}-day streak · ${c.todayDone}/${c.todayTotal} today</span><div class="small-bar"><span style="width:${c.progress}%"></span></div></div>`).join('');
  $('#buddyList').innerHTML = state.buddies.map(b=>`<div class="buddy-item"><strong>${b.name}</strong><span>🔥 ${b.streak}-day streak · ${b.checkedIn?'Checked in today':'Not checked in yet'}</span><div class="small-bar"><span style="width:${b.progress}%"></span></div><button class="secondary" style="margin-top:10px">Send encouragement</button></div>`).join('');
}
render();
