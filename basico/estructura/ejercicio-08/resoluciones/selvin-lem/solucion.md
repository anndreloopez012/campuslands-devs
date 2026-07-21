# Resumen - Gestión de menú urbano

## Planteamiento del problema
Se requería estructurar un proyecto de menú urbano separando platos, bebidas, combos, fotografías, reglas de precios y lógica de cálculo.

selvin-lem/
│
├── selvin-lem.md                   # Documentación técnica del proyecto y resoluciones
│
├── menu/                                  # Capa de datos del menú
│   ├── platos.json                        # Listado de platos con precio y descripción
│   ├── bebidas.json                       # Listado de bebidas con precio
│   └── combos.json                        # Listado de combos (agrupaciones de platos y bebidas)
│
├── assets/
│   └── photos/                            # Recursos fotográficos del menú
│       └── .gitkeep                       # Asegura que la carpeta vacía se suba al repositorio
│
├── docs/                                  # Documentación técnica y reglas de negocio
│   └── reglas-precios.md                  # Reglas para fijar y actualizar precios
│
└── scripts/                               # Lógica de procesamiento del menú
    └── calcular-total-combo.md            # Documentación de la lógica para sumar precios de un combo