from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login 
from django.contrib import messages

def home(request):
    return render(request,"index.html")

def signup(request):
    if request.method== "POST":
        username = request.POST['username']
        fname = request.POST['firstname']
        lname = request.POST['lastname']
        email = request.POST['email']
        pass1 = request.POST['pass1']
        pass2 = request.POST['pass2']

        myuser = User.objects.create_user(username,email,pass1)
        myuser.first_name=fname
        myuser.last_name=lname
        myuser.save()

        messages.success(request,"user successfully created")
        return redirect('signin')

    return render(request, "signup.html")

def signin(request):
    if request.method == "POST":
        username= request.POST['username']
        pass1=request.POST['passw1']

        user = authenticate(username=username, password=pass1)

        if user is not None:
            login(request,user)
            return render(request,"index.html")

        else:
            messages.error(request,"Bad credentials")
            return redirect('home')

    return render(request, "signin.html")