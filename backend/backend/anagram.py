import random
from backend.load_words import load_all_common_words


def anagram_word():
    words = load_all_common_words()
    return random.choice(words)
