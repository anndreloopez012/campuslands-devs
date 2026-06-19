# 🏎️ Catálogo Premium - Autos de Lujo ✨
**Desarrolladora:** Allison Rocío Vargas Mejía  
**Nivel:** Básico Retador ⚡ | **Entorno:** Campuslands Devs  

---

## 🌸 1. Análisis y Razonamiento del Problema

Para este reto enfocado en un **Catálogo Premium de Autos de Lujo**, diseñé una arquitectura orientada al orden de recursos multimedia, datos planos y flujos de renderizado. En la industria real, los catálogos web fallan constantemente por falta de estandarización en sus imágenes o por mezclar datos directamente en la lógica visual.

Mi estrategia de organización se dividió en cuatro pilares:
1.  **Datos Centralizados (`data/`):** La información técnica sensible y los precios se resguardan en un formato estructurado e independiente.
2.  **Activos de Medios (`assets/`):** Las fotografías de los vehículos se aíslan en subcarpetas específicas para no mezclarse con el código fuente.
3.  **Documentación Normativa (`docs/`):** Establecí políticas técnicas para garantizar la consistencia en el trabajo colaborativo con fotógrafos y diseñadores.
4.  **Capa Lógica (`src/`):** Programé funciones limpias encargadas de iterar sobre los datos y preparar la inyección visual de forma dinámica.

---

## 🎀 2. Arquitectura del Proyecto (Árbol de Carpetas)

La estructura quedó distribuida de forma impecable y sumamente intuitiva dentro de mi espacio asignado en el repositorio:

```text
basico/estructura/ejercicio-04/resoluciones/allison-vargas/
├── allison-vargas.md       
├── assets/
│   └── cars/               (Directorio exclusivo para imágenes de autos)
│       └── .gitkeep        (Archivo oculto para conservar la ruta en Git)
├── data/
│   └── autos.json          (Base de datos estandarizada en formato JSON)
├── docs/
│   └── naming-convention.txt (Estandarización y políticas de nombres multimedia)
└── src/
    └── catalog.js          (Lógica de filtrado y visualización del showroom)