# Solusion: conflicto en playtlist musical

    Autor: Estiben Ixen
    Fecha: 11 de junio de 2026
    Ejercicio: 08 - Estructura de proyectos (Menú Urbano)

# Razonamiento
Para este proyecto, el objetivo principal es la modularidad. La organización propuesta sigue las mejores prácticas de desarrollo fullstack:

- Separación de activos: Los datos (menu/) deben ser ligeros y fáciles de leer por máquinas, mientras que los activos (assets/) son binarios pesados. Mezclarlos es una mala práctica porque dificulta la gestión de versiones (Git no optimiza binarios) y aumenta innecesariamente el peso del repositorio al consultar datos.

- Jerarquía: La estructura de carpetas permite que un desarrollador sepa exactamente dónde buscar sin tener que leer toda la documentación.

- Documentación: El uso de docs/ garantiza que las reglas de negocio (precios, políticas) estén centralizadas y accesibles.

# Validación

- Caso Normal: La estructura permite separar claramente platos, bebidas y combos, lo que facilita que un script de front-end consuma solo la parte del menú que necesita.

- Caso Límite: Si el catálogo crece, el sistema es escalable. Solo habría que añadir archivos JSON dentro de menu/ sin afectar la lógica de los scripts de procesamiento.

# 1. Implementación (Estructura y Ejemplo)

```
estiben-ixen/
├── assets/
│   └── photos/      # Imágenes optimizadas para web
├── docs/
│   └── reglas-precios.md
├── menu/            # Datos (Separación por tipo)
│   ├── platos.json
│   ├── bebidas.json
│   └── combos.json
└── scripts/         # Lógica de procesamiento
Ejemplo: menu/platos.json
JSON
```
```
{
  "platos": [
    { "id": 1, "nombre": "Hamburguesa Urbana", "precio": 12.50 },
    { "id": 2, "nombre": "Tacos de Autor", "precio": 9.00 }
  ]
}
```

# Conclusión
- La correcta estructuración de un proyecto es la base de un código mantenible. Al separar los datos de las imágenes, evitamos el "repo bloat" (repositorios pesados) y facilitamos el despliegue del proyecto. Este orden permite que, en un entorno de trabajo real, el equipo de diseño gestione assets/ sin miedo a romper la lógica de datos en menu/.
