import os

CONTAINER_ROOT = "/app/backend"
CONTAINER_PATH = "static/wordlist"
LOCAL_PATH = "backend/static/wordlist"

current_root = os.path.dirname(os.path.realpath("__file__"))

local = {
    "nine": f"{LOCAL_PATH}/nine_letter_words.txt",
    "dict": f"{LOCAL_PATH}/sowpods.txt",
    "common": f"{LOCAL_PATH}/50k.txt",
}

container = {
    "nine": f"{CONTAINER_PATH}/nine_letter_words.txt",
    "dict": f"{CONTAINER_PATH}/sowpods.txt",
    "common": f"{CONTAINER_PATH}/50k.txt",
}


def set_file_path(current_root, filename):
    files = container if current_root == CONTAINER_ROOT else local
    return os.path.join(current_root, files[filename])


NINE_LETTER_WORDS = set_file_path(current_root, "nine")
DICTIONARY = set_file_path(current_root, "dict")
COMMON_WORDS = set_file_path(current_root, "common")
