# App de reservas turísticas

## Planteamiento del problema
Se requería separar vistas, datos y lógica de una app de viajes en una estructura de carpetas ordenada y escalable, evitando nombres genéricos.

```
selvin-lem/
│
├── selvin-lem.md                  # Documentación técnica del proyecto y resoluciones
│
├── data/                                  # Capa de almacenamiento y persistencia de datos estáticos
│   └── destinos.json                      # Base de datos en JSON con los destinos turísticos disponibles
│
├── pages/                                 # Vistas principales de la aplicación
│   ├── home.md                            # Documentación de la vista principal (listado de destinos)
│   └── detalle-destino.md                 # Documentación de la vista de detalle de un destino
│
├── components/                            # Piezas reutilizables de interfaz
│   └── card-destino.md                    # Documentación del componente tarjeta de destino
│
└── services/                              # Lógica de acceso y manipulación de datos
    └── reservas-service.md                # Documentación del servicio de gestión de reservas

```