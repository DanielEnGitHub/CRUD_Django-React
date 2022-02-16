from django.urls import path, include
from rest_framework.routers import DefaultRouter
from apps.mascotas import viewsets

router = DefaultRouter()
router.register('mascotas', viewsets.MascotasViewset)

urlpatterns = [
    path('api/', include(router.urls)),
]