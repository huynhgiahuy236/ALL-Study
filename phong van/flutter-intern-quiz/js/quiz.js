document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(location.search);
  const examId = Number(params.get('exam'));
  const mode = ['exam', 'practice', 'review'].includes(params.get('mode')) ? params.get('mode') : 'exam';
  const exam = QUIZ_DATA.exams.find(item => item.id === examId);
  if (!exam) { location.replace('index.html'); return; }
  const wrongIds = mode === 'review' ? QuizStorage.getWrongIds(examId) : [];
  const availableQuestions = mode === 'review' ? exam.questions.filter(q => wrongIds.includes(q.id)) : exam.questions;
  if (!availableQuestions.length) { location.replace('index.html'); return; }
  const saved = QuizStorage.getSession(examId, mode);
  const now = Date.now();
  let state = saved && saved.questionIds.every(id => availableQuestions.some(q => q.id === id)) ? saved : {
    examId, mode, questionIds: availableQuestions.map(q => q.id), answers: {}, marked: [], currentIndex: 0,
    startedAt: now, endAt: mode === 'exam' ? now + exam.durationMinutes * 60000 : null
  };
  const questions = state.questionIds.map(id => exam.questions.find(q => q.id === id)).filter(Boolean);
  let timerHandle;
  const $ = selector => document.querySelector(selector);
  const modeNames = { exam: 'Chế độ thi', practice: 'Luyện tập', review: 'Ôn câu đã làm sai' };
  $('#exam-title').textContent = exam.title;
  $('#mode-label').textContent = modeNames[mode];
  if (mode !== 'exam') $('#timer').classList.add('hidden');

  function save() { QuizStorage.saveSession(state); }
  function toast(message) { const item = document.createElement('div'); item.className = 'toast'; item.textContent = message; $('#toast-region').append(item); setTimeout(() => item.remove(), 2400); }
  function render() {
    const question = questions[state.currentIndex];
    const selected = state.answers[question.id];
    const isMarked = state.marked.includes(question.id);
    $('#category-badge').textContent = `Phần ${question.categoryId} · ${question.category}`;
    $('#mark-button').classList.toggle('active', isMarked);
    $('#mark-button').setAttribute('aria-pressed', String(isMarked));
    $('#question-content').innerHTML = `<div class="question-number">Câu ${question.number}</div><h2>${escapeHtml(question.question)}</h2><fieldset class="options"><legend class="sr-only">Chọn một đáp án</legend>${question.options.map((option, index) => {
      const letter = 'ABCD'[index];
      let cls = selected === letter ? 'selected' : '';
      if (mode !== 'exam' && selected) cls += letter === question.answer ? ' correct' : selected === letter ? ' wrong' : '';
      return `<label class="option ${cls}"><input type="radio" name="answer" value="${letter}" ${selected === letter ? 'checked' : ''}><span class="option-letter">${letter}</span><span>${escapeHtml(option)}</span></label>`;
    }).join('')}</fieldset>`;
    $('#previous-button').disabled = state.currentIndex === 0;
    $('#next-button').textContent = state.currentIndex === questions.length - 1 ? 'Xem lại từ đầu' : 'Câu tiếp theo';
    $('#answered-count').textContent = `${Object.keys(state.answers).length}/${questions.length} đã trả lời`;
    $('#progress-bar').style.width = `${(Object.keys(state.answers).length / questions.length) * 100}%`;
    const feedback = $('#practice-feedback');
    if (mode !== 'exam' && selected) {
      feedback.classList.remove('hidden', 'feedback-correct', 'feedback-wrong');
      feedback.classList.add(selected === question.answer ? 'feedback-correct' : 'feedback-wrong');
      const selectedText = question.options['ABCD'.indexOf(selected)];
      const correctText = question.options['ABCD'.indexOf(question.answer)];
      feedback.innerHTML = selected === question.answer
        ? `<strong>Chính xác · ${question.answer}. ${escapeHtml(correctText)}</strong><p><b>Vì sao đúng:</b> ${escapeHtml(question.explanation)}</p>`
        : `<strong>Chưa đúng · Bạn chọn ${selected}. ${escapeHtml(selectedText)}</strong>
           <p><b>Vì sao ${selected} sai:</b> ${escapeHtml(question.optionExplanations['ABCD'.indexOf(selected)])}</p>
           <p><b>Đáp án đúng là ${question.answer}. ${escapeHtml(correctText)}:</b> ${escapeHtml(question.optionExplanations['ABCD'.indexOf(question.answer)])}</p>`;
    } else feedback.classList.add('hidden');
    renderNav();
    $('#question-card').focus({ preventScroll: true });
  }
  function renderNav() {
    $('#question-grid').innerHTML = questions.map((q, index) => `<button type="button" data-index="${index}" class="question-nav-button ${state.answers[q.id] ? 'answered' : ''} ${state.marked.includes(q.id) ? 'marked' : ''} ${index === state.currentIndex ? 'current' : ''}" aria-label="Câu ${q.number}${state.answers[q.id] ? ', đã trả lời' : ', chưa trả lời'}${state.marked.includes(q.id) ? ', đã đánh dấu' : ''}">${q.number}</button>`).join('');
  }
  function escapeHtml(value) { const node = document.createElement('div'); node.textContent = value; return node.innerHTML; }
  function finish(auto = false) {
    clearInterval(timerHandle);
    const completedAt = Date.now();
    const details = questions.map(q => {
      const selected = state.answers[q.id] || null;
      return { questionId: q.id, selected, status: !selected ? 'blank' : selected === q.answer ? 'correct' : 'wrong' };
    });
    const correct = details.filter(d => d.status === 'correct').length;
    const result = { id: `${examId}-${completedAt}`, examId, mode, questionIds: state.questionIds, answers: state.answers, marked: state.marked, correct, wrong: details.filter(d => d.status === 'wrong').length, blank: details.filter(d => d.status === 'blank').length, details, startedAt: state.startedAt, completedAt, durationSeconds: Math.max(0, Math.round((completedAt - state.startedAt) / 1000)), autoSubmitted: auto };
    QuizStorage.saveResult(result);
    location.replace(`result.html?id=${encodeURIComponent(result.id)}`);
  }
  function requestSubmit() {
    const blank = questions.length - Object.keys(state.answers).length;
    $('#submit-message').textContent = blank ? `Bạn còn ${blank} câu chưa trả lời. Các câu này sẽ được tính là bỏ trống.` : 'Bạn đã trả lời tất cả câu hỏi. Hãy xác nhận để xem kết quả.';
    $('#submit-modal').classList.remove('hidden'); $('#submit-modal [data-close-modal]').focus();
  }
  function updateTimer() {
    const remain = Math.max(0, state.endAt - Date.now());
    const total = Math.ceil(remain / 1000); const minutes = Math.floor(total / 60); const seconds = total % 60;
    $('#timer').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    $('#timer').classList.toggle('timer-warning', total <= 300);
    if (remain <= 0) { toast('Hết thời gian. Bài thi đang được nộp tự động.'); finish(true); }
  }
  $('#question-content').addEventListener('change', event => { if (event.target.name !== 'answer') return; const q = questions[state.currentIndex]; state.answers[q.id] = event.target.value; save(); render(); });
  $('#previous-button').addEventListener('click', () => { if (state.currentIndex > 0) { state.currentIndex--; save(); render(); } });
  $('#next-button').addEventListener('click', () => { state.currentIndex = state.currentIndex === questions.length - 1 ? 0 : state.currentIndex + 1; save(); render(); });
  $('#mark-button').addEventListener('click', () => { const id = questions[state.currentIndex].id; state.marked = state.marked.includes(id) ? state.marked.filter(item => item !== id) : [...state.marked, id]; save(); render(); });
  $('#question-grid').addEventListener('click', event => { const button = event.target.closest('[data-index]'); if (button) { state.currentIndex = Number(button.dataset.index); save(); render(); } });
  $('#submit-button').addEventListener('click', requestSubmit); $('#confirm-submit').addEventListener('click', () => finish(false));
  $('#submit-modal [data-close-modal]').addEventListener('click', () => $('#submit-modal').classList.add('hidden'));
  $('#submit-modal').addEventListener('click', event => { if (event.target.id === 'submit-modal') event.currentTarget.classList.add('hidden'); });
  $('#nav-toggle').addEventListener('click', event => { const collapsed = $('.question-nav').classList.toggle('collapsed'); event.currentTarget.textContent = collapsed ? 'Mở rộng' : 'Thu gọn'; event.currentTarget.setAttribute('aria-expanded', String(!collapsed)); });
  document.addEventListener('keydown', event => { if (event.altKey && event.key === 'ArrowLeft') $('#previous-button').click(); if (event.altKey && event.key === 'ArrowRight') $('#next-button').click(); if (!event.altKey && /^[1-4]$/.test(event.key) && !event.target.matches('button, a')) { const radio = document.querySelectorAll('input[name="answer"]')[Number(event.key) - 1]; if (radio) { radio.checked = true; radio.dispatchEvent(new Event('change', { bubbles: true })); } } if (event.key === 'Escape') $('#submit-modal').classList.add('hidden'); });
  window.addEventListener('beforeunload', save);
  save(); render(); if (mode === 'exam') { updateTimer(); timerHandle = setInterval(updateTimer, 1000); }
});
