path = r"d:\mytest\imageconvert\src\components\tool-landing-page.tsx"
with open(path, encoding="utf-8") as f:
    text = f.read()
text = text.replace("</motion>", "</div>")
text = text.replace("<motion ", "<div ")
with open(path, "w", encoding="utf-8") as f:
    f.write(text)
print("fixed", path)
