from django.db import models
from django.db.models.base import Model

# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=100)
    desc = models.CharField(max_length=12000)
    author = models.CharField(max_length=70) #name of user
    aid =  models.IntegerField() #id of user