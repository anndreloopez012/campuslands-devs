# Resolución: Ejercicio 03 - Backend Battle Royale

**Estudiante:** Irma Yaneht Arias Garcia
**Temática:** Backend para gestión de equipos y partidas

## 1. Estructura del Proyecto
- src/controllers: Maneja las peticiones y respuestas (lógica de entrada/salida).
- src/services: Contiene la lógica de negocio (cálculos y procesos).
- src/models: Define la estructura de los datos (esquemas).
- src/routes: Define los endpoints de la API.
- README.md: Documentación del proyecto.

## 2. Razonamiento
Se utilizó una arquitectura en capas. Esto permite que, si en el futuro queremos cambiar la base de datos o añadir más reglas al juego, solo debamos modificar un archivo específico sin romper el resto del sistema.
