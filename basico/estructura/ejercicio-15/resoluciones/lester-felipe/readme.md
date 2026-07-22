## Explicacion de carpetas.
## Alumno : Lester Garcia

### Justificación de esta Arquitectura
**Separación de Configuración y Resultados (Regla del Factor de Producción):
Los parámetros iniciales del entorno se ubican en config/simulacion-settings.json, mientras que las ejecuciones de telemetría e historiales se aíslan por completo en outputs/resultados/. Esto evita mezclar el estado original del simulador con los archivos masivos generados por cada carrera simulada.**

## **Modularidad Orientada a Datos por Dominios:**
Al dividir el almacenamiento estático en data/pilotos, data/vehiculos y data/pistas, permitimos que el simulador escale infinitamente. Agregar un nuevo circuito o vehículo es tan sencillo como inyectar un nuevo archivo .json, sin necesidad de modificar una sola línea de código en src/simulador/.

## **Código Desacoplado (src/):**
El código fuente se encuentra aislado del contenido documental. Las validaciones de negocio y el motor de físicas se procesan de forma autónoma en scripts independientes (motor.py y validaciones.py), promoviendo el principio de responsabilidad única.