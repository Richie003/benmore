from django.urls import path
from .views import *

urlpatterns = [
    path("", index),
    path("api/get-tasks/", getTasks),
    path("api/create-task/", createTask),
    path("api/delete-task/<int:task_id>/", deleteTask, name="delete_task"),
]
