
# Panel Deportivo Multiliga
**Autora:** Irma Arias

## Razonamiento
El proyecto utiliza una arquitectura de datos separada por dominios (`equipos` vs `partidos`). Esto permite escalar el sistema añadiendo nuevas ligas simplemente creando nuevos archivos JSON en las carpetas correspondientes, sin tocar el código fuente (`src/`).

## Estructura
- `data/`: Contenedor principal de la información.
- `src/`: Espacio reservado para la lógica de visualización (scripts).
- `docs/`: Documentación del modelo.