from django.urls import path
from . import views


urlpatterns = [
    path('v1/api/messages', views.message_list, name='message-list'),
]