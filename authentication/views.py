from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    return render(request,"index.html")

def signup(request):
    return render(request, "signup.html")

def signin(request):
    return render(request, "signin.html")