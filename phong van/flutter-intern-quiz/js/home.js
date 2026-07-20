document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('#exam-grid');
  const history = QuizStorage.getHistory();
  const formatDate = value => new Intl.DateTimeFormat('vi-VN', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(value));
  const modeLabel = mode => mode === 'exam' ? 'Thi' : mode === 'practice' ? 'Luyện tập' : 'Ôn câu sai';

  QUIZ_DATA.exams.forEach(exam => {
    const last = QuizStorage.getLastResult(exam.id);
    const best = QuizStorage.getBestResult(exam.id);
    const session = QuizStorage.getSession(exam.id, 'exam') || QuizStorage.getSession(exam.id, 'practice');
    const wrongCount = QuizStorage.getWrongIds(exam.id).length;
    const card = document.createElement('article');
    card.className = 'exam-card';
    card.innerHTML = `
      <div class="exam-card-top"><span class="exam-number">0${exam.id}</span><span class="status-pill">50 câu · 50 phút</span></div>
      <h3>${exam.title}</h3><p>5 nhóm kiến thức · 1 đáp án đúng mỗi câu</p>
      <div class="score-strip">
        <div><span>Gần nhất</span><strong>${last ? `${last.correct}/${last.questionIds.length}` : '—'}</strong></div>
        <div><span>Cao nhất</span><strong>${best ? `${best.correct}/${best.questionIds.length}` : '—'}</strong></div>
        <div><span>Cần ôn</span><strong>${wrongCount}</strong></div>
      </div>
      ${session ? `<a class="resume-link" href="quiz.html?exam=${exam.id}&mode=${session.mode}">Tiếp tục bài đang làm (${Object.keys(session.answers || {}).length}/${session.questionIds.length})</a>` : ''}
      <div class="card-actions">
        <a class="button button-primary" href="quiz.html?exam=${exam.id}&mode=exam">Chế độ thi</a>
        <a class="button button-secondary" href="quiz.html?exam=${exam.id}&mode=practice">Luyện tập</a>
        <a class="button button-ghost ${wrongCount ? '' : 'is-disabled'}" ${wrongCount ? `href="quiz.html?exam=${exam.id}&mode=review"` : 'aria-disabled="true"'}>Ôn câu sai</a>
      </div>`;
    grid.append(card);
  });

  if (history.length) {
    document.querySelector('#recent-section').classList.remove('hidden');
    document.querySelector('#recent-results').innerHTML = history.slice(0, 6).map(item => `
      <a class="recent-card" href="result.html?id=${encodeURIComponent(item.id)}">
        <div><strong>Đề ${item.examId}</strong><span>${modeLabel(item.mode)} · ${formatDate(item.completedAt)}</span></div>
        <span class="recent-score">${item.correct}/${item.questionIds.length}</span>
      </a>`).join('');
  }

  const modal = document.querySelector('#confirm-modal');
  document.querySelector('#clear-history').addEventListener('click', () => { modal.classList.remove('hidden'); modal.querySelector('[data-close-modal]').focus(); });
  document.querySelector('[data-close-modal]').addEventListener('click', () => modal.classList.add('hidden'));
  document.querySelector('#confirm-clear').addEventListener('click', () => { QuizStorage.clearAll(); location.reload(); });
  modal.addEventListener('click', event => { if (event.target === modal) modal.classList.add('hidden'); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') modal.classList.add('hidden'); });
});
