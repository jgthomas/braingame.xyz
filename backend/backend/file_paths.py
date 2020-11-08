import os

CONTAINER_ROOT = "/app/backend"

current_root = os.path.dirname(os.path.realpath("__file__"))

local = {
    "nine": "backend/static/wordlist/nine_letter_words.txt",
    "dict": "backend/static/wordlist/sowpods.txt",
    "common": "backend/static/wordlist/50k.txt",
}

container = {
    "nine": "static/wordlist/nine_letter_words.txt",
    "dict": "static/wordlist/sowpods.txt",
    "common": "static/wordlist/50k.txt",
}


def set_file_path(current_root, filename):
    files = container if current_root == CONTAINER_ROOT else local
    return os.path.join(current_root, files[filename])


NINE_LETTER_WORDS = set_file_path(current_root, "nine")
DICTIONARY = set_file_path(current_root, "dict")
COMMON_WORDS = set_file_path(current_root, "common")
