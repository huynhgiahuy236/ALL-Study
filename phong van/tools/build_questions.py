import json
import re
import sys
from pathlib import Path


def main():
    blocks = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    paragraphs = [(i, b["text"]) for i, b in enumerate(blocks) if b["type"] == "paragraph"]
    categories = [
        "Tư duy logic, OOP và cấu trúc dữ liệu",
        "Dart và Flutter",
        "REST API, JSON và bất đồng bộ",
        "UI/UX, quản lý state và hiệu năng",
        "Tình huống kỹ thuật và môi trường startup",
    ]
    exams = []
    issues = []
    for exam_id in range(1, 4):
        start = next(i for i, text in paragraphs if text == f"ĐỀ THI THỬ SỐ {exam_id}")
        answer_heading = next(i for i, text in paragraphs if text == f"ĐÁP ÁN VÀ GIẢI THÍCH – ĐỀ {exam_id}")
        answer_table = next(b for i, b in enumerate(blocks) if i > answer_heading and b["type"] == "table")
        answers = {}
        for row in answer_table["rows"][1:]:
            for cell in row:
                match = re.fullmatch(r"(\d+)\.\s*([A-D])", cell)
                if match:
                    answers[int(match.group(1))] = match.group(2)
        explanations = {}
        for i, text in paragraphs:
            if i <= answer_heading:
                continue
            if exam_id < 3 and text == f"ĐỀ THI THỬ SỐ {exam_id + 1}":
                break
            match = re.fullmatch(r"Câu\s+(\d+)\s+[–-]\s+([A-D]):\s*(.+)", text, re.S)
            if match:
                explanations[int(match.group(1))] = {
                    "answer": match.group(2), "text": match.group(3).strip()
                }
        section = 0
        questions = []
        in_exam = False
        for i, text in paragraphs:
            if i == start:
                in_exam = True
                continue
            if not in_exam or i >= answer_heading:
                continue
            section_match = re.match(r"Phần\s+([1-5]):", text)
            if section_match:
                section = int(section_match.group(1))
                continue
            question_match = re.match(r"Câu\s+(\d+)\.\s*(.+)", text, re.S)
            if not question_match:
                continue
            number = int(question_match.group(1))
            following = [t for j, t in paragraphs if i < j < answer_heading][:4]
            options = []
            for expected, value in zip("ABCD", following):
                option_match = re.match(r"○\s*([A-D])\.\s*(.*)", value, re.S)
                if not option_match or option_match.group(1) != expected:
                    issues.append(f"Đề {exam_id}, câu {number}: lựa chọn {expected} không hợp lệ")
                    continue
                options.append(option_match.group(2).strip())
            explanation = explanations.get(number)
            if not explanation:
                issues.append(f"Đề {exam_id}, câu {number}: thiếu giải thích")
                explanation = {"answer": answers.get(number, ""), "text": ""}
            if answers.get(number) != explanation["answer"]:
                issues.append(f"Đề {exam_id}, câu {number}: đáp án bảng và giải thích không khớp")
            questions.append({
                "id": f"e{exam_id}q{number}",
                "number": number,
                "categoryId": section,
                "category": categories[section - 1] if section else "",
                "question": question_match.group(2).strip(),
                "options": options,
                "answer": answers.get(number, ""),
                "explanation": explanation["text"],
            })
        exams.append({
            "id": exam_id,
            "title": f"Đề thi thử số {exam_id}",
            "durationMinutes": 50,
            "questions": questions,
        })
    payload = {"categories": categories, "exams": exams}
    destination = Path(sys.argv[2])
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(
        "const QUIZ_DATA = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    report = {
        "examCount": len(exams),
        "questionCounts": [len(e["questions"]) for e in exams],
        "optionCountsValid": all(len(q["options"]) == 4 for e in exams for q in e["questions"]),
        "answerCounts": [sum(bool(q["answer"]) for q in e["questions"]) for e in exams],
        "explanationCounts": [sum(bool(q["explanation"]) for q in e["questions"]) for e in exams],
        "issues": issues,
    }
    print(json.dumps(report, ensure_ascii=False, indent=2))
    if issues or report["questionCounts"] != [50, 50, 50] or not report["optionCountsValid"]:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
