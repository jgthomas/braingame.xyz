from backend.process_words import select_anagram, anagram_answers
from backend.load_words import load_common_words_by_length


def anagram_puzzle(word_length):
    word_length_dictionary = load_common_words_by_length()
    words_of_length = word_length_dictionary[word_length]
    anagram = select_anagram(words_of_length)
    solutions = anagram_answers(anagram, words_of_length)
    return (anagram, solutions)
