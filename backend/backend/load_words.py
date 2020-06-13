from cachetools import cached, LRUCache


NINE_LETTER_WORDS = "static/wordlist/nine_letter_words.txt"
DICTIONARY = "static/wordlist/sowpods.txt"
COMMON_WORDS = "static/wordlist/50k.txt"


cache = LRUCache(maxsize=100)


def load_all_words():
    return load_words(DICTIONARY)


def load_common_words():
    return load_words(COMMON_WORDS)


def load_nine_letter_words():
    return load_words(NINE_LETTER_WORDS)


@cached(cache)
def load_words(filename):
    with open(filename) as f:
        return [word.strip() for word in f if word]


def load_common_words_by_length():
    return load_words_by_length(COMMON_WORDS)


@cached(cache)
def load_words_by_length(filename):
    word_length_dictionary = {}
    with open(filename) as f:
        for line in f:
            if not line:
                continue
            word = line.strip()
            word_length = len(word)
            if word_length not in word_length_dictionary:
                word_length_dictionary[word_length] = [word]
            else:
                word_length_dictionary[word_length].append(word)
    return word_length_dictionary