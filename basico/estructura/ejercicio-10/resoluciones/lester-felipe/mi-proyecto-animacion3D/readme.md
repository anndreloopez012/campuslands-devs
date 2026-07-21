# Sistema de Gestión: Organizacion de un pipeline de animacion en 3D.
### Alumno:Lester Garcia.<>

## Descripcion:
Una buena estructura de carpetas antes de empezar a trabajar un proyecto grande, asegura un código altamente escalable, limpio y fácil de mantener en entornos reales de desarrollo.


## Explicacion de las carpetas
```
mi-proyecto-animacion-3d/
├── docs/
│   └── pipeline.md             # Documentación técnica, control de versiones y reglas del flujo
├── referencias/
│   ├── modelado/               # Blueprints, hojas de modelo (model sheets) y conceptos artísticos
│   └── texturas/               # Muestras de materiales, paletas de color y fotos de referencia
├── 01-modelado/
│   ├── WIP/                    # Archivos de trabajo en progreso (.max, .maya, .blend)
│   └── publicado/              # Modelos base aprobados y listos para el siguiente departamento
├── 02-texturas/
│   ├── mapas/                  # Texturas exportadas (Albedo, Normal, Roughness, etc.)
│   └── fuentes/                # Archivos originales de edición (.spp, .psd)
├── 03-renders/
│   ├── pruebas/                # Renders rápidos de previsualización (low-res, playblasts)
│   └── master/                 # Secuencias de imágenes en alta calidad listas para postproducción
└── 04-entregas/                # Videos finales editados y consolidados para el cliente