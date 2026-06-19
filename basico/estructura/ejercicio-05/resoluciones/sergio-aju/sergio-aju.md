# Proyecto: Sistema de Gestión para Taller de Motos

## Autor

Sergio Ajú

**Nivel:** Básico Retador

## 1. Descripción del Problema
El objetivo es diseñar una estructura de archivos escalable y profesional para un sistema de órdenes de reparación de motocicletas. La organización debe permitir el manejo independiente de clientes, el parque vehicular (motos) y el seguimiento de las reparaciones (órdenes).

## 2. Razonamiento del Diseño
Para resolver este desafío, apliqué el principio de **separación de responsabilidades**:
- **Módulos (`modules/`):** Aíslo la lógica de negocio para que sea independiente y fácil de mantener.
- **Configuración (`config/`):** Centralizo variables de entorno para evitar valores "hardcodeados" en el código fuente.
- **Documentación (`docs/`):** Vital para que otros técnicos entiendan el flujo del negocio sin tener que leer el código.

## 3. Estructura del Proyecto
La estructura final creada es la siguiente:

```text
├── config/
│   └── settings.example.json   # Configuración base del sistema
├── docs/
│   └── flujo-reparacion.md     # Documentación del proceso técnico
├── modules/
│   ├── clientes/  
│   │ └── clientes.js           # Gestión de datos del cliente
│   ├── motos/     
│   │ └── motos.js              # Registro y especificaciones de motos
│   └── ordenes/  
│     └── ordenes.js            # Gestión de reparaciones y estados
└── sergio-aju.md               # Este archivo de documentación