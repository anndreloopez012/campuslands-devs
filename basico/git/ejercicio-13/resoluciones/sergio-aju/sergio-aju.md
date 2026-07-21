# Ejercicio: Resolución de Conflictos (Animación 3D)

## Alumno
Sergio Miranda

## Descripción del problema
El objetivo es resolver un conflicto de fusión (merge conflict) generado al trabajar simultáneamente en el archivo `estructura.md`. Un desarrollador trabajó en la sección de *modelado* mientras otro se enfocaba en la sección de *renders*. Se requiere unificar ambos cambios sin perder información.

## Razonamiento y solución
Para resolver el conflicto, seguí estos pasos:
1. **Identificación**: Localicé el conflicto en el archivo `estructura.md` mediante `git status`.
2. **Resolución**: Abrí el archivo y eliminé las etiquetas de conflicto (`<<<<<<<`, `=======`, `>>>>>>>`), conservando tanto el bloque de modelado como el de renderizado para asegurar la integridad del proyecto 3D.
3. **Integración**: Marqué el archivo como resuelto y consolidé el trabajo en un nuevo commit descriptivo.

## Evidencia de validación
```text
# Contenido resuelto en estructura.md:
## Modelado
- Esculpido de personajes base.
## Renders
- Configuración de iluminación global.