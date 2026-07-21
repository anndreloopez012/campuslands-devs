# 🏍️ Sistema de Gestión para Taller Mecánico - Órdenes de Reparación
### Alumno:Lester Garcia.

Esta estructuracion de carpètas ha sido diseñado bajo una **Arquitectura Orientada a Módulos (o Dominios)**..Una buena estructura de carpetas antes de empezar a trabajar un proyecto grande, asegura un código altamente escalable, limpio y fácil de mantener en entornos reales de desarrollo.

---

## 🗺️ Estructura General del Proyecto

```text
mi-taller-backend/
├── config/
│   └── settings.example.json      # Plantilla de configuración global
├── docs/
│   └── flujo-reparacion.md        # Documentación de reglas de negocio
├── src/
│   ├── app.js                     # Punto de entrada de la aplicación
│   └── modules/
│       ├── clientes/              # Módulo de gestión de propietarios
│       │   ├── clientes.controller.js
│       │   ├── clientes.model.js
│       │   ├── clientes.routes.js
│       │   └── clientes.service.js
│       ├── motos/                 # Módulo de gestión de vehículos
│       │   ├── motos.controller.js
│       │   ├── motos.model.js
│       │   ├── motos.routes.js
│       │   └── motos.service.js
│       └── ordenes/               # Módulo de gestión de servicios (Núcleo)
│           ├── ordenes.controller.js
│           ├── ordenes.model.js
│           ├── ordenes.routes.js
│           └── ordenes.service.js
└── package.json