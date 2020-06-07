import random
from cachetools import cached, LRUCache


NINE_LETTER_WORDS = "static/wordlist/nine_letter_words.txt"


cache = LRUCache(maxsize=100)


def anagram_word():
    words = load_words(NINE_LETTER_WORDS)
    return random.choice(words)


@cached(cache)
def load_words(filename):
    with open(filename) as f:
        return [line for line in f]
