from django.conf.urls import url, include
from rest_framework import routers

from .views import *

router = routers.DefaultRouter()

router.register(r'activities', ActivityViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]