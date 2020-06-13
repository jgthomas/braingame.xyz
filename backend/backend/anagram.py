import random
from backend.load_words import load_common_words, load_common_words_by_length


def anagram_word():
    words = load_common_words()
    word = random.choice(words)
    return shuffle_anagram(word)


def anagram_word_by_length(word_length):
    word_length_dictionary = load_common_words_by_length()
    word = random.choice(word_length_dictionary[word_length])
    return shuffle_anagram(word)


def shuffle_anagram(word):
    word_letters = list(word)
    random.shuffle(word_letters)
    return "".join(word_letters)
