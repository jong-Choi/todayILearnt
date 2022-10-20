from django.urls import path
from .views import DoneTodoAPIView, TodosAPIView, TodoAPIView, DoneTodosAPIView

urlpatterns = [
    path("todo/", TodosAPIView.as_view()),
    path("todo/<int:pk>/", TodoAPIView.as_view()),
    path("done/", DoneTodosAPIView.as_view()),
    path("done/<int:pk>", DoneTodoAPIView.as_view()),
]