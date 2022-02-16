from django.db import models

# Create your models here.
from apps.personas.models import Persona

class Mascota(models.Model):
    nombre = models.CharField(max_length = 50)
    genero = models.CharField(max_length = 10)
    edad_aproximada = models.IntegerField()
    fecha_rescate = models.DateField()
    persona = models.ForeignKey(Persona, null=True, blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre
