import random
from pyfunctory.compounds import exact_match
from pyfunctory.factories import make_partial


def select_anagram(word_list):
    return shuffle_letters(random.choice(word_list))


def anagram_answers(anagram, word_list):
    is_anagram = anagram_match_builder(anagram)
    return [word for word in word_list if is_anagram(word)]


def shuffle_letters(word):
    word_letters = list(word)
    random.shuffle(word_letters)
    return "".join(word_letters)


def anagram_match_builder(word):
    return make_partial(exact_match, word)
