# Resumen - Organización de estudio de tatuajes

## Planteamiento del problema
Se requería diseñar una estructura de carpetas para un estudio de tatuajes, separando referencias, diseños, clientes y agenda, cuidando la privacidad de datos sensibles.

```
selvin-lem/
│
├── selvin-lem.md              # Documentación técnica del proyecto y resoluciones
│
├── referencias/                      # Imágenes y fuentes de inspiración visual
│   └── .gitkeep                      # Asegura que la carpeta vacía se suba al repositorio
│
├── disenos/                          # Diseños propios en proceso o finalizados
│   ├── plantilla-ficha-diseno.md     # Plantilla para documentar cada diseño
│   └── .gitkeep                      # Asegura que la carpeta vacía se suba al repositorio
│
├── clientes/                         # Datos de clientes (sensibles, con placeholders)
│   └── .gitkeep                      # Asegura que la carpeta vacía se suba al repositorio
│
├── agenda/                           # Calendario de citas del estudio
│   └── .gitkeep                      # Asegura que la carpeta vacía se suba al repositorio
│
└── README.md                         # Explicación de privacidad y manejo de datos sensibles

```