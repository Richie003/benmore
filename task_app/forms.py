from django import forms
from .models import Task
from django.contrib.auth.models import User


# The `TaskForm` class defines a form for creating or updating tasks with specific fields and widgets.
class TaskForm(forms.ModelForm):
    due_date = forms.DateTimeField(
        input_formats=["%Y-%m-%dT%H:%M"],
        widget=forms.DateTimeInput(
            attrs={
                "type": "datetime-local",
            },
            format="%Y-%m-%dT%H:%M",
        ),
    )

    class Meta:
        model = Task
        fields = [
            "title",
            "description",
            "status",
            "priority",
            "due_date",
            "category",
            "assigned_to",
        ]
        widgets = {
            "title": forms.TextInput(attrs={"placeholder": "Enter task title here"}),
            "description": forms.Textarea(
                attrs={"placeholder": "Describe the task..."}
            ),
            "assigned_to": forms.Select(
                attrs={"placeholder": "Select task status"}
            ),  # Assuming a status dropdown
            "category": forms.TextInput(attrs={"placeholder": "Categorize your task"}),
            # ... add placeholders for other fields as needed
        }

    def __init__(self, *args, **kwargs):
        super(TaskForm, self).__init__(*args, **kwargs)
        self.fields["assigned_to"] = forms.ModelChoiceField(
            queryset=User.objects.all(),
            required=False,
            empty_label="Select a user",
            widget=forms.Select(attrs={"class": "form-control"}),
        )
        for field in self.fields:
            self.fields[field].widget.attrs.update({"class": "form-control"})
