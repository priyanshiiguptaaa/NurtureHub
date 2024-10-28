# Create urls.py
from django.urls import path
from users.views import register_user, login_user

urlpatterns = [
    path('api/register/', register_user, name='register'),
    path('api/login/', login_user, name='login'),
]