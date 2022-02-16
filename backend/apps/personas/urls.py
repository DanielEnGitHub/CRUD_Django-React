from django.urls import path, include
from rest_framework.routers import DefaultRouter
from apps.personas import viewsets

router = DefaultRouter()
router.register('personas', viewsets.PersonasViewset)
router.register('solicitud', viewsets.SolicitudViewset)

urlpatterns = [
    path('api/', include(router.urls)),
]