from ..models import Widget, ConcreteState, Target
from collections import namedtuple
from functools import partial
import json


def json_object_hook(data):
    return json.loads(data, object_hook=lambda d: namedtuple('X', ['_'.join(x.split('-')).lstrip('_') if x != 'class' and x != 'type' and x != 'for' and x != 'id' else x + 's' for x in d.keys()])(*d.values()))
    # return namedtuple('X', d.keys())(*d.values())


def store_widgets(widgets):
    widget_list = []
    for widget in widgets:
        properties = json_object_hook(json.dumps(widgets[widget]['properties']))
        del widgets[widget]['properties']
        X = json_object_hook(json.dumps(widgets[widget]))

        widget_obj = Widget('none',X._asdict(), properties._asdict())
        widget_list.append(widget_obj)

    return widget_list

def store_widget(widget, key):
    properties = None
    X = None
    for widget_name in widget:
        properties = json_object_hook(json.dumps(widget[widget_name]['properties']))
        del widget[widget_name]['properties']
        X = json_object_hook(json.dumps(widget[widget_name]))
    return Widget(key, X._asdict(), properties._asdict())

def store_mutation(labels):
    # print(labels)
    target = labels['target']['widget']
    key = labels['target']['key']
    for label in labels['other']:
        mapped = label['widget']
        mapped_key = label['key']
        return Target(store_widget(target,key), store_widget(mapped,mapped_key))
    return Target(store_widget(target,key))

def store_labels(labels):
    label_list = []
    # print(labels)
    for label in labels['target']:
        target = label['widget']
        key = label['key']
        try:
            other = label['other']
            label_list.append(Target(store_widget(target,key), store_widget(other, key)))
        except KeyError:
            label_list.append(Target(store_widget(target,key)))
    return label_list
        



def store_concrete_state(root, title, url, widgets, labels, flag):
    # print(url)
    widget = store_widgets(widgets)
    if not flag:
        label = store_labels(labels)
        state = ConcreteState(url, title, flag, widget, label)
    else:
        mutant = store_mutation(labels)
        state = ConcreteState(url, title, flag, widget, mutated=mutant)
    # print (label)
    return state.save()._id

def modify_state(state, *new_state):
    ConcreteState.get({'_id': state._id}).update(
        new_state
    )
