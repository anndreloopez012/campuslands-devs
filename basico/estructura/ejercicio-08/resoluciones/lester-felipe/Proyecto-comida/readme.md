# Sistema de Gestión: Para Comida.
### Alumno:Lester Garcia.<>

## Descripcion:
Una buena estructura de carpetas antes de empezar a trabajar un proyecto grande, asegura un código altamente escalable, limpio y fácil de mantener en entornos reales de desarrollo.


## Explicacion de las carpetas
```
proyecto-comida/
├── assets/
│ └── photos/
│ ├── platos/ # Fotografías de platos principales y entradas
│ ├── bebidas/ # Fotografías de bebidas con y sin alcohol
│ └── combos/ # Fotografías publicitarias de paquetes combinados
├── docs/
│ └── reglas-precios.md # Documentación de políticas de precios y descuentos
├── menu/
│ ├── platos.json # Datos estructurados de la oferta culinaria
│ ├── bebidas.json # Datos de la oferta de bar y refrescos
│ └── combos.json # Configuración y amarres de combos promocionales
└── scripts/
└── optimizar-fotos.js # Script de automatización para compresión de imágenes