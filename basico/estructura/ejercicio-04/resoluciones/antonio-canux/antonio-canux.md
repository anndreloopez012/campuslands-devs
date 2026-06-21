# Ejercicio 04 — Catálogo de autos de lujo

**Camper:** Antonio Canux

## Solución

Estructura creada dentro de `antonio-canux/`:

```
antonio-canux/
├── data/
│   └── autos.json                   
├── assets/
│   └── cars/                 
├── docs/
│   ├── convencion-nombres.md
├── src/
|    └── catalogo.js
└── antonio-canux.md
```

### Propósito de cada una de las carpetas

- **`data/autos.json`**: cada auto tiene un `id` único con formato `marca-modelo-anio-precio-color`, que es el mismo prefijo que usan sus imágenes.
- **`assets/cars/`**: solo guarda imágenes; sus reglas de nombrado están documentadas en `docs/convencion-nombres.md`.
- **`src/`**: `catalogo.js` no imprime nada solo representa la separación de los datos y la visualización
- **`docs/`**: concentra el formato de las convenciones de los nombres.

