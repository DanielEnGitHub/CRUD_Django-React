# Rest framework
from rest_framework import viewsets

# Models
from apps.personas.models import Persona, Solicitud

# Serializer
from apps.personas.serializer import PersonaSerializer, SolicitudSerializer

class PersonasViewset(viewsets.ModelViewSet):
    serializer_class = PersonaSerializer
    queryset = Persona.objects.all()

class SolicitudViewset(viewsets.ModelViewSet):
    serializer_class = SolicitudSerializer
    queryset = Solicitud.objects.all()