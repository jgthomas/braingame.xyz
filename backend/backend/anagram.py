import random
from backend.load_words import load_common_words, load_common_words_by_length


def anagram_word():
    words = load_common_words()
    return random.choice(words)


def anagram_word_by_length(word_length):
    word_length_dictionary = load_common_words_by_length()
    return random.choice(word_length_dictionary[word_length])
