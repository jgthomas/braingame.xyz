from flask import Flask
from flask_restful import Resource, Api


def create_app():
    app = Flask(__name__)
    api = Api(app)

    class Dumber(Resource):
        def get(self):
            return {"dumb": "dumb"}

    api.add_resource(Dumber, "/dumber")

    return app
