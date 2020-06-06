import random
from flask import Flask
from flask_restful import Resource, Api
from cachetools import cached, LRUCache

from pyfunctory.process import load_data


cache = LRUCache(maxsize=100)


@cached(cache)
def load_words():
    return load_data("static/wordlist/nine_letter_words.txt")


def create_app():
    app = Flask(__name__)
    api = Api(app)

    class Dumber(Resource):
        def get(self):
            return {"dumb": "dumb"}

    api.add_resource(Dumber, "/dumber")

    class Anagram(Resource):
        def get(self):
            words = load_words()
            word = random.choice(words)
            return {"word": word}

    api.add_resource(Anagram, "/anagram")

    return app
