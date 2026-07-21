# - Pipeline de animación 3D

## Planteamiento del problema
Se requería preparar una estructura de carpetas para un pipeline de animación 3D, separando modelado, texturas, renders y entregas, con control de versiones y distinción clara entre archivos de prueba y finales.

```
selvin-lem/
│
├── selvin-lem.md                  # Documentación técnica del proyecto y resoluciones
│
├── referencias/                          # Material de inspiración y guía visual
│   └── .gitkeep                          # Asegura que la carpeta vacía se suba al repositorio
│
├── 01-modelado/                          # Etapa 1: construcción de geometría 3D
│   └── .gitkeep                          # Asegura que la carpeta vacía se suba al repositorio
│
├── 02-texturas/                          # Etapa 2: materiales y mapas de textura
│   └── .gitkeep                          # Asegura que la carpeta vacía se suba al repositorio
│
├── 03-renders/                           # Etapa 3: salidas renderizadas (pruebas y finales)
│   └── .gitkeep                          # Asegura que la carpeta vacía se suba al repositorio
│
├── 04-entregas/                          # Etapa 4: archivos finales aprobados para el cliente
│   └── .gitkeep                          # Asegura que la carpeta vacía se suba al repositorio
│
└── docs/
    └── pipeline.md                       # Documentación del flujo, versionado y criterio de entrega
```