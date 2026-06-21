# Resolución: Estructura de Catálogo de Autos de Lujo
**Desarrollador:** Selvin Lem

---
## Estructura de Archivos
```
selvin-lem/
│
├── assets/
│   └── cars/               # Imágenes optimizadas 
├── data/
│   └── autos.json          # Base de datos de catálogo
├── docs/
│   └── convenciones.md     # Reglas de nombrado y formatos
├── src/
│   └── renderizacionCatalogo.js  # Lógica de procesamiento de datos
└── selvin-lem.md               # Documentación general

```
---
**Separación de Responsabilidades:** Un proyecto real no puede tener la lógica de renderizado mezclada con los archivos multimedia. Al aislar los recursos visuales en /assets, los datos crudos en /data, la documentación en /docs y la lógica en /src, el proyecto se vuelve altamente modular. Si se requiere añadir un nuevo vehículo, basta con subir la imagen y actualizar el JSON, sin necesidad de modificar el código fuente de visualización.

---

**Entorno Limpio:** La nomenclatura de carpetas se mantuvo en minúsculas y en inglés por estándar de la industria, asegurando la consistencia y legibilidad profesional.