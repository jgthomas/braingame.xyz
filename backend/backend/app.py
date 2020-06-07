from flask import Flask
from flask_restful import Resource, Api

from backend.anagram import anagram_word_by_length


def create_app():
    app = Flask(__name__)
    api = Api(app)

    class Anagram(Resource):
        def get(self):
            return {"word": anagram_word_by_length(6)}

    api.add_resource(Anagram, "/anagram")

    return app
