document.addEventListener('DOMContentLoaded', () => {
  const id = new URLSearchParams(location.search).get('id');
  const result = QuizStorage.getHistory().find(item => item.id === id);
  if (!result) { location.replace('index.html'); return; }
  const exam = QUIZ_DATA.exams.find(item => item.id === result.examId);
  const questions = result.questionIds.map(qid => exam.questions.find(q => q.id === qid)).filter(Boolean);
  const detailMap = Object.fromEntries(result.details.map(item => [item.questionId, item]));
  const rating = result.mode === 'review' ? 'Ôn tập hoàn tất' : result.correct >= 42 ? 'Tốt' : result.correct >= 35 ? 'Khá' : result.correct >= 25 ? 'Cần củng cố' : 'Nên ôn lại nền tảng';
  const duration = seconds => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
  document.querySelector('#result-title').textContent = `${exam.title} · ${rating}`;
  document.querySelector('#result-summary').textContent = result.autoSubmitted ? 'Bài thi đã được tự động nộp khi hết thời gian.' : 'Bạn đã hoàn thành bài làm. Hãy xem kỹ phần giải thích để củng cố kiến thức.';
  document.querySelector('#score-value').textContent = result.correct;
  document.querySelector('#score-total').textContent = `trên ${questions.length}`;
  document.querySelector('#score-ring').style.setProperty('--score', `${(result.correct / questions.length) * 360}deg`);
  document.querySelector('#percent').textContent = `${Math.round(result.correct / questions.length * 100)}%`;
  document.querySelector('#correct').textContent = result.correct;
  document.querySelector('#wrong').textContent = result.wrong;
  document.querySelector('#blank').textContent = result.blank;
  document.querySelector('#duration').textContent = duration(result.durationSeconds);
  document.querySelector('#retry-button').href = `quiz.html?exam=${result.examId}&mode=${result.mode === 'exam' ? 'exam' : 'practice'}`;
  const wrongIds = QuizStorage.getWrongIds(result.examId);
  const review = document.querySelector('#review-button');
  if (wrongIds.length) review.href = `quiz.html?exam=${result.examId}&mode=review`; else { review.classList.add('is-disabled'); review.setAttribute('aria-disabled', 'true'); }

  document.querySelector('#category-results').innerHTML = QUIZ_DATA.categories.map((category, index) => {
    const subset = questions.filter(q => q.categoryId === index + 1);
    const correct = subset.filter(q => detailMap[q.id].status === 'correct').length;
    const percent = subset.length ? Math.round(correct / subset.length * 100) : 0;
    return `<div class="category-result"><div><strong>${category}</strong><span>${correct}/${subset.length} câu đúng</span></div><div class="category-bar" aria-label="${percent}%"><span style="width:${percent}%"></span></div><strong>${percent}%</strong></div>`;
  }).join('');
  function escapeHtml(value) { const node = document.createElement('div'); node.textContent = value; return node.innerHTML; }
  function renderDetails(filter = 'all') {
    const filtered = questions.filter(q => filter === 'all' || detailMap[q.id].status === filter);
    document.querySelector('#result-details').innerHTML = filtered.length ? filtered.map(q => {
      const detail = detailMap[q.id]; const selectedText = detail.selected ? `${detail.selected}. ${q.options['ABCD'.indexOf(detail.selected)]}` : 'Không chọn';
      const correctText = `${q.answer}. ${q.options['ABCD'.indexOf(q.answer)]}`;
      const labels = { correct: 'Đúng', wrong: 'Sai', blank: 'Bỏ trống' };
      const explanation = detail.status === 'wrong'
        ? `<p><b>Vì sao ${detail.selected} sai:</b> ${escapeHtml(q.optionExplanations['ABCD'.indexOf(detail.selected)])}</p><p><b>Vì sao ${q.answer} đúng:</b> ${escapeHtml(q.optionExplanations['ABCD'.indexOf(q.answer)])}</p>`
        : `<p><b>Vì sao ${q.answer} đúng:</b> ${escapeHtml(q.optionExplanations['ABCD'.indexOf(q.answer)])}</p>`;
      return `<details class="detail-card ${detail.status}"><summary><span class="detail-index">Câu ${q.number}</span><span class="detail-question">${escapeHtml(q.question)}</span><span class="detail-status">${labels[detail.status]}</span></summary><div class="detail-body"><div class="answer-comparison"><div><span>Bạn chọn</span><strong>${escapeHtml(selectedText)}</strong></div><div><span>Đáp án đúng</span><strong>${escapeHtml(correctText)}</strong></div></div><div class="explanation"><strong>Giải thích từng lựa chọn</strong>${explanation}</div></div></details>`;
    }).join('') : '<div class="empty-state">Không có câu nào trong bộ lọc này.</div>';
  }
  document.querySelector('.filter-group').addEventListener('click', event => { const button = event.target.closest('[data-filter]'); if (!button) return; document.querySelectorAll('.filter').forEach(item => item.classList.toggle('active', item === button)); renderDetails(button.dataset.filter); });
  renderDetails();
});
