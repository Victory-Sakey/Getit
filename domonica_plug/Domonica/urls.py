from django.urls import path
from .views import SignUp



app_name = 'Domonica'

urlpatterns = [
    path('signup', SignUp, name='SignUp')
]