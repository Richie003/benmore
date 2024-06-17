from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.models import User
from django.http import JsonResponse
from .forms import SignUpForm


def sign_up(request):
    if request.method == "POST":
        form = SignUpForm(request.POST or None)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data["password"])
            user.save()
            return JsonResponse("Success", safe=False)
        else:
            return JsonResponse("Error", safe=False)
    else:
        form = SignUpForm()
    return render(request, "authentication/sign_up.html", {"form": form})


def sign_in(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            if "next" in request.POST:
                return redirect(request.POST.get("next"))
            else:
                return redirect("/")
        else:
            return JsonResponse("User doesn't exist.", safe=False)
    return render(request, "authentication/sign_in.html", context={})


def user_validations(request):
    if request.method == "GET":
        data = None
        username = request.GET.get("username")
        email = request.GET.get("email")
        if username:
            data = {"exists": User.objects.filter(username=username).exists()}
        elif email:
            data = {"exists": User.objects.filter(email=email).exists()}
        return JsonResponse(data, safe=False)
