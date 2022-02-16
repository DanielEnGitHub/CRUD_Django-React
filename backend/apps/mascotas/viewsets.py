# Rest framework
from rest_framework import viewsets

# Models
from apps.mascotas.models import Mascota

# Serializer
from apps.mascotas.serializer import MascotaSerializer

class MascotasViewset(viewsets.ModelViewSet):
    serializer_class = MascotaSerializer
    queryset = Mascota.objects.all()