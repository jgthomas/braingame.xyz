from cachetools import cached, LRUCache


NINE_LETTER_WORDS = "static/wordlist/nine_letter_words.txt"
DICTIONARY = "static/wordlist/sowpods.txt"
COMMON_WORDS = "static/wordlist/50k.txt"


cache = LRUCache(maxsize=100)


def load_all_words():
    return load_words(DICTIONARY)


def load_all_common_words():
    return load_words(COMMON_WORDS)


def load_all_nine_letter_words():
    return load_words(NINE_LETTER_WORDS)


@cached(cache)
def load_words(filename):
    with open(filename) as f:
        return [line for line in f]
