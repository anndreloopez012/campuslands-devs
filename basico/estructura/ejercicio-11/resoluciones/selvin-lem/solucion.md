#  Proyecto de arquitectura 3D

## Planteamiento del problema
Se requería organizar planos, modelos, materiales, renders y documentación técnica de un proyecto de arquitectura 3D, separando borradores de archivos finales y definiendo convenciones de nombrado.

```
selvin-lem/
│
├── solucion.md                  # Documentación técnica del proyecto y resoluciones
│
├── planos/                               # Planos técnicos 2D del proyecto
│   ├── borradores/                       # Versiones en desarrollo, no aprobadas
│   │   └── .gitkeep
│   └── finales/                          # Versiones aprobadas y listas para entrega
│       └── .gitkeep
│
├── modelos/                              # Modelos 3D del edificio
│   └── .gitkeep
│
├── materiales/                           # Texturas y acabados aplicados al modelo
│   └── .gitkeep
│
├── renders/                              # Vistas renderizadas del proyecto
│   ├── borradores/                       # Renders de prueba (iluminación, ángulos)
│   │   └── .gitkeep
│   └── finales/                          # Renders aprobados para presentación
│       └── fachada-principal.md          # Placeholder documentando la vista final
│
└── docs/                                 # Documentación técnica y estándares
    ├── convenciones.md                   # Reglas de nombrado de vistas y archivos
    └── plantilla-entrega.md              # Plantilla para documentar cada entrega
```