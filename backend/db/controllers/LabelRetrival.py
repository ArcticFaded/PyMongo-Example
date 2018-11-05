from ..models import Widget, ConcreteState, Target

def get_widgets():
    return [{'_id': x._id, 'properties': x.properties, 'data': x.data} for x in Widget.objects.all()]
def get_states():
    return NotImplemented