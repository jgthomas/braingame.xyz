from fastapi import FastAPI

from backend.anagram import anagram_puzzle, DEFAULT_ANAGRAM_LENGTH


app = FastAPI()


@app.get("/anagram")
def anagram(length: int = DEFAULT_ANAGRAM_LENGTH):
    anagram, solutions = anagram_puzzle(length)
    return {"word": anagram, "solutions": solutions}
