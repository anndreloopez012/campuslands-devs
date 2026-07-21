#  Estructuracion de carpetas para un Panel deportivo multiliga.
## Alumno:Lester Garcia.

´´´
futbol-stats-project/
│
├── data/                       # Repositorio de información estática estructurada
│   ├── equipos/                # Información de los clubes agrupada por ligas
│   │   ├── laliga.json
│   │   └── premier.json
│   │
│   └── partidos/               # Historial y calendarios de encuentros por ligas
│       ├── laliga.json
│       └── premier.json
│
├── docs/                       # Documentación técnica y operativa del proyecto
│   ├── modelo-datos.md         # Especificación del esquema y relaciones de los JSON
│   └── ejemplo-tabla.md        # Formato visual de cómo renderizar las tablas de posiciones
│
├── src/                        # Código fuente de la aplicación (Lógica y scripts)
│   ├── components/             # Bloques de interfaz de usuario reutilizables
│   ├── services/               # Lógica para procesar estadísticas y lectura de archivos
│   └── index.js                # Punto de entrada de la aplicación
│
├── .gitignore                  # Exclusiones para el control de versiones (ej: node_modules)
└── README.md                   # Explicacion de la estructura organizada para el proyecto.
´´´