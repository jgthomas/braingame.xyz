import os

file_dir = os.path.dirname(os.path.realpath("__file__"))

local_path = {
    "nine": "backend/static/wordlist/nine_letter_words.txt",
    "dict": "backend/static/wordlist/sowpods.txt",
    "common": "backend/static/wordlist/50k.txt",
}

continer_path = {
    "nine": "static/wordlist/nine_letter_words.txt",
    "dict": "static/wordlist/sowpods.txt",
    "common": "static/wordlist/50k.txt",
}

if file_dir == "/app/backend":
    files = continer_path
else:
    files = local_path

NINE_LETTER_WORDS = os.path.join(file_dir, files["nine"])
DICTIONARY = os.path.join(file_dir, files["dict"])
COMMON_WORDS = os.path.join(file_dir, files["common"])
