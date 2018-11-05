from os import environ
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "ASIT Scraper backend"

from routes import search_api, store_api

app.register_blueprint(search_api)
app.register_blueprint(store_api)

if __name__ == "__main__":
    app.run(host='0.0.0.0')
