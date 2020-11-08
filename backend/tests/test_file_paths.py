import os
import pytest
import backend.file_paths
from backend.file_paths import set_file_path


@pytest.fixture(scope="module")
def current_root():
    return os.path.dirname(os.path.realpath(backend.file_paths.__file__))


def test_container_file_path_nine_letters():
    expected = "/app/backend/static/wordlist/nine_letter_words.txt"
    actual = set_file_path("/app/backend", "nine")
    assert expected == actual


def test_container_file_path_sowpods_dictionary():
    expected = "/app/backend/static/wordlist/sowpods.txt"
    actual = set_file_path("/app/backend", "dict")
    assert expected == actual


def test_container_file_path_common_words():
    expected = "/app/backend/static/wordlist/50k.txt"
    actual = set_file_path("/app/backend", "common")
    assert expected == actual


def test_local_file_path_nine_letters(current_root):
    expected = f"{current_root}/backend/static/wordlist/nine_letter_words.txt"
    actual = set_file_path(current_root, "nine")
    assert expected == actual


def test_local_file_path_sowpods_dictionary(current_root):
    expected = f"{current_root}/backend/static/wordlist/sowpods.txt"
    actual = set_file_path(current_root, "dict")
    assert expected == actual


def test_local_file_path_common_words(current_root):
    expected = f"{current_root}/backend/static/wordlist/50k.txt"
    actual = set_file_path(current_root, "common")
    assert expected == actual
