const QuizStorage = (() => {
  const PREFIX = 'flutterInternQuiz.v1.';

  function read(key, fallback) {
    try {
      const value = localStorage.getItem(PREFIX + key);
      return value === null ? fallback : JSON.parse(value);
    } catch (_) {
      return fallback;
    }
  }

  function write(key, value) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
      return true;
    } catch (_) {
      return false;
    }
  }

  function remove(key) {
    try { localStorage.removeItem(PREFIX + key); } catch (_) {}
  }

  function getSessions() { return read('sessions', {}); }
  function getSession(examId, mode) { return getSessions()[`${examId}:${mode}`] || null; }
  function saveSession(session) {
    const sessions = getSessions();
    sessions[`${session.examId}:${session.mode}`] = session;
    return write('sessions', sessions);
  }
  function removeSession(examId, mode) {
    const sessions = getSessions();
    delete sessions[`${examId}:${mode}`];
    write('sessions', sessions);
  }

  function getHistory() { return read('history', []); }
  function saveResult(result) {
    const history = getHistory();
    const withoutSame = history.filter(item => item.id !== result.id);
    withoutSame.unshift(result);
    write('history', withoutSame.slice(0, 100));
    removeSession(result.examId, result.mode);
  }
  function getLastResult(examId) { return getHistory().find(item => item.examId === Number(examId) && item.questionIds.length === 50) || null; }
  function getBestResult(examId) {
    return getHistory().filter(item => item.examId === Number(examId) && item.questionIds.length === 50)
      .sort((a, b) => b.correct - a.correct || a.durationSeconds - b.durationSeconds)[0] || null;
  }
  function getWrongIds(examId) {
    const latestStatus = new Map();
    getHistory().filter(item => !examId || item.examId === Number(examId)).forEach(item => {
      (item.details || []).forEach(detail => {
        if (!latestStatus.has(detail.questionId)) latestStatus.set(detail.questionId, detail.status);
      });
    });
    return [...latestStatus].filter(([, status]) => status === 'wrong').map(([questionId]) => questionId);
  }
  function clearAll() {
    Object.keys(localStorage).filter(key => key.startsWith(PREFIX)).forEach(key => localStorage.removeItem(key));
  }
  function getTheme() { return read('theme', null); }
  function setTheme(theme) { write('theme', theme); }

  return { read, write, getSession, saveSession, removeSession, getHistory, saveResult, getLastResult, getBestResult, getWrongIds, clearAll, getTheme, setTheme };
})();

function initTheme() {
  const saved = QuizStorage.getTheme();
  const theme = saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
  document.querySelectorAll('[data-theme-toggle]').forEach(button => {
    button.setAttribute('aria-label', theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối');
    button.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      QuizStorage.setTheme(next);
      document.querySelectorAll('[data-theme-toggle]').forEach(item => item.setAttribute('aria-label', next === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'));
    });
  });
}

document.addEventListener('DOMContentLoaded', initTheme);
