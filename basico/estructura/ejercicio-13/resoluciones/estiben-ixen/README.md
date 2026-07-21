# Solución - Ejercicio 13
## Panel deportivo multiliga

### Alumno

**Nombre:** Estiben Ixen

---

# Objetivo

Organizar la estructura base de un proyecto relacionado con deportes y fútbol, dejando preparadas las carpetas y archivos necesarios para almacenar información de equipos, partidos y documentación.

---

# Desarrollo

Se creó la carpeta personal dentro de la ruta indicada y se organizó el proyecto siguiendo la estructura solicitada. Además, se preparó un archivo de documentación para describir el modelo de datos y se dejaron las carpetas listas para que el proyecto pueda crecer sin modificar su organización.

---

# Árbol de estructura

```text
|____ejercicio-13
|    |____resoluciones
|    |    |____deiben-ixen
|    |    |    |____data
|    |    |    |    |____equipos
|    |    |    |    |    |____.gitkeep
|    |    |    |    |____partidos
|    |    |    |    |    |____.gitkeep
|    |    |    |____docs
|    |    |    |    |____modelos-datos.md
|    |    |    |____src
|    |    |    |    |____.gitkeep
```

---

# Descripción de la estructura

## data/

Contiene la información utilizada por la aplicación.

- **equipos/**: almacenamiento de información de los equipos participantes.
- **partidos/**: almacenamiento de información de los encuentros deportivos.

Los archivos `.gitkeep` permiten conservar las carpetas vacías dentro del repositorio Git.

---

## docs/

Contiene la documentación del proyecto.

- **modelos-datos.md**: documento donde se describe la estructura de los datos que utilizará la aplicación.

---

## src/

Espacio reservado para el código fuente del proyecto.

---

# Ejemplo de tabla
´´´tabla
    | Equipo | PJ | PG | PE | PP | Puntos |

    |--------|---:|---:|---:|---:|-------:|

    | Deportivo Norte | 5 | 4 | 1 | 0 | 13 |

    | Atlético Central | 5 | 3 | 1 | 1 | 10 |
    
    | Unión FC | 5 | 2 | 2 | 1 | 8 |
´´´
---

# Validación

Se verificó que:

- La carpeta personal se encuentra dentro de `resoluciones/deiben-ixen/`.
- Se crearon las carpetas `data/equipos`, `data/partidos`, `docs` y `src`.
- El archivo `docs/modelos-datos.md` fue creado correctamente.
- No se modificaron archivos base del ejercicio.
- No se eliminaron archivos `.gitkeep`.
- La estructura quedó preparada para agregar nuevas ligas, equipos y partidos.

---

# Cómo pensé la solución

Primero identifiqué las carpetas obligatorias del ejercicio y las organicé según su responsabilidad. Después preparé la documentación del modelo de datos y dejé la estructura lista para que el proyecto pueda escalar fácilmente agregando nuevas ligas, equipos y partidos sin reorganizar el repositorio.

---

# Conclusión

La solución cumple con el objetivo del ejercicio al organizar correctamente la estructura del proyecto, separar la información por responsabilidades y mantener una base preparada para futuros desarrollos.