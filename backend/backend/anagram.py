import random
from pyfunctory.compounds import exact_match
from pyfunctory.factories import make_partial
from backend.load_words import load_common_words, load_common_words_by_length


def anagram_word():
    words = load_common_words()
    word = random.choice(words)
    return shuffle_anagram(word)


def anagram_word_by_length(word_length):
    word_length_dictionary = load_common_words_by_length()
    words_of_length = word_length_dictionary[word_length]
    anagram = shuffle_anagram(random.choice(words_of_length))
    solutions = anagram_answers(anagram, words_of_length)
    return (anagram, solutions)


def shuffle_anagram(word):
    word_letters = list(word)
    random.shuffle(word_letters)
    return "".join(word_letters)


def anagram_answers(word, word_list):
    is_anagram = make_partial(exact_match, word)
    return [w for w in word_list if is_anagram(w)]
