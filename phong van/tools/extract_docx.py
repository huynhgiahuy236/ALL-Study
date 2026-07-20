import json
import sys
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"


def text_of(node):
    parts = []
    for item in node.iter():
        if item.tag == W + "t" and item.text:
            parts.append(item.text)
        elif item.tag == W + "tab":
            parts.append("\t")
        elif item.tag == W + "br":
            parts.append("\n")
    return "".join(parts).strip()


def main():
    source = Path(sys.argv[1])
    destination = Path(sys.argv[2])
    with zipfile.ZipFile(source) as archive:
        root = ET.fromstring(archive.read("word/document.xml"))
    body = root.find(W + "body")
    blocks = []
    for child in body:
        if child.tag == W + "p":
            value = text_of(child)
            if value:
                blocks.append({"type": "paragraph", "text": value})
        elif child.tag == W + "tbl":
            rows = []
            for row in child.findall(W + "tr"):
                rows.append([text_of(cell) for cell in row.findall(W + "tc")])
            blocks.append({"type": "table", "rows": rows})
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(json.dumps(blocks, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps({
        "blocks": len(blocks),
        "paragraphs": sum(b["type"] == "paragraph" for b in blocks),
        "tables": sum(b["type"] == "table" for b in blocks),
        "table_rows": sum(len(b["rows"]) for b in blocks if b["type"] == "table"),
        "output": str(destination),
    }, ensure_ascii=False))


if __name__ == "__main__":
    main()
