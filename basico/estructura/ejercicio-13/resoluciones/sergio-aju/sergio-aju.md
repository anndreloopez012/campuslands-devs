# Ejercicio: Panel Deportivo Multiliga

## Alumno
Sergio Miranda

## Descripción del problema
El objetivo de este ejercicio es establecer una arquitectura de archivos escalable para un proyecto de gestión deportiva. Se requiere organizar la información de manera que sea fácil de mantener, separar la capa de datos de la lógica (`src`) y documentar el modelo de datos para facilitar el trabajo colaborativo.

## Razonamiento y solución
Para asegurar que el proyecto pueda crecer sin desordenarse, he adoptado la siguiente estructura:
1. **`data/`**: Separación por categorías (`equipos`, `partidos`) y subdirectorios por liga para aislar los datasets.
2. **`src/`**: Reservado para la lógica de procesamiento (cálculo de tablas, filtros).
3. **`docs/`**: Espacio centralizado para la documentación técnica (`modelo-datos.md`).
4. **Escalabilidad**: Cada nueva liga solo requiere añadir un archivo en `data/` sin tocar la lógica de otras ligas.

## Estructura del Proyecto
```text
sergio-aju/
├── data/
│   ├── equipos/
│   │   └── liga-guatemala.json
│   ├── partidos/
│   │   └── liga-guatemala.json
├── docs/
│   └── modelo-datos.md
├── src/
│   └── tablas
│   └── pocisiones   
└── sergio-aju.md