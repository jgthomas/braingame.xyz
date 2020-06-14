from flask import Flask, request
from flask_restful import Resource, Api

from backend.anagram import anagram_puzzle


def create_app():
    app = Flask(__name__)
    api = Api(app)

    class Anagram(Resource):
        def get(self):
            length = request.args.get("length", default=9, type=int)
            anagram, solutions = anagram_puzzle(length)
            return {"word": anagram, "solutions": solutions}

    api.add_resource(Anagram, "/anagram")

    return app
