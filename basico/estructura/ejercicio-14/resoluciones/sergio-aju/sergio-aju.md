# Ejercicio: Estructura de Archivos para Producción Musical

## Alumno
Sergio Miranda

## Descripción del problema
El objetivo es establecer una arquitectura de directorios profesional para un estudio de producción musical. Se busca optimizar el flujo de trabajo separando los elementos de la sesión, los recursos sonoros y los productos finales, además de establecer una convención de nombrado clara.

## Razonamiento y solución
Para asegurar que el proyecto sea escalable y evitar la pérdida de activos, he estructurado el repositorio de la siguiente manera:
1. **Separación por estado**: He aislado los `masters` (productos terminados) de los `tracks` y `mixes` (borradores). Esto es crucial para garantizar que solo las versiones definitivas sean enviadas a distribución, evitando confusiones con versiones preliminares.
2. **Convención**: Se establece el formato `cancion-v01.wav` para el control de versiones, lo que permite rastrear la evolución del audio sin sobrescribir archivos accidentalmente.
3. **Organización de recursos**: Separación lógica entre `samples` (materia prima) y `docs` (especificaciones técnicas).

## Estructura del Proyecto
```text
nombre-apellido/
├── tracks/        # Grabaciones multipista originales
├── samples/       # Librería de sonidos y loops
├── mixes/         # Mezclas intermedias para revisión
├── masters/       # Versiones finales procesadas (no se mezclan con borradores)
├── docs/
│   └── versionado-audio.md
└──sergio-aju.md
