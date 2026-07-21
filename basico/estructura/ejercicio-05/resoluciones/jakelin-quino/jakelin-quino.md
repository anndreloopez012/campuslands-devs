# Ejercicio 05 Estructura

## Estructura de carpetas
basico/estructura/ejercicio-05/resoluciones/jakelin-quino

```text
├── modules/
│   ├── clientes/
│   │   └── clientes.js // Guarda: id, nombre, telefono, email, direccion
│   ├── motos/
│   │   └── motos.js // Guarda: id, marca, modelo, año, placa, clienteId
│   └── ordenes/
│       └── ordenes.js // Guarda: id, clienteId, motoId, fechaIngreso, estado, diagnostico, costo
├── docs/
│   └── flujo-reparacion.md
└── config/
    └── settings.example.json
```

## Comando Git
- git checkout -b feature/taller-moto
- mkdir -p modules/{clientes,motos,ordenes} docs config
- touch modules/clientes/clientes.js modules/motos/motos.js modules/ordenes/ordenes.js
- touch docs/flujo-reparacion.md config/settings.example.json
- git add .
- git commit -m "feat(estructura) resolver ejercicio 05"