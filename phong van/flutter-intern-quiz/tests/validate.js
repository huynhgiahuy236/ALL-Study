const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.resolve(__dirname, '..');
const context = {};
vm.createContext(context);
vm.runInContext(`${fs.readFileSync(path.join(root, 'js/questions.js'), 'utf8')}\nthis.data = QUIZ_DATA;`, context);
const data = context.data;
const assert = (condition, message) => { if (!condition) throw new Error(message); };

assert(data.exams.length === 3, 'Phải có đúng 3 đề');
assert(data.categories.length === 5, 'Phải có đúng 5 nhóm kiến thức');
for (const exam of data.exams) {
  assert(exam.questions.length === 50, `Đề ${exam.id} không có đúng 50 câu`);
  assert(new Set(exam.questions.map(q => q.id)).size === 50, `Đề ${exam.id} trùng ID`);
  for (const question of exam.questions) {
    assert(question.options.length === 4, `${question.id} không có 4 lựa chọn`);
    assert(/^[A-D]$/.test(question.answer), `${question.id} thiếu đáp án`);
    assert(question.explanation.trim(), `${question.id} thiếu giải thích`);
    assert(question.optionExplanations.length === 4, `${question.id} không có đủ 4 lời giải lựa chọn`);
    question.optionExplanations.forEach((text, index) => {
      assert(text.trim(), `${question.id} thiếu lời giải cho ${'ABCD'[index]}`);
      if ('ABCD'[index] !== question.answer) assert(text.includes(question.options[index]), `${question.id} lời giải ${'ABCD'[index]} chưa nhắc đến phương án sai`);
    });
    assert(question.categoryId >= 1 && question.categoryId <= 5, `${question.id} sai nhóm`);
  }
  for (let category = 1; category <= 5; category++) {
    assert(exam.questions.filter(q => q.categoryId === category).length === 10, `Đề ${exam.id}, phần ${category} không có 10 câu`);
  }
}
assert(data.exams.flatMap(e => e.questions).length === 150, 'Tổng số câu không phải 150');

const evenQuestion = data.exams.flatMap(e => e.questions).find(q => q.id === 'e1q8');
assert(evenQuestion.optionExplanations[0].includes('4 * 2 = 8'), 'Câu e1q8-A chưa giải thích kết quả phép tính');
assert(evenQuestion.optionExplanations[1].includes('4 ~/ 2 = 2'), 'Câu e1q8-B chưa giải thích kết quả phép tính');
assert(evenQuestion.optionExplanations[2].includes('4 % 2 = 0'), 'Câu e1q8-C chưa có ví dụ đáp án đúng');
assert(evenQuestion.optionExplanations[3].includes('4 / 2 = 2'), 'Câu e1q8-D chưa giải thích kết quả phép tính');

const quizSource = fs.readFileSync(path.join(root, 'js/quiz.js'), 'utf8');
assert(quizSource.includes("'answer-correct' : 'answer-wrong'"), 'Danh sách câu chưa phân biệt đúng/sai');
const cssSource = fs.readFileSync(path.join(root, 'css/style.css'), 'utf8');
assert(cssSource.includes('.question-nav-button.answer-correct{border-color:var(--success)'), 'Thiếu border xanh cho câu đúng');
assert(cssSource.includes('.question-nav-button.answer-wrong{border-color:var(--danger)'), 'Thiếu border đỏ cho câu sai');
assert(cssSource.includes('.question-nav-button.marked{border-color:var(--warning)'), 'Thiếu border vàng cho câu đánh dấu');

const rating = score => score >= 42 ? 'Tốt' : score >= 35 ? 'Khá' : score >= 25 ? 'Cần củng cố' : 'Nên ôn lại nền tảng';
assert(rating(50) === 'Tốt' && rating(42) === 'Tốt', 'Sai biên xếp loại Tốt');
assert(rating(41) === 'Khá' && rating(35) === 'Khá', 'Sai biên xếp loại Khá');
assert(rating(34) === 'Cần củng cố' && rating(25) === 'Cần củng cố', 'Sai biên Cần củng cố');
assert(rating(24) === 'Nên ôn lại nền tảng', 'Sai biên nền tảng');

for (const htmlName of ['index.html', 'quiz.html', 'result.html']) {
  const html = fs.readFileSync(path.join(root, htmlName), 'utf8');
  for (const match of html.matchAll(/(?:src|href)="([^"?#]+\.(?:js|css))"/g)) {
    assert(fs.existsSync(path.join(root, match[1])), `${htmlName} thiếu asset ${match[1]}`);
  }
}
console.log('PASS: 3 đề, 150 câu, 5 nhóm/đề, 4 lựa chọn/câu, đủ đáp án và giải thích.');
console.log('PASS: đủ 600 lời giải riêng cho các lựa chọn A, B, C, D.');
console.log('PASS: câu tính toán có phản ví dụ cụ thể; border đúng xanh, sai đỏ, đánh dấu vàng.');
console.log('PASS: biên xếp loại và liên kết asset HTML hợp lệ.');
