const QUIZ_DATA = {
  "categories": [
    "Tư duy logic, OOP và cấu trúc dữ liệu",
    "Dart và Flutter",
    "REST API, JSON và bất đồng bộ",
    "UI/UX, quản lý state và hiệu năng",
    "Tình huống kỹ thuật và môi trường startup"
  ],
  "exams": [
    {
      "id": 1,
      "title": "Đề thi thử số 1",
      "durationMinutes": 50,
      "questions": [
        {
          "id": "e1q1",
          "number": 1,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Đoạn mã `for (int i = 0; i < 5; i++)` thực hiện thân vòng lặp bao nhiêu lần?",
          "options": [
            "4 lần",
            "5 lần",
            "6 lần",
            "Không lần nào"
          ],
          "answer": "B",
          "explanation": "i nhận các giá trị 0, 1, 2, 3 và 4."
        },
        {
          "id": "e1q2",
          "number": 2,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Cấu trúc dữ liệu nào hoạt động theo nguyên tắc LIFO?",
          "options": [
            "Set",
            "Queue",
            "Graph",
            "Stack"
          ],
          "answer": "D",
          "explanation": "Stack lấy phần tử vào sau ra trước."
        },
        {
          "id": "e1q3",
          "number": 3,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Trong OOP, lớp con sử dụng lại thuộc tính và phương thức của lớp cha là đặc tính nào?",
          "options": [
            "Đa hình",
            "Trừu tượng",
            "Đóng gói",
            "Kế thừa"
          ],
          "answer": "D",
          "explanation": "Kế thừa cho phép lớp con tái sử dụng và mở rộng lớp cha."
        },
        {
          "id": "e1q4",
          "number": 4,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Kết quả của `10 ~/ 3` trong Dart là gì?",
          "options": [
            "1",
            "4",
            "3.33",
            "3"
          ],
          "answer": "D",
          "explanation": "Toán tử ~/ thực hiện phép chia lấy phần nguyên."
        },
        {
          "id": "e1q5",
          "number": 5,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Tìm kiếm nhị phân yêu cầu dữ liệu đầu vào như thế nào?",
          "options": [
            "Không có phần tử trùng",
            "Đã được sắp xếp",
            "Chỉ chứa số",
            "Có kích thước chẵn"
          ],
          "answer": "B",
          "explanation": "Binary search dựa vào thứ tự để loại bỏ một nửa phạm vi."
        },
        {
          "id": "e1q6",
          "number": 6,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Độ phức tạp truy cập một phần tử List bằng chỉ số là gì?",
          "options": [
            "O(n)",
            "O(1)",
            "O(n²)",
            "O(log n)"
          ],
          "answer": "B",
          "explanation": "Mảng/List hỗ trợ truy cập ngẫu nhiên theo chỉ số trong thời gian hằng số."
        },
        {
          "id": "e1q7",
          "number": 7,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Giá trị của `true && (false || true)` là gì?",
          "options": [
            "false",
            "Lỗi",
            "true",
            "null"
          ],
          "answer": "C",
          "explanation": "Biểu thức trong ngoặc là true, nên true && true là true."
        },
        {
          "id": "e1q8",
          "number": 8,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Biểu thức nào kiểm tra n là số chẵn?",
          "options": [
            "n * 2 == 0",
            "n ~/ 2 == 0",
            "n % 2 == 0",
            "n / 2 == 0"
          ],
          "answer": "C",
          "explanation": "Số chẵn có phần dư bằng 0 khi chia cho 2."
        },
        {
          "id": "e1q9",
          "number": 9,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Mục đích quan trọng nhất khi chia một chức năng lớn thành nhiều hàm nhỏ là gì?",
          "options": [
            "Luôn tăng tốc độ",
            "Giảm hoàn toàn bộ nhớ",
            "Dễ đọc, kiểm thử và bảo trì",
            "Không cần dùng biến"
          ],
          "answer": "C",
          "explanation": "Các hàm nhỏ có trách nhiệm rõ ràng và dễ kiểm thử độc lập."
        },
        {
          "id": "e1q10",
          "number": 10,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Kiểu nào biểu diễn một chuỗi có thể null trong Dart Null Safety?",
          "options": [
            "null String",
            "String",
            "Optional<String>",
            "String?"
          ],
          "answer": "D",
          "explanation": "Dấu ? đánh dấu kiểu nullable."
        },
        {
          "id": "e1q11",
          "number": 11,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "Ngôn ngữ chính của Flutter là gì?",
          "options": [
            "JavaScript",
            "Swift",
            "Kotlin",
            "Dart"
          ],
          "answer": "D",
          "explanation": "Flutter SDK sử dụng Dart."
        },
        {
          "id": "e1q12",
          "number": 12,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "Widget không có trạng thái thay đổi nội bộ nên kế thừa gì?",
          "options": [
            "Element",
            "State",
            "StatelessWidget",
            "StatefulWidget"
          ],
          "answer": "C",
          "explanation": "StatelessWidget phù hợp với giao diện chỉ phụ thuộc đầu vào bất biến."
        },
        {
          "id": "e1q13",
          "number": 13,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "Trong State, phương thức nào yêu cầu Flutter dựng lại giao diện sau khi dữ liệu thay đổi?",
          "options": [
            "updateUI",
            "setState",
            "reload",
            "notifyScreen"
          ],
          "answer": "B",
          "explanation": "setState đánh dấu State cần được build lại."
        },
        {
          "id": "e1q14",
          "number": 14,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "Widget nào sắp xếp các con theo chiều dọc?",
          "options": [
            "Stack",
            "Row",
            "WrapView",
            "Column"
          ],
          "answer": "D",
          "explanation": "Column dùng trục chính theo chiều dọc."
        },
        {
          "id": "e1q15",
          "number": 15,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "Danh sách dài nên dùng widget nào để xây dựng phần tử theo nhu cầu?",
          "options": [
            "ListView.builder",
            "Text",
            "Column",
            "Container"
          ],
          "answer": "A",
          "explanation": "ListView.builder tạo item lười khi chúng sắp xuất hiện."
        },
        {
          "id": "e1q16",
          "number": 16,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "Lợi ích chính của constructor `const` cho widget là gì?",
          "options": [
            "Tự thêm animation",
            "Tự gọi API",
            "Có thể tái sử dụng instance bất biến",
            "Widget luôn thay đổi"
          ],
          "answer": "C",
          "explanation": "Const giảm cấp phát và giúp Flutter tối ưu cây widget."
        },
        {
          "id": "e1q17",
          "number": 17,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "Hàm được đánh dấu `async` thường trả về kiểu gì?",
          "options": [
            "Future",
            "Widget",
            "ListView",
            "BuildContext"
          ],
          "answer": "A",
          "explanation": "Kết quả bất đồng bộ được bao bởi Future."
        },
        {
          "id": "e1q18",
          "number": 18,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "`await` có tác dụng gì trong hàm async?",
          "options": [
            "Hủy Future",
            "Đóng băng toàn app",
            "Khởi động lại app",
            "Tạm dừng hàm đến khi Future hoàn tất"
          ],
          "answer": "D",
          "explanation": "await chỉ tạm dừng luồng logic của hàm async, không chặn UI isolate theo cách đồng bộ."
        },
        {
          "id": "e1q19",
          "number": 19,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "Widget nào dựng UI theo trạng thái của một Future?",
          "options": [
            "Row",
            "Form",
            "FutureBuilder",
            "Hero"
          ],
          "answer": "C",
          "explanation": "FutureBuilder nhận AsyncSnapshot để biểu diễn loading, data và error."
        },
        {
          "id": "e1q20",
          "number": 20,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "Cách phổ biến để mở một route mới là gì?",
          "options": [
            "Screen.run",
            "MaterialApp.next",
            "Widget.open",
            "Navigator.push"
          ],
          "answer": "D",
          "explanation": "Navigator.push thêm route vào navigation stack."
        },
        {
          "id": "e1q21",
          "number": 21,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "HTTP method thường dùng để lấy dữ liệu là gì?",
          "options": [
            "GET",
            "POST",
            "DELETE",
            "PATCH"
          ],
          "answer": "A",
          "explanation": "GET dùng để truy xuất biểu diễn tài nguyên."
        },
        {
          "id": "e1q22",
          "number": 22,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "HTTP 200 thường có nghĩa gì?",
          "options": [
            "Không tìm thấy",
            "Thành công",
            "Lỗi server",
            "Chưa xác thực"
          ],
          "answer": "B",
          "explanation": "200 OK báo request đã được xử lý thành công."
        },
        {
          "id": "e1q23",
          "number": 23,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "HTTP 401 thường biểu thị điều gì?",
          "options": [
            "Chưa xác thực hoặc credential không hợp lệ",
            "Xung đột dữ liệu",
            "Thành công",
            "Không tìm thấy"
          ],
          "answer": "A",
          "explanation": "401 Unauthorized liên quan đến xác thực."
        },
        {
          "id": "e1q24",
          "number": 24,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "Chuyển JSON thành Dart object được gọi là gì?",
          "options": [
            "Compilation",
            "Navigation",
            "Deserialization",
            "Rendering"
          ],
          "answer": "C",
          "explanation": "Deserialization ánh xạ dữ liệu truyền tải sang object."
        },
        {
          "id": "e1q25",
          "number": 25,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "Khi API đang tải, UI phù hợp nhất là gì?",
          "options": [
            "Màn hình trắng",
            "Loading indicator rõ ràng",
            "Đóng app",
            "Gửi request liên tục"
          ],
          "answer": "B",
          "explanation": "Phản hồi trạng thái giúp người dùng biết ứng dụng vẫn hoạt động."
        },
        {
          "id": "e1q26",
          "number": 26,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "Lớp nào thường chịu trách nhiệm phối hợp nguồn dữ liệu API/cache?",
          "options": [
            "Theme",
            "Repository",
            "Navigator",
            "Text widget"
          ],
          "answer": "B",
          "explanation": "Repository che giấu chi tiết nguồn dữ liệu khỏi presentation."
        },
        {
          "id": "e1q27",
          "number": 27,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "Access token nhạy cảm trên thiết bị nên lưu ở đâu?",
          "options": [
            "Secure storage",
            "Git repository",
            "Hard-code",
            "Text widget"
          ],
          "answer": "A",
          "explanation": "Secure storage dùng vùng lưu trữ được hệ điều hành bảo vệ."
        },
        {
          "id": "e1q28",
          "number": 28,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "POST thường được dùng cho mục đích nào?",
          "options": [
            "Đổi theme",
            "Xóa app",
            "Chỉ đọc cache",
            "Tạo tài nguyên hoặc gửi lệnh"
          ],
          "answer": "D",
          "explanation": "POST gửi representation để tạo hoặc xử lý trên server."
        },
        {
          "id": "e1q29",
          "number": 29,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "HTTP 404 có nghĩa phổ biến nào?",
          "options": [
            "Thành công",
            "Không tìm thấy tài nguyên",
            "Token hết hạn",
            "Server bảo trì"
          ],
          "answer": "B",
          "explanation": "404 Not Found báo tài nguyên/route không tồn tại."
        },
        {
          "id": "e1q30",
          "number": 30,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "HTTP 500 thường cho biết điều gì?",
          "options": [
            "Không có Internet",
            "Lỗi phía server",
            "Đã đăng xuất",
            "Request luôn đúng"
          ],
          "answer": "B",
          "explanation": "500 Internal Server Error là lỗi xử lý phía máy chủ."
        },
        {
          "id": "e1q31",
          "number": 31,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Khi dữ liệu đổi nhưng UI không cập nhật trong StatefulWidget, kiểm tra đầu tiên là gì?",
          "options": [
            "Màu icon",
            "Phiên bản Git",
            "Dữ liệu có được đổi trong setState hay cơ chế thông báo không",
            "Tên package"
          ],
          "answer": "C",
          "explanation": "Flutter cần tín hiệu thay đổi để build lại phần giao diện liên quan."
        },
        {
          "id": "e1q32",
          "number": 32,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Provider/BLoC/Riverpod thường giải quyết vấn đề gì?",
          "options": [
            "Ký APK",
            "Thiết kế database server",
            "Biên dịch Dart",
            "Quản lý và phân phối state"
          ],
          "answer": "D",
          "explanation": "Các giải pháp này tách state/business logic khỏi widget."
        },
        {
          "id": "e1q33",
          "number": 33,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Loading, success, empty và error nên được xem là gì?",
          "options": [
            "Các trạng thái UI riêng biệt",
            "Cùng một màn hình trắng",
            "Chỉ lỗi server",
            "Tên route"
          ],
          "answer": "A",
          "explanation": "Mỗi trạng thái cần phản hồi trực quan và hành động phù hợp."
        },
        {
          "id": "e1q34",
          "number": 34,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Danh sách không có dữ liệu nên hiển thị gì?",
          "options": [
            "Exception",
            "Empty state có hướng dẫn phù hợp",
            "Đóng app",
            "Spinner vô hạn"
          ],
          "answer": "B",
          "explanation": "Empty state giải thích tình trạng và có thể gợi ý hành động."
        },
        {
          "id": "e1q35",
          "number": 35,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Nút hành động chính nên có đặc điểm nào?",
          "options": [
            "Ẩn ở mọi màn hình",
            "Luôn màu giống nền",
            "Nổi bật và nhãn rõ ràng",
            "Không có phản hồi"
          ],
          "answer": "C",
          "explanation": "CTA rõ ràng giúp người dùng hiểu hành động tiếp theo."
        },
        {
          "id": "e1q36",
          "number": 36,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Để tránh rebuild một vùng lớn, nên làm gì?",
          "options": [
            "Tăng ảnh",
            "Xóa const",
            "Gọi setState ở root liên tục",
            "Tách widget và chỉ lắng nghe state cần thiết"
          ],
          "answer": "D",
          "explanation": "Phạm vi rebuild nhỏ giúp giảm công việc layout/paint."
        },
        {
          "id": "e1q37",
          "number": 37,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Ảnh mạng trong danh sách nên được tối ưu bằng cách nào?",
          "options": [
            "Cache, placeholder và kích thước phù hợp",
            "Luôn tải ảnh gốc lớn",
            "Tải lại mỗi frame",
            "Nhúng mọi ảnh vào code"
          ],
          "answer": "A",
          "explanation": "Giảm dữ liệu và tái sử dụng cache giúp cuộn mượt hơn."
        },
        {
          "id": "e1q38",
          "number": 38,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Semantics trong Flutter hỗ trợ điều gì?",
          "options": [
            "Database migration",
            "Khả năng truy cập cho screen reader",
            "Build release",
            "Mã hóa API"
          ],
          "answer": "B",
          "explanation": "Semantics cung cấp mô tả và vai trò cho công nghệ hỗ trợ."
        },
        {
          "id": "e1q39",
          "number": 39,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Nhãn lỗi form tốt nên như thế nào?",
          "options": [
            "Chỉ ghi 'Sai'",
            "Hiển thị sau khi đóng app",
            "Cụ thể và chỉ cách sửa",
            "Ẩn hoàn toàn"
          ],
          "answer": "C",
          "explanation": "Thông báo có thể hành động giúp người dùng sửa nhanh."
        },
        {
          "id": "e1q40",
          "number": 40,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Màu sắc có nên là tín hiệu duy nhất cho trạng thái lỗi không?",
          "options": [
            "Chỉ khi offline",
            "Chỉ trên Android",
            "Có, luôn đủ",
            "Không, nên có biểu tượng hoặc văn bản"
          ],
          "answer": "D",
          "explanation": "Người dùng khiếm khuyết màu sắc cần tín hiệu bổ sung."
        },
        {
          "id": "e1q41",
          "number": 41,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Người dùng nhấn nút thanh toán nhiều lần làm tạo request trùng. Xử lý phù hợp nhất là gì?",
          "options": [
            "Vô hiệu hóa nút khi xử lý và dùng idempotency nếu có",
            "Gửi tất cả",
            "Đóng app",
            "Xóa giỏ hàng"
          ],
          "answer": "A",
          "explanation": "Khóa thao tác phía client và idempotency phía server giảm giao dịch trùng."
        },
        {
          "id": "e1q42",
          "number": 42,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Yêu cầu nghiệp vụ chưa rõ nhưng sắp bắt đầu code. Bạn nên làm gì?",
          "options": [
            "Bỏ qua",
            "Xác nhận mục tiêu, trường hợp biên và tiêu chí hoàn thành",
            "Chỉ đổi màu",
            "Tự đoán toàn bộ"
          ],
          "answer": "B",
          "explanation": "Làm rõ sớm giảm rework và sai kỳ vọng."
        },
        {
          "id": "e1q43",
          "number": 43,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Một bug chỉ xảy ra trên thiết bị thật. Bước đầu hợp lý là gì?",
          "options": [
            "Viết lại app",
            "Đổ lỗi cho thiết bị",
            "Thu thập bước tái hiện, log và thông tin môi trường",
            "Xóa test"
          ],
          "answer": "C",
          "explanation": "Bằng chứng tái hiện giúp khoanh vùng nguyên nhân."
        },
        {
          "id": "e1q44",
          "number": 44,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "API thay đổi tên field đột ngột. Hành động tốt nhất là gì?",
          "options": [
            "Xóa model",
            "Ẩn lỗi",
            "Force unwrap",
            "Trao đổi contract, thêm xử lý tương thích và test"
          ],
          "answer": "D",
          "explanation": "Schema thay đổi cần phối hợp và bảo vệ khả năng tương thích."
        },
        {
          "id": "e1q45",
          "number": 45,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Mentor review và yêu cầu sửa code. Cách phản hồi chuyên nghiệp là gì?",
          "options": [
            "Hiểu lý do, trao đổi điểm chưa rõ, sửa và kiểm tra lại",
            "Bỏ qua",
            "Tranh luận không đọc",
            "Xóa branch"
          ],
          "answer": "A",
          "explanation": "Review là vòng học hỏi và kiểm soát chất lượng."
        },
        {
          "id": "e1q46",
          "number": 46,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Bạn chưa biết một package Flutter. Nên làm gì trước?",
          "options": [
            "Chép code không hiểu",
            "Đọc tài liệu chính thức, ví dụ và đánh giá bảo trì",
            "Đưa secret lên mạng",
            "Cài ngẫu nhiên"
          ],
          "answer": "B",
          "explanation": "Nguồn chính thức và tình trạng package giúp lựa chọn an toàn."
        },
        {
          "id": "e1q47",
          "number": 47,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Deadline gần nhưng còn một lỗi nghiêm trọng trong luồng đặt hàng. Nên làm gì?",
          "options": [
            "Giấu lỗi",
            "Xóa log",
            "Báo sớm mức ảnh hưởng và đề xuất phương án",
            "Đánh dấu xong"
          ],
          "answer": "C",
          "explanation": "Minh bạch giúp nhóm quyết định scope và rủi ro."
        },
        {
          "id": "e1q48",
          "number": 48,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Một tính năng lớn cần triển khai. Cách chia việc tốt là gì?",
          "options": [
            "Chờ đến cuối mới chạy",
            "Không tạo tiêu chí",
            "Code tất cả trong một hàm",
            "Tách thành các phần nhỏ có thể kiểm thử và tích hợp"
          ],
          "answer": "D",
          "explanation": "Increment nhỏ giúp nhận phản hồi và phát hiện lỗi sớm."
        },
        {
          "id": "e1q49",
          "number": 49,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Trước khi merge code gọi API mới, tối thiểu nên kiểm tra gì?",
          "options": [
            "Success, loading, empty, error và dữ liệu bất thường",
            "Chỉ màu nút",
            "Chỉ tên file",
            "Không cần chạy"
          ],
          "answer": "A",
          "explanation": "Các trạng thái chính quyết định độ tin cậy của trải nghiệm."
        },
        {
          "id": "e1q50",
          "number": 50,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Phát hiện secret đã commit vào Git. Hành động ưu tiên là gì?",
          "options": [
            "Đăng lên chat",
            "Thu hồi/rotate secret và báo người phụ trách",
            "Bỏ qua",
            "Chỉ xóa dòng ở commit mới"
          ],
          "answer": "B",
          "explanation": "Secret đã vào lịch sử phải được coi là lộ và thay ngay."
        }
      ]
    },
    {
      "id": 2,
      "title": "Đề thi thử số 2",
      "durationMinutes": 50,
      "questions": [
        {
          "id": "e2q1",
          "number": 1,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Queue thường hoạt động theo nguyên tắc nào?",
          "options": [
            "FIFO",
            "Ưu tiên phần tử lớn nhất",
            "LIFO",
            "Ngẫu nhiên"
          ],
          "answer": "A",
          "explanation": "Queue thông thường lấy phần tử vào trước ra trước."
        },
        {
          "id": "e2q2",
          "number": 2,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Độ phức tạp của tìm kiếm tuyến tính trong trường hợp xấu nhất là gì?",
          "options": [
            "O(n log n)",
            "O(n)",
            "O(log n)",
            "O(1)"
          ],
          "answer": "B",
          "explanation": "Có thể phải duyệt toàn bộ n phần tử."
        },
        {
          "id": "e2q3",
          "number": 3,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Tính đóng gói trong OOP chủ yếu nhằm mục đích gì?",
          "options": [
            "Ẩn chi tiết bên trong và kiểm soát truy cập",
            "Tạo nhiều bản sao",
            "Thay thế mọi vòng lặp",
            "Làm class chạy bất đồng bộ"
          ],
          "answer": "A",
          "explanation": "Encapsulation bảo vệ trạng thái và cung cấp giao diện truy cập rõ ràng."
        },
        {
          "id": "e2q4",
          "number": 4,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Một class có nhiều cách triển khai cùng một phương thức thông qua các kiểu con thể hiện đặc tính nào?",
          "options": [
            "Đóng gói",
            "Đa hình",
            "Tuần tự",
            "Kế thừa đơn"
          ],
          "answer": "B",
          "explanation": "Polymorphism cho phép cùng giao diện nhưng hành vi khác nhau."
        },
        {
          "id": "e2q5",
          "number": 5,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Điều kiện dừng trong hàm đệ quy có vai trò gì?",
          "options": [
            "Ngăn đệ quy vô hạn",
            "Cấp quyền truy cập",
            "Tăng số lần gọi",
            "Sắp xếp dữ liệu"
          ],
          "answer": "A",
          "explanation": "Base case kết thúc chuỗi lời gọi đệ quy."
        },
        {
          "id": "e2q6",
          "number": 6,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Kết quả của `[1, 2, 3].length` là gì?",
          "options": [
            "null",
            "4",
            "3",
            "2"
          ],
          "answer": "C",
          "explanation": "Danh sách có ba phần tử."
        },
        {
          "id": "e2q7",
          "number": 7,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Cấu trúc nào không lưu phần tử trùng lặp theo ngữ nghĩa tập hợp?",
          "options": [
            "List",
            "Queue",
            "Set",
            "Stack"
          ],
          "answer": "C",
          "explanation": "Set chỉ giữ các giá trị duy nhất."
        },
        {
          "id": "e2q8",
          "number": 8,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Khi cần ánh xạ khóa người dùng sang thông tin người dùng, cấu trúc phù hợp nhất là gì?",
          "options": [
            "Queue",
            "Map",
            "Tree chỉ có một nút",
            "Stack"
          ],
          "answer": "B",
          "explanation": "Map lưu dữ liệu theo cặp key-value."
        },
        {
          "id": "e2q9",
          "number": 9,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Kết quả của `5 > 3 && 2 > 4` là gì?",
          "options": [
            "false",
            "Lỗi",
            "true",
            "2"
          ],
          "answer": "A",
          "explanation": "Vế thứ hai sai nên phép AND trả về false."
        },
        {
          "id": "e2q10",
          "number": 10,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Thuật toán sắp xếp nào dưới đây thường có độ phức tạp trung bình O(n log n)?",
          "options": [
            "Duyệt tuyến tính",
            "Merge sort",
            "Insertion sort",
            "Bubble sort"
          ],
          "answer": "B",
          "explanation": "Merge sort chia để trị và có độ phức tạp O(n log n)."
        },
        {
          "id": "e2q11",
          "number": 11,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "`initState()` được gọi khi nào?",
          "options": [
            "Mỗi lần build",
            "Một lần khi State được gắn vào cây",
            "Sau dispose",
            "Chỉ khi nhấn nút"
          ],
          "answer": "B",
          "explanation": "initState là điểm khởi tạo một lần của State."
        },
        {
          "id": "e2q12",
          "number": 12,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "Nên giải phóng AnimationController hoặc TextEditingController ở đâu?",
          "options": [
            "dispose",
            "build",
            "didUpdateWidget luôn luôn",
            "initState"
          ],
          "answer": "A",
          "explanation": "dispose giải phóng tài nguyên khi State bị loại khỏi cây."
        },
        {
          "id": "e2q13",
          "number": 13,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "BuildContext đại diện cho điều gì?",
          "options": [
            "Cơ sở dữ liệu",
            "File cấu hình",
            "Vị trí widget trong cây",
            "HTTP response"
          ],
          "answer": "C",
          "explanation": "Context gắn với Element và vị trí trong widget tree."
        },
        {
          "id": "e2q14",
          "number": 14,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "Widget nào chồng các widget con lên nhau?",
          "options": [
            "Expanded",
            "Stack",
            "ListView",
            "Column"
          ],
          "answer": "B",
          "explanation": "Stack bố trí các con theo lớp."
        },
        {
          "id": "e2q15",
          "number": 15,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "`Expanded` thường được dùng trong Row/Column để làm gì?",
          "options": [
            "Chiếm phần không gian còn lại",
            "Gọi API",
            "Lưu token",
            "Tạo route"
          ],
          "answer": "A",
          "explanation": "Expanded phân bổ không gian còn dư theo flex."
        },
        {
          "id": "e2q16",
          "number": 16,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "`pubspec.yaml` thường khai báo nội dung nào?",
          "options": [
            "Mật khẩu production",
            "Dependencies và assets",
            "HTTP response",
            "Dữ liệu người dùng"
          ],
          "answer": "B",
          "explanation": "Pubspec mô tả package, dependency, font và asset."
        },
        {
          "id": "e2q17",
          "number": 17,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "Toán tử `??` trong Dart dùng để làm gì?",
          "options": [
            "Chọn giá trị bên phải nếu bên trái null",
            "Nối route",
            "Chia lấy dư",
            "Ép kiểu"
          ],
          "answer": "A",
          "explanation": "Đây là toán tử if-null."
        },
        {
          "id": "e2q18",
          "number": 18,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "`final` khác `const` ở điểm quan trọng nào?",
          "options": [
            "Không có khác biệt",
            "const thay đổi được",
            "final luôn compile-time",
            "final có thể gán một lần lúc runtime"
          ],
          "answer": "D",
          "explanation": "final gán một lần; const yêu cầu hằng tại compile time."
        },
        {
          "id": "e2q19",
          "number": 19,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "Named parameter bắt buộc trong Dart thường được đánh dấu bằng từ khóa nào?",
          "options": [
            "must",
            "required",
            "final",
            "late"
          ],
          "answer": "B",
          "explanation": "required buộc caller truyền named argument."
        },
        {
          "id": "e2q20",
          "number": 20,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "`late` nên được dùng khi nào?",
          "options": [
            "Mọi hằng số",
            "Giá trị non-null được khởi tạo sau khai báo",
            "Chỉ cho List",
            "Mọi biến nullable"
          ],
          "answer": "B",
          "explanation": "late trì hoãn khởi tạo nhưng lập trình viên phải bảo đảm gán trước khi đọc."
        },
        {
          "id": "e2q21",
          "number": 21,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "Header `Content-Type: application/json` mô tả điều gì?",
          "options": [
            "Tốc độ mạng",
            "Tên người dùng",
            "Định dạng nội dung body",
            "Kích thước màn hình"
          ],
          "answer": "C",
          "explanation": "Content-Type mô tả media type của payload."
        },
        {
          "id": "e2q22",
          "number": 22,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "Bearer token thường được gửi trong header nào?",
          "options": [
            "Cache-Control chỉ",
            "User-Agent",
            "Accept-Language",
            "Authorization"
          ],
          "answer": "D",
          "explanation": "Mẫu phổ biến là Authorization: Bearer <token>."
        },
        {
          "id": "e2q23",
          "number": 23,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "Timeout khi gọi API giúp ứng dụng làm gì?",
          "options": [
            "Không chờ vô hạn",
            "Luôn nhận 200",
            "Tăng RAM",
            "Bỏ xác thực"
          ],
          "answer": "A",
          "explanation": "Timeout giới hạn thời gian chờ và cho phép báo lỗi/thử lại."
        },
        {
          "id": "e2q24",
          "number": 24,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "Khi request GET tạm thời thất bại do mạng, chiến lược retry phù hợp là gì?",
          "options": [
            "Xóa tài khoản",
            "Retry vô hạn ngay lập tức",
            "Bỏ mọi lỗi",
            "Giới hạn số lần và backoff"
          ],
          "answer": "D",
          "explanation": "Retry có giới hạn và backoff tránh làm quá tải mạng/server."
        },
        {
          "id": "e2q25",
          "number": 25,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "Dữ liệu phân trang giúp ích gì?",
          "options": [
            "Bỏ cần API",
            "Tăng kích thước ảnh",
            "Giảm lượng dữ liệu tải mỗi lần",
            "Tự mã hóa token"
          ],
          "answer": "C",
          "explanation": "Pagination giảm payload, bộ nhớ và thời gian phản hồi ban đầu."
        },
        {
          "id": "e2q26",
          "number": 26,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "Query parameter thường phù hợp với dữ liệu nào?",
          "options": [
            "Binary app",
            "Source code",
            "Mật khẩu nhạy cảm",
            "Lọc, tìm kiếm, phân trang"
          ],
          "answer": "D",
          "explanation": "Query string thường mô tả cách truy vấn collection."
        },
        {
          "id": "e2q27",
          "number": 27,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "Path parameter thường dùng để biểu diễn gì?",
          "options": [
            "Định danh tài nguyên trong URL",
            "Màu theme",
            "Bộ nhớ thiết bị",
            "Widget key"
          ],
          "answer": "A",
          "explanation": "Ví dụ /users/42 dùng 42 làm định danh tài nguyên."
        },
        {
          "id": "e2q28",
          "number": 28,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "PUT thường mang ngữ nghĩa nào?",
          "options": [
            "Tải font",
            "Thay thế/cập nhật tài nguyên tại URI xác định",
            "Mở màn hình",
            "Chỉ đọc"
          ],
          "answer": "B",
          "explanation": "PUT thường idempotent và ghi representation vào URI."
        },
        {
          "id": "e2q29",
          "number": 29,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "PATCH khác PUT chủ yếu ở điểm nào?",
          "options": [
            "PATCH chỉ đọc",
            "Không khác",
            "PATCH thường cập nhật một phần",
            "PATCH không dùng HTTP"
          ],
          "answer": "C",
          "explanation": "PATCH mô tả thay đổi cục bộ thay vì thay toàn bộ representation."
        },
        {
          "id": "e2q30",
          "number": 30,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "DELETE thành công nhưng không trả body có thể dùng status nào?",
          "options": [
            "500",
            "401",
            "404",
            "204"
          ],
          "answer": "D",
          "explanation": "204 No Content biểu thị thành công và không có nội dung trả về."
        },
        {
          "id": "e2q31",
          "number": 31,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "`RepaintBoundary` có thể hữu ích khi nào?",
          "options": [
            "Cô lập vùng vẽ lại đắt đỏ",
            "Gọi API",
            "Lưu token",
            "Parse JSON"
          ],
          "answer": "A",
          "explanation": "Nó có thể ngăn repaint lan sang vùng không đổi."
        },
        {
          "id": "e2q32",
          "number": 32,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Jank khi cuộn thường liên quan đến điều gì?",
          "options": [
            "README thiếu",
            "Công việc nặng trên UI isolate hoặc build/paint quá nhiều",
            "Status 204",
            "Tên biến dài"
          ],
          "answer": "B",
          "explanation": "Khung hình bị trễ khi main isolate vượt ngân sách frame."
        },
        {
          "id": "e2q33",
          "number": 33,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Tác vụ CPU nặng như parse JSON rất lớn nên cân nhắc làm gì?",
          "options": [
            "Chạy trong build",
            "Bỏ await",
            "Chuyển sang isolate/compute",
            "Gọi mỗi frame"
          ],
          "answer": "C",
          "explanation": "Isolate giúp tránh chặn xử lý khung hình của UI."
        },
        {
          "id": "e2q34",
          "number": 34,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Debounce tìm kiếm có tác dụng gì?",
          "options": [
            "Tăng font",
            "Xóa query",
            "Gọi API mỗi ký tự nhiều lần",
            "Chờ người dùng ngừng gõ ngắn rồi mới gọi"
          ],
          "answer": "D",
          "explanation": "Debounce giảm request thừa khi input thay đổi liên tục."
        },
        {
          "id": "e2q35",
          "number": 35,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Throttle phù hợp với tình huống nào?",
          "options": [
            "Giới hạn tần suất xử lý sự kiện liên tục",
            "Lưu mật khẩu",
            "Đổi model",
            "Tạo route"
          ],
          "answer": "A",
          "explanation": "Throttle chỉ cho phép xử lý tối đa theo khoảng thời gian."
        },
        {
          "id": "e2q36",
          "number": 36,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Responsive layout nên dựa chủ yếu vào gì?",
          "options": [
            "Màu logo",
            "Không gian khả dụng và breakpoint hợp lý",
            "Token API",
            "Tên thiết bị cụ thể"
          ],
          "answer": "B",
          "explanation": "Thiết kế theo constraints thích nghi tốt hơn danh sách thiết bị."
        },
        {
          "id": "e2q37",
          "number": 37,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Khi bàn phím che ô nhập liệu, giải pháp thường dùng là gì?",
          "options": [
            "Khóa bàn phím",
            "Đổi API",
            "Cho nội dung cuộn và xử lý viewInsets",
            "Xóa TextField"
          ],
          "answer": "C",
          "explanation": "Layout cần phản ứng với phần không gian bị bàn phím chiếm."
        },
        {
          "id": "e2q38",
          "number": 38,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Hero animation phù hợp để làm gì?",
          "options": [
            "Validate email",
            "Parse JSON",
            "Cache token",
            "Tạo chuyển tiếp phần tử chung giữa hai route"
          ],
          "answer": "D",
          "explanation": "Hero liên kết widget cùng tag qua chuyển cảnh route."
        },
        {
          "id": "e2q39",
          "number": 39,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Skeleton loading hữu ích khi nào?",
          "options": [
            "Muốn gợi hình dạng nội dung sắp xuất hiện",
            "Token hết hạn",
            "App crash",
            "Build APK"
          ],
          "answer": "A",
          "explanation": "Skeleton tạo cảm giác tiến trình và giảm thay đổi bố cục đột ngột."
        },
        {
          "id": "e2q40",
          "number": 40,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Optimistic UI nghĩa là gì?",
          "options": [
            "Bỏ xử lý lỗi",
            "Cập nhật UI trước khi server xác nhận và hoàn tác nếu lỗi",
            "Không lưu state",
            "Luôn chờ server"
          ],
          "answer": "B",
          "explanation": "Phản hồi tức thì phù hợp thao tác có xác suất thành công cao."
        },
        {
          "id": "e2q41",
          "number": 41,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "App crash nhưng catch đang bỏ qua mọi exception. Nên cải thiện thế nào?",
          "options": [
            "Tiếp tục catch rỗng",
            "Luôn trả thành công",
            "Log có ngữ cảnh, phân loại lỗi và hiển thị fallback",
            "Xóa try-catch"
          ],
          "answer": "C",
          "explanation": "Lỗi cần quan sát được và chuyển thành hành vi an toàn."
        },
        {
          "id": "e2q42",
          "number": 42,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "PM yêu cầu thay đổi nhỏ nhưng ảnh hưởng API và database. Bạn nên làm gì?",
          "options": [
            "Bỏ test",
            "Tự đổi production",
            "Chỉ sửa UI",
            "Nêu rõ tác động và phối hợp các bên trước khi cam kết"
          ],
          "answer": "D",
          "explanation": "Ước lượng phải phản ánh phụ thuộc kỹ thuật thật."
        },
        {
          "id": "e2q43",
          "number": 43,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Một widget dài hàng nghìn dòng khó bảo trì. Cách xử lý là gì?",
          "options": [
            "Tách theo trách nhiệm và thành phần UI có ý nghĩa",
            "Đổi tên file",
            "Thêm nhiều biến global",
            "Xóa const"
          ],
          "answer": "A",
          "explanation": "Phân rã hợp lý cải thiện đọc, test và tái sử dụng."
        },
        {
          "id": "e2q44",
          "number": 44,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Hai lập trình viên cùng sửa một file và có conflict. Nên làm gì?",
          "options": [
            "Xóa file",
            "Đọc cả hai thay đổi, trao đổi và resolve có chủ đích",
            "Force push ngay",
            "Chọn ngẫu nhiên"
          ],
          "answer": "B",
          "explanation": "Conflict cần bảo toàn ý định của cả hai phía."
        },
        {
          "id": "e2q45",
          "number": 45,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Một package không còn được duy trì và có lỗ hổng. Lựa chọn tốt là gì?",
          "options": [
            "Giữ mãi",
            "Đưa thêm secret",
            "Đánh giá thay thế/nâng cấp và lập kế hoạch migration",
            "Ẩn cảnh báo"
          ],
          "answer": "C",
          "explanation": "Phụ thuộc bỏ hoang làm tăng rủi ro bảo mật và bảo trì."
        },
        {
          "id": "e2q46",
          "number": 46,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Người dùng báo app chậm nhưng chưa có số liệu. Bạn nên làm gì?",
          "options": [
            "Đổi logo",
            "Xóa animation",
            "Tối ưu ngẫu nhiên",
            "Đo startup, frame time, network và tái hiện"
          ],
          "answer": "D",
          "explanation": "Profile trước giúp tập trung vào nút thắt thật."
        },
        {
          "id": "e2q47",
          "number": 47,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Thiết kế Figma khác hành vi thực tế của API. Nên xử lý thế nào?",
          "options": [
            "Trao đổi designer/backend để thống nhất trạng thái và dữ liệu",
            "Tự bịa dữ liệu",
            "Bỏ error state",
            "Chỉ làm happy path"
          ],
          "answer": "A",
          "explanation": "UI và contract cần thống nhất để triển khai đúng."
        },
        {
          "id": "e2q48",
          "number": 48,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Bạn sửa bug nhưng không thêm test vì 'đã chạy được'. Rủi ro chính là gì?",
          "options": [
            "API nhanh hơn",
            "Bug có thể tái xuất hiện mà không được phát hiện",
            "Không có rủi ro",
            "App nhẹ hơn"
          ],
          "answer": "B",
          "explanation": "Regression test lưu lại điều kiện gây bug."
        },
        {
          "id": "e2q49",
          "number": 49,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Khi nhận task mới trong startup, điều gì nên được ghi lại?",
          "options": [
            "Chỉ tên người giao",
            "Không cần gì",
            "Mục tiêu, phạm vi, tiêu chí hoàn thành và phụ thuộc",
            "Chỉ ngày"
          ],
          "answer": "C",
          "explanation": "Thông tin này giúp cả nhóm hiểu cùng một kết quả mong đợi."
        },
        {
          "id": "e2q50",
          "number": 50,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Một thay đổi có thể làm mất dữ liệu local. Trước khi phát hành nên làm gì?",
          "options": [
            "Chỉ test cài mới",
            "Không thông báo",
            "Xóa dữ liệu mọi người",
            "Thiết kế migration, backup/fallback và test nâng cấp"
          ],
          "answer": "D",
          "explanation": "Upgrade path phải bảo vệ dữ liệu phiên bản cũ."
        }
      ]
    },
    {
      "id": 3,
      "title": "Đề thi thử số 3",
      "durationMinutes": 50,
      "questions": [
        {
          "id": "e3q1",
          "number": 1,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Một biến cục bộ được khai báo trong hàm có phạm vi sử dụng thông thường ở đâu?",
          "options": [
            "Toàn bộ ứng dụng",
            "Trong hàm hoặc block đó",
            "Mọi class",
            "Chỉ trên server"
          ],
          "answer": "B",
          "explanation": "Biến cục bộ bị giới hạn bởi lexical scope chứa nó."
        },
        {
          "id": "e3q2",
          "number": 2,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Nguyên tắc Single Responsibility khuyên một class nên có điều gì?",
          "options": [
            "Không có constructor",
            "Một lý do chính để thay đổi",
            "Kế thừa mọi class",
            "Chỉ một phương thức"
          ],
          "answer": "B",
          "explanation": "Một class nên tập trung vào một trách nhiệm rõ ràng."
        },
        {
          "id": "e3q3",
          "number": 3,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Khi hai vòng lặp lồng nhau đều chạy n lần, độ phức tạp thường là gì?",
          "options": [
            "O(n)",
            "O(n²)",
            "O(1)",
            "O(n log n)"
          ],
          "answer": "B",
          "explanation": "Số lượt thực thi xấp xỉ n nhân n."
        },
        {
          "id": "e3q4",
          "number": 4,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Giá trị ban đầu phù hợp để tìm tổng các số trong danh sách là gì?",
          "options": [
            "null",
            "1",
            "0",
            "-1"
          ],
          "answer": "C",
          "explanation": "0 là phần tử trung hòa của phép cộng."
        },
        {
          "id": "e3q5",
          "number": 5,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Biểu thức `!false` cho kết quả gì?",
          "options": [
            "true",
            "false",
            "null",
            "0"
          ],
          "answer": "A",
          "explanation": "Toán tử ! đảo giá trị boolean."
        },
        {
          "id": "e3q6",
          "number": 6,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Khi cần xử lý từng phần tử của danh sách mà không thay đổi số lượng phần tử, cấu trúc nào dễ hiểu nhất?",
          "options": [
            "Constructor",
            "Vòng lặp for",
            "Exception",
            "Class trừu tượng"
          ],
          "answer": "B",
          "explanation": "Vòng lặp diễn đạt trực tiếp việc duyệt các phần tử."
        },
        {
          "id": "e3q7",
          "number": 7,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Exception nên được dùng cho trường hợp nào?",
          "options": [
            "Tình huống lỗi hoặc bất thường",
            "Trang trí giao diện",
            "Luồng chạy bình thường",
            "Đặt tên biến"
          ],
          "answer": "A",
          "explanation": "Exception biểu diễn sự cố cần được truyền hoặc xử lý."
        },
        {
          "id": "e3q8",
          "number": 8,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Unit test tốt thường kiểm tra điều gì?",
          "options": [
            "Tốc độ Internet người dùng",
            "Màu màn hình thủ công",
            "Toàn bộ hệ thống thật",
            "Một đơn vị hành vi nhỏ và độc lập"
          ],
          "answer": "D",
          "explanation": "Unit test tập trung vào hàm/class nhỏ với phụ thuộc được kiểm soát."
        },
        {
          "id": "e3q9",
          "number": 9,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Refactoring có ý nghĩa nào đúng nhất?",
          "options": [
            "Thay đổi cấu trúc code nhưng giữ hành vi",
            "Thêm thật nhiều tính năng",
            "Xóa toàn bộ test",
            "Đổi ngôn ngữ lập trình"
          ],
          "answer": "A",
          "explanation": "Refactoring cải thiện cấu trúc nội bộ mà không đổi kết quả quan sát được."
        },
        {
          "id": "e3q10",
          "number": 10,
          "categoryId": 1,
          "category": "Tư duy logic, OOP và cấu trúc dữ liệu",
          "question": "Một tên biến tốt nên như thế nào?",
          "options": [
            "Luôn gồm số ngẫu nhiên",
            "Càng ngắn càng tốt",
            "Giống tên class khác",
            "Mô tả rõ ý nghĩa dữ liệu"
          ],
          "answer": "D",
          "explanation": "Tên có ý nghĩa giúp code tự giải thích và dễ bảo trì."
        },
        {
          "id": "e3q11",
          "number": 11,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "Widget nào phát hiện thao tác chạm và cử chỉ tổng quát?",
          "options": [
            "Padding",
            "Theme",
            "GestureDetector",
            "SafeArea"
          ],
          "answer": "C",
          "explanation": "GestureDetector cung cấp callback cho tap, drag và nhiều gesture khác."
        },
        {
          "id": "e3q12",
          "number": 12,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "`SafeArea` giúp giải quyết vấn đề gì?",
          "options": [
            "Tạo database",
            "Cache API",
            "Mã hóa token",
            "Tránh notch và vùng hệ thống"
          ],
          "answer": "D",
          "explanation": "SafeArea thêm padding để nội dung không bị che bởi system UI."
        },
        {
          "id": "e3q13",
          "number": 13,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "Muốn nhập và kiểm tra nhiều trường dữ liệu, cặp phù hợp là gì?",
          "options": [
            "Form và TextFormField",
            "Stack và Hero",
            "Image và Icon",
            "Theme và Divider"
          ],
          "answer": "A",
          "explanation": "Form gom trạng thái validation của các TextFormField."
        },
        {
          "id": "e3q14",
          "number": 14,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "GlobalKey<FormState> thường dùng để làm gì?",
          "options": [
            "Tải ảnh",
            "Gọi validate/save trên Form",
            "Đổi package name",
            "Lưu access token"
          ],
          "answer": "B",
          "explanation": "Key cho phép truy cập FormState liên quan."
        },
        {
          "id": "e3q15",
          "number": 15,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "Hot reload chủ yếu có lợi ích gì?",
          "options": [
            "Build file release",
            "Tự viết test",
            "Cập nhật code UI nhanh và giữ phần lớn state",
            "Thay database production"
          ],
          "answer": "C",
          "explanation": "Hot reload inject code thay đổi vào VM khi phát triển."
        },
        {
          "id": "e3q16",
          "number": 16,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "`MediaQuery.of(context).size` cung cấp gì?",
          "options": [
            "Token đăng nhập",
            "Phiên bản Git",
            "Danh sách API",
            "Kích thước vùng hiển thị"
          ],
          "answer": "D",
          "explanation": "MediaQuery chứa thông tin màn hình và padding hệ thống."
        },
        {
          "id": "e3q17",
          "number": 17,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "Một extension method trong Dart có tác dụng gì?",
          "options": [
            "Bổ sung API tiện ích cho kiểu có sẵn",
            "Thay đổi source của SDK",
            "Tạo database",
            "Chỉ tạo widget stateful"
          ],
          "answer": "A",
          "explanation": "Extension thêm phương thức tĩnh theo kiểu mà không sửa class gốc."
        },
        {
          "id": "e3q18",
          "number": 18,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "`map()` trên Iterable thường tạo ra gì?",
          "options": [
            "Một exception",
            "Một Iterable kết quả sau biến đổi",
            "Một BuildContext",
            "Một route"
          ],
          "answer": "B",
          "explanation": "map áp dụng hàm chuyển đổi cho từng phần tử."
        },
        {
          "id": "e3q19",
          "number": 19,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "`where()` trên Iterable có mục đích gì?",
          "options": [
            "Sắp xếp bắt buộc",
            "Gọi setState",
            "Lọc phần tử theo điều kiện",
            "Xóa source list"
          ],
          "answer": "C",
          "explanation": "where giữ các phần tử thỏa predicate."
        },
        {
          "id": "e3q20",
          "number": 20,
          "categoryId": 2,
          "category": "Dart và Flutter",
          "question": "Dùng `mounted` trước setState sau await nhằm tránh điều gì?",
          "options": [
            "Ảnh quá lớn",
            "Mạng chậm",
            "JSON sai",
            "Gọi setState khi State đã dispose"
          ],
          "answer": "D",
          "explanation": "Sau await, widget có thể đã rời cây; mounted xác nhận State còn hoạt động."
        },
        {
          "id": "e3q21",
          "number": 21,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "`try-catch` khi gọi API nhằm mục đích gì?",
          "options": [
            "Xử lý exception có kiểm soát",
            "Tăng FPS",
            "Thay widget",
            "Tự đăng nhập"
          ],
          "answer": "A",
          "explanation": "try-catch cho phép chuyển lỗi kỹ thuật thành trạng thái ứng dụng phù hợp."
        },
        {
          "id": "e3q22",
          "number": 22,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "Tại sao không nên log access token trong production?",
          "options": [
            "Không compile",
            "Có thể rò rỉ thông tin xác thực",
            "Token không phải chuỗi",
            "Làm màu UI sai"
          ],
          "answer": "B",
          "explanation": "Log có thể bị thu thập hoặc truy cập ngoài ý muốn."
        },
        {
          "id": "e3q23",
          "number": 23,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "Refresh token thường dùng để làm gì?",
          "options": [
            "Tải ảnh",
            "Đổi ngôn ngữ",
            "Lấy access token mới",
            "Sắp xếp List"
          ],
          "answer": "C",
          "explanation": "Refresh token cho phép gia hạn phiên mà không yêu cầu đăng nhập lại ngay."
        },
        {
          "id": "e3q24",
          "number": 24,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "Khi nhận 401 do access token hết hạn, luồng hợp lý là gì?",
          "options": [
            "Coi là thành công",
            "Xóa database server",
            "Retry vô hạn",
            "Refresh một lần rồi thử lại request"
          ],
          "answer": "D",
          "explanation": "Client có thể đồng bộ refresh token rồi lặp lại request có kiểm soát."
        },
        {
          "id": "e3q25",
          "number": 25,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "API idempotent nghĩa là gì?",
          "options": [
            "Gọi lặp cùng request có hiệu ứng cuối giống nhau",
            "Luôn không cần token",
            "Luôn trả JSON",
            "Chỉ chạy một lần"
          ],
          "answer": "A",
          "explanation": "Tính idempotent giúp retry an toàn hơn với cùng dữ liệu."
        },
        {
          "id": "e3q26",
          "number": 26,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "DTO trong tầng data thường có vai trò gì?",
          "options": [
            "Điều hướng",
            "Biểu diễn dữ liệu trao đổi với API",
            "Quản lý animation",
            "Vẽ giao diện"
          ],
          "answer": "B",
          "explanation": "DTO bám theo schema truyền tải và có thể chuyển sang domain model."
        },
        {
          "id": "e3q27",
          "number": 27,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "Tại sao nên kiểm tra status code trước khi parse body thành model thành công?",
          "options": [
            "Để tăng độ sáng",
            "Không cần lý do",
            "Body lỗi có thể có schema khác",
            "Để bỏ timeout"
          ],
          "answer": "C",
          "explanation": "Response lỗi thường không có cấu trúc giống response thành công."
        },
        {
          "id": "e3q28",
          "number": 28,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "Cache dữ liệu API hữu ích nhất trong trường hợp nào?",
          "options": [
            "Lệnh thanh toán chưa xác nhận",
            "OTP một lần",
            "Mật khẩu",
            "Dữ liệu đọc lại thường xuyên và chấp nhận độ trễ cập nhật"
          ],
          "answer": "D",
          "explanation": "Cache giảm request và cải thiện khả năng hiển thị nhanh/offline."
        },
        {
          "id": "e3q29",
          "number": 29,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "WebSocket phù hợp hơn polling khi nào?",
          "options": [
            "Cần cập nhật hai chiều gần thời gian thực",
            "Chỉ tải một file tĩnh",
            "Không có server",
            "Chỉ đổi màu nút"
          ],
          "answer": "A",
          "explanation": "Kết nối duy trì cho phép server đẩy sự kiện nhanh."
        },
        {
          "id": "e3q30",
          "number": 30,
          "categoryId": 3,
          "category": "REST API, JSON và bất đồng bộ",
          "question": "Khi parse một trường JSON có thể thiếu, model nên làm gì?",
          "options": [
            "Xóa toàn response",
            "Dùng nullable/default hợp lý",
            "Thoát app",
            "Luôn force unwrap"
          ],
          "answer": "B",
          "explanation": "Schema phòng thủ giúp ứng dụng tương thích dữ liệu không hoàn hảo."
        },
        {
          "id": "e3q31",
          "number": 31,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Khi dùng optimistic update, điều gì là bắt buộc?",
          "options": [
            "Không cần error state",
            "Retry vô hạn",
            "Cơ chế rollback hoặc hòa giải khi request thất bại",
            "Xóa cache"
          ],
          "answer": "C",
          "explanation": "UI phải trở về trạng thái đúng nếu server từ chối."
        },
        {
          "id": "e3q32",
          "number": 32,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Key trong Flutter giúp framework làm gì?",
          "options": [
            "Tạo font",
            "Gọi backend",
            "Mã hóa dữ liệu",
            "Nhận diện widget giữa các lần build"
          ],
          "answer": "D",
          "explanation": "Key hỗ trợ ghép widget cũ với cấu hình mới, đặc biệt khi sắp xếp danh sách."
        },
        {
          "id": "e3q33",
          "number": 33,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Khi item danh sách có state riêng và có thể đổi thứ tự, nên dùng gì?",
          "options": [
            "Key ổn định theo ID",
            "Random key mỗi build",
            "Không có ID",
            "Global setState"
          ],
          "answer": "A",
          "explanation": "Key ổn định giữ state gắn đúng item."
        },
        {
          "id": "e3q34",
          "number": 34,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Random key được tạo lại mỗi build có rủi ro gì?",
          "options": [
            "Sửa API",
            "Làm widget bị coi là mới và mất state",
            "Giảm network",
            "Tăng cache"
          ],
          "answer": "B",
          "explanation": "Key không ổn định phá khả năng đối chiếu element."
        },
        {
          "id": "e3q35",
          "number": 35,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "ThemeData giúp ích gì?",
          "options": [
            "Lưu dữ liệu server",
            "Tạo database",
            "Giữ màu sắc và typography nhất quán",
            "Parse token"
          ],
          "answer": "C",
          "explanation": "Theme tập trung các quyết định giao diện dùng chung."
        },
        {
          "id": "e3q36",
          "number": 36,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Dark mode tốt cần chú ý điều gì?",
          "options": [
            "Không kiểm tra text",
            "Chỉ đổi nền đen",
            "Chỉ đảo màu ảnh",
            "Độ tương phản và màu semantic ở cả hai theme"
          ],
          "answer": "D",
          "explanation": "Màu phải được thiết kế theo vai trò và đạt khả năng đọc."
        },
        {
          "id": "e3q37",
          "number": 37,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Kích thước vùng chạm quá nhỏ gây vấn đề gì?",
          "options": [
            "Khó thao tác và giảm accessibility",
            "API chậm",
            "JSON lỗi",
            "Tăng RAM"
          ],
          "answer": "A",
          "explanation": "Touch target đủ lớn giúp người dùng chạm chính xác."
        },
        {
          "id": "e3q38",
          "number": 38,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Infinite scroll nên tải trang tiếp theo khi nào?",
          "options": [
            "Mỗi frame",
            "Gần cuối danh sách và chưa có request đang chạy",
            "Sau khi đóng màn hình",
            "Mỗi lần build"
          ],
          "answer": "B",
          "explanation": "Điều kiện này tránh request trùng và giữ trải nghiệm liên tục."
        },
        {
          "id": "e3q39",
          "number": 39,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Pull-to-refresh nên làm gì với request phân trang hiện tại?",
          "options": [
            "Luôn nối vào cuối",
            "Không thay state",
            "Đặt lại trang và nạp dữ liệu đầu",
            "Xóa tài khoản"
          ],
          "answer": "C",
          "explanation": "Refresh biểu thị tải lại collection từ điểm bắt đầu."
        },
        {
          "id": "e3q40",
          "number": 40,
          "categoryId": 4,
          "category": "UI/UX, quản lý state và hiệu năng",
          "question": "Đo hiệu năng Flutter nên ưu tiên chế độ nào?",
          "options": [
            "Chỉ emulator chậm",
            "Chỉ đọc code",
            "Debug duy nhất",
            "Profile trên thiết bị gần thực tế"
          ],
          "answer": "D",
          "explanation": "Profile mode phản ánh hiệu năng gần release và vẫn hỗ trợ công cụ đo."
        },
        {
          "id": "e3q41",
          "number": 41,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Bug production ảnh hưởng nhiều người dùng. Ưu tiên đầu tiên là gì?",
          "options": [
            "Giảm tác động, thu thập bằng chứng và thông báo đúng kênh",
            "Tìm người chịu lỗi",
            "Thêm tính năng mới",
            "Xóa monitoring"
          ],
          "answer": "A",
          "explanation": "Incident response ưu tiên khôi phục dịch vụ và hiểu phạm vi."
        },
        {
          "id": "e3q42",
          "number": 42,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Sau khi hotfix production, việc nào vẫn cần làm?",
          "options": [
            "Xóa lịch sử",
            "Phân tích nguyên nhân và bổ sung biện pháp ngăn tái diễn",
            "Bỏ review",
            "Quên sự cố"
          ],
          "answer": "B",
          "explanation": "Post-incident learning giúp cải thiện hệ thống lâu dài."
        },
        {
          "id": "e3q43",
          "number": 43,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Khi estimate một task chưa rõ kỹ thuật, cách tốt nhất là gì?",
          "options": [
            "Cam kết số giờ ngẫu nhiên",
            "Luôn nói một ngày",
            "Spike ngắn, nêu giả định và khoảng ước lượng",
            "Không hỏi"
          ],
          "answer": "C",
          "explanation": "Khảo sát giới hạn giúp estimate có cơ sở."
        },
        {
          "id": "e3q44",
          "number": 44,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Một teammate đề xuất kiến trúc phức tạp cho tính năng nhỏ. Nên đánh giá theo gì?",
          "options": [
            "Tên pattern dài",
            "Độ mới của trend",
            "Số lượng class",
            "Nhu cầu hiện tại, khả năng mở rộng thực tế và chi phí bảo trì"
          ],
          "answer": "D",
          "explanation": "Kiến trúc tốt cân bằng giá trị và độ phức tạp."
        },
        {
          "id": "e3q45",
          "number": 45,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Bạn cần sửa code ngoài phạm vi task để task chạy được. Nên làm gì?",
          "options": [
            "Xác nhận phạm vi ảnh hưởng và tách thay đổi rõ ràng",
            "Sửa toàn repo",
            "Giấu thay đổi",
            "Force merge"
          ],
          "answer": "A",
          "explanation": "Thay đổi rõ phạm vi giúp review và rollback an toàn."
        },
        {
          "id": "e3q46",
          "number": 46,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Khi demo tính năng cho CTO, nội dung hữu ích nhất là gì?",
          "options": [
            "Chỉ màu sắc",
            "Luồng người dùng, trạng thái lỗi và giới hạn còn lại",
            "Không chạy app",
            "Chỉ source code"
          ],
          "answer": "B",
          "explanation": "Demo nên chứng minh giá trị và minh bạch phần chưa hoàn thiện."
        },
        {
          "id": "e3q47",
          "number": 47,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Một yêu cầu tối ưu không có chỉ số thành công. Bạn nên làm gì?",
          "options": [
            "Tối ưu vô hạn",
            "Xóa telemetry",
            "Thống nhất metric và baseline trước",
            "Đổi framework"
          ],
          "answer": "C",
          "explanation": "Không có baseline thì không biết thay đổi có hiệu quả hay không."
        },
        {
          "id": "e3q48",
          "number": 48,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Người dùng từ chối quyền thông báo. App nên làm gì?",
          "options": [
            "Tự đổi cài đặt hệ thống",
            "Khóa app",
            "Hỏi liên tục",
            "Tôn trọng lựa chọn và giải thích cách bật lại khi cần"
          ],
          "answer": "D",
          "explanation": "Permission UX phải tôn trọng quyền kiểm soát của người dùng."
        },
        {
          "id": "e3q49",
          "number": 49,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Backend trả dữ liệu cá nhân không cần cho màn hình. Nên làm gì?",
          "options": [
            "Đề nghị giảm payload và không lưu/log dữ liệu thừa",
            "Hiển thị hết",
            "Đưa vào analytics",
            "Commit vào repo"
          ],
          "answer": "A",
          "explanation": "Tối thiểu hóa dữ liệu giảm rủi ro riêng tư và bảo mật."
        },
        {
          "id": "e3q50",
          "number": 50,
          "categoryId": 5,
          "category": "Tình huống kỹ thuật và môi trường startup",
          "question": "Bạn hoàn thành task sớm trong kỳ thực tập. Hành động tốt nhất là gì?",
          "options": [
            "Merge không review",
            "Tự kiểm tra, cập nhật tài liệu rồi chủ động hỏi việc ưu tiên tiếp theo",
            "Xóa branch",
            "Chờ im lặng"
          ],
          "answer": "B",
          "explanation": "Chủ động nhưng có kiểm soát thể hiện trách nhiệm trong môi trường startup."
        }
      ]
    }
  ]
};
