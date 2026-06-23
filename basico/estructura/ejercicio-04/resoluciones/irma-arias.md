# Ejercicio 04: Catálogo de Autos de Lujo

**Nombre:** Irma Arias

## Arquitectura del Catálogo
- **data/**: Contiene `autos.json` con la información estructurada de los vehículos.
- **activos/coches/**: Almacena las imágenes. Convención de nombrado: `marca_modelo_año.jpg`.
- **src/**: Contiene `visualizador.js` para la lógica de renderizado.
- **documentos/**: Fichas técnicas detalladas.

## Estructura de Datos (autos.json)
```json
[
  {
    "id": 1,
    "marca": "Ferrari",
    "modelo": "SF90 Stradale",
    "año": 2024,
    "imagen": "ferrari_sf90_2024.jpg"
  }
]