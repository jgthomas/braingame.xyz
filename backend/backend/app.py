from flask import Flask
from flask_restful import Resource, Api

from backend.anagram import anagram_word


def create_app():
    app = Flask(__name__)
    api = Api(app)

    class Anagram(Resource):
        def get(self):
            return {"word": anagram_word()}

    api.add_resource(Anagram, "/anagram")

    return app
