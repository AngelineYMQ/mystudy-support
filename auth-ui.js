(function () {
  const auth = window.ESHQAuth;
  if (!auth) return;

  function $(id) { return document.getElementById(id); }
  function show(el, visible) { if (el) el.hidden = !visible; }
  function text(selector, value) { const el = document.querySelector(selector); if (el) el.textContent = value; }

  function applyStudentIdentity() {
    const student = auth.getActiveStudent();
    if (!student) return;
    const mark = document.querySelector('.topbar .brand-mark');
    if (mark) mark.textContent = student.mark || student.name.charAt(0).toUpperCase();
    text('.brand-block h1', `${student.name} Study HQ`);
    const today = $('todayLabel');
    if (today) today.textContent = student.subtitle || `${student.school || ''} ${student.grade || ''}`.trim() || 'Daily Study Dashboard';
    const hero = document.querySelector('.dashboard-hero h2');
    if (hero) hero.textContent = `Hi ${student.name} 👋`;
    document.title = `${student.name} Study HQ · Client Login`;

    document.querySelectorAll('*').forEach(el => {
      if (el.childNodes.length === 1 && el.firstChild.nodeType === Node.TEXT_NODE) {
        el.firstChild.nodeValue = el.firstChild.nodeValue.replace(/Evans/g, student.name);
      }
    });
  }

  function refreshAccountBar() {
    const session = auth.getSession();
    const overlay = $('loginOverlay');
    if (!session) {
      if (overlay) overlay.style.display = 'flex';
      show($('accountBar'), false);
      return;
    }
    if (overlay) overlay.style.display = 'none';
    show($('accountBar'), true);
    const chip = $('roleChip');
    if (chip) chip.textContent = `${session.role.toUpperCase()} · ${session.name}`;
    const hint = $('accountHint');
    if (hint) hint.textContent = session.role === 'admin' ? 'Admin can switch and manage all student spaces.' : 'You can only access assigned student spaces.';
    const manage = $('manageAccountsBtn');
    if (manage) manage.style.display = session.role === 'admin' ? '' : 'none';
    const switcher = $('studentSwitcher');
    if (switcher) {
      const allowed = auth.allowedStudents();
      switcher.innerHTML = allowed.map(s => `<option value="${s.id}">${s.name} · ${s.grade || ''} · ${s.school || ''}</option>`).join('');
      switcher.value = auth.getActiveStudentId();
      switcher.disabled = allowed.length <= 1;
    }
    applyStudentIdentity();
  }

  function refreshAdminConsole() {
    const students = auth.getStudents();
    const users = auth.getUsers();
    const studentSelect = $('newUserStudent');
    if (studentSelect) studentSelect.innerHTML = students.map(s => `<option value="${s.id}">${s.name}</option>`).join('');
    const lists = $('adminLists');
    if (!lists) return;
    lists.innerHTML = `
      <div class="admin-list-card"><h4>Students</h4>${students.map(s => `<div class="admin-row"><strong>${s.name}</strong><span>${s.school || ''} · ${s.grade || ''} · ${s.target || ''}</span></div>`).join('')}</div>
      <div class="admin-list-card"><h4>Users</h4>${users.map(u => `<div class="admin-row"><strong>${u.name}</strong><span>${u.email} · ${u.role} · ${(u.students || []).join(', ') || 'all/admin'}</span></div>`).join('')}</div>
    `;
  }

  function initLogin() {
    document.querySelectorAll('[data-fill-login]').forEach(btn => {
      btn.addEventListener('click', () => {
        const [email, pass] = btn.dataset.fillLogin.split('|');
        $('loginEmail').value = email;
        $('loginPassword').value = pass;
      });
    });
    $('loginBtn')?.addEventListener('click', () => {
      const user = auth.login($('loginEmail').value, $('loginPassword').value);
      if (!user) { $('loginError').textContent = 'Invalid email or password.'; return; }
      location.reload();
    });
    $('loginPassword')?.addEventListener('keydown', e => { if (e.key === 'Enter') $('loginBtn').click(); });
    $('logoutBtn')?.addEventListener('click', () => { auth.clearSession(); location.reload(); });
    $('studentSwitcher')?.addEventListener('change', e => { auth.setActiveStudentId(e.target.value); location.reload(); });
    $('manageAccountsBtn')?.addEventListener('click', () => { $('adminConsole').style.display = 'flex'; refreshAdminConsole(); });
    $('closeAdminConsole')?.addEventListener('click', () => { $('adminConsole').style.display = 'none'; });
    $('addStudentBtn')?.addEventListener('click', () => {
      const name = $('newStudentName').value.trim();
      if (!name) return alert('Please enter student name.');
      const students = auth.getStudents();
      const id = auth.makeId(name);
      students.push({ id, name, school: $('newStudentSchool').value.trim(), grade: $('newStudentGrade').value.trim(), target: $('newStudentTarget').value.trim(), mark: name.charAt(0).toUpperCase(), subtitle: 'Daily Study Dashboard' });
      auth.saveStudents(students);
      const users = auth.getUsers();
      users.forEach(u => { if (u.role === 'admin') u.students = [...new Set([...(u.students || []), id])]; });
      auth.saveUsers(users);
      refreshAdminConsole(); refreshAccountBar();
    });
    $('addUserBtn')?.addEventListener('click', () => {
      const name = $('newUserName').value.trim();
      const email = $('newUserEmail').value.trim();
      const password = $('newUserPassword').value.trim() || 'welcome123';
      const role = $('newUserRole').value;
      const sid = $('newUserStudent').value;
      if (!name || !email) return alert('Please enter name and email.');
      const users = auth.getUsers();
      users.push({ id: 'u-' + auth.makeId(name), name, email, password, role, students: role === 'admin' ? auth.getStudents().map(s => s.id) : [sid] });
      auth.saveUsers(users);
      refreshAdminConsole();
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initLogin();
    refreshAccountBar();
    setTimeout(applyStudentIdentity, 200);
    setInterval(applyStudentIdentity, 1500);
  });
})();
