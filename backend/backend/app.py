from flask import Flask
from flask_restful import Resource, Api

from backend.anagram import anagram_puzzle


def create_app():
    app = Flask(__name__)
    api = Api(app)

    class Anagram(Resource):
        def get(self):
            anagram, solutions = anagram_puzzle(6)
            return {"word": anagram, "solutions": solutions}

    api.add_resource(Anagram, "/anagram")

    return app
