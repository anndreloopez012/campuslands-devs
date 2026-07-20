# Resolución: Sistema de Taller de Motos
**Desarrollador:** Selvin Lem
**Ruta del proyecto:** `basico/estructura/ejercicio-05/resoluciones/selvin-lem/`  
**Rama de trabajo:** alumno/selvin-lem/ejercicio-05

---

## 1. Estructura de Archivos y Directorios
Para cumplir con el requerimiento de organizar la base del proyecto de órdenes de reparación en un entorno modular, se creó la siguiente arquitectura:

```text
nombre-apellido/
│
├── config/
│   └── settings.example.json   # Plantilla de configuración e integración del taller
├── docs/
│   └── flujo-reparacion.md     # Documentación operativa del proceso de reparación
└── modules/
    ├── clientes/
    │   └── index.js            # Módulo para la gestión de propietarios
    ├── motos/
    │   └── index.js            # Módulo para el registro técnico de vehículos
    └── ordenes/
        └── index.js            # Módulo para órdenes de trabajo y diagnósticos
```

---

## 2. Explicación de Módulos y Datos Almacenados

| Módulo / Archivo | Responsabilidad y Datos que Gestiona |
| :--- | :--- |
| `modules/clientes/` | Registra y gestiona la información de los propietarios (nombre, teléfono, correo electrónico, dirección e historial de servicios). |
| `modules/motos/` | Mantiene las especificaciones técnicas del vehículo (placa, marca, modelo, cilindraje, kilometraje y número de chasis/VIN). |
| `modules/ordenes/` | Controla la creación de órdenes de trabajo, diagnósticos mecánicos, repuestos solicitados, tiempos de mano de obra y costos totales. |
| `config/settings.example.json` | Plantilla de configuración general del entorno (puertos de servidor, conexión a base de datos y límites del sistema). |
| `docs/flujo-reparacion.md` | Guía de proceso que describe el ciclo completo de la moto desde la recepción inicial hasta la entrega al cliente. |

---

## 3. Justificación de Diseño y Razonamiento

- **Separación por Dominios:** Se dividió la lógica en tres carpetas dentro de `modules/` (`clientes`, `motos`, `ordenes`) para mantener la independencia de responsabilidades y evitar el acoplamiento de datos.
- **Entorno Limpio de Producción:** Se evitaron archivos sueltos en la raíz guardando la documentación técnica en `docs/` y las variables de entorno en `config/`.
- **Nomenclatura Estándar:** Las carpetas y archivos utilizan exclusivamente letras minúsculas, guiones y estructura clara para cumplir con los estándares del repositorio.