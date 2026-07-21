(() => {
  const categories = QUIZ_DATA.categories;
  const letters = "ABCD";

  function buildExam(id, title, difficulty, rows) {
    const questions = rows.map((row, index) => {
      const [categoryId, question, sourceOptions, sourceAnswer, explanation, sourceCustomExplanations] = row;
      const targetSequences = {
        4: "DACBBCADABDCACBDBACDDBACACDBABCDACBDBACADCBDABACDB",
        5: "CBADDBACACDBABDCBDACCADBDBACADCBABDACDBCADABCDABCA"
      };
      const sourceAnswerIndex = letters.indexOf(sourceAnswer);
      const targetAnswerIndex = letters.indexOf(targetSequences[id][index]);
      const permutation = Array(4);
      permutation[targetAnswerIndex] = sourceAnswerIndex;
      const remainingSources = [0, 1, 2, 3].filter(item => item !== sourceAnswerIndex);
      const rotation = (index * 2 + id) % 3;
      const rotatedSources = remainingSources.slice(rotation).concat(remainingSources.slice(0, rotation));
      [0, 1, 2, 3].filter(item => item !== targetAnswerIndex).forEach((targetIndex, offset) => {
        permutation[targetIndex] = rotatedSources[offset];
      });
      const options = permutation.map(sourceIndex => sourceOptions[sourceIndex]);
      const answer = letters[permutation.indexOf(sourceAnswerIndex)];
      const customExplanations = sourceCustomExplanations
        ? permutation.map(sourceIndex => sourceCustomExplanations[sourceIndex].replace(/^[A-D] (?:đúng|sai):\s*/i, ""))
        : null;
      const correctOption = options[letters.indexOf(answer)];
      const optionExplanations = customExplanations || options.map((option, optionIndex) => {
        const letter = letters[optionIndex];
        if (letter === answer) return explanation;
        return `“${option}” không phù hợp. ${explanation} Vì vậy đáp án đúng là ${answer}. “${correctOption}”.`;
      });
      return {
        id: `e${id}q${index + 1}`,
        number: index + 1,
        categoryId,
        category: categories[categoryId - 1],
        question,
        options,
        answer,
        explanation,
        optionExplanations
      };
    });
    return { id, title, difficulty, durationMinutes: 50, questions };
  }

  const easyRows = [
    // Phần 1 — Tư duy logic, OOP và cấu trúc dữ liệu
    [1, "Đoạn mã `int total = 0; for (final n in [1, 2, 3]) { total += n; }` cho total bằng bao nhiêu?", ["3", "6", "5", "7"], "B", "Vòng lặp cộng lần lượt 1, 2 và 3 nên total = 0 + 1 + 2 + 3 = 6.", ["A sai vì 1 + 2 + 3 không bằng 3.", "B đúng vì 0 + 1 + 2 + 3 = 6.", "C sai vì tổng ba phần tử không bằng 5.", "D sai vì vòng lặp không cộng thêm giá trị nào để được 7."]],
    [1, "Queue thông thường lấy phần tử theo nguyên tắc nào?", ["LIFO", "Ngẫu nhiên", "FIFO", "Theo giá trị lớn nhất"], "C", "Queue hoạt động theo FIFO: phần tử vào trước được lấy ra trước."],
    [1, "Đóng gói (encapsulation) trong OOP giúp ích chủ yếu điều gì?", ["Che giấu trạng thái nội bộ sau giao diện rõ ràng", "Tăng tốc độ mạng", "Tự động tạo database", "Loại bỏ mọi constructor"], "A", "Encapsulation bảo vệ trạng thái nội bộ và kiểm soát cách mã bên ngoài truy cập hoặc thay đổi nó."],
    [1, "Cấu trúc nào phù hợp nhất để ánh xạ userId sang tên người dùng?", ["Stack", "Queue", "Set", "Map"], "D", "Map lưu dữ liệu theo cặp key-value, phù hợp để dùng userId làm khóa."],
    [1, "Tìm kiếm tuyến tính trong trường hợp xấu nhất có độ phức tạp nào?", ["O(1)", "O(n)", "O(log n)", "O(n²)"], "B", "Linear search có thể phải duyệt đủ n phần tử nên có độ phức tạp O(n)."],
    [1, "Với `n = 6`, biểu thức nào trả về true để xác nhận n là số chẵn?", ["n / 2 == 0", "n * 2 == 0", "n ~/ 2 == 0", "n % 2 == 0"], "D", "Phép chia lấy dư cho 2 bằng 0 là điều kiện kiểm tra số chẵn.", ["`n / 2 == 0` sai: 6 / 2 = 3 nên 3 == 0 là false.", "`n * 2 == 0` sai: 6 * 2 = 12 nên 12 == 0 là false.", "`n ~/ 2 == 0` sai: 6 ~/ 2 = 3 nên 3 == 0 là false.", "`n % 2 == 0` đúng: 6 % 2 = 0 nên biểu thức trả về true."]],
    [1, "Trong OOP, lớp `Dog` dùng lại thuộc tính và phương thức của lớp `Animal` thể hiện đặc tính nào?", ["Kế thừa", "Đóng gói", "Sắp xếp", "Tuần tự hóa"], "A", "Kế thừa cho phép lớp con dùng lại và mở rộng hành vi của lớp cha."],
    [1, "Sau `final values = [10, 20]; values.add(30);`, `values.length` bằng bao nhiêu?", ["1", "2", "4", "3"], "D", "List ban đầu có 2 phần tử; add thêm một phần tử nên length bằng 3.", ["A sai vì List không bị rút còn một phần tử.", "B sai vì đây là độ dài trước khi gọi add.", "C sai vì chỉ có một phần tử được thêm.", "D đúng vì 2 + 1 = 3 phần tử."]],
    [1, "Giá trị của `true && false` là gì?", ["true", "false", "null", "Lỗi"], "B", "Phép AND chỉ trả về true khi cả hai vế đều true; ở đây vế thứ hai là false."],
    [1, "Kiểu nào cho phép một chuỗi nhận giá trị null trong Dart Null Safety?", ["String!", "String", "String?", "Nullable<String>"], "C", "Dấu ? sau kiểu tạo kiểu nullable, nên String? có thể nhận null."],

    // Phần 2 — Dart và Flutter
    [2, "Widget nào phù hợp khi giao diện có dữ liệu thay đổi sau khi người dùng bấm nút?", ["StatelessWidget", "StatefulWidget", "Placeholder", "Icon"], "B", "StatefulWidget có State có thể thay đổi và yêu cầu Flutter dựng lại giao diện."],
    [2, "Phương thức nào mô tả giao diện của một widget?", ["dispose", "mainAxis", "build", "pop"], "C", "Phương thức build trả về cây widget biểu diễn giao diện hiện tại."],
    [2, "Trong State, gọi hàm nào để báo dữ liệu đã đổi và cần dựng lại UI?", ["setState", "setData", "refreshApp", "notifyUI"], "A", "setState đánh dấu State là dirty để Flutter lên lịch build lại."],
    [2, "Widget nào sắp xếp các widget con theo chiều ngang?", ["Column", "Stack", "ListView", "Row"], "D", "Row dùng trục chính theo chiều ngang."],
    [2, "Danh sách dài nên dùng cách nào để chỉ tạo item khi cần?", ["ListView.builder", "Column chứa tất cả item", "Stack", "Text.rich"], "A", "ListView.builder tạo item theo nhu cầu, phù hợp danh sách dài."],
    [2, "`initState()` của một State thường được gọi bao nhiêu lần trong vòng đời State đó?", ["Mỗi lần build", "Một lần", "Mỗi lần setState", "Không bao giờ"], "B", "initState được gọi một lần khi State được chèn vào cây."],
    [2, "TextEditingController nên được giải phóng trong phương thức nào?", ["build", "initState", "dispose", "didUpdateWidget"], "C", "dispose là nơi giải phóng controller khi State không còn được sử dụng."],
    [2, "Hàm được đánh dấu `async` thường trả kết quả qua kiểu nào?", ["Future", "Widget", "BuildContext", "Key"], "A", "Kết quả bất đồng bộ được biểu diễn bằng Future."],
    [2, "Lệnh nào thường đóng route hiện tại và quay lại màn hình trước?", ["Navigator.push", "setState", "runApp", "Navigator.pop"], "D", "Navigator.pop loại route hiện tại khỏi navigation stack."],
    [2, "Khác biệt cơ bản giữa `final` và `const` là gì?", ["final luôn nullable", "const chỉ dùng cho String", "final gán một lần; const phải là hằng compile-time", "Không có khác biệt"], "C", "final chỉ yêu cầu gán một lần, còn const yêu cầu giá trị được xác định tại compile time."],

    // Phần 3 — REST API, JSON và bất đồng bộ
    [3, "HTTP method nào thường dùng để lấy danh sách phần thưởng?", ["GET", "DELETE", "PATCH", "POST"], "A", "GET dùng để truy xuất biểu diễn của tài nguyên."],
    [3, "Hàm `jsonDecode` thường chuyển chuỗi JSON thành gì?", ["Ảnh", "Cấu trúc Dart như Map/List", "Widget", "File APK"], "B", "jsonDecode phân tích chuỗi JSON thành Map, List và các giá trị Dart tương ứng."],
    [3, "HTTP 201 thường biểu thị điều gì?", ["Chưa đăng nhập", "Không tìm thấy", "Tài nguyên đã được tạo", "Lỗi server"], "C", "201 Created cho biết request đã tạo tài nguyên thành công."],
    [3, "HTTP 400 thường có nghĩa gì?", ["Request không hợp lệ", "Thành công", "Không có nội dung", "Chuyển hướng vĩnh viễn"], "A", "400 Bad Request cho biết server không thể xử lý do dữ liệu hoặc cú pháp request không hợp lệ."],
    [3, "Bearer access token thường được gửi trong header nào?", ["Accept-Language", "Content-Length", "Host", "Authorization"], "D", "Bearer token thường nằm trong header Authorization: Bearer <token>."],
    [3, "Khi gọi API có thể phát sinh exception, nên dùng cấu trúc nào để xử lý lỗi?", ["for-loop", "try-catch", "switch theme", "const constructor"], "B", "try-catch cho phép bắt exception và chuyển thành trạng thái lỗi phù hợp cho UI."],
    [3, "Trong lúc chờ API phản hồi, UI nên làm gì?", ["Đóng ứng dụng", "Hiện dữ liệu giả như đã thành công", "Hiển thị trạng thái loading", "Khóa vĩnh viễn màn hình"], "C", "Loading indicator cho người dùng biết request đang được xử lý."],
    [3, "Thiết lập timeout cho request giúp ích gì?", ["Giới hạn thời gian chờ", "Bảo đảm mạng luôn nhanh", "Tự sửa mọi lỗi server", "Không cần xử lý exception"], "A", "Timeout ngăn ứng dụng chờ vô hạn và cho phép báo lỗi hoặc thử lại có kiểm soát."],
    [3, "HTTP method nào thường dùng để tạo một tài nguyên mới?", ["HEAD", "GET", "DELETE", "POST"], "D", "POST thường gửi dữ liệu để server tạo hoặc xử lý một tài nguyên mới."],
    [3, "Nếu field `avatarUrl` có thể thiếu trong JSON, model Dart nên khai báo thế nào?", ["int avatarUrl", "String? avatarUrl", "bool avatarUrl", "late String avatarUrl mà không kiểm tra"], "B", "String? phản ánh field có thể không tồn tại hoặc mang giá trị null."],

    // Phần 4 — UI/UX, quản lý state và hiệu năng
    [4, "Hai widget trong Row bị tràn chiều ngang. Giải pháp thường nên thử là gì?", ["Thêm nhiều padding", "Bọc nội dung linh hoạt bằng Expanded/Flexible", "Tăng cỡ chữ", "Gọi API lại"], "B", "Expanded hoặc Flexible giúp con tuân theo không gian còn lại của Row."],
    [4, "Widget nào tích hợp tốt với validation cho một trường nhập liệu trong Form?", ["TextFormField", "Divider", "CircularProgressIndicator", "Hero"], "A", "TextFormField hỗ trợ validator và phối hợp với FormState."],
    [4, "API trả về danh sách rỗng. UI phù hợp nhất là gì?", ["Màn hình trắng", "Thông báo lỗi server", "Empty state giải thích và gợi ý hành động", "Loading vô hạn"], "C", "Empty state giúp người dùng hiểu chưa có dữ liệu và biết bước tiếp theo."],
    [4, "Provider, BLoC hoặc Riverpod thường được dùng để làm gì?", ["Nén ảnh", "Biên dịch APK", "Vẽ icon", "Quản lý state và tách logic khỏi widget"], "D", "Các giải pháp này giúp quản lý state và tách business logic khỏi presentation."],
    [4, "Dùng constructor `const` cho widget bất biến có lợi ích gì?", ["Giảm cấp phát không cần thiết", "Tự gọi API", "Bỏ qua null safety", "Làm mọi widget thành StatefulWidget"], "A", "Const cho phép tái sử dụng instance bất biến và hỗ trợ Flutter tối ưu cây widget."],
    [4, "Key trong danh sách có item thay đổi thứ tự giúp Flutter làm gì?", ["Tăng tốc mạng", "Ghép đúng widget/state với item", "Tạo database", "Đổi theme"], "B", "Key ổn định giúp framework nhận diện item khi danh sách được sắp xếp lại."],
    [4, "Thông báo lỗi form tốt nên có đặc điểm nào?", ["Chỉ đổi màu đỏ", "Ẩn nguyên nhân", "Nói rõ lỗi và cách sửa", "Dùng thuật ngữ nội bộ khó hiểu"], "C", "Thông báo có thể hành động giúp người dùng biết chính xác cần sửa gì."],
    [4, "Vùng chạm của nút quá nhỏ gây vấn đề chính nào?", ["Khó thao tác và giảm khả năng tiếp cận", "Tăng dung lượng JSON", "Sai status code", "Mất token"], "A", "Touch target đủ lớn giúp người dùng chạm chính xác, kể cả người có hạn chế vận động."],
    [4, "Debounce ô tìm kiếm nhằm mục đích gì?", ["Gửi request sau mỗi ký tự ngay lập tức", "Xóa cache", "Tăng số lần rebuild", "Giảm request khi người dùng đang gõ liên tục"], "D", "Debounce chờ người dùng ngừng gõ một khoảng ngắn trước khi thực hiện tìm kiếm."],
    [4, "Ảnh mạng trong danh sách nên được xử lý thế nào để cuộn mượt hơn?", ["Tải ảnh gốc rất lớn", "Dùng cache và kích thước ảnh phù hợp", "Tắt scrolling", "Tạo lại ảnh mỗi frame"], "B", "Cache và giải mã ảnh gần kích thước hiển thị giúp giảm mạng, bộ nhớ và công việc mỗi frame."],

    // Phần 5 — Tình huống kỹ thuật và môi trường startup
    [5, "Yêu cầu từ phòng ban còn mơ hồ. Trước khi code, bạn nên làm gì?", ["Tự đoán toàn bộ", "Làm rõ mục tiêu và tiêu chí hoàn thành", "Bỏ task", "Code bản lớn nhất có thể"], "B", "Làm rõ yêu cầu sớm giúp giảm sai kỳ vọng và rework."],
    [5, "Một bug chỉ xảy ra trên thiết bị thật. Bước đầu hợp lý là gì?", ["Thu thập bước tái hiện, log và thông tin thiết bị", "Viết lại toàn app", "Xóa repository", "Kết luận do người dùng"], "A", "Bằng chứng tái hiện và môi trường cụ thể giúp khoanh vùng nguyên nhân."],
    [5, "Phát hiện access token thật đã commit lên Git. Việc ưu tiên là gì?", ["Đổi tên file", "Ẩn dòng code", "Xóa local rồi thôi", "Thu hồi/rotate token và báo người phụ trách"], "D", "Secret đã vào lịch sử phải được coi là đã lộ; cần thu hồi hoặc rotate ngay."],
    [5, "Mentor yêu cầu sửa code sau review. Phản hồi phù hợp là gì?", ["Tranh luận mà không đọc góp ý", "Bỏ qua", "Hiểu lý do, sửa và hỏi lại điểm chưa rõ", "Xóa comment review"], "C", "Code review là vòng học hỏi và kiểm soát chất lượng; cần hiểu và xử lý góp ý."],
    [5, "Backend đổi tên field làm app lỗi. Bạn nên làm gì?", ["Phối hợp xác nhận contract và xử lý tương thích", "Đổ lỗi công khai", "Hard-code dữ liệu giả", "Bỏ mọi kiểm tra null"], "A", "Thay đổi schema cần được xác nhận giữa frontend và backend, đồng thời có kế hoạch tương thích."],
    [5, "Deadline gần nhưng còn lỗi nghiêm trọng trong luồng đổi thưởng. Bạn nên làm gì?", ["Giấu lỗi", "Merge ngay", "Xóa test", "Báo sớm mức ảnh hưởng và đề xuất giảm scope/hoãn phần rủi ro"], "D", "Minh bạch rủi ro giúp nhóm đưa ra quyết định phát hành đúng đắn."],
    [5, "Trước khi dùng một package Flutter mới, nên kiểm tra gì?", ["Chỉ số lượt tải", "Tài liệu, bảo trì, license và vấn đề bảo mật", "Màu logo", "Tên package ngắn hay dài"], "B", "Chất lượng tài liệu, trạng thái duy trì, license và bảo mật quyết định rủi ro phụ thuộc."],
    [5, "Sau khi hoàn thành tính năng, tài liệu kỹ thuật liên quan nên được làm gì?", ["Xóa đi", "Giữ thông tin cũ", "Cập nhật theo hành vi và quy trình mới", "Chỉ nhắn miệng"], "C", "Tài liệu phải phản ánh hệ thống hiện tại để người khác có thể vận hành và phát triển tiếp."],
    [5, "Khi gặp Git conflict, cách xử lý tốt là gì?", ["Đọc cả hai thay đổi, trao đổi nếu cần rồi test lại", "Chọn ngẫu nhiên một phía", "Xóa repository", "Force push ngay"], "A", "Giải conflict phải bảo toàn ý định của cả hai thay đổi và được kiểm tra lại."],
    [5, "Bạn hoàn thành task sớm. Hành động phù hợp trong team startup là gì?", ["Tự triển khai production", "Nghỉ mà không báo", "Refactor toàn hệ thống", "Báo kết quả, cập nhật tài liệu và nhận việc ưu tiên tiếp theo"], "D", "Chủ động có kiểm soát thể hiện trách nhiệm mà vẫn giữ đúng ưu tiên của nhóm."]
  ];

  const hardRows = [
    // Phần 1 — Tư duy logic, OOP và cấu trúc dữ liệu
    [1, "Cần kiểm tra một userId đã tồn tại trong tập hàng chục nghìn ID. Cấu trúc nào thường cho lookup trung bình O(1)?", ["List", "Queue", "Set", "Linked list"], "C", "Set dùng hashing để kiểm tra membership với độ phức tạp trung bình O(1)."],
    [1, "Binary search trên `[2, 5, 8, 12, 16]` cần nhiều nhất bao nhiêu lần so sánh để tìm 12 theo cách chọn phần tử giữa?", ["2", "1", "4", "5"], "A", "Lần một so sánh với 8 và đi sang phải; lần hai so sánh với 12 và tìm thấy.", ["A đúng: so sánh 8 rồi 12, tổng cộng 2 lần.", "B sai vì lần đầu gặp 8, chưa phải 12.", "C sai vì binary search loại nửa phạm vi nên không cần 4 lần.", "D sai vì không cần duyệt tuần tự cả 5 phần tử."]],
    [1, "Đoạn mã gọi `animal.speak()` nhưng biến animal có thể trỏ tới Dog hoặc Cat và chạy implementation tương ứng. Đây là gì?", ["Encapsulation", "Polymorphism", "Serialization", "Memoization"], "B", "Polymorphism cho phép cùng một giao diện gọi hành vi khác nhau theo kiểu thực tế của object."],
    [1, "Để một value object làm key của Map ổn định, khi override `==` còn phải làm gì?", ["Override hashCode nhất quán", "Thêm setState", "Dùng GlobalKey", "Luôn đổi object sau khi insert"], "A", "Hai object bằng nhau theo == phải có cùng hashCode để collection dựa trên hash hoạt động đúng."],
    [1, "Hai vòng lặp lồng nhau, vòng ngoài chạy n lần và vòng trong chạy n/2 lần. Độ phức tạp Big-O là gì?", ["O(log n)", "O(n)", "O(n log n)", "O(n²)"], "D", "n × n/2 = n²/2; bỏ hằng số theo Big-O nên còn O(n²).", ["A sai vì số phép toán không tăng theo logarit.", "B sai vì có hai vòng lặp phụ thuộc n.", "C sai vì vòng trong không phải thao tác log n.", "D đúng vì n × n/2 có bậc n²."]],
    [1, "Một hàm đệ quy không có base case phù hợp có rủi ro chính gì?", ["Tự chuyển thành vòng lặp", "Stack overflow", "Tự trả null", "Compile nhanh hơn"], "B", "Không đạt điều kiện dừng, các lời gọi tiếp tục chất lên call stack và có thể gây stack overflow."],
    [1, "Nguyên tắc Dependency Inversion khuyên tầng nghiệp vụ nên phụ thuộc vào đâu?", ["Widget cụ thể", "HTTP package cụ thể", "Abstraction/interface", "Biến global mutable"], "C", "Business logic nên phụ thuộc abstraction để giảm coupling với chi tiết hạ tầng."],
    [1, "Sau `final a = [1, 2]; final b = a; b.add(3);`, giá trị của `a.length` là gì?", ["3", "2", "1", "Lỗi compile"], "A", "a và b cùng tham chiếu một List; thêm qua b cũng làm List nhìn từ a có 3 phần tử.", ["A đúng vì a và b trỏ cùng một List đã có thêm phần tử 3.", "B sai vì 2 là độ dài trước khi b.add(3).", "C sai vì không phần tử nào bị xóa.", "D sai vì final ngăn gán lại biến, không ngăn thay đổi nội dung List."]],
    [1, "Muốn bảo đảm một class chỉ có một lý do để thay đổi, đang áp dụng nguyên tắc nào?", ["Open/Closed", "Liskov Substitution", "Interface Segregation", "Single Responsibility"], "D", "Single Responsibility yêu cầu một class tập trung vào một trách nhiệm rõ ràng."],
    [1, "Một thuật toán cần vừa giữ thứ tự chèn vừa loại phần tử trùng. Lựa chọn khái niệm phù hợp nhất là gì?", ["Stack", "LinkedHashSet", "PriorityQueue", "Binary tree bất kỳ"], "B", "LinkedHashSet kết hợp tính duy nhất của Set với việc duy trì thứ tự chèn."],

    // Phần 2 — Dart và Flutter
    [2, "Sau một `await`, trước khi gọi `setState`, cần kiểm tra gì để tránh lỗi khi màn hình đã bị đóng?", ["context.size", "widget.key", "mounted", "kDebugMode"], "C", "mounted xác nhận State vẫn còn gắn trong widget tree trước khi gọi setState."],
    [2, "Vì sao giữ BuildContext rồi dùng sau một khoảng async có thể nguy hiểm?", ["Context luôn null", "Element tương ứng có thể đã unmount", "Context làm API chậm", "Context chỉ dùng cho màu"], "B", "Sau async gap, widget có thể đã rời cây nên context không còn hợp lệ cho navigation hoặc inherited lookup."],
    [2, "Danh sách item có state riêng và cho phép đổi thứ tự nên dùng loại key nào?", ["UniqueKey mới mỗi build", "Không cần key", "Random ValueKey", "ValueKey dựa trên ID ổn định"], "D", "ValueKey từ ID ổn định giúp Flutter gắn State đúng với item sau khi reorder."],
    [2, "`Future.wait([a(), b()])` thường hoàn thành khi nào?", ["Khi cả hai Future hoàn thành, hoặc báo lỗi theo chính sách error", "Ngay khi a bắt đầu", "Chỉ khi b trả null", "Không bao giờ"], "A", "Future.wait gom kết quả sau khi các Future hoàn thành; nếu có lỗi, Future tổng hợp hoàn thành với lỗi theo hành vi cấu hình."],
    [2, "Parse JSON rất lớn làm giật UI. Hướng xử lý phù hợp là gì?", ["Gọi setState nhiều hơn", "Dùng isolate/compute cho tác vụ CPU nặng", "Bọc trong Column", "Tăng animation"], "B", "Đưa công việc CPU nặng sang isolate giúp UI isolate giữ ngân sách khung hình."],
    [2, "Hai biểu thức `const Text('Hi')` giống hệt nhau có thể được Dart xử lý thế nào?", ["Luôn tạo State mới", "Luôn gây lỗi", "Canonicalize và dùng chung instance const", "Tự đổi thành String"], "C", "Các hằng const giống nhau có thể được canonicalize thành cùng một instance."],
    [2, "Trong Provider, khác biệt thực tế thường gặp giữa `read` và `watch` là gì?", ["read chỉ đọc không đăng ký rebuild; watch theo dõi thay đổi", "read gọi API; watch ghi file", "watch chỉ dùng trong dispose", "Không khác nhau"], "A", "watch đăng ký dependency để rebuild khi state đổi; read lấy giá trị hiện tại mà không theo dõi."],
    [2, "Một StreamSubscription được tạo trong State nhưng không hủy có thể gây gì?", ["Tự tối ưu memory", "Widget thành const", "HTTP 204", "Rò rỉ tài nguyên và callback sau dispose"], "D", "Subscription cần cancel trong dispose để tránh giữ tham chiếu và phát sự kiện vào State đã bị loại."],
    [2, "Khi chỉ một phần nhỏ màn hình phụ thuộc state, tối ưu rebuild tốt là gì?", ["setState ở root app", "Tách widget và chỉ subscribe vùng cần dữ liệu", "Dùng GlobalKey cho mọi widget", "Rebuild bằng Timer mỗi frame"], "B", "Thu hẹp phạm vi lắng nghe state giúp chỉ build lại subtree thực sự thay đổi."],
    [2, "`late final` phù hợp nhất với trường hợp nào?", ["Giá trị thay đổi liên tục", "Giá trị luôn null", "Khởi tạo muộn nhưng chỉ gán một lần trước khi đọc", "Thay thế mọi nullable type"], "C", "late trì hoãn khởi tạo còn final bảo đảm chỉ gán một lần; người viết code phải gán trước khi đọc."],

    // Phần 3 — REST API, JSON và bất đồng bộ
    [3, "Nhiều request cùng nhận 401 do token hết hạn. Thiết kế nào tránh gọi refresh token đồng thời nhiều lần?", ["Một cơ chế single-flight/lock dùng chung cho quá trình refresh", "Mỗi request tự refresh không giới hạn", "Xóa mọi header", "Retry liên tục không chờ"], "A", "Single-flight hoặc mutex cho phép các request chờ cùng một Future refresh rồi retry có kiểm soát."],
    [3, "Người dùng nhấn nút đổi thưởng hai lần. Biện pháp mạnh nhất để tránh tạo hai giao dịch là gì?", ["Chỉ đổi màu nút", "Idempotency key phía server kết hợp khóa nút phía client", "Tăng timeout", "Dùng GET thay POST"], "B", "Khóa UI giảm thao tác lặp, còn idempotency key bảo vệ ở server trước retry hoặc request trùng."],
    [3, "Request nào thường an toàn hơn để tự động retry khi lỗi mạng tạm thời?", ["POST thanh toán không idempotency", "Mọi request như nhau", "GET idempotent", "Upload lớn đã gửi một nửa"], "C", "GET có ngữ nghĩa idempotent nên retry cùng request không tạo thêm thay đổi trạng thái."],
    [3, "App hiển thị cache cũ ngay rồi âm thầm tải dữ liệu mới. Đây gần với chiến lược nào?", ["Cache-only", "No-store", "Write-through bắt buộc", "Stale-while-revalidate"], "D", "Stale-while-revalidate ưu tiên phản hồi nhanh bằng cache rồi cập nhật khi dữ liệu mới về."],
    [3, "API trả `price: \"free\"` trong khi DTO mong đợi số. Cách xử lý tốt là gì?", ["Parse phòng thủ, ghi nhận lỗi schema và chuyển sang trạng thái lỗi an toàn", "Ép cast và bỏ catch", "Hiển thị 0 mà không log", "Crash có chủ đích"], "A", "Client cần kiểm tra kiểu dữ liệu, quan sát lỗi contract và không tạo model thành công sai lệch."],
    [3, "Hai request tìm kiếm chạy song song; request cũ trả về sau request mới. Cách tránh UI hiển thị kết quả cũ là gì?", ["Luôn nhận response cuối cùng về mạng", "Dùng request id/cancel request cũ và chỉ nhận response mới nhất", "Xóa ô tìm kiếm", "Tăng số request"], "B", "Gắn sequence/request id hoặc cancel tác vụ cũ giúp bỏ qua response không còn tương ứng với query hiện tại."],
    [3, "Infinite scroll gửi hai request cho cùng page. Cách phòng tránh phù hợp là gì?", ["Nối cả hai response", "Xóa page hiện tại", "Dùng cờ isLoading/khóa theo page và loại ID trùng", "Tải toàn bộ dữ liệu mỗi lần"], "C", "Khóa request đang chạy và deduplicate theo ID tránh trang lặp và item trùng."],
    [3, "Exponential backoff có thêm jitter giúp ích gì?", ["Mã hóa token", "Đổi JSON thành XML", "Bảo đảm request luôn thành công", "Phân tán thời điểm retry, tránh nhiều client đánh server cùng lúc"], "D", "Jitter ngẫu nhiên hóa thời điểm retry để giảm hiệu ứng thundering herd."],
    [3, "HTTP 429 yêu cầu client xử lý thế nào?", ["Tôn trọng Retry-After/rate limit và backoff", "Retry vòng lặp ngay lập tức", "Xóa dữ liệu local", "Coi là 200"], "A", "429 Too Many Requests báo vượt giới hạn; client nên chờ theo Retry-After hoặc backoff."],
    [3, "Vì sao nên tách DTO khỏi domain model?", ["Để tăng số file bằng mọi giá", "Để schema API thay đổi không lan trực tiếp vào nghiệp vụ/UI", "Để bỏ validation", "Để không cần test"], "B", "DTO bám contract truyền tải, còn domain model biểu diễn khái niệm nghiệp vụ ổn định hơn."],

    // Phần 4 — UI/UX, quản lý state và hiệu năng
    [4, "RepaintBoundary hữu ích nhất trong trường hợp nào?", ["Mọi Text đều phải bọc", "Thay thế state management", "Cô lập vùng repaint đắt khỏi vùng thường xuyên thay đổi", "Tăng tốc API"], "C", "RepaintBoundary có thể ngăn repaint lan sang subtree không đổi, nhưng cần đo vì nó cũng có chi phí layer."],
    [4, "Muốn đo jank Flutter gần điều kiện phát hành, nên ưu tiên chế độ nào?", ["Profile mode", "Debug mode", "Hot reload mode", "Test mode không render"], "A", "Profile mode loại phần lớn overhead debug và vẫn cung cấp công cụ profiling."],
    [4, "Ở màn hình 60 Hz, một frame thường có ngân sách xấp xỉ bao nhiêu?", ["1 ms", "16,7 ms", "100 ms", "60 ms"], "B", "Một giây chia 60 frame xấp xỉ 16,7 ms mỗi frame.", ["A sai vì 1 ms tương ứng khoảng 1000 frame/giây.", "B đúng vì 1000 ms / 60 ≈ 16,7 ms.", "C sai vì 100 ms chỉ đạt khoảng 10 frame/giây.", "D sai vì 60 ms chỉ đạt khoảng 16,7 frame/giây."]],
    [4, "Một màn hình watch toàn bộ object lớn nhưng chỉ dùng `user.name`. Tối ưu nào phù hợp?", ["Rebuild cả MaterialApp", "Dùng Timer", "Tắt null safety", "Dùng selector chỉ theo dõi name"], "D", "Selector giới hạn dependency vào field cần thiết, tránh rebuild khi phần state không liên quan đổi."],
    [4, "Infinite scroll nên kích hoạt tải trang tiếp theo khi nào?", ["Mỗi lần build", "Khi gần cuối, chưa loading và còn trang tiếp", "Ngay khi mở app cho tất cả trang", "Sau mỗi animation frame"], "B", "Ba điều kiện gần cuối, chưa có request và còn dữ liệu giúp tránh request trùng hoặc vô hạn."],
    [4, "Optimistic update bị server từ chối. UI bắt buộc nên làm gì?", ["Giữ trạng thái sai", "Đóng app", "Rollback/reconcile và thông báo lỗi phù hợp", "Xóa tài khoản"], "C", "Optimistic UI phải có đường rollback hoặc đồng bộ lại để phản ánh trạng thái thật từ server."],
    [4, "Một icon button không có text cần hỗ trợ screen reader bằng cách nào?", ["Thêm semantic label/tooltip phù hợp", "Chỉ đổi màu", "Giảm vùng chạm", "Ẩn khỏi semantics"], "A", "Nhãn semantics mô tả mục đích nút cho công nghệ hỗ trợ."],
    [4, "Trong Flutter, layout của con chủ yếu được quyết định theo mô hình nào?", ["Con chọn kích thước bất kỳ", "Parent truyền constraints, child chọn size trong constraints", "Màn hình luôn 1080 px", "CSS cascade"], "B", "Flutter layout theo quy tắc constraints go down, sizes go up, parent sets position."],
    [4, "Hiển thị thumbnail 100×100 nhưng decode ảnh 4000×4000 gây vấn đề gì?", ["HTTP tự đổi thành 404", "Widget mất key", "Tốn bộ nhớ và thời gian decode không cần thiết", "Dart mất null safety"], "C", "Decode ảnh quá lớn so với kích thước hiển thị gây áp lực bộ nhớ và công việc raster."],
    [4, "AnimationController được tạo nhưng không dispose có nguy cơ gì?", ["Tự dừng hoàn hảo", "Tăng contrast", "Giảm kích thước APK", "Rò rỉ ticker/tài nguyên"], "D", "Controller giữ ticker và tài nguyên vòng đời, nên phải dispose cùng State."],

    // Phần 5 — Tình huống kỹ thuật và môi trường startup
    [5, "Backend chuẩn bị breaking change nhưng app cũ vẫn đang được người dùng sử dụng. Kế hoạch phù hợp nhất là gì?", ["Version contract hoặc duy trì tương thích trong giai đoạn chuyển đổi", "Đổi ngay không báo", "Bắt mọi người cài app mới trong một phút", "Bỏ monitoring"], "A", "Versioning hoặc backward compatibility cho phép client cũ và mới cùng hoạt động trong giai đoạn rollout."],
    [5, "CTO yêu cầu ‘làm app nhanh hơn’ nhưng chưa có chỉ số. Bước đầu nên làm gì?", ["Refactor toàn bộ", "Xác định luồng, baseline và mục tiêu đo được", "Thêm isolate ở mọi nơi", "Bỏ animation bất kỳ"], "B", "Không có phạm vi và baseline thì không thể biết thay đổi có giải quyết đúng vấn đề hay không."],
    [5, "Production lỗi diện rộng ngay sau release. Ưu tiên đầu tiên là gì?", ["Viết postmortem trước", "Tìm người chịu lỗi", "Giảm tác động bằng rollback/feature flag và đánh giá phạm vi", "Tiếp tục deploy tính năng khác"], "C", "Incident response ưu tiên khôi phục dịch vụ và giới hạn ảnh hưởng trước khi điều tra dài hạn."],
    [5, "Một teammate đề xuất kiến trúc rất phức tạp cho tính năng thử nghiệm nhỏ. Nên đánh giá thế nào?", ["Chọn phương án nhiều pattern nhất", "Luôn từ chối kiến trúc", "Viết lại framework", "Cân bằng giá trị, rủi ro, khả năng đảo ngược và chi phí bảo trì"], "D", "Kiến trúc phù hợp phải tương xứng với vòng đời và rủi ro thực tế của tính năng."],
    [5, "Bản cập nhật thay đổi schema dữ liệu local. Trước khi phát hành cần gì?", ["Migration có test với dữ liệu phiên bản cũ và phương án rollback", "Xóa dữ liệu mọi người dùng", "Chỉ test cài mới", "Đổi tên app"], "A", "Migration phải bảo vệ dữ liệu hiện hữu và được kiểm tra trên đường nâng cấp thật."],
    [5, "Bug hiếm chưa tái hiện được. Cách tiến bộ tốt nhất là gì?", ["Sửa ngẫu nhiên", "Bổ sung logging có ngữ cảnh, crash reporting và điều kiện môi trường", "Đóng issue", "Catch rồi bỏ qua mọi lỗi"], "B", "Observability cung cấp bằng chứng để khoanh vùng bug không dễ tái hiện."],
    [5, "API trả thêm dữ liệu cá nhân mà màn hình không dùng. Team mobile nên làm gì?", ["Log toàn bộ", "Lưu vĩnh viễn", "Đề nghị tối thiểu hóa payload và không lưu/log dữ liệu thừa", "Chia sẻ vào analytics mặc định"], "C", "Data minimization giảm bề mặt rủi ro riêng tư và bảo mật."],
    [5, "Task có vùng kỹ thuật chưa rõ nên estimate dao động lớn. Cách xử lý tốt là gì?", ["Cam kết số nhỏ nhất", "Không estimate bao giờ", "Nhân mười không giải thích", "Làm spike có giới hạn rồi cập nhật estimate và rủi ro"], "D", "Technical spike biến bất định thành thông tin để estimate có cơ sở."],
    [5, "Muốn phát hành tính năng rủi ro cho một nhóm nhỏ trước. Cơ chế phù hợp là gì?", ["Feature flag và rollout theo phần trăm có monitoring", "Force update toàn bộ", "Hard-code theo tên người dùng", "Tắt analytics"], "A", "Feature flag hỗ trợ rollout dần, quan sát chỉ số và rollback nhanh."],
    [5, "Review phát hiện bug có thể tạo giao dịch trùng nhưng deadline rất gần. Nên làm gì?", ["Approve vì gần deadline", "Chặn merge hoặc tắt luồng rủi ro, báo rõ tác động và sửa trước phát hành", "Ẩn comment", "Merge rồi hy vọng"], "B", "Lỗi ảnh hưởng tính toàn vẹn giao dịch phải được xử lý hoặc cô lập trước khi phát hành."]
  ];

  QUIZ_DATA.exams.push(
    buildExam(4, "Đề thi thử số 4 · Dễ", "easy", easyRows),
    buildExam(5, "Đề thi thử số 5 · Khó", "hard", hardRows)
  );
})();
