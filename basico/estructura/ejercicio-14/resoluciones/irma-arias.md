# Proyecto: Producción Musical "Estudio Sonoro"

## Descripción
Proyecto organizado para la gestión de pistas, samples y procesos de mezcla/masterización.

## Estructura de Carpetas
- `pistas/`: Archivos fuente originales (Raw).
- `samples/`: Librería de sonidos y efectos.
- `mezclas/`: Versiones de trabajo (v01, v02, etc.).
- `masters/`: Archivos finales listos para distribución.
- `docs/`: Documentación técnica y bitácoras de versión.

## Reglas de Versionado
Todas las exportaciones deben seguir el formato: `nombre-cancion-vXX.wav` para mantener la trazabilidad.
3. Contenido para resoluciones/irma-arias.md
Markdown
# Ejercicio 14: Archivo musical para productores

**Nombre:** Irma Arias

## Razonamiento
He estructurado las carpetas según el flujo de trabajo: `pistas` (fuente), `mezclas` (proceso) y `masters` (entrega). Esta jerarquía asegura que el flujo sea unidireccional y se minimicen errores.

## Validación
- La estructura protege el producto final (`masters`) de modificaciones accidentales.
- El uso de versiones (`v01`, `v02`) garantiza que siempre sepamos qué archivo es el más reciente.