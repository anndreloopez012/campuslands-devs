# Buenas prácticas de mensajes para turismo — Juan Lema

## Temática usada

Viajes y turismo. Se simula la construcción de un itinerario de viaje por
Guatemala (destinos, plan de días) usando commits pequeños y con mensajes claros.

## Como pense el problema

1. En vez de hacer un solo cambio grande, dividí el trabajo en tres pasos
   pequeños y con una sola responsabilidad cada uno:
   - agregar los destinos disponibles,
   - agregar el itinerario base,
   - corregir un error en el orden de una actividad.
2. Para cada paso, escribí el mensaje de commit pensando en la pregunta
   "¿qué problema resuelve este cambio?", no en "qué archivo toqué".
3. Usé un prefijo de tipo (`feat`, `fix`, `chore`) para que el historial se
   pueda escanear rápido y cualquier otro dev entienda la intención sin
   abrir el diff.

## Commits realizados

​```
c945c28 fix: corrige el orden de actividades del dia 2 en el itinerario
11f5f23 feat: agrega itinerario base del viaje de tres dias
472c59a feat: agrega listado inicial de destinos turisticos
e476eb6 chore: setup inicial de la rama de trabajo
​```

## Por que estos mensajes y no otros

- Evité mensajes genéricos como "cambios", "update" o "arreglos varios".
- Cada mensaje empieza con un verbo en presente que describe la acción
  (`agrega`, `corrige`) y explica el efecto del cambio, no el nombre del
  archivo modificado.
- El commit `fix` deja explícito qué se corrigió (el orden de las
  actividades del día 2), para que quede claro por qué existe ese commit
  y no se confunda con un `feat` nuevo.

## Validación

Historial completo, comprobando que se lee como una historia coherente:

​```
$ git log --oneline
c945c28 fix: corrige el orden de actividades del dia 2 en el itinerario
11f5f23 feat: agrega itinerario base del viaje de tres dias
472c59a feat: agrega listado inicial de destinos turisticos
e476eb6 chore: setup inicial de la rama de trabajo
​```

Estado del árbol de trabajo al finalizar (sin cambios sueltos pendientes):

​```
$ git status
On branch git/ejercicio-12-juan-lema
nothing to commit, working tree clean
​```

Un compañero que lea solo estos cuatro mensajes puede reconstruir el orden
de trabajo sin necesidad de abrir cada archivo: se preparó la carpeta, se
agregaron los destinos, se agregó el itinerario y luego se corrigió un
detalle de orden en el día 2.