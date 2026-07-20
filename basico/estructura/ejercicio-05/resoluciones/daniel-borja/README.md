# Ejercicio 05 - Estructura

## Análisis de Proyecto
Un equipo necesita ordenar un proyecto para ordenes de reparacion relacionado con mecanica de motos. 

Ciclo: 

RECEPCIÓN: Registro del cliente y check-in de la moto (Kilometraje, fallas reportadas).
DIAGNÓSTICO: El mecánico evalúa y genera el presupuesto de repuestos.
REPARACIÓN: Fase de mano de obra activa.
VALIDACIÓN: Prueba de ruta y control de calidad.
ENTREGA: Liquidación de la orden y facturación al cliente.

## Resolución
├── daniel-borja.md
    Archivo entregable de la solución
├── config/
│   └── settings.example.json
    Plantilla base de configuración global
├── docs/
│   └── flujo-reparacion.md
    Documentación del ciclo de vida de la moto
└── modules/
    ├── clientes/
        Gestión de datos de propietarios
    │   └── clientes.service.js
    ├── motos/
        Inventario técnico de vehículos
    │   └── motos.service.js
    └── ordenes/
        Control de reparaciones y diagnósticos
        └── ordenes.service.js