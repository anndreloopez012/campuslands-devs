
# Ejercicio 15: Sistema de Carreras Urbanas

**Nombre:** Irma Arias

## Razonamiento
He organizado los datos en una estructura de entrada (`datos/`) separada de la lógica de ejecución (`src/simulador`). Esto es clave para que los datos puedan actualizarse sin modificar el código fuente. 
- La separación de pilotos, vehículos y pistas permite escalabilidad (añadir más elementos sin desordenar).

## Validación
- Caso Normal: Simulación con datos completos de vehículo y pista.
- Caso Límite: Simulación con valores en cero (debe retornar error de configuración).
