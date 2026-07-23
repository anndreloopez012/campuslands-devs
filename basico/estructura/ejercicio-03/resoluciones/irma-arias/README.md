
# Ejercicio 003: Backend Básico para Torneo Battle Royale

* **Estudiante:** Irma Yaneht Arias García
* **Temática:** Arquitectura y estructuración de un servidor backend para gestionar partidas y equipos de videojuegos de tipo Battle Royale.

## 📌 Razonamiento y Proceso
1. **Análisis de Requisitos:** Se diseñó una arquitectura modular típica de backend (MVC modificada o por capas) para separar responsabilidades de datos, lógica, control y enrutamiento en un torneo.
2. **Responsabilidad de cada Carpeta:**
   - **`src/models/`**: Define la estructura y esquemas de los datos (entidades como partidas, jugadores o equipos).
   - **`src/services/`**: Aloja la lógica de negocio pura y validaciones de reglas del torneo (ej. límites de equipos).
   - **`src/controllers/`**: Recibe las solicitudes entrantes, invoca a los servicios y gestiona las respuestas.
   - **`src/routes/`**: Configura los endpoints o rutas de la API para direccionar el tráfico web.

## 🛠️ Notas Técnicas y Validación
* **Validación de Casos Límite:** En el servicio `matchService.js` se implementaron validaciones estrictas para evitar registros con equipos en cero o superiores al límite permitido del mapa, asegurando robustez ante errores comunes.

## 🗂️ Árbol de Carpetas

basico/
└── estructura/
    └── ejercicio-03/
        └── resoluciones/
            └── irma-arias/
                ├── src/
                │   ├── controllers/
                │   │   └── matchController.js
                │   ├── services/
                │   │   └── matchService.js
                │   ├── models/
                │   │   └── matchModel.js
                │   └── routes/
                │       └── matchRoutes.js
                └── README.md