from django.shortcuts import render
from .models import *
from .forms import *
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.contrib.auth.models import User
import json


# Create your views here.
@login_required(login_url="sign-in")
def index(request):
    form = TaskForm()
    get_users = User.objects.all()
    context = {"form": form, "users": get_users}
    return render(request, "home.html", context)


def getTasks(request):
    """
    The `getTasks` function retrieves tasks assigned to a user and returns them in JSON format with
    color coding based on priority.

    :param request: The `getTasks` function takes a `request` object as a parameter. This object is
    expected to have a `method` attribute that indicates the HTTP method used in the request. The
    function then processes the request based on the HTTP method being "GET"
    :return: A JSON response containing task data is being returned. If there is an error, appropriate
    error messages with status codes are returned as JSON responses as well.
    """
    if request.method == "GET":
        try:
            user = request.user
            query_taskTable = Task.objects.filter(
                assigned_to_id=user.id
            ).select_related("assigned_to")
            priority_to_color = {
                "Low": "blue",
                "Medium": "yellow",
                "High": "red",
            }

            data = [
                {
                    "id": task.id,
                    "title": task.title,
                    "description": task.description,
                    "due_date": (
                        task.due_date.astimezone(timezone.utc).strftime("%d/%m/%y")
                        if task.due_date
                        else None
                    ),
                    "status": task.status,
                    "priority": task.priority,
                    "category": task.category,
                    "color": priority_to_color.get(task.priority, "default_color"),
                }
                for task in query_taskTable
                if query_taskTable
            ]
            return JsonResponse(data, safe=False)
        except User.DoesNotExist:
            return JsonResponse({"error": "User not found"}, status=404)
        except Exception as e:
            print(e)
            return JsonResponse({"error": "Internal server error"}, status=500)


def createTask(request):
    """
    The function `createTask` creates a new task object with specified attributes and returns a JSON
    response with the task details.

    :param request: The `createTask` function you provided is a Django view function that creates a new
    task based on the data received in a POST request. Here's a breakdown of the parameters used in the
    function:
    :return: The `createTask` function is returning a JSON response containing the details of the task
    that was created or retrieved. The response includes the task's ID, title, description, status,
    priority, due date, assigned user ID, and creation timestamp.
    """
    if request.method == "POST":
        data = request.POST
        title = data.get("title")
        description = data.get("description")
        status = data.get("status")
        priority = data.get("priority")
        due_date = data.get("due_date")
        assigned_to = data.get("assigned_to")
        create_task, created = Task.objects.get_or_create(
            title=title,
            description=description,
            status=status,
            priority=priority,
            due_date=due_date,
            assigned_to_id=assigned_to,
        )

        return JsonResponse(
            f"Task Created successfully for {create_task.title}", safe=False
        )


@csrf_exempt
def deleteTask(request, task_id):
    if request.method == "DELETE":
        try:
            task = Task.objects.get(id=task_id)
            task.delete()
            return JsonResponse({"message": "Task deleted successfully"}, status=200)
        except Task.DoesNotExist:
            return JsonResponse({"error": "Task not found"}, status=404)
    else:
        return JsonResponse({"error": "Invalid request method"}, status=405)
