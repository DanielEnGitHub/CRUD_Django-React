from apps.mascotas.models import *
from rest_framework import serializers

class MascotaSerializer(serializers.ModelSerializer):
    """Serialize product fields"""
    class Meta:
        model = Mascota
        fields = (
            'id',
            'nombre',
            'genero',
            'edad_aproximada',
            'fecha_rescate',
            'persona',
        )