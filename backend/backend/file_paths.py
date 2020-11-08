import os

CONTAINER_ROOT = "/app/backend"
CONTAINER_PATH = "static/wordlist"
LOCAL_PATH = "backend/static/wordlist"

NINE_LETTERS = "nine_letter_words.txt"
SOWPODS = "sowpods.txt"
COMMON = "50k.txt"

current_root = os.path.dirname(os.path.realpath("__file__"))

local = {
    "nine": f"{LOCAL_PATH}/{NINE_LETTERS}",
    "dict": f"{LOCAL_PATH}/{SOWPODS}",
    "common": f"{LOCAL_PATH}/{COMMON}",
}

container = {
    "nine": f"{CONTAINER_PATH}/{NINE_LETTERS}",
    "dict": f"{CONTAINER_PATH}/{SOWPODS}",
    "common": f"{CONTAINER_PATH}/{COMMON}",
}


def set_file_path(current_root, filename):
    files = container if current_root == CONTAINER_ROOT else local
    return os.path.join(current_root, files[filename])


NINE_LETTER_WORDS = set_file_path(current_root, "nine")
DICTIONARY = set_file_path(current_root, "dict")
COMMON_WORDS = set_file_path(current_root, "common")
