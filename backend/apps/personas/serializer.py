from cmath import log
from apps.personas.models import *
from rest_framework import serializers

class PersonaSerializer(serializers.ModelSerializer):
    """Serialize product fields"""
    class Meta:
        model = Persona
        fields = (
            'id',
            'nombre',
            'apellido',
            'edad',
            'telefono',
            'email',
            'domicilio',
        )

class SolicitudSerializer(serializers.ModelSerializer):
    """Serialize product fields"""
    persona = serializers.SerializerMethodField()
    class Meta:
        model = Solicitud
        fields = (
            'id',
            'persona',
            'razones',
        )

    def get_persona(self, pers):
        persona = Persona.objects.filter(id = pers.persona.id)
        serializers = PersonaSerializer(persona, many=True).data
        return serializers