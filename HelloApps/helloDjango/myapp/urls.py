from django.urls import path
from .views import sayHello

urlpatterns = [
    path('django/', sayHello, name="sayHello"),
]

