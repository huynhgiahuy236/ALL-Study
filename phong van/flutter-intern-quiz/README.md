# Flutter Intern Quiz

Website luyện thi Flutter Intern bằng HTML, CSS và JavaScript thuần. Dữ liệu gồm 150 câu được trích xuất nguyên văn từ `De_thi_thu_Flutter_Intern_150_cau.docx`.

## Chạy website

Có thể mở trực tiếp `index.html`. Để tránh khác biệt bảo mật giữa các trình duyệt, nên chạy local server:

```powershell
cd "E:\phong van\flutter-intern-quiz"
python -m http.server 4173
```

Sau đó mở `http://127.0.0.1:4173`.

## Kiểm tra dữ liệu và source

```powershell
node tests/validate.js
Get-ChildItem js/*.js | ForEach-Object { node --check $_.FullName }
```

Tiến độ, bài đang làm, lịch sử điểm, theme và danh sách câu sai được lưu trong `localStorage` của trình duyệt.
