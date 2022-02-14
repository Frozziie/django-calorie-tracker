from django.urls import path
from core import views

urlpatterns = [
    path('', views.index, name='index'),
    path('delete/<int:id>/', views.delete_consume, name='delete'),
]