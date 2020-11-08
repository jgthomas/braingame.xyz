from backend.process_words import select_anagram, anagram_answers
from backend.load_words import load_common_by_length, load_all_by_length


DEFAULT_ANAGRAM_LENGTH = 7


def anagram_puzzle(word_length):
    word_length_dictionary = load_common_by_length()
    words_of_length = word_length_dictionary[word_length]
    anagram = select_anagram(words_of_length)
    solutions = get_anagram_answers(anagram)
    return (anagram, solutions)


def get_anagram_answers(word):
    word_length_dictionary = load_all_by_length()
    words_of_length = word_length_dictionary[len(word)]
    return anagram_answers(word, words_of_length)
