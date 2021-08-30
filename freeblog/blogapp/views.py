from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.password_validation import password_changed
from django.shortcuts import redirect, render
from .forms import SignupForm, LoginForm, BlogForm
from django.contrib import messages
from django.contrib.auth.models import Group
from .models import Blog
# Create your views here.

def home(request):
    limit = 200
    blogs = Blog.objects.all()
    briefs = []
    for blog in blogs:
        bf = {'id':blog.id,'title': blog.title, 'author': blog.author, 'desc': blog.desc[:limit]+'...'}# dictionary
        briefs.append(bf)  
    briefs = briefs[::-1]    
    return render(request, 'home.html',{'briefs':briefs})

def signup(request):
    if request.method == 'POST':
        fm = SignupForm(request.POST)
        if fm.is_valid():
            user = fm.save()
            
            gp = Group.objects.get(name = "Blogger")
            user.groups.add(gp)
            messages.success(request, 'User Account Created Successfully!')
    else:
        fm = SignupForm()        
    return render(request, "signup.html", {'form':fm})

def login_user(request):
    if request.user.is_authenticated:
        return redirect('/dashboard/')
    else:    
        if request.method == 'POST':
            fm = LoginForm(request=request, data = request.POST)
            if fm.is_valid():
                username = fm.cleaned_data['username']
                password = fm.cleaned_data['password']
                user = authenticate(request, username=username, password=password)
                if user is not None:
                    login(request,user)
                    return redirect('/dashboard/')
                else:
                    messages.info(request,'Invalid credentials!')
                    return render(request, "login.html",{'form':fm})   
        else:
            fm = LoginForm(request=request) 
        return render(request, "login.html",{'form':fm})

def view_dashboard(request):
    if request.user.is_authenticated:
        if request.user.is_superuser:
            blogs = Blog.objects.all()
        else:
            blogs = Blog.objects.filter(aid = request.user.id)    
        return render(request,'dashboard.html',{'user':request.user,'blogs':blogs})
    else:
        return redirect('/login/')

def logout_user(request):
    logout(request)
    return redirect('/home/')

def edit_blog(request,id):
    if request.user.is_authenticated:
        if request.method == 'POST':
            blog = Blog.objects.get(pk = id)
            fm = BlogForm( instance = blog, data =request.POST)
            if fm.is_valid():
                fm.save()
                return redirect('/dashboard/')
            else:
                messages.warning( request, "Please enter all field")    
        else:
            blog = Blog.objects.get(pk = id)
            fm = BlogForm(instance=blog)
        return render(request, 'editblog.html',{'id':id,'form':fm})
    else:
        return redirect('/login/')    

def create_blog(request):
    if request.user.is_authenticated:
        if request.method =='POST':
            title = request.POST['title']
            desc = request.POST['desc']
            aid = request.user.id
            if request.user.is_superuser:
                author = 'admin'
            else:
                author = request.user.first_name
            newblog = Blog.objects.create(title = title, desc=desc, aid = aid, author=author)
            newblog.save()
            return redirect('/dashboard/')
        else:    
            return render(request, 'createblog.html',{'user':request.user})
    else:
        return redirect('/login/')        

def delete_blog(request, id):
    if request.user.is_superuser:
        blog = Blog.objects.get(pk = id)
        blog.delete()
    return redirect('/dashboard/')

def blog_read(request, id):
    blog = Blog.objects.get(pk = id)
    l = blog.desc.split('\n')
    try:
        l.remove('\r')
    except Exception:
        pass    
    # print(l)
    blog = {'title':blog.title,'author':blog.author,'desc':l}
    return render(request, 'showblog.html',{'blog':blog})

def contact_page(request):
    return render(request,'contact.html')