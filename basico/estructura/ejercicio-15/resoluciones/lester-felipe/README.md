## Estructuracion de carpetas para un sistema de carreras urbanas.
## alumno: Lester Garcia

**Una buena estructura de carpetas es esencial antes de empezar a crear cualquier proyecto,
donde se manejaran diferentes archivos.**

## Explicacion de carpetas
´´´
hiperdeportivos-simulador/
├── config/
│   └── simulacion-settings.json    # Ajustes globales del entorno de simulación
├── data/
│   ├── pilotos/
│   │   └── verstappen.json         # Perfiles técnicos y estadísticas de pilotos
│   ├── pistas/
│   │   └── monaco.json             # Trazados, curvas, clima y dificultades
│   └── vehiculos/
│       └── chiron-2026.json        # Fichas técnicas de hiperdeportivos
├── docs/
│   └── reglas-carrera.md           # Contrato técnico y lógica de penalizaciones
├── outputs/
│   └── resultados/
│       └── carrera-001.json        # Tiempos de vuelta, telemetría e historial final
├── src/
│   └── simulador/
│       ├── motor.py                # Algoritmo principal de cálculo de físicas y tiempos
│       └── validaciones.py         # Módulo de verificación de reglas previas al arranque
└── README.md                       # Explicacion de la organizacion de cada carpeta y sus archivos.
´´´