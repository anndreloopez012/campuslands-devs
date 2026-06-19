# 🛠️ Sistema de Gestión - Taller de Motos 🏍️
**Desarrolladora:** Allison Rocío Vargas Mejía  
**Nivel:** Básico Retador ⚡ | **Entorno:** Campuslands Devs  

---

## 🌸 1. Análisis y Razonamiento del Problema

Para este desafío técnico enfocado en un **Sistema de Órdenes de Reparación para Motocicletas**, estructuré el proyecto siguiendo el principio de **Arquitectura Modular Orientada al Dominio**. En el desarrollo de software real, centralizar todo el código en un único módulo genera archivos masivos, propensos a conflictos y difíciles de mantener por equipos grandes.

Mi estrategia de organización eliminó archivos sueltos sin propósito y dividió el sistema en componentes aislados:
1.  **Configuración Aislada (`config/`):** Separé los parámetros de infraestructura (puertos, bases de datos) en una plantilla limpia para proteger credenciales locales.
2.  **Módulos de Negocio (`modules/`):** Segmenté el dominio del taller en tres pilares independientes (Clientes, Motos y Órdenes). Cada sección contiene únicamente las operaciones que le corresponden por lógica.
3.  **Documentación Operativa (`docs/`):** Redacté el mapa de estados para el flujo de trabajo, lo cual alinea al equipo de desarrollo con las reglas reales de operación mecánica.

---

## 🎀 2. Arquitectura del Proyecto (Árbol de Carpetas)

El espacio de trabajo quedó distribuido de manera impecable y altamente profesional, garantizando que cada archivo cumpla un propósito claro:

```text
basico/estructura/ejercicio-05/resoluciones/allison-vargas/
├── allison-vargas.md          
├── config/
│   └── settings.example.json  (Estructura base para variables del servidor)
├── docs/
│   └── flujo-reparacion.md    (Mapeo de estados del ciclo de reparación)
└── modules/
    ├── clientes/
    │   └── clientes.js        (Lógica y validación de datos de propietarios)
    ├── motos/
    │   └── motos.js           (Fichas técnicas y cilindraje de vehículos)
    └── ordenes/
        └── ordenes.js         (Gestión central de apertura de hojas de servicio)