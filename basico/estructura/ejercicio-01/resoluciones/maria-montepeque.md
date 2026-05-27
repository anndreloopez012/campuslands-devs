# Resolución - Estructura de estudio indie de videojuegos

**Estudiante:** María Montepeque  
**Ejercicio:** 01 - Estructura Básica Retadora  

---

## 1. Explicación del Razonamiento

Para resolver este problema, analicé los requisitos de organización de un proyecto indie de acción y aventura. Decidí estructurar el proyecto separando claramente la lógica, los recursos visuales/auditivos y la documentación para mantener un entorno de trabajo limpio y escalable:

- **`src/`**: Reservado para los scripts y el código fuente del videojuego.
- **`assets/`**: Organizado en subcarpetas específicas (`images`, `audio`, `maps`) para clasificar los recursos multimedia sin que se mezclen.
- **`docs/`**: Destinado a manuales, guías de diseño (GDD) o notas del equipo.
- **`tests/`**: Espacio controlado para las pruebas unitarias y de integración.
- **`.gitkeep`**: Añadidos en cada carpeta vacía para asegurar que Git rastree la estructura en el repositorio remoto.

---

## 2. Estructura de Carpetas Generada

A continuación, se muestra el árbol de archivos final en minúsculas:

```text
ejercicio-01/
├── resoluciones/
│   └── maria-montepeque.md
├── assets/
│   ├── audio/
│   │   └── .gitkeep
│   ├── images/
│   │   └── .gitkeep
│   └── maps/
│       └── .gitkeep
├── docs/
│   └── .gitkeep
├── src/
│   └── .gitkeep
├── tests/
│   └── .gitkeep
└── README.md