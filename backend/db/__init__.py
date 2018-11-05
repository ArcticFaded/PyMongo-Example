from os import getenv
from pymodm import connect

# Expose db classes, for creating new folder requires __init__.py to be present

from .models import Widget, ConcreteState, Target

connect('mongodb://localhost:27017/page_analysis')
