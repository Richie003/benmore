from django.urls import path
from .views import *

urlpatterns = [
    path("sign-up/", sign_up),
    path("api/validations/", user_validations),
    path("sign-in/", sign_in, name="sign-in"),
]
