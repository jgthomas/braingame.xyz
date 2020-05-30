
from flask import Flask, request
from flask_restful import Resource, Api


def create_app():
    app = Flask(__name__)
    api = Api(app)

    class Prediction(Resource):
        def get(self):
            return {"prediction": 100}

    api.add_resource(Prediction, "/prediction")

    return app
