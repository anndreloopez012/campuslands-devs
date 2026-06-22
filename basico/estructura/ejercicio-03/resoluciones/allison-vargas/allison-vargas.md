# 🚀 Backend Básico - Torneo Battle Royale 👑
**Desarrolladora:** Allison Rocío Vargas Mejía  
**Nivel:** Básico Retador ⚡ | **Entorno:** Campuslands Devs  

---

## 🌸 1. Análisis y Razonamiento del Problema

Para este ejercicio de arquitectura backend, organicé el sistema utilizando el **patrón de diseño por capas (Software Layering)**. Separar el código por responsabilidades es fundamental en proyectos reales para asegurar que el servidor sea fácil de mantener, seguro y muy limpio. 

Pensé el flujo de la información de la siguiente manera:
1.  **Entrada (`src/routes/`):** La petición del usuario llega y busca qué camino seguir.
2.  **Filtro y Validación (`src/controllers/`):** El controlador recibe los datos y frena el proceso si encuentra campos vacíos.
3.  **Cálculos y Reglas (`src/services/`):** El servicio ejecuta las fórmulas del juego (puntos por kills y tops).
4.  **Estructura (`src/models/`):** El modelo define la forma exacta y obligatoria que deben tener los datos de una partida.

---

## 🎀 2. Arquitectura del Proyecto (Árbol de Carpetas)

Diseñé la estructura de forma impecable dentro de mi espacio asignado en el repositorio, usando nombres descriptivos bajo el contexto de los videojuegos de Battle Royale:

```text
basico/estructura/ejercicio-03/resoluciones/allison-vargas/
└── src/
    ├── controllers/
    │   └── team.controller.js     (Valida y coordina las peticiones de los equipos)
    ├── models/
    │   └── match.model.js         (Define el molde y estructura de una partida)
    ├── routes/
    │   └── tournament.routes.js   (Mapea los puntos de acceso y URLs del servidor)
    └── services/
        └── score.service.js       (Calcula los puntajes matemáticos de la partida)
├── allison-vargas.md       
