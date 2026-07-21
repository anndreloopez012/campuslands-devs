# Ejercicio 08 Estructura

## Estructura de carpetas
``` text
basico/estructura/ejercicio-08/resoluciones/tu-nombre-apellido/
├── menu/
│   ├── platos.json
│   ├── bebidas.json
│   └── combos.json
├── assets/
│   └── photos/
│       └── (imágenes: plato1.jpg, bebida1.jpg)
├── docs/
│   └── reglas-precios.md
└── scripts/
    └── generar-menu.js
```

## Explicación
- Separación de responsabilidades: datos (JSON) vs recursos (imágenes)
- Rendimiento: imágenes pesadas no afectan carga de datos
- Mantenimiento: actualizar precios sin tocar imágenes
- Escalabilidad: usar CDN para imágenes, base de datos para datos