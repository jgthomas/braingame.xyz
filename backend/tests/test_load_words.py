from backend.load_words import load_words_by_length, load_words


def test_load_file_by_length(tmp_path):
    temp_dir = tmp_path / "words"
    temp_dir.mkdir()
    filename = temp_dir / "words.txt"
    filename.write_text("hello\ndog\nup\nyouth\nit")
    assert load_words_by_length(filename) == {
        2: ["up", "it"],
        3: ["dog"],
        5: ["hello", "youth"],
    }


def test_load_file_by_length_blank_line(tmp_path):
    temp_dir = tmp_path / "words"
    temp_dir.mkdir()
    filename = temp_dir / "words.txt"
    filename.write_text("hello\ndog\n \nup\nyouth\nit")
    assert load_words_by_length(filename) == {
        2: ["up", "it"],
        3: ["dog"],
        5: ["hello", "youth"],
    }


def test_load_file(tmp_path):
    temp_dir = tmp_path / "words"
    temp_dir.mkdir()
    filename = temp_dir / "words.txt"
    filename.write_text("hello\ndog\nup\nyouth\nit")
    assert load_words(filename) == [
        "hello",
        "dog",
        "up",
        "youth",
        "it",
    ]


def test_load_file_blank_line(tmp_path):
    temp_dir = tmp_path / "words"
    temp_dir.mkdir()
    filename = temp_dir / "words.txt"
    filename.write_text("hello\ndog\n \nup\nyouth\nit")
    assert load_words(filename) == [
        "hello",
        "dog",
        "up",
        "youth",
        "it",
    ]
