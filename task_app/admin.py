from django.contrib import admin
from .models import Task


class TaskAdmin(admin.ModelAdmin):
    list_display = ("title", "status", "priority", "due_date", "assigned_to", "created")
    list_filter = ("status", "priority", "due_date", "assigned_to")
    search_fields = ("title", "description", "category", "assigned_to__username")
    ordering = ("-due_date", "created")

    fieldsets = (
        (
            None,
            {
                "fields": (
                    "title",
                    "description",
                    "status",
                    "priority",
                    "due_date",
                    "category",
                    "assigned_to",
                )
            },
        ),
    )


admin.site.register(Task, TaskAdmin)
