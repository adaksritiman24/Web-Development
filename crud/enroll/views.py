from django.shortcuts import render, redirect
from .forms import StudentRegistration
from .models import User
# Create your views here.

#this will add new item and show them  on the same page
def addandshow(request):
    if request.method == 'POST':
        fm = StudentRegistration(request.POST)#comes with data filled
        if fm.is_valid():
            # fm.save()
            name = fm.cleaned_data['name']
            email = fm.cleaned_data['email']
            pwd = fm.cleaned_data['password']
            user = User(name = name, email = email, password = pwd)
            user.save()
            fm = StudentRegistration() #empty form

    else:
        fm = StudentRegistration()  
    stud = User.objects.all()  
    return render(request, 'enroll/addandshow.html',{'fm':fm, 'stud':stud})


#this will detete the deta
def deletethedata(request, id):
    if request.method == 'POST':
        pi = User.objects.get(pk = id)
        pi.delete()
        return redirect('/')#redirect to homepage


#this  will update and edit
def updateData(request, id):
    if request.method == 'GET':
        user = User.objects.get(pk = id)
        fm = StudentRegistration(instance=user)
        # print(user.name)
        return render(request, 'enroll/update.html',{'fm':fm,'id':id})
    else:
        user = User.objects.get(pk = id)
        fm = StudentRegistration(request.POST, instance = user)
        if fm.is_valid():
            fm.save()
        return redirect('/')#redirect to home page