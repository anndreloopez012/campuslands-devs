# Solución: Estructura de estudio indie de videojuegos

## 1. Explicación del razonamiento
Para organizar este proyecto de un videojuego de acción y aventura, decidí separar las responsabilidades de forma clara. Dado que muchas carpetas no tendrán archivos de código o recursos concretos, se incluyen archivos `.gitkeep` para asegurar que Git rastree y mantenga la estructura de directorios en el repositorio remoto.

## 2. Estructura de carpetas propuesta

proyecto-indie-aventura/
├── assets/               # Archivos multimedia del videojuego para diversos usos
│   ├── audio/            # Sonidos y efectos
│   │   └── .gitkeep      # Asegura el rastreo de la carpeta vacía
│   ├── images/           # Imágenes, fondos o diseños de personajes o elementos del juego
│   │   └── .gitkeep      # Asegura el rastreo de la carpeta vacía
│   └── maps/             # Diseños de niveles y escenarios para el juego
│       └── .gitkeep      # Asegura el rastreo de la carpeta vacía
├── docs/                 # Documentación del juego, como licencias, tutoriales entre otros
│   ├── README.md/        # Guía técnica principal del proyecto
│   │   └── .gitkeep      # Asegura el rastreo de la carpeta vacía
├── src/                  # Códigos fuente para el desarrollo principal del videojuego
│   └── .gitkeep          # Asegura el rastreo de la carpeta vacía
└── tests/                # Pruebas automatizadas
    └── .gitkeep          # Asegura el rastreo de la carpeta vacía
