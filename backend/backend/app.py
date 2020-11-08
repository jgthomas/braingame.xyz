from fastapi import FastAPI

from backend.anagram import anagram_puzzle


app = FastAPI()


@app.get("/anagram")
def anagram(length: int):
    anagram, solutions = anagram_puzzle(length)
    return {"word": anagram, "solutions": solutions}
