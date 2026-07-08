(function () {
  const AUTH_PREFIX = 'eshq.auth.';
  const RAW_KEYS = new Set([
    AUTH_PREFIX + 'session',
    AUTH_PREFIX + 'users',
    AUTH_PREFIX + 'students',
    AUTH_PREFIX + 'assignments',
    AUTH_PREFIX + 'activeStudent'
  ]);

  const starterStudents = [
    { id: 'evans', name: 'Evans', school: 'Nan Chiau High School', grade: 'Sec 1', target: 'WA3 / Sec 1 Mastery', mark: 'E', subtitle: 'Daily Study Dashboard' },
    { id: 'sophie-aeis', name: 'Sophie', school: 'AEIS Prep', grade: 'Primary 4', target: 'AEIS / S-AEIS', mark: 'S', subtitle: 'AEIS Study Dashboard' },
    { id: 'ryan-ib', name: 'Ryan', school: 'International School', grade: 'Grade 7', target: 'IB / IGCSE Foundation', mark: 'R', subtitle: 'International School Study Dashboard' }
  ];
  const starterUsers = [
    { id: 'u-admin', name: 'Angeline / EduStation Admin', email: 'admin@edustation.com.sg', password: 'admin123', role: 'admin', students: ['evans', 'sophie-aeis', 'ryan-ib'] },
    { id: 'u-evans-parent', name: 'Evans Parent', email: 'parent.evans@example.com', password: 'parent123', role: 'parent', students: ['evans'] },
    { id: 'u-evans-student', name: 'Evans', email: 'evans@student.local', password: 'student123', role: 'student', students: ['evans'] },
    { id: 'u-teacher', name: 'Teacher', email: 'teacher@edustation.com.sg', password: 'teacher123', role: 'teacher', students: ['evans', 'sophie-aeis'] }
  ];

  function rawGet(key) { return window.localStorage.__proto__.getItem.call(window.localStorage, key); }
  function rawSet(key, value) { return window.localStorage.__proto__.setItem.call(window.localStorage, key, value); }
  function rawRemove(key) { return window.localStorage.__proto__.removeItem.call(window.localStorage, key); }

  if (!rawGet(AUTH_PREFIX + 'students')) rawSet(AUTH_PREFIX + 'students', JSON.stringify(starterStudents));
  if (!rawGet(AUTH_PREFIX + 'users')) rawSet(AUTH_PREFIX + 'users', JSON.stringify(starterUsers));
  if (!rawGet(AUTH_PREFIX + 'activeStudent')) rawSet(AUTH_PREFIX + 'activeStudent', 'evans');

  function activeStudentId() {
    try {
      const session = JSON.parse(rawGet(AUTH_PREFIX + 'session') || 'null');
      return rawGet(AUTH_PREFIX + 'activeStudent') || (session && session.students && session.students[0]) || 'evans';
    } catch (e) { return 'evans'; }
  }
  function shouldScope(key) {
    if (!key || RAW_KEYS.has(key) || key.startsWith(AUTH_PREFIX) || key.startsWith('eshq.global.')) return false;
    return true;
  }
  function scopedKey(key) {
    return shouldScope(key) ? `eshq.student.${activeStudentId()}.${key}` : key;
  }

  const originalGet = Storage.prototype.getItem;
  const originalSet = Storage.prototype.setItem;
  const originalRemove = Storage.prototype.removeItem;
  const originalKey = Storage.prototype.key;
  Storage.prototype.getItem = function (key) { return originalGet.call(this, scopedKey(key)); };
  Storage.prototype.setItem = function (key, value) { return originalSet.call(this, scopedKey(key), value); };
  Storage.prototype.removeItem = function (key) { return originalRemove.call(this, scopedKey(key)); };
  Storage.prototype.key = function (i) { return originalKey.call(this, i); };

  window.ESHQAuth = {
    prefix: AUTH_PREFIX,
    rawGet, rawSet, rawRemove,
    getStudents() { return JSON.parse(rawGet(AUTH_PREFIX + 'students') || '[]'); },
    saveStudents(students) { rawSet(AUTH_PREFIX + 'students', JSON.stringify(students)); },
    getUsers() { return JSON.parse(rawGet(AUTH_PREFIX + 'users') || '[]'); },
    saveUsers(users) { rawSet(AUTH_PREFIX + 'users', JSON.stringify(users)); },
    getSession() { try { return JSON.parse(rawGet(AUTH_PREFIX + 'session') || 'null'); } catch (e) { return null; } },
    setSession(user) {
      const safe = { id: user.id, name: user.name, email: user.email, role: user.role, students: user.students || [] };
      rawSet(AUTH_PREFIX + 'session', JSON.stringify(safe));
      if (safe.students && safe.students.length && !safe.students.includes(rawGet(AUTH_PREFIX + 'activeStudent'))) rawSet(AUTH_PREFIX + 'activeStudent', safe.students[0]);
    },
    clearSession() { rawRemove(AUTH_PREFIX + 'session'); },
    getActiveStudentId: activeStudentId,
    setActiveStudentId(id) { rawSet(AUTH_PREFIX + 'activeStudent', id); },
    getActiveStudent() { return this.getStudents().find(s => s.id === activeStudentId()) || this.getStudents()[0]; },
    allowedStudents() {
      const session = this.getSession();
      const all = this.getStudents();
      if (!session) return [];
      if (session.role === 'admin') return all;
      const ids = new Set(session.students || []);
      return all.filter(s => ids.has(s.id));
    },
    login(email, password) {
      const user = this.getUsers().find(u => u.email.toLowerCase() === String(email || '').toLowerCase() && u.password === password);
      if (!user) return null;
      this.setSession(user);
      return user;
    },
    makeId(name) { return String(name || 'student').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '-' + Math.random().toString(36).slice(2, 6); }
  };
})();
