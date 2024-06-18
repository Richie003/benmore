from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


# The `Task` class defines a model with fields for title, description, status, priority, created date,
# due date, category, and assigned user, along with choices for status and priority.
class Task(models.Model):
    # The classes below defines choices for status and priority fields in the Task model.
    class STATUS_CHOICES(models.TextChoices):
        PROGRESS = "In Progress", "In progress"
        COMPLETED = "Completed", "completed"
        OVERDUE = "Overdue", "overdue"

    class PRIORITY_CHOICES(models.TextChoices):
        LOW = "Low", "low"
        MEDIUM = "Medium", "medium"
        HIGH = "High", "high"

    title = models.CharField(max_length=225, default="", blank=False, null=True)
    description = models.TextField(max_length=500, default="", blank=False, null=True)
    status = models.CharField(
        default="PROGRESS", max_length=15, choices=STATUS_CHOICES.choices
    )
    priority = models.CharField(
        default="LOW", max_length=9, choices=PRIORITY_CHOICES.choices
    )
    created = models.DateTimeField(auto_now_add=True)
    due_date = models.DateTimeField(default=timezone.now)
    category = models.CharField(max_length=50, default="", blank=False, null=True)
    assigned_to = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return str(self.title)

    class META:
        ordering = ["-due_date", "created"]
