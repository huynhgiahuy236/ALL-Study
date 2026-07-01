# StayZ Development Guide

## 1. Mục tiêu dự án

StayZ được phát triển theo định hướng xây dựng một ứng dụng đặt phòng khách sạn có kiến trúc rõ ràng, dễ mở rộng, dễ bảo trì và phù hợp để triển khai thực tế.

Công nghệ sử dụng:

* **Frontend:** Flutter (Dart)
* **Backend:** Express.js (Node.js)
* **Database:** MongoDB
* **API:** REST API

Toàn bộ dự án được xây dựng theo nguyên tắc **Feature-Based Structure**, **Reusable Components** và **API First**.

---

# 2. Quy trình phát triển

Mỗi chức năng mới sẽ được thực hiện theo quy trình sau:

1. Cập nhật nhánh `develop`.
2. Tạo một branch mới theo đúng tên feature.
3. Thực hiện phát triển chức năng.
4. Commit theo chuẩn Conventional Commits.
5. Push lên branch feature.
6. Tạo Pull Request vào `develop`.
7. Sau khi kiểm thử trên `develop` ổn định mới merge vào `main`.

---

# 3. Quy định về Git

## Branch

Chỉ duy trì hai branch chính:

```text
main
develop
```

Mỗi chức năng sẽ tạo một branch riêng:

```text
feature/<feature-name>
```

Ví dụ:

```text
feature/auth
feature/home
feature/booking
feature/payment
feature/stayz-mock-database
```

Không commit trực tiếp vào:

* `main`
* `develop`

---

# 4. Quy định Commit

Sử dụng **Conventional Commits**.

Ví dụ:

```text
feat: implement login screen

feat: add api-first mock database

fix: resolve booking validation

refactor: clean booking widgets

docs: update project documentation
```

---

# 5. Quy trình thiết kế giao diện

Toàn bộ layout mẫu được lưu tại:

```text
StayZ Design/Layout_img
```

Mỗi file layout sẽ được đánh dấu trạng thái bằng tiền tố:

| Tiền tố | Ý nghĩa        |
| ------- | -------------- |
| `no_`   | Chưa bắt đầu   |
| `yet_`  | Đang thực hiện |
| `done_` | Đã hoàn thành  |

Ví dụ:

```text
no_notification.png

yet_booking_detail.png

done_home_screen.png
```

Khi bắt đầu thực hiện một màn hình:

```text
no_xxx.png
```

đổi thành:

```text
yet_xxx.png
```

Sau khi hoàn thành và kiểm tra:

```text
done_xxx.png
```

Không xóa hoặc thay đổi layout mẫu nếu chưa được thống nhất.

---

# 6. Quy định về giao diện

Toàn bộ Design System của dự án được quản lý tại:

```text
lib/app/theme
```

Bao gồm:

* Color
* Typography
* Spacing
* Border Radius
* Shadow
* Theme

Không hardcode các giá trị này trong từng màn hình.

---

# 7. Component dùng chung

Các component có khả năng tái sử dụng phải được đặt tại:

```text
lib/shared/widgets
```

Ví dụ:

* Button
* TextField
* Card
* Dialog
* Bottom Sheet
* Loading
* Empty State
* Error State

Ưu tiên sử dụng component đã có trước khi tạo mới.

---

# 8. Cấu trúc Feature

Mỗi chức năng được tổ chức độc lập theo feature.

Ví dụ:

```text
features/
    auth/
    home/
    booking/
    payment/
    profile/
```

Trong mỗi feature có thể bao gồm:

```text
screens/
widgets/
models/
repositories/
services/
```

Điều này giúp code dễ quản lý, dễ mở rộng và hạn chế phụ thuộc giữa các module.

---

# 9. Mock Database

Trong giai đoạn đầu, frontend sử dụng dữ liệu giả tại:

```text
assets/mock
```

Mock Database phải được thiết kế theo cấu trúc MongoDB và REST API để sau này chỉ cần thay đổi nguồn dữ liệu từ JSON sang API mà không ảnh hưởng đến UI hoặc Model.

---

# 10. Nguyên tắc chung

* Ưu tiên tái sử dụng code.
* Không tạo component trùng lặp.
* Không sửa Design System nếu chưa được thống nhất.
* Không thay đổi cấu trúc project tùy ý.
* Mỗi feature là một branch riêng.
* Chỉ merge vào `main` khi `develop` đã được kiểm thử ổn định.
* Luôn giữ code sạch, dễ đọc và dễ bảo trì.

Mục tiêu cuối cùng là xây dựng một dự án có cấu trúc chuyên nghiệp, giúp mọi thành viên phát triển độc lập nhưng vẫn đảm bảo tính đồng nhất và khả năng mở rộng trong tương lai.
