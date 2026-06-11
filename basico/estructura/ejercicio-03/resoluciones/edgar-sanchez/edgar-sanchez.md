#  Resolición ejercicio-02(estructura)
## Edgar Manolo Polanco Sánchez

       src/
       ├── routes/
       │   └── partida.routes.js       # Rutas para el manejo de partidas
       ├── controllers/
       │   └── partida.controller.js   # Validación y respuestas de partidas
       ├── services/
       │   └── torneo.service.js       # Lógica de asignación y puntuación
       ├── models/
       │   └── equipo.model.js         # Estructura de datos de un equipo
       README.md                       # Documentación general del proyecto simulado
       
# Backend Torneo Battle Royale - Arquitectura

Este proyecto gestiona las partidas, el puntaje y los equipos del torneo competitivo.

## Responsabilidades de las Carpetas:

- **`src/models/`**: Contiene las plantillas, clases o esquemas de datos. Define estrictamente qué propiedades tiene una entidad (ej. qué datos requiere un Equipo).
- **`src/services/`**: Aloja la lógica pura del videojuego. Aquí se resuelven los algoritmos de emparejamiento (matchmaking) y el cálculo de la tabla de clasificación (leaderboard).
- **`src/controllers/`**: Se encarga de gestionar el tráfico de peticiones de red. Valida que los datos de entrada existan y define los códigos de estado HTTP (200 OK, 400 Bad Request, etc.).
- **`src/routes/`**: Define los endpoints públicos o privados de la API asignándoles una URL clara y un verbo HTTP (GET, POST, PUT, DELETE).