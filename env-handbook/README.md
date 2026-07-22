# CapstoneBook ENV Handbook

Trang tài liệu tĩnh hướng dẫn chuẩn bị biến môi trường cho demo CapstoneBook.

## Mở nhanh

Mở trực tiếp `index.html`, hoặc chạy web server tại thư mục gốc dự án:

```powershell
python -m http.server 8088 --directory env-handbook
```

Sau đó truy cập `http://localhost:8088`.

## Cấu trúc

- `index.html`: nội dung và cấu trúc trang.
- `styles.css`: design tokens, responsive layout và dark mode.
- `app.js`: dữ liệu ENV, tìm kiếm, bộ lọc, accordion, copy và checklist.
- `flows.html`: bản đồ UI/UX và toàn bộ luồng nghiệp vụ.
- `flows.css` / `flows.js`: giao diện và dữ liệu tương tác của Flow Atlas.

Trang không cần cài package, không gọi API và không lưu secret. Trạng thái checklist và theme chỉ được lưu trong `localStorage` của trình duyệt.
