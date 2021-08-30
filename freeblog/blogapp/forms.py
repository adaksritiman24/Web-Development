from django.db.models import fields
from .models import Blog
from django import forms
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth.models import User
from django.db import models
from django.forms import widgets

class SignupForm(UserCreationForm):
    password1 = forms.CharField(label = 'Password',widget = forms.PasswordInput(attrs ={'class':'form-control'}))
    password2 = forms.CharField(label = 'Confirm Password',widget = forms.PasswordInput(attrs ={'class':'form-control'}))
    # labels  = {'password1':'Password','password2':'Confirm Password'}
    class Meta:
        model = User

        fields = ['username','first_name','last_name','email']
        labels = {'email':'Email'}
        widgets = {
        'username' : forms.TextInput(attrs={'class': 'form-control input-style'}),
        'first_name' : forms.TextInput(attrs={'class': 'form-control input-style'}),
        'last_name' : forms.TextInput(attrs={'class': 'form-control input-style'}),
        'email' : forms.EmailInput(attrs={'class': 'form-control input-style'}),
        }
class LoginForm(AuthenticationForm):
    username = forms.CharField(widget = forms.TextInput( attrs ={'class':'form-control'}))
    password = forms.CharField(widget = forms.PasswordInput( attrs ={'class':'form-control'}))
class BlogForm(forms.ModelForm):
    class Meta:
        model = Blog
        fields = ['title','desc']

        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control input-style'}),
            'desc': forms.Textarea(attrs={'class': 'form-control input-style'}),
        }