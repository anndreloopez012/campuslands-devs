# Sistema de Gestión: Organizacion de arquitectura 3D.
### Alumno:Lester Garcia.

## Descripcion:
Una buena estructura de carpetas antes de empezar a trabajar un proyecto grande, asegura un código altamente escalable, limpio y fácil de mantener en entornos reales de desarrollo.


## Explicacion de las carpetas:
```
📁 proyecto-arquitectura-3d/
│
├── 📁 planos/
│   ├── 📁 borradores/          # Planos técnicos en desarrollo (DWG, DXF, PDF)
│   └── 📁 finales/             # Planos técnicos aprobados listos para obra o presentación
│
├── 📁 modelos/
│   ├── 📁 borradores/          # Modelos 3D preliminares y volumetrías (SKP, MAX, RVT, BLEND)
│   └── 📁 finales/             # Modelos 3D definitivos optimizados para renderizado
│
├── 📁 materiales/
│   ├── 📁 texturas/            # Mapas de texturas (Albedo, Normal, Roughness, etc.)
│   ├── 📁 hdri/                # Mapas de iluminación ambiental de alta calidad
│   └── 📁 catalogos/           # Fichas técnicas de acabados y especificaciones materiales
│
├── 📁 renders/
│   ├── 📁 borradores/          # Pruebas de render en baja resolución (Clay renders, previos)
│   └── 📁 finales/             # Renders finales en alta resolución y postproducción (TIFF, PNG)
│
└── 📁 docs/
    ├── 📄 convenciones.md       # Manual normativo de nomenclatura y estándares del proyecto
    └── 📄 plantilla-entrega.md  # Formato técnico de control previo a cada hito de entrega