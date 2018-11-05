from pymodm import connect, fields, MongoModel, EmbeddedMongoModel
import random
import string

# Widgets belong to a concrete state and can contain labels
class Widget(MongoModel):
    label = fields.CharField(blank=True)
    data = fields.OrderedDictField(blank=True)
    properties = fields.OrderedDictField(blank=True)

# Information avaliable from the page
class Target(MongoModel):
    target = fields.EmbeddedDocumentField(Widget, blank=True)
    mappedTo = fields.EmbeddedDocumentField(Widget, blank=True)

# Migrating from other implementation
class ConcreteState(MongoModel):
    def generate_title():
        return 'document-' + ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits) for _ in range(12))

    url = fields.CharField()
    title = fields.CharField(default=generate_title)
    original = fields.BooleanField()
    widgets = fields.EmbeddedDocumentListField(Widget)
    targets = fields.EmbeddedDocumentListField(Target, blank=True)
    mutated = fields.EmbeddedDocumentField(Target, blank=True)