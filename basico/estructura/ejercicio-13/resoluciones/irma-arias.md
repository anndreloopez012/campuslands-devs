# Ejercicio 13: Panel Deportivo Multiliga

**Nombre:** Irma Arias

## Razonamiento
He diseñado la estructura `data/` separando claramente los equipos de los partidos. Esto permite que el sistema escale agregando nuevas carpetas o archivos JSON para cada liga sin ensuciar la lógica del código en `src/`. He mantenido nombres descriptivos para que cualquier otro desarrollador entienda dónde encontrar la información de cada liga.

## Validación
- Caso Normal: `data/equipos/liga-nacional.json` cargado correctamente.
- Caso Límite: Carpeta vacía para una nueva liga (se mantiene la estructura lista para ser usada).