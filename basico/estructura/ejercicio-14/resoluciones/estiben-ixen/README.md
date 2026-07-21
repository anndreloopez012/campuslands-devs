# Solución - Ejercicio 14
## Archivo musical para productores

### Alumno

**Nombre:** Estiben Ixen

---

# Objetivo

Organizar una estructura de proyecto para la producción musical, separando correctamente las canciones, muestras de audio, mezclas, masters y documentación.

---

# Desarrollo

Se creó la carpeta personal respetando la estructura solicitada por el ejercicio. Cada carpeta fue organizada según su responsabilidad para facilitar el almacenamiento y mantenimiento de los archivos del proyecto.

---

# Árbol de estructura

```text
|____ejercicio-14
|    |____resoluciones
|    |    |____estiben-ixen
|    |    |    |____docs
|    |    |    |    |____versionado-audio.md
|    |    |    |____masters
|    |    |    |    |____.gitkeep
|    |    |    |____mixes
|    |    |    |    |____.gitkeep
|    |    |    |____samples
|    |    |    |    |____.gitkeep
|    |    |    |____tracks
|    |    |    |    |____.gitkeep
|    |    |____README.md
```

---

# Descripción de la estructura

## tracks/

Contiene las grabaciones originales o canciones en proceso de producción.

## samples/

Almacena los efectos, sonidos y muestras reutilizables durante la producción musical.

## mixes/

Guarda las versiones de mezcla que aún se encuentran en revisión o ajustes.

## masters/

Contiene únicamente las versiones finales listas para distribución o publicación.

## docs/

Incluye la documentación del proyecto, como el archivo `versionado-audio.md`, donde se describe el control de versiones de los archivos de audio.

---

# Convención de nombres

Todos los archivos de audio seguirán el formato:

```text
cancion-v01.wav
cancion-v02.wav
cancion-v03.wav
```

Cada nueva modificación incrementa el número de versión para mantener un historial claro de los cambios realizados.

---

# ¿Por qué los masters no se mezclan con los borradores?

Los archivos **master** representan la versión final aprobada del proyecto y no deben mezclarse con los borradores o mezclas en proceso. Mantenerlos separados evita sobrescribir versiones finales, facilita el control de calidad y permite identificar rápidamente qué archivos están listos para su distribución.

---

# Validación

Se verificó que:

- La carpeta personal se encuentra dentro de `resoluciones/estiben-ixen/`.
- Se crearon las carpetas `tracks`, `samples`, `mixes`, `masters` y `docs`.
- El archivo `docs/versionado-audio.md` fue agregado correctamente.
- Se conservaron los archivos `.gitkeep`.
- No se modificaron archivos base del ejercicio.

---

# Cómo pensé la solución

Primero identifiqué las categorías principales de un proyecto de producción musical y asigné una carpeta para cada una. Después definí una convención de nombres para controlar versiones y separé los archivos finales de los archivos en desarrollo para mantener una estructura organizada y escalable.

---

# Conclusión

La estructura propuesta cumple con los requisitos del ejercicio, facilita la organización de los recursos del proyecto y permite mantener un flujo de trabajo ordenado entre producción, mezcla, masterización y documentación.