from flask import Blueprint, jsonify, request
from db.controllers import get_widgets, get_states
from bson.json_util import dumps

search_api = Blueprint('search', __name__)

@search_api.route('/v1/widget', methods=['GET'])
def get_widget():
    data = request.get_json()
    key = data.get('id')
    return "hi"
@search_api.route('/v1/widgets', methods=['GET'])
def widgets():
    response = get_widgets()
    return dumps(response)
    
@search_api.route('/v1/state', methods=['GET'])
def states():
    data = request.get_json()