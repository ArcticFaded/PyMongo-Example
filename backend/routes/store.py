from flask import Blueprint, jsonify, request
from flask_api import status
from bson.json_util import dumps
from db.controllers import store_concrete_state

store_api = Blueprint('store', __name__)

# @store_api.route('/v1/widget', methods=['POST'])
# def store_widget():
#     data = request.get_json()
#     key = data.get('key')
#     commit = data.get('commit')
#     cancel = data.get('cancel')
#     print (commit)
#     print (cancel)
#     store_widget(commit, key)
#     store_widget(cancel, key)

    
#     return 'it works', status.HTTP_200_OK
    
@store_api.route('/v1/state', methods=['POST'])
def store_state():
    data = request.get_json()
    root = data.get('root')
    title = data.get('title')
    url = data.get('url')
    widgets = data.get('widgets')
    labels = data.get('labels')
    flag = data.get('flag')
    

    id = store_concrete_state(root, title, url, widgets, labels, flag)
    
    return dumps(id), status.HTTP_200_OK